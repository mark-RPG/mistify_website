// DeviceManager Page Text Translations

const deviceManagerText = {
  en: {
    // Header
    backButton: "Back",
    title: "Mistify Humidifier",
    connected: "Connected",
    disconnected: "Disconnected",
    deviceIdLabel: "Device ID:",
    
    // Lid Disconnected Warning
    lidWarning: {
      title: "TOP DISCONNECTED",
      message: "The humidifier top has been disconnected. Please securely reconnect the top before continuing operation.",
      safetyNote: "Device controls are disabled for safety",
      waiting: "Waiting for top connection..."
    },
    
    // Toast messages (can be used by child components too)
    toastMessages: {
      success: "Success",
      error: "Error",
      updated: "Settings updated successfully"
    }
  },
  
  lv: {
    // Header
    backButton: "Atpakaļ",
    title: "Mistify Mitrinātājs",
    connected: "Savienots",
    disconnected: "Atvienots",
    deviceIdLabel: "Ierīces ID:",
    
    // Lid Disconnected Warning
    lidWarning: {
      title: "AUGŠDAĻA ATVIENOTA",
      message: "Mitrinātāja augšdaļa ir atvienota. Lūdzu, droši pievienojiet augšdaļu, pirms turpināt darbību.",
      safetyNote: "Ierīces vadīklas ir atspējotas drošības nolūkos",
      waiting: "Gaida augšdaļas savienojumu..."
    },
    
    // Toast messages (can be used by child components too)
    toastMessages: {
      success: "Veiksmīgi",
      error: "Kļūda",
      updated: "Iestatījumi veiksmīgi atjaunināti"
    }
  }
};

export const getDeviceManagerText = (locale) => {
  return deviceManagerText[locale] || deviceManagerText.en;
};