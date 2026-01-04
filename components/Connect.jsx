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

  useEffect(() => {
    const savedDevices = localStorage.getItem('savedDevices');
    if (savedDevices) {
      setDevices(JSON.parse(savedDevices));
    }
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
        const newDevice = { 
          id: newDeviceId, 
          name: ''
        };
        
        const updatedDevices = [...devices, newDevice];
        setDevices(updatedDevices);
        
        // Save to localStorage
        localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
        
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
      <div className="p-12 bg-gray-200 mt-[110px] h-[calc(100vh-110px)] relative text-gray-900">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{text.pageTitle}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setShowGuide(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaQuestionCircle /> {text.viewGuideButton}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
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

        {showModal && (
          <div className="fixed inset-0 bg-[rgba(0, 0, 0, 0.7)] z-10" onClick={() => setShowModal(false)} />
        )}

        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center z-20 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-white p-8 rounded-xl shadow-xl w-96 max-w-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{text.modalTitle}</h3>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <input
                type="text"
                value={newDeviceId}
                onChange={(e) => setNewDeviceId(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={text.modalPlaceholder}
              />
              <div className="flex justify-end gap-4">
                <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-300 rounded-lg">{text.modalCancel}</button>
                <button onClick={addDevice} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out" disabled={loading}>{loading ? text.modalAdding : text.modalAdd}</button>
              </div>
            </div>
          </div>
        )}

        {showConfirmRemove && (
          <div className="fixed inset-0 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-white p-6 rounded-xl shadow-xl w-80">
              <h3 className="text-lg font-semibold mb-4">{text.confirmTitle}</h3>
              <p className="mb-4">{text.confirmMessage} <strong>{deviceToRemove}</strong>?</p>
              <div className="flex justify-end gap-4">
                <button onClick={() => setShowConfirmRemove(false)} className="px-6 py-2 bg-gray-300 rounded-lg">{text.confirmCancel}</button>
                <button onClick={removeDevice} className="px-6 py-2 bg-red-500 text-white rounded-lg">{text.confirmRemove}</button>
              </div>
            </div>
          </div>
        )}

        {devices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {devices.map((device) => (
              <div
                key={device.id}
                className="p-8 bg-white rounded-lg shadow-md flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer relative"
                onClick={() => selectDevice(device.id)}
                style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease" 
                }}
              >
                {editingDeviceId === device.id ? (
                  <div className="w-full mb-4" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                      placeholder="Device name"
                      autoFocus
                    />
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => cancelEditing()} 
                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        <FaTimes className="text-gray-600" />
                      </button>
                      <button 
                        onClick={() => saveDeviceName(device.id)} 
                        className="p-1 bg-green-500 rounded hover:bg-green-600"
                      >
                        <FaSave className="text-white" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center w-full mb-4">
                    <div className="flex items-center">
                      {device.name ? (
                        <>
                          <h3 className="text-xl font-semibold mr-2">{device.name}</h3>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditing(device.id, device.name);
                            }} 
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FaPencilAlt />
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditing(device.id, '');
                          }} 
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 text-sm"
                        >
                          {text.addNameButton}
                        </button>
                      )}
                    </div>
                  </div>
                )}
                <div className="text-sm text-gray-500 mb-4">{text.deviceIdLabel} {device.id}</div> 
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    confirmRemoveDevice(device.id);
                  }} 
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 rounded-lg">
            <p className="text-xl text-gray-600 mb-4">{text.emptyTitle}</p>
            <p className="text-gray-500">{text.emptySubtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;