"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useDevice } from '@/components/context/DeviceContext';
import { getDevicePanelsText } from '@/components/devicePanelsText';
import { useLanguage } from '@/components/context/LanguageContext';

const showGlobalToast = (message) => {
  const event = new CustomEvent('showToast', {
     detail: { message }
  });
  window.dispatchEvent(event);
};

const TimerControl = () => {
  const { deviceData, setDeviceData, isActive, timeLeft, setTimeLeft, setIsActive } = useDevice();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

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

  useEffect(() => {
    const remainingMs  = deviceData.timer * 1000;

    if (remainingMs > 0) {
      setTimeLeft(deviceData.timer); 
      setIsActive(true);
      
      setDeviceData(prev => ({
        ...prev,
        timerActive: true
      }));
    } else {
      setIsActive(false);
      setTimeLeft(0);
    }
  }, [deviceData.timer, deviceData.timerActive, setDeviceData]);

  const handleSetTimer = () => {
    const totalMinutes = (hours * 60) + minutes;
    if (totalMinutes > 0) {
      const totalSeconds = totalMinutes * 60;
      setTimeLeft(totalSeconds);
      setIsActive(true);
      
      setDeviceData(prev => ({
        ...prev,
        timer: totalSeconds,
        timerActive: true
      }));
             
      showGlobalToast(`${text.timerControl.timerSetMessage} ${hours}h ${minutes}m`);
             
      setHours(0);
      setMinutes(0);
    }
  };

  const handleCancelTimer = () => {
    setIsActive(false);
    setTimeLeft(0);
    setDeviceData(prev => ({
      ...prev,
      timer: null,
      timerActive: false
    }));
    showGlobalToast(text.timerControl.timerCancelledMessage);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-xl p-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-gray-500/10 to-gray-600/20">
      <div className="flex items-center mb-3 z-10 relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-gray-300 text-xl font-medium">
          {isActive ? text.timerControl.timerRunning : text.timerControl.setTimer}
        </h3>
      </div>
      
      {isActive ? (
        // Timer display when active
        <div className="text-center mb-4">
          <div className="text-4xl font-mono font-bold text-blue-400 mb-2">
            {formatTime(timeLeft)}
          </div>
          <div className="text-gray-400">{text.timerControl.timeRemaining}</div>
        </div>
      ) : (
        // Timer setup when inactive
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-700 rounded-lg p-3">
            <label className="block text-sm text-gray-400 mb-2">{text.timerControl.hours}</label>
            <select
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full bg-gray-600 border-none rounded-lg text-lg py-2 px-3 text-white"
            >
              {Array.from({length: 13}, (_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
                 
          <div className="bg-gray-700 rounded-lg p-3">
            <label className="block text-sm text-gray-400 mb-2">{text.timerControl.minutes}</label>
            <select
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
              className="w-full bg-gray-600 border-none rounded-lg text-lg py-2 px-3 text-white"
            >
              {Array.from({length: 12}, (_, i) => (
                <option key={i*5} value={i*5}>{i*5}</option>
              ))}
            </select>
          </div>
        </div>
      )}
             
      <div className="z-10 relative">
        {isActive ? (
          <button
            onClick={handleCancelTimer}
            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {text.timerControl.cancelTimer}
          </button>
        ) : (
          <button
            onClick={handleSetTimer}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
            disabled={hours === 0 && minutes === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {text.timerControl.setTimerButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerControl;