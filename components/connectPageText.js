// Connect Page Text Translations

const connectPageText = {
  en: {
    pageTitle: "Device Connection",
    addDeviceButton: "Add Device",
    viewGuideButton: "View Guide",
    
    // Add Device Modal
    modalTitle: "Add New Device",
    modalPlaceholder: "Enter Device ID",
    modalCancel: "Cancel",
    modalAdd: "Add Device",
    modalAdding: "Adding...",
    
    // Error Messages
    errorEmpty: "Device ID cannot be empty.",
    errorExists: "This device has already been added.",
    errorInvalid: "Device ID does not exist or is invalid.",
    errorFetch: "There was an error checking the device ID. Please try again later.",
    
    // Confirm Remove Modal
    confirmTitle: "Confirm Removal",
    confirmMessage: "Are you sure you want to remove the device with ID:",
    confirmCancel: "Cancel",
    confirmRemove: "Remove",
    
    // Device Card
    addNameButton: "+ Add Device Name",
    deviceIdLabel: "ID:",
    
    // Empty State
    emptyTitle: "No devices connected",
    emptySubtitle: "Click the \"Add Device\" button above to connect a device",
  },
  
  lv: {
    pageTitle: "Ierīces Savienojums",
    addDeviceButton: "Pievienot Ierīci",
    viewGuideButton: "Skatīt Ceļvedi",
    
    // Add Device Modal
    modalTitle: "Pievienot Jaunu Ierīci",
    modalPlaceholder: "Ievadiet Ierīces ID",
    modalCancel: "Atcelt",
    modalAdd: "Pievienot Ierīci",
    modalAdding: "Pievieno...",
    
    // Error Messages
    errorEmpty: "Ierīces ID nevar būt tukšs.",
    errorExists: "Šī ierīce jau ir pievienota.",
    errorInvalid: "Ierīces ID neeksistē vai nav derīgs.",
    errorFetch: "Radās kļūda, pārbaudot ierīces ID. Lūdzu, mēģiniet vēlreiz vēlāk.",
    
    // Confirm Remove Modal
    confirmTitle: "Apstiprināt Noņemšanu",
    confirmMessage: "Vai tiešām vēlaties noņemt ierīci ar ID:",
    confirmCancel: "Atcelt",
    confirmRemove: "Noņemt",
    
    // Device Card
    addNameButton: "+ Pievienot Ierīces Nosaukumu",
    deviceIdLabel: "ID:",
    
    // Empty State
    emptyTitle: "Nav pievienotu ierīču",
    emptySubtitle: "Noklikšķiniet uz pogas \"Pievienot Ierīci\", lai pievienotu ierīci",
  }
};

export const getConnectPageText = (locale) => {
  return connectPageText[locale] || connectPageText.en;
};