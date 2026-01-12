"use client";
import React, { useState, useEffect } from 'react';
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

const PowerControl = () => {
  const { deviceData, setDeviceData } = useDevice();

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
  
  const togglePower = () => {
    const newStatus = deviceData.status === 'On' ? 'Off' : 'On';
    const isAutoMode = deviceData.controlMode === 'auto';
    
    if (isAutoMode) {
      if (newStatus === 'Off') {
        // When turning Off in Auto mode: switch to manual first, then turn off
        setDeviceData(prev => ({
          ...prev,
          controlMode: 'manual',
          status: newStatus,
          // Keep the UI showing auto mode
          displayControlMode: 'auto'
        }));
      } else {
        // When turning On in Auto mode: switch to auto first, then turn on
        setDeviceData(prev => ({
          ...prev,
          controlMode: 'auto',
          status: newStatus,
          displayControlMode: 'auto'
        }));
      }
    } else {
      // Manual mode - just change status normally
      setDeviceData(prev => ({
        ...prev,
        status: newStatus,
      }));
    }
  };
  
  return (
    <div className="bg-gray-800 rounded-xl p-1 relative overflow-hidden flex flex-col justify-evenly">
      <div className="flex justify-between items-center mb-1 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-gray-300 text-xl font-medium">{text.powerControl.title}</h3>
        </div>
      </div>
      
      <div className="flex flex-col items-center z-10 relative">
        <div className="mb-7 w-full">
          <div className="text-center mb-4">
            <span className={`text-2xl font-bold ${deviceData.status === 'On' ? 'text-green-400' : 'text-gray-400'}`}>
              {deviceData.status === 'On' ? text.powerControl.running : text.powerControl.standby}
            </span>
          </div>
          
          <div className="flex items-center justify-center">
            <label className="relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={deviceData.status === 'On'}
                onChange={togglePower}
                className="sr-only"
              />
              <span className="label flex items-center text-lg font-medium text-gray-400">
                {text.powerControl.off}
              </span>
              <span
                className={`slider mx-4 flex h-10 w-[88px] items-center rounded-full p-1.5 duration-200 ${
                  deviceData.status === 'On' ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`dot h-7 w-7 rounded-full bg-white duration-200 ${
                    deviceData.status === 'On' ? 'translate-x-[52px]' : ''
                  }`}
                ></span>
              </span>
              <span className="label flex items-center text-lg font-medium text-green-400">
                {text.powerControl.on}
              </span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/20"></div>
      {deviceData.status === 'On' && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-500"></div>
      )}
    </div>
  );
};

export default PowerControl;