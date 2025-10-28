"use client";
import React, { useEffect } from 'react';
import { useDevice } from '@/components/context/DeviceContext';

const PowerControl = () => {
  const { deviceData, setDeviceData } = useDevice();
  
  const togglePower = () => {
    const newStatus = deviceData.status === 'On' ? 'Off' : 'On';
    setDeviceData(prev => ({
      ...prev,
      status: newStatus,
    }));
  };
  
  return (
    <div className="bg-gray-800 rounded-xl p-4 relative overflow-hidden flex flex-col justify-evenly">
      <div className="flex justify-between items-center mb-5 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-gray-300 text-xl font-medium">Power Control</h3>
        </div>
      </div>
      
      <div className="flex flex-col items-center z-10 relative">
        <div className="mb-6 w-full">
          <div className="text-center mb-4">
            <span className={`text-2xl font-bold ${deviceData.status === 'On' ? 'text-green-400' : 'text-gray-400'}`}>
              {deviceData.status === 'On' ? 'Running' : 'Standby'}
            </span>
            
            <div className="flex justify-center mt-2 h-2"> {/* Fixed height container */}
              <div className={`animate-pulse flex space-x-1 ${deviceData.status === 'On' ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`}></div>
                <div className={`w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`}></div>
                <div className={`w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`}></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <label className="relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={deviceData.status === 'On'}
                onChange={togglePower}
                className="sr-only"
              />
              <span className="label flex items-center text-xl font-medium text-gray-400">
                Off
              </span>
              <span
                className={`slider mx-6 flex h-14 w-[120px] items-center rounded-full p-2 duration-200 ${
                  deviceData.status === 'On' ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`dot h-10 w-10 rounded-full bg-white duration-200 ${
                    deviceData.status === 'On' ? 'translate-x-[72px]' : ''
                  }`}
                ></span>
              </span>
              <span className="label flex items-center text-xl font-medium text-green-400">
                On
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