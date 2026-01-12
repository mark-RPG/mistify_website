'use client';
import React, { useState, useEffect } from 'react';
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

const EnvironmentDisplay = () => {
  const { deviceData } = useDevice();

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

  return (
    <div className="bg-gray-800 rounded-xl p-1 relative overflow-hidden flex-grow flex items-end pb-4">
      {/* Single gradient background from red to blue */}
      <div className='absolute inset-0 bg-gradient-to-b from-red-500/8 via-purple-500/8 to-blue-500/12'></div>
      
      {/* Side by side layout */}
      <div className="flex items-stretch z-10 relative w-full">
        {/* Temperature Section - Left Side */}
        <div className="flex justify-between items-center flex-1 relative px-8 md:px-3 py-6">
          {/* Red gradient background for temperature side */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 to-transparent rounded-lg"></div>
          <div className="relative z-10 flex flex-col">
            <h3 className="text-gray-400 text-sm mb-1">
              {text.temperatureDisplay.title}
            </h3>
            <div className="flex items-end">
              <span className="text-3xl font-bold">{deviceData.temperature}</span>
              <span className="text-lg ml-1">{text.temperatureDisplay.celsius}</span>
            </div>
            {/* Spacer to match height of status line on right side */}
            <div className="h-5 mt-1"></div>
          </div>
          <div className="hidden sm:flex w-16 h-16 rounded-full border-4 items-center justify-center border-red-500 bg-red-500/10 relative z-10">
            {/* Thermometer icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-red-500"
            >
              <path d="M14 14.76V5a2 2 0 10-4 0v9.76a4 4 0 104 0zM12 2a3 3 0 00-3 3v9.35a5 5 0 106 0V5a3 3 0 00-3-3z" />
            </svg>
          </div>

        </div>

        {/* Humidity Section - Right Side */}
        <div className="flex items-center justify-between flex-1 relative px-8 md:px-3 py-6">
          {/* Blue gradient background for humidity side */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/15 to-transparent rounded-lg"></div>
          <div className="hidden sm:flex w-16 h-16 rounded-full border-4 border-blue-500 items-center justify-center bg-blue-500/10 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col text-right">
            <h3 className="text-gray-400 text-sm mb-1">{text.humidityDisplay.title}</h3>
            <div className="flex items-end justify-end">
              <span className="text-3xl font-bold">{deviceData.humidity}</span>
              <span className="text-lg ml-1">%</span>
            </div>
            <div className='text-xs py-0.5 rounded-full h-5 mt-1'>
              <div className={`${((deviceData.controlMode === "manual") || (deviceData.targetHumidity === 80)) ? "hidden" : "inline"}`}>
                <span className="text-xs text-gray-400">{text.humidityDisplay.target}</span>
                <span className="text-sm ml-1 font-medium mr-2">{deviceData.targetHumidity}%</span>
              </div>
              {((deviceData.humidity < deviceData.targetHumidity) || (deviceData.controlMode === "manual" && deviceData.status === "On")) ? (
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">{text.humidityDisplay.increasing}</span>
              ) : ((deviceData.humidity > deviceData.targetHumidity) || (deviceData.controlMode === "manual"))? (
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">{text.humidityDisplay.decreasing}</span>
              ) : (
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">{text.humidityDisplay.optimal}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Active indicator */}
      {deviceData.status === 'On' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 animate-pulse"></div>
      )}
    </div>
  );
};

export default EnvironmentDisplay;