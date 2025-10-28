'use client';
import { useDevice } from '@/components/context/DeviceContext';

export const ModeSelector = () => {
  const { deviceData, setDeviceData } = useDevice();

  // Available lighting modes
  const lightingModes = [
    "Color", "Fade", "Color Wave", "Rainbow", 
    "Glowing Gradient", "Soft Twinkle", "Warm Sunset", "Pulsating", "Off"
  ];

  const setLightingMode = (mode) => {
    setDeviceData(prev => ({...prev, mode}));
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 relative overflow-hidden flex-grow">
      <div className="flex justify-between items-center mb-3 z-10 relative">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-gray-300 text-base font-medium">Lighting Mode</h3>
        </div>
      </div>
      
      <div className="z-10 relative">
        <select
          value={deviceData.mode}
          onChange={(e) => setLightingMode(e.target.value)}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-3"
        >
          {lightingModes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>
        
        <div className="grid-cols-4 gap-2 mt-1 hidden sm:grid">
          <button 
            onClick={() => setLightingMode('Color')}
            className={`py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Color' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
            Solid Color
          </button>
          <button 
            onClick={() => setLightingMode('Warm Sunset')}
            className={`py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Warm Sunset' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
            Warm Sunset
          </button>
          <button 
            onClick={() => setLightingMode('Rainbow')}
            className={`py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Rainbow' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
            Rainbow
          </button>
          <button 
            onClick={() => setLightingMode('Off')}
            className={`py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Off' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
            Turn Off
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10"></div>
    </div>
  );
};