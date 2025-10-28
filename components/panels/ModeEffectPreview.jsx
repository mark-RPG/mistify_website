'use client';
import { useEffect, useRef } from 'react';
import { useDevice } from '@/components/context/DeviceContext';

export const ModeEffectPreview = () => {
  const { deviceData } = useDevice();
  const divRef = useRef(null);
  const animationRef = useRef(null);
  const animationStateRef = useRef({
    hue: 0,
    fadeAngle: 0,
    waveAngle: 0,
    twinkles: null,
    sunsetStep: 0,
    sunsetIndex: 0,
    gradientProgress: 0,
  });

  const hsvToRgb = (h, s, v) => {
    h = h % 360;
    s = s / 100;
    v = v / 100;
    let c = v * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = v - c;
    let r, g, b;
    if (h < 60) [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  };

  const parseRgb = (rgbStr) => {
    const match = rgbStr.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
      };
    }
    return { r: 255, g: 0, b: 0 };
  };

  const getComplementaryColor = (rgbStr) => {
    const { r, g, b } = parseRgb(rgbStr);
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  };

  const updateAnimation = () => {
    if (!divRef.current) return;
    const state = animationStateRef.current;
    const { r, g, b } = parseRgb(deviceData.color);

    switch (deviceData.mode) {
      case 'Color':
        divRef.current.style.background = deviceData.color;
        break;

      case 'Off':
        divRef.current.style.background = 'rgb(0, 0, 0, 0)';
        break;

      case 'Fade':
      case 'Pulsating': {
        const speed = deviceData.mode === 'Fade' ? 0.01 : 0.03;
        state.fadeAngle = (state.fadeAngle + speed) % (2 * Math.PI);
        const intensity = 0.2 + 0.8 * Math.abs(Math.sin(state.fadeAngle)); // avoid going full black
        divRef.current.style.background = `rgb(${Math.floor(r * intensity)}, ${Math.floor(g * intensity)}, ${Math.floor(b * intensity)})`;
        break;
      }

      case 'Rainbow': {
        state.hue = (state.hue + 1) % 360;
        const rainbow = hsvToRgb(state.hue, 100, 100);
        divRef.current.style.background = `rgb(${rainbow.r}, ${rainbow.g}, ${rainbow.b})`;
        break;
      }

      case 'Color Wave': {
        state.hue = (state.hue + 1) % 360;
        state.waveAngle = (state.waveAngle + 0.05) % (2 * Math.PI);
        const brightness = 50 + 50 * Math.sin(state.waveAngle);
        const wave = hsvToRgb(state.hue, 100, brightness);
        divRef.current.style.background = `rgb(${wave.r}, ${wave.g}, ${wave.b})`;
        break;
      }

      case 'Soft Twinkle': {
        if (!state.twinkles) {
          state.twinkles = Array.from({ length: 10 }, () => ({
            opacity: Math.random(),
            speed: 0.02 + Math.random() * 0.03,
            direction: Math.random() > 0.5 ? 1 : -1,
          }));
        }

        let avgOpacity = 0;
        for (let t of state.twinkles) {
          t.opacity += t.speed * t.direction;
          if (t.opacity >= 1) {
            t.opacity = 1;
            t.direction = -1;
          } else if (t.opacity <= 0.3) {
            t.opacity = 0.3;
            t.direction = 1;
          }
          avgOpacity += t.opacity;
        }
        avgOpacity /= state.twinkles.length;
        divRef.current.style.background = `rgb(${Math.floor(r * avgOpacity)}, ${Math.floor(g * avgOpacity)}, ${Math.floor(b * avgOpacity)})`;
        break;
      }

      case 'Warm Sunset': {
        const sunset = [
          parseRgb('rgb(255, 100, 0)'),
          parseRgb('rgb(255, 50, 50)'),
          parseRgb('rgb(255, 0, 100)'),
        ];
        const curr = sunset[state.sunsetIndex];
        const next = sunset[(state.sunsetIndex + 1) % sunset.length];
        const t = 0.5 * (1 - Math.cos(Math.PI * state.sunsetStep));
        const blend = {
          r: Math.floor(curr.r * (1 - t) + next.r * t),
          g: Math.floor(curr.g * (1 - t) + next.g * t),
          b: Math.floor(curr.b * (1 - t) + next.b * t),
        };
        divRef.current.style.background = `rgb(${blend.r}, ${blend.g}, ${blend.b})`;
        state.sunsetStep += 0.005;
        if (state.sunsetStep >= 1) {
          state.sunsetStep = 0;
          state.sunsetIndex = (state.sunsetIndex + 1) % sunset.length;
        }
        break;
      }

      case 'Glowing Gradient': {
        const comp = getComplementaryColor(deviceData.color);
        const baseColor = parseRgb(deviceData.color);
        const compColor = parseRgb(comp);
        const t = 0.5 * (1 + Math.sin(state.gradientProgress / 50));
        state.gradientProgress += 1;
        const glow = {
          r: Math.floor(baseColor.r * (1 - t) + compColor.r * t),
          g: Math.floor(baseColor.g * (1 - t) + compColor.g * t),
          b: Math.floor(baseColor.b * (1 - t) + compColor.b * t),
        };
        divRef.current.style.background = `rgb(${glow.r}, ${glow.g}, ${glow.b})`;
        break;
      }

      default:
        divRef.current.style.background = deviceData.color;
    }

    animationRef.current = requestAnimationFrame(updateAnimation);
  };

  useEffect(() => {
    animationStateRef.current = {
      hue: 0,
      fadeAngle: 0,
      waveAngle: 0,
      twinkles: null,
      sunsetStep: 0,
      sunsetIndex: 0,
      gradientProgress: 0,
    };

    if (divRef.current) {
      divRef.current.style.background = deviceData.color;
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [deviceData.mode, deviceData.color]);

  return (
    <div className="bg-gray-800 rounded-xl p-2 relative overflow-hidden flex flex-col justify-around">
      <div className="flex justify-between items-center mb-2 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-gray-300 text-xl font-medium">Effect Preview</h3>
        </div>
      </div>

      <div className="z-10 relative">
        <div className="text-sm text-center mb-2 text-gray-300 font-medium">Current Mode: <span className="text-purple-400">{deviceData.mode}</span></div>
        <div
          ref={divRef}
          className="h-24 rounded-lg border border-gray-600 relative shadow-lg"
          style={{
            background: deviceData.color,
            opacity: deviceData.brightness / 255
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-amber-600/20 pointer-events-none" />
    </div>
  );
};
