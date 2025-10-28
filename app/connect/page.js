"use client";
import { useState, useEffect } from "react";
import Connect from "@/components/Connect";
import DeviceManager from "@/components/DeviceManager";
import { DeviceProvider } from '@/components/context/DeviceContext';

export default function Home() {
  const [activeDevice, setActiveDevice] = useState(null);
  const [deviceStatuses, setDeviceStatuses] = useState({});
  const [checkDeviceStatus, setCheckDeviceStatus] = useState(null);
  
  useEffect(() => {
    if (!activeDevice && checkDeviceStatus) {
      checkDeviceStatus();
    } 
  }, [activeDevice]);
  
  const updateDeviceStatuses = (newStatuses) => {
    setDeviceStatuses(newStatuses);
  };
  
  const handleBackToConnect = () => {
    setActiveDevice(null);
  };
  
  return (
    <DeviceProvider>
      <div className={activeDevice ? "hidden" : ""}>
        <Connect 
          setActiveDevice={setActiveDevice} 
          deviceStatuses={deviceStatuses}
          updateDeviceStatuses={updateDeviceStatuses}
          refreshOnReturn={activeDevice !== null}
          setCheckDeviceStatusFunction={setCheckDeviceStatus}
        />
    </div>
      <div className={activeDevice ? "" : "hidden"}>
        <DeviceManager 
          deviceId={activeDevice}
          onBack={handleBackToConnect}
        />
      </div>
    </DeviceProvider>
  );
}