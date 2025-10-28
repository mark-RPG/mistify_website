import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [deviceData, setDeviceData] = useState({
    humidity: 56.6,
    temperature: 16.8,
    status: 'Off',
    targetHumidity: 50,
    timer: null,
    timerActive: false, 
    brightness: 127,
    color: '255, 255, 0',
    controlMode: 'auto',
    mode: 'Off',
    lidStatus: "Unknown",
    speed: 20,
    divRef: null,
    isConnected: false,
  });
  
  const [ws, setWs] = useState(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(null);

  const autoReconnectRef = useRef(true);
  const pingIntervalRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const heartbeatTimeoutRef = useRef(null);
  const connectionAttemptRef = useRef(0);

  const hasReceivedServerDataRef = useRef(false);
  const isInitialLoadRef = useRef(true);
  const skipNextChangeRef = useRef(false);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const prevDeviceDataRef = useRef(deviceData);
  
  const timerRefs = useRef({
    status: null,
    targetHumidity: null,
    timer: null,
    brightness: null,
    colorMode: null,
  });

  const DEBOUNCE_DELAY = 2000;
  const PING_INTERVAL = 20000; // 20 seconds
  const HEARTBEAT_TIMEOUT = 30000; // 30 seconds to wait for response
  const RECONNECT_DELAYS = [500, 1000, 2000, 5000, 10000, 15000]; // Faster initial reconnect
  const errorCache = {}; // Used to throttle repeat errors
  const REPORT_INTERVAL = 30000;

  function reportError(errorCode, errorMessage, context, severity, varName, varValue) {
    const now = Date.now();
    let key = errorCode;
    if (varName) key += `_${varName}`;

    // Throttle duplicate errors (same key & value within interval)
    const meta = errorCache[key];
    if (meta && now - meta.lastReportTime < REPORT_INTERVAL && meta.lastValue === varValue) {
      console.log("Duplicate error suppressed:", key);
      return;
    }

    // Construct error payload
    const doc = {
      type: "error_report",
      currentDeviceId,
      error_code: errorCode,
      timestamp: Math.floor(now / 1000),
      severity,
    };

    if (errorMessage && errorMessage.length < 50) {
      doc.error_message = errorMessage;
    }

    if (varName) {
      doc.variable = {
        name: varName,
        value: varValue,
      };
    }

    if (context && typeof context === "object") {
      doc.context = context;
    }

    const payload = JSON.stringify(doc);
    const message = `ERROR_REPORT:${currentDeviceId}:${payload}`;

    // Send with debounce to prevent rapid fire
    debouncedSendCommand("error_report", () => message, errorCode);

    console.log("Error reported:", payload);

    // Update cache
    errorCache[key] = {
      lastReportTime: now,
      lastValue: varValue,
    };
  }

  const resetHeartbeat = () => {
    try {
      if (heartbeatTimeoutRef.current) {
        clearTimeout(heartbeatTimeoutRef.current);
      }

      heartbeatTimeoutRef.current = setTimeout(() => {
        console.warn("Heartbeat timeout - connection seems dead, forcing reconnect");
        reportError(
          "HEARTBEAT_TIMEOUT",
          "No heartbeat received in expected time",
          { context: "heartbeat_monitor" },
          "warning",
          "connection_status",
          "timeout"
        );

        if (ws) {
          ws.close(); // triggers reconnect logic elsewhere
        }
      }, HEARTBEAT_TIMEOUT);
    } catch (err) {
      reportError(
        "HEARTBEAT_RESET_FAIL",
        err.message || "Failed to reset heartbeat",
        { function: "resetHeartbeat" },
        "error",
        null,
        ""
      );
    }
  };

  const startPingInterval = () => {
    try {
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
      }

      pingIntervalRef.current = setInterval(() => {
        try {
          if (ws && ws.readyState === WebSocket.OPEN && currentDeviceId) {
            const pingMessage = `PING:${currentDeviceId}`;
            console.log("Sending ping:", pingMessage);
            ws.send(pingMessage);
            resetHeartbeat();
          } else if (!currentDeviceId) {
            reportError(
              "PING_NO_DEVICE_ID",
              "Cannot send ping: currentDeviceId missing",
              { function: "startPingInterval" },
              "error",
              "currentDeviceId",
              "undefined"
            );
          }
        } catch (sendErr) {
          if (ws && ws.readyState === WebSocket.OPEN) {
            reportError(
              "PING_SEND_FAIL",
              sendErr.message || "Failed to send ping",
              { function: "startPingInterval" },
              "error",
              "ping_send",
              "failed"
            );
          }
        }
      }, PING_INTERVAL);
      if (ws && ws.readyState === WebSocket.OPEN && currentDeviceId) {
        setTimeout(() => {
          try {
            const pingMessage = `PING:${currentDeviceId}`;
            ws.send(pingMessage);
            resetHeartbeat();
          } catch (err) {
            reportError(
              "PING_INITIAL_FAIL",
              err.message || "Failed to send initial ping",
              { function: "startPingInterval" },
              "error",
              "ping_initial",
              "failed"
            );
          }
        }, 1000);
      }
    } catch (err) {
      reportError(
        "PING_INTERVAL_FAIL",
        err.message || "Failed to start ping interval",
        { function: "startPingInterval" },
        "error",
        null,
        ""
      );
    }
  };

  const stopPingInterval = () => {
    try {
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
        pingIntervalRef.current = null;
      }
      if (heartbeatTimeoutRef.current) {
        clearTimeout(heartbeatTimeoutRef.current);
        heartbeatTimeoutRef.current = null;
      }
    } catch (err) {
      reportError(
        "STOP_PING_FAIL",
        err.message || "Failed to stop ping or heartbeat",
        { function: "stopPingInterval" },
        "warning",
        null,
        ""
      );
    }
  };

  const handleReconnect = (deviceId) => {
    try {
      if (!autoReconnectRef.current) return;

      if (document.visibilityState !== "visible") {
        console.log("Tab not visible, skipping reconnect. Will reconnect when tab becomes active.");
        reportError(
          "RECONNECT_SKIPPED_INACTIVE_TAB",
          "Reconnect postponed because tab is not visible",
          { function: "handleReconnect" },
          "info",
          "visibility_state",
          document.visibilityState
        );
        return;
      }

      const delay =
        RECONNECT_DELAYS[Math.min(connectionAttemptRef.current, RECONNECT_DELAYS.length - 1)];
      console.log(
        `Attempting reconnect in ${delay}ms (attempt ${connectionAttemptRef.current + 1})`
      );

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }

      reconnectTimeoutRef.current = setTimeout(() => {
        try {
          connectionAttemptRef.current++;
          connectToDevice(deviceId);
        } catch (err) {
          reportError(
            "RECONNECT_FAIL",
            err.message || "Failed during reconnect attempt",
            { function: "handleReconnect" },
            "error",
            "attempt_number",
            String(connectionAttemptRef.current)
          );
        }
      }, delay);
    } catch (err) {
      reportError(
        "RECONNECT_HANDLER_FAIL",
        err.message || "Unexpected error in handleReconnect",
        { function: "handleReconnect" },
        "error",
        null,
        ""
      );
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      console.log("Page visibility changed:", document.visibilityState);

      try {
        if (document.visibilityState === "visible" && currentDeviceId) {
          // Page became visible - reconnect or test connection
          if (!ws || ws.readyState !== WebSocket.OPEN) {
            console.log(
              "Tab became active and WebSocket not connected, reconnecting immediately"
            );
            connectionAttemptRef.current = 0;
            connectToDevice(currentDeviceId);
          } else {
            try {
              const pingMessage = `PING:${currentDeviceId}`;
              ws.send(pingMessage);
              resetHeartbeat();
            } catch (sendErr) {
              if (ws && ws.readyState === WebSocket.OPEN) {
                reportError(
                  "PING_ON_VISIBILITY_FAIL",
                  sendErr.message || "Failed to send ping on visibility change",
                  { function: "handleVisibilityChange" },
                  "error",
                  "visibility_state",
                  document.visibilityState
                );
              }
            }
          }
        } else if (document.visibilityState === "hidden") {
          console.log("Tab became hidden, stopping pings to save resources");
          try {
            stopPingInterval();
          } catch (err) {
            reportError(
              "STOP_PING_ON_HIDE_FAIL",
              err.message || "Failed to stop pings when tab hidden",
              { function: "handleVisibilityChange" },
              "warning",
              "visibility_state",
              "hidden"
            );
          }
        }
      } catch (err) {
        reportError(
          "VISIBILITY_HANDLER_FAIL",
          err.message || "Unexpected error in handleVisibilityChange",
          { function: "handleVisibilityChange" },
          "error",
          "visibility_state",
          document.visibilityState
        );
      }
    };

    const handleFocus = () => {
      try {
        if (currentDeviceId && (!ws || ws.readyState !== WebSocket.OPEN)) {
          console.log(
            "Window focused and WebSocket not connected, reconnecting immediately"
          );
          connectionAttemptRef.current = 0;
          connectToDevice(currentDeviceId);
        }
      } catch (err) {
        reportError(
          "FOCUS_HANDLER_FAIL",
          err.message || "Error in handleFocus",
          { function: "handleFocus" },
          "error",
          null,
          ""
        );
      }
    };

    const handleBlur = () => {
      try {
        console.log("Window lost focus");
        // No action required
      } catch (err) {
        reportError(
          "BLUR_HANDLER_FAIL",
          err.message || "Error in handleBlur",
          { function: "handleBlur" },
          "warning",
          null,
          ""
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      try {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        window.removeEventListener("focus", handleFocus);
        window.removeEventListener("blur", handleBlur);
      } catch (cleanupErr) {
        reportError(
          "VISIBILITY_CLEANUP_FAIL",
          cleanupErr.message || "Failed to remove event listeners",
          { function: "useEffect cleanup" },
          "warning",
          null,
          ""
        );
      }
    };
  }, [currentDeviceId, ws]);

  const processColorInfo = (colorString) => {
    try {
      let mode = "";
      let colorValue = "";

      if (colorString && colorString.includes("-")) {
        if (colorString.includes("color-")) {
          mode = "Color";
          colorValue = colorString.substring(6, 15);
        } else if (colorString.includes("gradient-")) {
          mode = "Gradient";
          colorValue = colorString.substring(9, 18);
        } else if (colorString.includes("fade-")) {
          mode = "Fade";
          colorValue = colorString.substring(5, 14);
        } else if (colorString.includes("pulsating-")) {
          mode = "Pulsating";
          colorValue = colorString.substring(10, 19);
        } else if (colorString.includes("twinkle-")) {
          mode = "Soft Twinkle";
          colorValue = colorString.substring(8, 17);
        } else {
          reportError(
            "UNKNOWN_COLOR_FORMAT",
            "Unrecognized color format pattern",
            { input: colorString },
            "warning",
            "colorString",
            colorString
          );
        }
      } else {
        switch (colorString) {
          case "Color Wave":
          case "Rainbow":
          case "Warm Sunset":
          case "Off":
            mode = colorString;
            colorValue = deviceData?.color;
            break;
          default:
            if (!colorString) {
              reportError(
                "EMPTY_COLOR_STRING",
                "Color string was empty or undefined",
                { input: colorString },
                "warning",
                "colorString",
                "empty"
              );
            }
            mode = colorString || deviceData?.mode;
            colorValue = deviceData?.color;
        }
      }

      // Validate colorValue before parsing
      if (!colorValue || typeof colorValue !== "string") {
        reportError(
          "INVALID_COLOR_VALUE",
          "Color value missing or invalid",
          { function: "processColorInfo", input: colorString },
          "error",
          "colorValue",
          String(colorValue)
        );
        colorValue = "#000000"; // fallback to black
      }

      // Try deformatRGB safely
      let result;
      try {
        result = deformatRGB(colorValue);
      } catch (rgbErr) {
        reportError(
          "RGB_PARSE_FAIL",
          rgbErr.message || "Failed to parse RGB value",
          { function: "processColorInfo", colorValue },
          "error",
          "colorValue",
          colorValue
        );
        result = { r: 0, g: 0, b: 0 };
      }

      return { mode, color: result };
    } catch (err) {
      reportError(
        "COLOR_INFO_FAIL",
        err.message || "Unexpected error processing color info",
        { function: "processColorInfo" },
        "error",
        "input",
        colorString
      );
      return { mode: "Unknown", color: { r: 0, g: 0, b: 0 } };
    }
  };

  const parseRgb = (rgbStr) => {
  try {
    if (typeof rgbStr !== "string") {
      reportError(
        "PARSE_RGB_INVALID_TYPE",
        "RGB input is not a string",
        { input: rgbStr },
        "error",
        "rgbStr",
        String(rgbStr)
      );
      return { r: 255, g: 0, b: 0 };
    }

    const match = rgbStr.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
      };
    } else {
      reportError(
        "PARSE_RGB_NO_MATCH",
        "RGB string did not match expected format",
        { input: rgbStr },
        "warning",
        "rgbStr",
        rgbStr
      );
      return { r: 255, g: 0, b: 0 };
    }
  } catch (err) {
    reportError(
      "PARSE_RGB_FAIL",
      err.message || "Failed to parse RGB string",
      { function: "parseRgb", input: rgbStr },
      "error",
      "rgbStr",
      rgbStr
    );
    return { r: 255, g: 0, b: 0 };
  }
  };

  function deformatRGB(paddedRGBString) {
    try {
      if (typeof paddedRGBString !== "string" || !/^\d{9}$/.test(paddedRGBString)) {
        reportError(
          "DEFORMAT_RGB_INVALID_INPUT",
          "Input must be a 9-digit string consisting only of digits",
          { input: paddedRGBString },
          "error",
          "paddedRGBString",
          String(paddedRGBString)
        );
        throw new Error("Invalid padded RGB string");
      }

      const r = parseInt(paddedRGBString.slice(0, 3), 10);
      const g = parseInt(paddedRGBString.slice(3, 6), 10);
      const b = parseInt(paddedRGBString.slice(6, 9), 10);

      return `rgb(${r}, ${g}, ${b})`;
    } catch (err) {
      reportError(
        "DEFORMAT_RGB_FAIL",
        err.message || "Failed to deformat RGB",
        { function: "deformatRGB", input: paddedRGBString },
        "error",
        "paddedRGBString",
        String(paddedRGBString)
      );
      return "rgb(0, 0, 0)";
    }
  }

  const getComplementaryColor = (rgbStr) => {
    try {
      const { r, g, b } = parseRgb(rgbStr);
      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number" ||
        [r, g, b].some((v) => v < 0 || v > 255)
      ) {
        reportError(
          "COMPLEMENTARY_RGB_INVALID",
          "Invalid RGB values detected",
          { input: rgbStr },
          "warning",
          "rgbStr",
          rgbStr
        );
        return "rgb(255, 255, 255)";
      }
      return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    } catch (err) {
      reportError(
        "COMPLEMENTARY_FAIL",
        err.message || "Failed to compute complementary color",
        { function: "getComplementaryColor", input: rgbStr },
        "error",
        "rgbStr",
        rgbStr
      );
      return "rgb(255, 255, 255)";
    }
  };

  function formatRGB(rgbString) {
    try {
      if (typeof rgbString !== "string") {
        reportError(
          "FORMAT_RGB_INVALID_TYPE",
          "RGB input is not a string",
          { input: rgbString },
          "error",
          "rgbString",
          String(rgbString)
        );
        return "000000000";
      }

      const match = rgbString.match(/\d+/g);
      if (!match || match.length < 3) {
        reportError(
          "FORMAT_RGB_NO_MATCH",
          "RGB string missing numeric components",
          { input: rgbString },
          "error",
          "rgbString",
          rgbString
        );
        return "000000000";
      }

      const [r, g, b] = match.map(Number);
      const formatted = [r, g, b]
        .map((n) => n.toString().padStart(3, "0"))
        .join("");

      return formatted;
    } catch (err) {
      reportError(
        "FORMAT_RGB_FAIL",
        err.message || "Failed to format RGB string",
        { function: "formatRGB", input: rgbString },
        "error",
        "rgbString",
        rgbString
      );
      return "000000000";
    }
  }

  const debouncedSendCommand = (commandType, commandFunc, valueToCheck) => {
    if (timerRefs.current[commandType]) {
      clearTimeout(timerRefs.current[commandType]);
    }

    timerRefs.current[commandType] = setTimeout(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        try {
          const command = commandFunc();
          ws.send(command);
        } catch (err) {
          reportError(
            "DEBOUNCED_COMMAND_FAIL",
            err.message || "Failed to send debounced command",
            { function: "debouncedSendCommand", commandType },
            "error",
            "commandType",
            commandType
          );
        }
      } else {
        console.log("WebSocket is not open, cannot send command");
      }
      timerRefs.current[commandType] = null;
    }, DEBOUNCE_DELAY);
  };

  const sanitizeBrightness = (value) => {
    try {
      let num = parseInt(String(value).replace(/\D/g, ""), 10);
      if (isNaN(num)) {
        reportError(
          "BRIGHTNESS_INVALID",
          "Brightness value was not numeric",
          { input: value },
          "warning",
          "brightness",
          String(value)
        );
        num = 1;
      }
      return Math.min(Math.max(num, 1), 255);
    } catch (err) {
      reportError(
        "BRIGHTNESS_SANITIZE_FAIL",
        err.message || "Failed to sanitize brightness",
        { input: value },
        "error",
        "brightness",
        String(value)
      );
      return 1;
    }
  };

  const sanitizeTarget = (value) => {
    try {
      let num = parseFloat(String(value).replace(/[^\d.]/g, ""));
      if (isNaN(num)) {
        reportError(
          "TARGET_INVALID",
          "Target value was not numeric",
          { input: value },
          "warning",
          "target",
          String(value)
        );
        num = 25;
      }
      return Math.min(Math.max(num, 25), 80);
    } catch (err) {
      reportError(
        "TARGET_SANITIZE_FAIL",
        err.message || "Failed to sanitize target",
        { input: value },
        "error",
        "target",
        String(value)
      );
      return 25;
    }
  };

  const logDeviceDataChanges = (newData, oldData) => {
    try {
      console.log("Device data change detected");
      if (isInitialLoadRef.current) return;
      if (!hasReceivedServerDataRef.current) return;
      if (skipNextChangeRef.current) {
        skipNextChangeRef.current = false;
        return;
      }

      console.log("Processing device data changes");
      console.log("Old data:", oldData);
      console.log("New data:", newData);

      Object.keys(newData).forEach((key) => {
        try {
          if (JSON.stringify(newData[key]) !== JSON.stringify(oldData[key])) {
            switch (key) {
              case "status": {
                try {
                  const newStatus = newData.status?.toLowerCase?.();
                  if (!newStatus) {
                    reportError(
                      "STATUS_INVALID",
                      "Status value is missing or invalid",
                      { newData, key },
                      "warning",
                      "status",
                      String(newData.status)
                    );
                    return;
                  }
                  debouncedSendCommand(
                    "status",
                    () => "UPDATE_STATUS:" + currentDeviceId + ":" + newStatus,
                    newStatus
                  );
                } catch (err) {
                  reportError(
                    "STATUS_UPDATE_FAIL",
                    err.message || "Failed to update device status",
                    { function: "logDeviceDataChanges", key },
                    "error",
                    "status",
                    String(newData.status)
                  );
                }
                break;
              }

              case "targetHumidity": {
                try {
                  const targetHumidity = sanitizeTarget(newData.targetHumidity);
                  debouncedSendCommand(
                    "targetHumidity",
                    () =>
                      "UPDATE_TARGET:" +
                      currentDeviceId +
                      ":" +
                      targetHumidity,
                    targetHumidity
                  );
                } catch (err) {
                  reportError(
                    "TARGET_HUMIDITY_FAIL",
                    err.message || "Failed to update target humidity",
                    { key, newData },
                    "error",
                    "targetHumidity",
                    String(newData.targetHumidity)
                  );
                }
                break;
              }

              case "controlMode": {
                try {
                  const controlMode = newData.controlMode;
                  if (!controlMode) {
                    reportError(
                      "CONTROL_MODE_INVALID",
                      "Control mode value missing or invalid",
                      { newData },
                      "warning",
                      "controlMode",
                      String(controlMode)
                    );
                    return;
                  }
                  debouncedSendCommand(
                    "controlMode",
                    () =>
                      "UPDATE_CONTROL_MODE:" +
                      currentDeviceId +
                      ":" +
                      controlMode,
                    controlMode
                  );
                } catch (err) {
                  reportError(
                    "CONTROL_MODE_FAIL",
                    err.message || "Failed to update control mode",
                    { key, newData },
                    "error",
                    "controlMode",
                    String(newData.controlMode)
                  );
                }
                break;
              }

              case "timerActive": {
                try {
                  if (newData.timerActive === true) {
                    const totalTime = newData.timer * 1000;
                    if (isNaN(totalTime) || totalTime <= 0) {
                      reportError(
                        "TIMER_INVALID",
                        "Invalid timer value",
                        { newData },
                        "warning",
                        "timer",
                        String(newData.timer)
                      );
                      return;
                    }
                    debouncedSendCommand(
                      "timer",
                      () => "UPDATE_TIMER:" + currentDeviceId + ":" + totalTime,
                      totalTime
                    );
                  } else {
                    debouncedSendCommand(
                      "timer",
                      () => "UPDATE_TIMER:" + currentDeviceId + ":cancel",
                      "cancel"
                    );
                  }
                } catch (err) {
                  reportError(
                    "TIMER_UPDATE_FAIL",
                    err.message || "Failed to update timer state",
                    { key, newData },
                    "error",
                    "timerActive",
                    String(newData.timerActive)
                  );
                }
                break;
              }

              case "brightness": {
                try {
                  const brightness = sanitizeBrightness(newData.brightness);
                  debouncedSendCommand(
                    "brightness",
                    () =>
                      "UPDATE_BRIGHTNESS:" +
                      currentDeviceId +
                      ":" +
                      brightness,
                    brightness
                  );
                } catch (err) {
                  reportError(
                    "BRIGHTNESS_UPDATE_FAIL",
                    err.message || "Failed to update brightness",
                    { key, newData },
                    "error",
                    "brightness",
                    String(newData.brightness)
                  );
                }
                break;
              }

              case "mode":
              case "color": {
                try {
                  let modeColorKey;
                  let command;

                  if (
                    ["Color", "Fade", "Soft Twinkle", "Pulsating"].includes(
                      newData.mode
                    )
                  ) {
                    modeColorKey = `${newData.mode}-${newData.color}`;
                    const formatted = formatRGB(newData.color);
                    switch (newData.mode) {
                      case "Color":
                        command =
                          "UPDATE_COLOR:" +
                          currentDeviceId +
                          ":color-" +
                          formatted;
                        break;
                      case "Fade":
                        command =
                          "UPDATE_COLOR:" +
                          currentDeviceId +
                          ":fade-" +
                          formatted;
                        break;
                      case "Soft Twinkle":
                        command =
                          "UPDATE_COLOR:" +
                          currentDeviceId +
                          ":twinkle-" +
                          formatted;
                        break;
                      case "Pulsating":
                        command =
                          "UPDATE_COLOR:" +
                          currentDeviceId +
                          ":pulsating-" +
                          formatted;
                        break;
                      default:
                        reportError(
                          "UNKNOWN_COLOR_MODE",
                          "Unsupported color mode",
                          { newData },
                          "warning",
                          "mode",
                          newData.mode
                        );
                        return;
                    }
                  } else if (newData.mode === "Glowing Gradient") {
                    const formatted = formatRGB(newData.color);
                    const comp = formatRGB(
                      getComplementaryColor(newData.color)
                    );
                    modeColorKey = `Gradient-${newData.color}`;
                    command =
                      "UPDATE_COLOR:" +
                      currentDeviceId +
                      ":gradient-" +
                      formatted +
                      "-" +
                      comp;
                  } else {
                    modeColorKey = newData.mode;
                    command =
                      "UPDATE_COLOR:" + currentDeviceId + ":" + newData.mode;
                  }

                  debouncedSendCommand("colorMode", () => command, modeColorKey);
                } catch (err) {
                  reportError(
                    "COLOR_MODE_FAIL",
                    err.message || "Failed to update color/mode",
                    { newData },
                    "error",
                    "mode",
                    newData.mode
                  );
                }
                break;
              }

              default:
                break;
            }
          }
        } catch (keyErr) {
          reportError(
            "DATA_CHANGE_KEY_FAIL",
            keyErr.message || "Error processing specific device key",
            { key, newData },
            "error",
            "key",
            key
          );
        }
      });
    } catch (err) {
      reportError(
        "DEVICE_DATA_CHANGE_FAIL",
        err.message || "Unexpected failure while processing device data changes",
        { newData, oldData },
        "error",
        "deviceData",
        ""
      );
    }
  };

  useEffect(() => {
    try {
      logDeviceDataChanges(deviceData, prevDeviceDataRef.current);
      console.log("Current device data:", deviceData);
      prevDeviceDataRef.current = { ...deviceData };
    } catch (err) {
      reportError(
        "DEVICE_DATA_EFFECT_FAIL",
        err.message || "Error running device data effect",
        { deviceData },
        "error",
        "deviceData",
        ""
      );
    }
  }, [deviceData]);

  useEffect(() => {
    return () => {
      try {
        Object.values(timerRefs.current).forEach((timer) => {
          if (timer) clearTimeout(timer);
        });
        stopPingInterval();
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
        }
      } catch (err) {
        reportError(
          "DEVICE_EFFECT_CLEANUP_FAIL",
          err.message || "Failed during cleanup of device effect",
          {},
          "warning",
          null,
          ""
        );
      }
    };
  }, []);

  const connectToDevice = (deviceId) => {
    try {
      autoReconnectRef.current = true;

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }

      if (ws) {
        ws.close();
      }

      stopPingInterval();
      isInitialLoadRef.current = true;
      hasReceivedServerDataRef.current = false;
      skipNextChangeRef.current = false;

      Object.keys(timerRefs.current).forEach((key) => {
        if (timerRefs.current[key]) {
          clearTimeout(timerRefs.current[key]);
          timerRefs.current[key] = null;
        }
      });

      if (!deviceId) {
        reportError(
          "DEVICE_ID_MISSING",
          "Attempted to connect without valid deviceId",
          {},
          "error",
          "deviceId",
          String(deviceId)
        );
        return;
      }

      setCurrentDeviceId(deviceId);
      console.log(`Connecting to device ${deviceId} (attempt ${connectionAttemptRef.current + 1})`);

      const socketUrl = `wss://simple-api.mistify.lv/ws/app?deviceId=${deviceId}`;
      let socket;
      try {
        socket = new WebSocket(socketUrl);
      } catch (err) {
        reportError(
          "WS_INIT_FAIL",
          err.message || "Failed to initialize WebSocket",
          { socketUrl },
          "error",
          "deviceId",
          String(deviceId)
        );
        return;
      }

      socket.onopen = () => {
        try {
          console.log("WebSocket connected successfully");
          connectionAttemptRef.current = 0;
          setDeviceData((prev) => ({ ...prev, isConnected: true }));
          if (document.visibilityState === "visible") startPingInterval();
        } catch (err) {
          reportError(
            "WS_ONOPEN_FAIL",
            err.message || "Error during onopen handler",
            { deviceId },
            "error",
            "deviceId",
            String(deviceId)
          );
        }
      };

      socket.onmessage = (event) => {
        try {
          const message = event.data;

          if (!message || typeof message !== "string") {
            reportError(
              "WS_INVALID_MESSAGE",
              "Received empty or invalid message",
              { event },
              "warning",
              "message",
              String(message)
            );
            return;
          }

          if (message.startsWith("PONG:")) {
            if (heartbeatTimeoutRef.current) {
              clearTimeout(heartbeatTimeoutRef.current);
              heartbeatTimeoutRef.current = null;
            }
            return;
          }

          if (heartbeatTimeoutRef.current) {
            clearTimeout(heartbeatTimeoutRef.current);
            heartbeatTimeoutRef.current = null;
          }

          if (!hasReceivedServerDataRef.current) {
            hasReceivedServerDataRef.current = true;
            isInitialLoadRef.current = false;
            skipNextChangeRef.current = true;
            console.log("First server data received, enabling change tracking after next update");
          }

          if (message.startsWith("UPDATE_TEMPERATURE:")) {
            const parts = message.split(":");
            if (parts.length === 3 && parts[1] === deviceId) {
              const temperature = parseFloat(parts[2]);
              if (isNaN(temperature)) {
                reportError(
                  "TEMP_PARSE_FAIL",
                  "Invalid temperature format in message",
                  { message },
                  "warning",
                  "temperature",
                  parts[2]
                );
                return;
              }
              setDeviceData((prev) => ({ ...prev, temperature }));
            }
          } else if (message.startsWith("UPDATE_HUMIDITY:")) {
            const parts = message.split(":");
            if (parts.length === 3 && parts[1] === deviceId) {
              const humidity = parseFloat(parts[2]);
              if (isNaN(humidity)) {
                reportError(
                  "HUMIDITY_PARSE_FAIL",
                  "Invalid humidity value in message",
                  { message },
                  "warning",
                  "humidity",
                  parts[2]
                );
                return;
              }
              setDeviceData((prev) => ({ ...prev, humidity }));
            }
          } else if (message.startsWith("LID_STATUS:")) {
            const parts = message.split(":");
            if (parts.length === 3 && parts[1] === deviceId) {
              const lidStatus = parts[2];
              setDeviceData((prev) => ({ ...prev, lidStatus }));
            }
          } else if (message.startsWith("TIMER:")) {
            const parts = message.split(":");
            if (parts.length === 3 && parts[1] === deviceId) {
              const status = parts[2] === "on" ? "On" : "Off";
              setDeviceData((prev) => ({ ...prev, status }));
            }
          } else if (message.startsWith("{")) {
            let deviceInfo;
            try {
              deviceInfo = JSON.parse(message);
            } catch (err) {
              reportError(
                "JSON_PARSE_FAIL",
                err.message || "Failed to parse JSON from device",
                { message },
                "error",
                "message",
                message.slice(0, 50)
              );
              return;
            }

            const colorInfo = processColorInfo(deviceInfo.color || "");
            const newStatus =
              deviceInfo.status === "on" || deviceInfo.status === "On" ? "On" : "Off";

            let serverTime = null;
            let expiryTime = null;
            if (typeof deviceInfo.timer === "string" && deviceInfo.timer.includes(",")) {
              const parts = deviceInfo.timer.split(",").map((t) => parseInt(t.trim(), 10));
              if (parts.length === 2 && parts.every((n) => !isNaN(n))) {
                [serverTime, expiryTime] = parts;
              } else {
                reportError(
                  "TIMER_PARSE_FAIL",
                  "Invalid timer format from device",
                  { timer: deviceInfo.timer },
                  "warning",
                  "timer",
                  deviceInfo.timer
                );
              }
            }

            const remainingMs =
              expiryTime !== null && serverTime !== null
                ? Math.round((expiryTime - serverTime) / 1000)
                : null;

            setDeviceData((prev) => ({
              ...prev,
              id: deviceInfo.id || prev.id,
              name: deviceInfo.name || prev.name,
              status: newStatus,
              brightness:
                typeof deviceInfo.brightness === "number"
                  ? deviceInfo.brightness
                  : prev.brightness,
              temperature:
                typeof deviceInfo.temperature === "number"
                  ? deviceInfo.temperature
                  : prev.temperature,
              humidity:
                typeof deviceInfo.humidity === "number"
                  ? deviceInfo.humidity
                  : prev.humidity,
              targetHumidity:
                typeof deviceInfo.target === "number"
                  ? deviceInfo.target
                  : prev.targetHumidity,
              controlMode: deviceInfo.control_mode || prev.mode,
              lidStatus: deviceInfo.lidStatus || prev.lidStatus,
              mode: colorInfo.mode || prev.mode,
              color: colorInfo.color || prev.color,
              vicinity: deviceInfo.vicinity || prev.vicinity,
              timer: remainingMs || prev.timer,
            }));
          } else {
            reportError(
              "UNKNOWN_MESSAGE_TYPE",
              "Received unknown message format",
              { message },
              "info",
              "message",
              message.slice(0, 50)
            );
          }
        } catch (err) {
          reportError(
            "MESSAGE_PROCESS_FAIL",
            err.message || "Unhandled error while processing message",
            { data: event.data },
            "error",
            "message",
            String(event.data).slice(0, 50)
          );
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket Error:", error);
        stopPingInterval();
        setDeviceData((prev) => ({ ...prev, isConnected: false }));
        if (autoReconnectRef.current) handleReconnect(deviceId);
      };

      socket.onclose = (event) => {
        console.log(`WebSocket Close: Code ${event.code}, Reason: ${event.reason || "Unknown"}`);
        stopPingInterval();
        setDeviceData((prev) => ({ ...prev, isConnected: false }));
        if (autoReconnectRef.current && [1006, 1000, 1001, 1005].includes(event.code)) {
          handleReconnect(deviceId);
        }
      };

      setWs(socket);
    } catch (err) {
      reportError(
        "DEVICE_CONNECT_FAIL",
        err.message || "Unhandled failure in connectToDevice",
        { deviceId },
        "error",
        "deviceId",
        String(deviceId)
      );
    }
  };

  const sendCommand = (command, data = {}) => {
    try {
      if (ws && deviceData.isConnected && currentDeviceId) {
        const message = JSON.stringify({
          command,
          deviceId: currentDeviceId,
          ...data
        });
        ws.send(message);
      } else {
        console.error("Cannot send command - WebSocket not connected");
        reportError(
          "COMMAND_SEND_BLOCKED",
          "Attempted to send command while not connected",
          { command, data },
          "warning",
          "command",
          command
        );
      }
    } catch (err) {
      reportError(
        "COMMAND_SEND_FAIL",
        err.message || "Failed to send command",
        { command, data },
        "error",
        "command",
        command
      );
    }
  };

  useEffect(() => {
    try {
      let interval = null;
      if (isActive && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((timeLeft) => {
            try {
              const newTime = timeLeft - 1;
              if (newTime <= 0) {
                showGlobalToast("Timer finished!");
                setIsActive(false);
                return 0;
              }
              return newTime;
            } catch (err) {
              reportError(
                "TIMER_INTERVAL_FAIL",
                err.message || "Error updating countdown timer",
                {},
                "error",
                "timeLeft",
                String(timeLeft)
              );
              return timeLeft;
            }
          });
        }, 1000);
      } else if (!isActive) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    } catch (err) {
      reportError(
        "TIMER_EFFECT_FAIL",
        err.message || "Timer useEffect encountered an error",
        {},
        "error",
        "timer",
        ""
      );
    }
  }, [isActive, timeLeft, setDeviceData]);

  const disconnect = () => {
    try {
      console.log("Manually disconnecting WebSocket");
      autoReconnectRef.current = false;
      connectionAttemptRef.current = 0;

      stopPingInterval();

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }

      Object.keys(timerRefs.current).forEach((key) => {
        if (timerRefs.current[key]) {
          clearTimeout(timerRefs.current[key]);
          timerRefs.current[key] = null;
        }
      });

      if (ws) {
        ws.close();
        setWs(null);
        setDeviceData((prev) => ({ ...prev, isConnected: false }));
        setCurrentDeviceId(null);
      } else {
        reportError(
          "DISCONNECT_NO_SOCKET",
          "Attempted to disconnect but WebSocket is not initialized",
          {},
          "warning",
          "ws",
          "null"
        );
      }
    } catch (err) {
      reportError(
        "DISCONNECT_FAIL",
        err.message || "Unexpected failure during manual disconnect",
        {},
        "error",
        "ws",
        "disconnect"
      );
    }
  };

  const forceReconnect = () => {
    try {
      if (currentDeviceId) {
        console.log("Force reconnecting...");
        connectionAttemptRef.current = 0;
        connectToDevice(currentDeviceId);
      } else {
        reportError(
          "FORCE_RECONNECT_NO_DEVICE",
          "Cannot force reconnect without currentDeviceId",
          {},
          "warning",
          "deviceId",
          ""
        );
      }
    } catch (err) {
      reportError(
        "FORCE_RECONNECT_FAIL",
        err.message || "Error during force reconnect attempt",
        {},
        "error",
        "deviceId",
        String(currentDeviceId)
      );
    }
  };

  return (
    <DeviceContext.Provider
      value={{
        deviceData,
        setDeviceData,
        connectToDevice,
        sendCommand,
        disconnect,
        forceReconnect,
        currentDeviceId,
        timeLeft,
        setTimeLeft,
        isActive,
        setIsActive
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);

export const DeviceManagerConnection = ({ deviceId }) => {
  const { connectToDevice, currentDeviceId } = useDevice();
  
  useEffect(() => {
    if (deviceId && deviceId !== currentDeviceId) {
      connectToDevice(deviceId);
    }
  }, [deviceId, currentDeviceId, connectToDevice]);

  return null;
};
