'use client';
import { useDevice } from '@/components/context/DeviceContext';
import { DeviceManagerConnection } from '@/components/context/DeviceContext';
import BrightnessSelector from '@/components/panels/BrightnessSelector.jsx';
import { ColorSelector } from '@/components/panels/ColorSelector.jsx';
import { ModeEffectPreview } from '@/components/panels/ModeEffectPreview.jsx';
import { ModeSelector } from '@/components/panels/ModeSelector.jsx';
import TargetHumidityControl from '@/components/panels/TargetHumidityControl.jsx';
  import EnvironmentDisplay from '@/components/panels/EnvironmentDisplay.jsx';
import ControlModeSelector from '@/components/panels/ControlModeSelector.jsx';
import PowerControl from '@/components/panels/PowerControl';
import TimerControl from '@/components/panels/TimerControl.jsx';
import { getDeviceManagerText } from '@/components/deviceManagerText';
import { useLanguage } from '@/components/context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
  
const DeviceManager = ({ deviceId, onBack }) => {
  const { deviceData, disconnect } = useDevice();
  const [toast, setToast] = useState({ show: false, message: '' });
  const timeoutRef = useRef(null);
  
  // Language system
  const { locale } = useLanguage();
  const [text, setText] = useState(getDeviceManagerText("en"));

  // Update text when locale changes
  useEffect(() => {
    const newText = getDeviceManagerText(locale);
    if (newText) {
      setText(newText);
    }
  }, [locale]);
  
  useEffect(() => {     
    const handleToast = (event) => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      setToast({ show: true, message: event.detail.message });              
      
      // Set new timeout and store the reference
      timeoutRef.current = setTimeout(() => {         
        setToast({ show: false, message: '' });       
      }, 3000);     
    };          
    
    window.addEventListener('showToast', handleToast);          
    
    return () => {       
      window.removeEventListener('showToast', handleToast);
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }     
    };   
  }, []);

  const handleBack = () => {
    disconnect(); 
    onBack(); 
  };

  // Check if lid is disconnected
  const isLidDisconnected = deviceData.lidStatus === "disconnected";
  
  return (
    <div className="h-full md:min-h-[calc(100vh)] bg-gray-900 text-white shadow-2xl overflow-hidden flex flex-col relative">

      {/* Blocking overlay when lid is disconnected */}
      {isLidDisconnected && (
        <div className="fixed top-[76px] inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4">
          <div className="bg-red-600 border-2 border-red-400 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center animate-pulse">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{text.lidWarning.title}</h2>
            <p className="text-red-100 text-lg mb-6 leading-relaxed">
              {text.lidWarning.message}
            </p>
            <div className="bg-red-700 rounded-lg p-4 mb-4">
              <p className="text-red-100 text-sm font-medium">
                {text.lidWarning.safetyNote}
              </p>
            </div>
            <div className="flex items-center justify-center text-red-200 text-sm">
              {text.lidWarning.waiting}
            </div>
          </div>
        </div>
      )}

      {/* Success toast */}
      {toast.show && (
        <div className="fixed inset-x-0 top-16 mx-auto z-50 flex justify-center animate-fade-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium text-lg">{toast.message}</p>
          </div>
        </div>
      )}

      {/* Include the connection manager component */}
      <DeviceManagerConnection deviceId={deviceId} />
      
      {/* Header with logo */}
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleBack}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 hidden sm:inline">{text.backButton}</span>
          </button>
          <img src="/logo.png" alt="Mistify Logo" className="h-8" />
          <h1 className="text-xl font-bold hidden sm:inline">{text.title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <div className={`w-2 h-2 rounded-full mr-2 ${deviceData.isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></div>
            <span>{deviceData.isConnected ? text.connected : text.disconnected}</span>
          </div>
          <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs"><span className='hidden sm:inline'>{text.deviceIdLabel} </span>{deviceId || 'MH-2023X'}</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="p-2 px-4 md:px-[15vw] flex-grow flex flex-col space-y-3 bg-gray-900">
        {/* Power Control Section */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PowerControl />
            <EnvironmentDisplay />
          </div>
        </section>

        {/* Environment Info Section */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ControlModeSelector />
            {deviceData.controlMode === 'manual' ? (
              <>
                <TimerControl />
              </>
            ) : (
              <div className="sm:col-span-1">
                <TargetHumidityControl />
              </div>
            )}
          </div>
        </section>

        {/* Color Control Section */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ModeSelector />
            <BrightnessSelector />
            <ColorSelector />
            <ModeEffectPreview />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeviceManager;