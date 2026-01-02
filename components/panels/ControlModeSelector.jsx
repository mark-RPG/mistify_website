"use client";
import React, { useState, useEffect } from 'react';
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

const ControlModeSelector = () => {
  const { deviceData, setDeviceData, setTimeLeft, setIsActive } = useDevice();

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

  const isAuto = deviceData.controlMode === 'auto';

  const toggleControlMode = () => {
    const newMode = isAuto ? 'manual' : 'auto';
    setDeviceData(prev => ({
      ...prev,
      controlMode: newMode,
    }));
    if (newMode === 'auto') {
      setIsActive(false);
      setTimeLeft(0);
      setDeviceData(prev => ({
        ...prev,
        timer: null,
        timerActive: false
      }));
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 relative overflow-hidden flex flex-col justify-evenly flex-1 w-full h-full flex-grow">
      <div className="flex justify-between items-center mb-9 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m7.5 0A7.5 7.5 0 1112 4.5 7.5 7.5 0 0121.5 12z" />
          </svg>
          <h3 className="text-gray-300 text-xl font-medium">{text.controlModeSelector.title}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center z-10 relative">
        <div className="mb-8 w-full">
          <div className="text-center mb-4">
            <span className={`text-2xl font-bold ${isAuto ? 'text-yellow-400' : 'text-blue-400'}`}>
              {isAuto ? text.controlModeSelector.autoMode : text.controlModeSelector.manualMode}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <label className="relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={isAuto}
                onChange={toggleControlMode}
                className="sr-only"
              />
              <span className="label flex items-center text-xl font-medium text-blue-400">
                {text.controlModeSelector.manual}
              </span>
              <span
                className={`slider mx-6 flex h-14 w-[120px] items-center rounded-full p-2 duration-200 ${
                  isAuto ? 'bg-yellow-400' : 'bg-blue-500'
                }`}
              >
                <span
                  className={`dot h-10 w-10 rounded-full bg-white duration-200 ${
                    isAuto ? 'translate-x-[72px]' : ''
                  }`}
                ></span>
              </span>
              <span className="label flex items-center text-xl font-medium text-yellow-300">
                {text.controlModeSelector.auto}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-indigo-600/20"></div>
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${isAuto ? 'bg-yellow-400' : 'bg-blue-500'}`}></div>
    </div>
  );
};

export default ControlModeSelector;