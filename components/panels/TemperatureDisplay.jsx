'use client';
import React, { useState, useEffect } from 'react';
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

const TemperatureDisplay = () => {
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

  const value = deviceData.temperature;

  return (
    <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
      <div className="z-10">
        <h3 className="text-gray-400 text-sm mb-3">
          {text.temperatureDisplay.title}
        </h3>
        <div className="flex items-end mt-1">
          <span className="text-4xl font-bold">{value}</span>
          <span className="text-xl ml-1">{text.temperatureDisplay.celsius}</span>
        </div>
      </div>
      <div className='w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 border-red-500 bg-red-500/10'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/20'></div>
    </div>
  );
};

export default TemperatureDisplay;