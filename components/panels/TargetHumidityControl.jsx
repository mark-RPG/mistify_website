"use client";
import React from 'react'
import { useDevice } from '@/components/context/DeviceContext';

const TargetHumidityControl = () => {
  const { deviceData, setDeviceData } = useDevice();

  const setTargetHumidity = (value) => {
    const humidity = Math.min(Math.max(parseInt(value), 30), 75);
    setDeviceData(prev => ({
      ...prev,
      targetHumidity: humidity,
    }));
  };
  const toggleTargetOff = () => {
    if (deviceData.targetHumidity > 75) {
      setDeviceData(prev => ({
        ...prev,
        targetHumidity: 50,
      }));
    } else {
      setDeviceData(prev => ({
        ...prev,
        targetHumidity: 80,
      }));
    }
  };
  
  return (
    <div className="bg-gray-800 rounded-xl p-2 relative overflow-hidden flex flex-col justify-between">
      <div className="flex justify-between items-center mb-5 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <h3 className="text-gray-300 text-xl font-medium">Target Humidity</h3>
        </div>
        <div className="items-center hidden xl:flex">
          <span className="text-2xl font-bold text-blue-400">
            {deviceData.targetHumidity > 75 ? 'OFF' : `${deviceData.targetHumidity}%`}
          </span>
          <div className="ml-2 relative">
            <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center overflow-hidden">
              <div 
                className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ${deviceData.targetHumidity > 75 ? 'bg-red-500' : 'bg-blue-500'}`}
                style={{ height: `${deviceData.targetHumidity > 75 ? 0 : Math.min(deviceData.targetHumidity, 75)}%` }}
              ></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19.5V14m6 0v5.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col z-10 relative">
        <input
          type="range"
          min="30"
          max="75"
          value={deviceData.targetHumidity > 75 ? 75 : deviceData.targetHumidity}
          onChange={(e) => setTargetHumidity(e.target.value)}
          disabled={deviceData.targetHumidity > 75}
          className={`w-full h-3 rounded-lg appearance-none cursor-pointer mb-3 ${
            deviceData.targetHumidity > 75 
              ? 'bg-red-900 cursor-not-allowed opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none' 
              : 'bg-gray-700 accent-blue-500'
          }`}
        />
        <div className={`flex justify-between text-sm mb-2 ${deviceData.targetHumidity > 75 ? 'text-red-400 opacity-50' : 'text-gray-400'}`}>
          <span>30%</span>
          <span className={`font-medium ${deviceData.targetHumidity > 75 ? 'text-red-400' : 'text-blue-400'}`}>
            {deviceData.targetHumidity > 75 ? 'TARGET DISABLED' : '50%'}
          </span>
          <span>75%</span>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mt-1">
          <button 
            onClick={() => setTargetHumidity(40)}
            disabled={deviceData.targetHumidity > 75}
            className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${
              deviceData.targetHumidity > 75 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                : deviceData.targetHumidity === 40 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}>
            <div className="flex flex-col items-center">
              Low (40%)
            </div>
          </button>
          <button 
            onClick={() => setTargetHumidity(50)}
            disabled={deviceData.targetHumidity > 75}
            className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${
              deviceData.targetHumidity > 75 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                : deviceData.targetHumidity === 50 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}>
            <div className="flex flex-col items-center">
              Med (50%)
            </div>
          </button>
          <button 
            onClick={() => setTargetHumidity(60)}
            disabled={deviceData.targetHumidity > 75}
            className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${
              deviceData.targetHumidity > 75 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                : deviceData.targetHumidity === 60 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}>
            <div className="flex flex-col items-center">
              High (60%)
            </div>
          </button>
          <button 
            onClick={toggleTargetOff}
            className={`py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${deviceData.targetHumidity > 75 ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
            <div className="flex flex-col items-center">
              {deviceData.targetHumidity > 75 ? 'Target On' : 'Target Off'}
            </div>
          </button>
        </div>
      </div>
      
      <div className="bg-gray-700/50 p-2 rounded-lg mt-2 z-10 relative hidden xl:inline">
        <div className="flex items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-gray-300">Recommended: 50-60% for optimal health.</span>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20"></div>
    </div>
  )
}

export default TargetHumidityControl
