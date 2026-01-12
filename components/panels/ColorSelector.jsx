'use client';
import { useState, useRef, useEffect } from 'react';
import { SketchPicker } from "react-color";
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

export const ColorSelector = () => {
  const { deviceData, setDeviceData } = useDevice();
  const [isOpen, setIsOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 80, left: 80 });
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const lastCloseTimeRef = useRef(0);

  // Language system
  const { locale } = useLanguage();
  const [text, setText] = useState(getDevicePanelsText("en"));

  // Update text when locale changes
  useEffect(() => {
    const newText = getDevicePanelsText(locale);
    if (newText) {
      setText(newText);
    }
  }, [locale]);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
      lastCloseTimeRef.current = Date.now();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const rgbToHex = (rgb) => {
    const rgbMatch = rgb.match(/^(\d+),\s*(\d+),\s*(\d+)$/);
    if (!rgbMatch) return rgb;
  
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
  
    return `${r}, ${g}, ${b}`;
  };

  const rgbToString = (rgb) => {
    if (typeof rgb === "object" && rgb.r !== undefined && rgb.g !== undefined && rgb.b !== undefined) {
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }
    return "rgb(0, 0, 0)";
  };

  const setColor = (color) => {
    setDeviceData(prev => ({...prev, color}));
  };

  const displayColorInHex = rgbToHex(deviceData.color);

  return (
    <>
      <div className="bg-gray-800 rounded-xl p-4 relative flex-grow">
        <div className="flex justify-between items-center mb-6 z-10 relative">
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-purple-400 mr-3" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
              />
            </svg>
            <h3 className="text-gray-200 text-lg font-medium">{text.colorSelector.title}</h3>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: deviceData.color }}></div>
        </div>
        
        <div className="z-10 relative space-y-6 mt-12">
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              className="color-slider"
              onChange={(e) => {
                const val = e.target.value;
                let newColor;
                if (val < 20) {
                  newColor = `rgb(255, ${Math.floor(val * 12.75)}, 0)`; // red to yellow
                } else if (val < 40) {
                  newColor = `rgb(${Math.floor(255 - (val - 20) * 12.75)}, 255, 0)`; // yellow to green
                } else if (val < 60) {
                  newColor = `rgb(0, 255, ${Math.floor((val - 40) * 12.75)})`; // green to cyan
                } else if (val < 80) {
                  newColor = `rgb(0, ${Math.floor(255 - (val - 60) * 12.75)}, 255)`; // cyan to blue
                } else {
                  newColor = `rgb(${Math.floor((val - 80) * 12.75)}, 0, 255)`; // blue to magenta
                }
                setColor(newColor);
              }}
              style={{
                background: 'linear-gradient(to right, red, yellow, green, cyan, blue, magenta)',
              }}
            />
            <button
              ref={buttonRef}
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: displayColorInHex }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const timeSinceClose = Date.now() - lastCloseTimeRef.current;
                if (timeSinceClose < 100) {
                  return; // Grace period - don't open if just closed
                }
                
                if (!isOpen && buttonRef.current) {
                  const rect = buttonRef.current.getBoundingClientRect();
                  setPopupPosition({
                    top: rect.top - 280, // Position above the button (color picker height ~320px + 10px gap)
                    left: rect.left - 200 // Offset to the left of the button
                  });
                }
                
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
        
        <div className="rounded-xl absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/15"></div>
        <style jsx>{`
          input[type="range"].color-slider {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 24px; /* Much shorter bar height */
            border-radius: 6px;
            cursor: pointer;
            background: none;
          }

          input[type="range"].color-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 6px;
            height: 24px;
            background: white;
            border-radius: 2px;
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
            margin-top: 0px;
            cursor: pointer;
          }

          input[type="range"].color-slider::-webkit-slider-runnable-track {
            height: 24px;
            border-radius: 6px;
            background: transparent;
          }

          input[type="range"].color-slider::-moz-range-thumb {
            width: 6px;
            height: 24px;
            background: white;
            border: none;
            border-radius: 2px;
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
            cursor: pointer;
          }

          input[type="range"].color-slider::-moz-range-track {
            height: 24px;
            border-radius: 6px;
            background: transparent;
          }
        `}</style>
      </div>

      {isOpen && (
        <div
          ref={popupRef}
          className="fixed bg-gray-900 p-4 border border-gray-500 rounded-lg shadow-xl z-[9999]"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`
          }}
        >
          <SketchPicker
            color={displayColorInHex}
            onChange={(updatedColor) => setColor(rgbToString(updatedColor.rgb))}
            disableAlpha={true}
            presetColors={[]}
          />
        </div>
      )}
    </>
  );
};