"use client";
import React from 'react';
import { useDevice } from '@/components/context/DeviceContext';

const BrightnessSelector = () => {
  const { deviceData, setDeviceData } = useDevice();

  const hexToRgba = (hex, alpha = 1) => {
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c.split('').map(x => x + x).join('');
    }
    const bigint = parseInt(c, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const color = deviceData.color && deviceData.color !== 'none' ? deviceData.color : '#FFD700';

  const setBrightness = (value) => {
    const brightness = Math.min(Math.max(parseInt(value), 1), 255);
    setDeviceData(prev => ({ ...prev, brightness }));
  };

  const isOff = deviceData.mode?.trim().toLowerCase() === "off";

  if (isOff) {
    return (
      <div
        className="bg-gradient-to-br from-yellow-400/10 to-indigo-600/20 rounded-xl flex-grow text-white inline-flex items-center justify-center p-4 font-semibold text-lg"
      >
        Current Mode: Off
      </div>
    );
    
  }

  // If not off, show brightness selector
  return (
    <div
      className="bg-gradient-to-br from-yellow-400/10 to-indigo-600/20 rounded-xl p-3 relative flex flex-col flex-grow overflow-hidden"
      style={{ display: 'flex' }}
    >
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-400 text-sm">Brightness</h3>
          <span className="text-sm font-medium">
            {Math.round((deviceData.brightness / 255) * 100)}%
          </span>
        </div>

        <div className="relative w-full h-[84px] mb-3 rounded-md overflow-hidden">
          <div
            className="absolute inset-0 opacity-70 z-0 rounded-md"
            style={{
              background: `linear-gradient(to right, ${hexToRgba(color, 0)}, ${color})`,
            }}            
          ></div>

          <input
            type="range"
            min="1"
            max="255"
            value={deviceData.brightness}
            onChange={(e) => setBrightness(e.target.value)}
            className="relative w-full h-[84px] z-10 appearance-none bg-transparent cursor-pointer custom-range-thumb"
            style={{ accentColor: color }}
          />
        </div>
      </div>

  <style jsx>{`
    input[type="range"].custom-range-thumb::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 6px;
      height: 84px;
      background: white;
      box-shadow: 0 0 4px ${color};
      border-radius: 2px;
      margin-top: 0;
    }

    input[type="range"].custom-range-thumb::-moz-range-thumb {
      width: 6px;
      height: 84px;
      background: white;
      box-shadow: 0 0 4px ${color};
      border: none;
      border-radius: 2px;
    }

    input[type="range"].custom-range-thumb::-webkit-slider-runnable-track {
      height: 84px;
      background: transparent;
    }

    input[type="range"].custom-range-thumb::-moz-range-track {
      height: 84px;
      background: transparent;
    }
  `}</style>


    </div>
  );
};

export default BrightnessSelector;