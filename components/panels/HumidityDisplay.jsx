"use client";
import React from 'react'
import { useDevice } from '@/components/context/DeviceContext';

const HumidityDisplay = () => {

  const { deviceData, setDeviceData } = useDevice();

  return (
    <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
        <div className="z-10">
            <h3 className="text-gray-400 text-sm">Current Humidity</h3>
            <div className="flex items-end mt-1 mb-2">
                <span className="text-4xl font-bold">{deviceData.humidity}</span>
                <span className="text-xl ml-1">%</span>
            </div>
            <div className='text-xs py-0.5 rounded-full h-5'>
                <div className={`${((deviceData.controlMode === "manual") || (deviceData.targetHumidity === 80)) ? "hidden" : "inline"}`}>
                    <span className="text-xs text-gray-400">Target:</span>
                    <span className="text-sm ml-1 font-medium mr-2">{deviceData.targetHumidity}%</span>
                </div>
                {((deviceData.humidity < deviceData.targetHumidity) || (deviceData.controlMode === "manual" && deviceData.status === "On")) ? (
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Increasing</span>
                ) : ((deviceData.humidity > deviceData.targetHumidity) || (deviceData.controlMode === "manual"))? (
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Decreasing</span>
                ) : (
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Optimal</span>
                )}
            </div>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500/10 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/20"></div>
        {deviceData.status === 'On' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 animate-pulse"></div>
        )}
    </div>
  )
}

export default HumidityDisplay