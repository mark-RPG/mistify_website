// Device Panels Text Translations

const devicePanelsText = {
  en: {
    // ColorSelector
    colorSelector: {
      title: "Light Color"
    },
    
    // BrightnessSelector
    brightnessSelector: {
      title: "Brightness",
      currentMode: "Current Mode:",
      modeOff: "Off"
    },
    
    // ControlModeSelector
    controlModeSelector: {
      title: "Control Mode",
      autoMode: "Auto Mode",
      manualMode: "Manual Mode",
      manual: "Manual",
      auto: "Auto"
    },
    
    // HumidityDisplay
    humidityDisplay: {
      title: "Current Humidity",
      target: "Target:",
      increasing: "Increasing",
      decreasing: "Decreasing",
      optimal: "Optimal"
    },
    
    // TemperatureDisplay
    temperatureDisplay: {
      title: "Temperature",
      celsius: "°C",
      fahrenheit: "°F"
    },
    
    // PowerControl
    powerControl: {
      title: "Power Control",
      on: "On",
      off: "Off",
      running: "Running",
      standby: "Standby"
    },
    
    // TimerControl
    timerControl: {
      title: "Timer",
      timerRunning: "Timer Running",
      setTimer: "Set Timer",
      hours: "Hours",
      minutes: "Minutes",
      timeRemaining: "Time Remaining",
      cancelTimer: "Cancel Timer",
      setTimerButton: "Set Timer",
      timerSetMessage: "Timer set for",
      timerCancelledMessage: "Timer cancelled"
    },
    
    // TargetHumidityControl
    targetHumidityControl: {
      title: "Target Humidity",
      off: "OFF",
      targetDisabled: "TARGET DISABLED",
      low: "Low",
      med: "Med",
      high: "High",
      targetOff: "Target Off",
      targetOn: "Target On",
      recommendedNote: "Recommended: 50-60% for optimal health."
    },
    
    // ModeSelector
    modeSelector: {
      title: "Lighting Mode",
      color: "Color",
      fade: "Fade",
      colorWave: "Color Wave",
      rainbow: "Rainbow",
      glowingGradient: "Glowing Gradient",
      softTwinkle: "Soft Twinkle",
      warmSunset: "Warm Sunset",
      pulsating: "Pulsating",
      off: "Off",
      solidColor: "Solid Color",
      turnOff: "Turn Off"
    },
    
    // ModeEffectPreview
    modeEffectPreview: {
      title: "Effect Preview",
      currentMode: "Current Mode:"
    }
  },
  
  lv: {
    // ColorSelector
    colorSelector: {
      title: "Gaismas Krāsa"
    },
    
    // BrightnessSelector
    brightnessSelector: {
      title: "Spilgtums",
      currentMode: "Pašreizējais Režīms:",
      modeOff: "Izslēgts"
    },
    
    // ControlModeSelector
    controlModeSelector: {
      title: "Vadības Režīms",
      autoMode: "Automātiskais Režīms",
      manualMode: "Manuālais Režīms",
      manual: "Manuāls",
      auto: "Automātisks"
    },
    
    // HumidityDisplay
    humidityDisplay: {
      title: "Pašreizējais Mitrums",
      target: "Mērķis:",
      increasing: "Palielinās",
      decreasing: "Samazinās",
      optimal: "Optimāls"
    },
    
    // TemperatureDisplay
    temperatureDisplay: {
      title: "Temperatūra",
      celsius: "°C",
      fahrenheit: "°F"
    },
    
    // PowerControl
    powerControl: {
      title: "Barošanas Vadība",
      on: "Ieslēgts",
      off: "Izslēgts",
      running: "Darbojas",
      standby: "Gaidīšanas Režīms"
    },
    
    // TimerControl
    timerControl: {
      title: "Taimeris",
      timerRunning: "Taimeris Darbojas",
      setTimer: "Iestatīt Taimeri",
      hours: "Stundas",
      minutes: "Minūtes",
      timeRemaining: "Atlikušais Laiks",
      cancelTimer: "Atcelt Taimeri",
      setTimerButton: "Iestatīt Taimeri",
      timerSetMessage: "Taimeris iestatīts uz",
      timerCancelledMessage: "Taimeris atcelts"
    },
    
    // TargetHumidityControl
    targetHumidityControl: {
      title: "Mērķa Mitrums",
      off: "IZSLĒGTS",
      targetDisabled: "MĒRĶIS ATSPĒJOTS",
      low: "Zems",
      med: "Vidējs",
      high: "Augsts",
      targetOff: "Mērķis Izslēgts",
      targetOn: "Mērķis Ieslēgts",
      recommendedNote: "Ieteicams: 50-60% optimālai veselībai."
    },
    
    // ModeSelector
    modeSelector: {
      title: "Apgaismojuma Režīms",
      color: "Krāsa",
      fade: "Blāvums",
      colorWave: "Krāsu Vilnis",
      rainbow: "Varavīksne",
      glowingGradient: "Spīdošs Gradients",
      softTwinkle: "Mīksta Mirdzēšana",
      warmSunset: "Silts Saulriets",
      pulsating: "Pulsējošs",
      off: "Izslēgts",
      solidColor: "Viendabīga Krāsa",
      turnOff: "Izslēgt"
    },
    
    // ModeEffectPreview
    modeEffectPreview: {
      title: "Efekta Priekšskatījums",
      currentMode: "Pašreizējais Režīms:"
    }
  }
};

export const getDevicePanelsText = (locale) => {
  return devicePanelsText[locale] || devicePanelsText.en;
};