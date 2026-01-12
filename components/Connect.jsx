"use client";
import React, { useState, useEffect } from 'react';
import Nav from "@/components/Navigation/Nav";
import { FaPlus, FaTrash, FaPencilAlt, FaSave, FaTimes, FaQuestionCircle } from 'react-icons/fa';
import { getConnectPageText } from '@/components/connectPageText';
import { useLanguage } from '@/components/context/LanguageContext';
import GuidePopup from '@/components/GuidePopup';

const Connect = ({ setActiveDevice, refreshOnReturn }) => {
  const [devices, setDevices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDeviceId, setNewDeviceId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirmRemove, setShowConfirmRemove] = useState(false);
  const [deviceToRemove, setDeviceToRemove] = useState(null);
  const [editingDeviceId, setEditingDeviceId] = useState(null);
  const [editName, setEditName] = useState('');
  const [showGuide, setShowGuide] = useState(false);
  const [showClickAnimation, setShowClickAnimation] = useState(false);

  // Language system
  const { locale } = useLanguage();
  const [text, setText] = useState(getConnectPageText("en"));

  // Update text when locale changes
  useEffect(() => {
    const newText = getConnectPageText(locale);
    if (newText) {
      setText(newText);
    }
  }, [locale]);

  // Function to fetch device name from API
  const fetchDeviceName = async (deviceId) => {
    try {
      const response = await fetch(`https://simple-api.mistify.lv/api/device/get-name?id=${deviceId}`);
      if (response.ok) {
        const name = await response.text();
        return name || '';
      }
    } catch (err) {
      console.error('Error fetching device name:', err);
    }
    return '';
  };

  useEffect(() => {
    const loadDevices = async () => {
      const savedDevices = localStorage.getItem('savedDevices');
      if (savedDevices) {
        const parsedDevices = JSON.parse(savedDevices);
        
        // Fetch names for all devices
        const devicesWithNames = await Promise.all(
          parsedDevices.map(async (device) => {
            // Only fetch if name is empty
            if (!device.name) {
              const fetchedName = await fetchDeviceName(device.id);
              return { ...device, name: fetchedName };
            }
            return device;
          })
        );
        
        setDevices(devicesWithNames);
        // Update localStorage with fetched names
        localStorage.setItem('savedDevices', JSON.stringify(devicesWithNames));
      }
    };
    
    loadDevices();
  }, []);

  useEffect(() => {
    if (devices.length > 0) {
      localStorage.setItem('savedDevices', JSON.stringify(devices));
    }
  }, [devices]);

  const selectDevice = (id) => {
    // Don't select device if we're in editing mode
    if (editingDeviceId) return;
    
    setActiveDevice(id);
  };

  const addDevice = async () => {
    if (!newDeviceId) {
      setError(text.errorEmpty);
      return;
    }

    // Check if device already exists in the array
    if (devices.some(device => device.id === newDeviceId)) {
      setError(text.errorExists);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://simple-api.mistify.lv/api/device/exist?id=${newDeviceId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText} (${response.status})`);
      }
      const data = await response.text();

      if (data === 'true') {
        // Fetch the device name from API
        const deviceName = await fetchDeviceName(newDeviceId);
        
        const newDevice = { 
          id: newDeviceId, 
          name: deviceName
        };
        
        const updatedDevices = [...devices, newDevice];
        setDevices(updatedDevices);
        
        // Save to localStorage
        localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
        
        // Show click animation if this is the first device
        if (devices.length === 0) {
          setShowClickAnimation(true);
          // Hide animation after 6 seconds
          setTimeout(() => {
            setShowClickAnimation(false);
          }, 6000);
        }
        
        setNewDeviceId('');
        setShowModal(false);
      } else {
        setError(text.errorInvalid);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(text.errorFetch);
    } finally {
      setLoading(false);
    }
  };

  const confirmRemoveDevice = (id) => {
    setDeviceToRemove(id);
    setShowConfirmRemove(true);
  };

  const removeDevice = () => {
    const updatedDevices = devices.filter(device => device.id !== deviceToRemove);
    setDevices(updatedDevices);
    
    // Save updated devices list to localStorage
    localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
    
    setShowConfirmRemove(false);
    setDeviceToRemove(null);
  };

  const startEditing = (id, currentName) => {
    setEditingDeviceId(id);
    setEditName(currentName || '');
  };

  const cancelEditing = () => {
    setEditingDeviceId(null);
    setEditName('');
  };

  const saveDeviceName = (id) => {
    const updatedDevices = devices.map(device => 
      device.id === id ? { ...device, name: editName } : device
    );
    
    setDevices(updatedDevices);
    
    // Save updated devices with new name to localStorage
    localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
    
    setEditingDeviceId(null);
  };

  return (
    <div>
      <Nav />
      <div className="p-4 sm:p-8 md:p-12 bg-gray-200 mt-[110px] min-h-[calc(100vh-110px)] relative text-gray-900">
        {/* Header Section - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{text.pageTitle}</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowGuide(true)}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
            >
              <FaQuestionCircle /> {text.viewGuideButton}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-sm sm:text-base"
            >
              <FaPlus /> {text.addDeviceButton}
            </button>
          </div>
        </div>

        {/* Guide Popup */}
        <GuidePopup 
          isOpen={showGuide} 
          onClose={() => setShowGuide(false)}
        />

        {/* Modal Backdrop */}
        {showModal && (
          <div className="fixed inset-0 bg-[rgba(0, 0, 0, 0.7)] z-10" onClick={() => setShowModal(false)} />
        )}

        {/* Add Device Modal - Mobile Responsive */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center z-20 bg-[rgba(0,0,0,0.7)] p-4">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md sm:max-w-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">{text.modalTitle}</h3>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <input
                type="text"
                value={newDeviceId}
                onChange={(e) => setNewDeviceId(e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder={text.modalPlaceholder}
              />
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                <button 
                  onClick={() => setShowModal(false)} 
                  className="w-full sm:w-auto px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  {text.modalCancel}
                </button>
                <button 
                  onClick={addDevice} 
                  className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out disabled:opacity-50" 
                  disabled={loading}
                >
                  {loading ? text.modalAdding : text.modalAdd}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirm Remove Modal - Mobile Responsive */}
        {showConfirmRemove && (
          <div className="fixed inset-0 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.7)] p-4">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">{text.confirmTitle}</h3>
              <p className="mb-4 text-sm sm:text-base">{text.confirmMessage} <strong className="break-all">{deviceToRemove}</strong>?</p>
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                <button 
                  onClick={() => setShowConfirmRemove(false)} 
                  className="w-full sm:w-auto px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  {text.confirmCancel}
                </button>
                <button 
                  onClick={removeDevice} 
                  className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                >
                  {text.confirmRemove}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Device Grid - Mobile Responsive with LARGER cards */}
        {devices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {devices.map((device) => (
              <div
                key={device.id}
                className="p-8 sm:p-10 md:p-12 bg-white rounded-xl shadow-lg flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:cursor-pointer relative min-h-[200px] sm:min-h-[220px]"
                onClick={() => selectDevice(device.id)}
                style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease" 
                }}
              >
                {/* Click animation overlay for first device */}
                {showClickAnimation && devices.length === 1 && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                    {/* Pulsing hand pointer cursor - offset to bottom right */}
                    <div className="relative" style={{ transform: 'translate(10vw, 50px)' }}>
                      {/* Hand pointer cursor image */}
                      <img 
                        src="/pointercursor.png" 
                        alt="Click here"
                        width="48" 
                        height="48"
                        className="animate-pulse-click"
                      />
                      {/* Click ripple effect - positioned 20px higher and 5px left, starts 0.2s earlier */}
                      <div className="absolute top-1/2 left-1/2" style={{ transform: 'translate(calc(-50% - 3px), calc(-50% - 20px))' }}>
                        <div className="animate-click-ripple w-16 h-16 rounded-full border-4 border-blue-500"></div>
                      </div>
                    </div>
                  </div>
                )}

                {editingDeviceId === device.id ? (
                  <div className="w-full mb-6" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-base sm:text-lg"
                      placeholder="Device name"
                      autoFocus
                    />
                    <div className="flex justify-end gap-3">
                      <button 
                        onClick={() => cancelEditing()} 
                        className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                      >
                        <FaTimes className="text-gray-600 text-lg" />
                      </button>
                      <button 
                        onClick={() => saveDeviceName(device.id)} 
                        className="p-3 bg-green-500 rounded-lg hover:bg-green-600 transition duration-200"
                      >
                        <FaSave className="text-white text-lg" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center w-full mb-6">
                    <div className="flex items-center flex-1 min-w-0 mr-3">
                      {device.name ? (
                        <>
                          <h3 className="text-xl sm:text-xl md:text-2xl font-bold mr-3 truncate text-gray-800">{device.name}</h3>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditing(device.id, device.name);
                            }} 
                            className="text-blue-500 hover:text-blue-700 flex-shrink-0"
                          >
                            <FaPencilAlt className="text-lg sm:text-xl" />
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditing(device.id, '');
                          }} 
                          className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm sm:text-base font-medium whitespace-nowrap"
                        >
                          {text.addNameButton}
                        </button>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 break-all w-full pr-10 font-medium">
                  {text.deviceIdLabel} {device.id}
                </div> 
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    confirmRemoveDevice(device.id);
                  }} 
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors duration-200 p-2"
                >
                  <FaTrash className="text-lg sm:text-xl" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 rounded-lg px-4">
            <p className="text-lg sm:text-xl text-gray-600 mb-4 text-center">{text.emptyTitle}</p>
            <p className="text-sm sm:text-base text-gray-500 text-center">{text.emptySubtitle}</p>
          </div>
        )}
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse-click {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes click-ripple {
          0% {
            transform: scale(0.1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .animate-pulse-click {
          animation: pulse-click 1.5s ease-in-out infinite;
        }
        
        .animate-click-ripple {
          animation: click-ripple 1.5s ease-out infinite;
          animation-delay: -0.2s;
        }
      `}</style>
    </div>
  );
};

export default Connect;