// Guide Popup Text Translations

const guideText = {
  en: {
    // Header
    title: "Device Connection Guide",
    closeButton: "Close",
    
    // Introduction
    introduction: "Welcome to the device connection guide. Follow these simple steps to connect your Mistify device and start monitoring it remotely through your dashboard.",
    
    // Step 1
    step1Number: "1",
    step1Title: "Power Up Your Device",
    step1Description: "Connect your Mistify device to a power outlet and wait for it to power on. The device will automatically create its own WiFi network for initial setup.",
    step1List: [
      "Plug the device into a standard power outlet",
      "Wait 10-15 seconds for the device to boot up",
      "Look for a steady or blinking LED indicator light"
    ],
    step1Note: "Note:",
    step1NoteText: "The device must be powered on to complete the setup process.",
    
    // Step 2
    step2Number: "2",
    step2Title: "Connect to Device WiFi",
    step2Description: "Using your smartphone or computer, connect to the temporary WiFi network created by your device:",
    step2List: [
      "Open WiFi settings on your phone or computer",
      "Look for a network named \"Mistify Connect\"",
      "Select and connect to this network",
      "No password is required for this connection"
    ],
    step2Note: "Tip:",
    step2NoteText: "This is a temporary connection only used for device setup. You will reconnect to your regular WiFi after configuration.",
    
    // Step 3
    step3Number: "3",
    step3Title: "Configure Device Settings",
    step3Description: "Once connected to the Mistify Connect network, configure your device's WiFi settings:",
    step3List: [
      "Open your web browser (Chrome, Safari, Firefox, etc.)",
      "Navigate to: 192.168.4.1",
      "Enter your home WiFi network name (SSID)",
      "Enter your home WiFi password",
      "Click \"Save\" to save settings"
    ],
    step3Note: "Important:",
    step3NoteText: "Make sure to enter your WiFi credentials correctly. The device needs a stable internet connection to function.",
    
    // Step 4
    step4Number: "4",
    step4Title: "Wait for Connection",
    step4Description: "After submitting your WiFi credentials, the device will attempt to connect to your home network:",
    step4List: [
      "The device will disconnect from the setup network",
      "Wait 15-30 seconds for the connection process",
      "Your phone/computer will automatically reconnect to your regular WiFi"
    ],
    step4Note: "Note:",
    step4NoteText: "If the connection fails, the device will restart the setup network. Simply repeat steps 2-3 with correct credentials.",
    
    // Step 5
    step5Number: "5",
    step5Title: "Add Device to Dashboard",
    step5Description: "Now that your device is online, add it to your dashboard:",
    step5List: [
      "Visit https://mistify.lv/connect",
      "Click the \"Add Device\" button in the top-right corner",
      "Enter your unique Device ID",
      "Click \"Add\" to verify and connect the device",
      "Your device will appear in the device list below"
    ],
    step5Note: "Tip:",
    step5NoteText: "You can add a custom name to your device by clicking the \"Add name\" button on the device card for easier identification.",
    
    // Troubleshooting
    troubleshootingTitle: "Troubleshooting",
    trouble1Title: "Can't find \"Mistify Connect\" WiFi network?",
    trouble1Text: "Ensure the device is powered on and wait at least 15 seconds. Try restarting the device by unplugging and plugging it back in.",
    trouble2Title: "Can't access 192.168.4.1?",
    trouble2Text: "Make sure you're connected to the \"Mistify Connect\" network. Some phones may show a \"No Internet\" warning - this is normal, stay connected.",
    trouble3Title: "Device won't connect to home WiFi?",
    trouble3Text: "Double-check your WiFi name and password are correct. Ensure your WiFi network is 2.4GHz compatible (most routers support this).",
    trouble5Title: "Device already exists error?",
    trouble5Text: "This device has already been added to your dashboard. Check your device list below.",
    
    // Support
    supportTitle: "Need More Help?",
    supportText: "If you're still experiencing issues connecting your device, please contact our support team for personalized assistance. We're here to help!",
    
    // Footer
    footerButton: "Got it, thanks!"
  },
  
  lv: {
    // Header
    title: "Ierīces Pievienošanas Ceļvedis",
    closeButton: "Aizvērt",
    
    // Introduction
    introduction: "Laipni lūdzam ierīces pievienošanas ceļvedī. Sekojiet šiem vienkāršajiem soļiem, lai pievienotu savu Mistify ierīci un sāktu to attālināti uzraudzīt caur savu vadības paneli.",
    
    // Step 1
    step1Number: "1",
    step1Title: "Pieslēdziet Ierīci Strāvai",
    step1Description: "Pievienojiet savu Mistify ierīci elektrības kontaktligzdai un uzgaidiet, līdz tā ieslēdzas. Ierīce automātiski izveidos savu WiFi tīklu sākotnējai iestatīšanai.",
    step1List: [
      "Iespraudiet ierīci standarta elektrības kontaktligzdā",
      "Uzgaidiet 10-15 sekundes, līdz ierīce ielādējas",
      "Meklējiet pastāvīgu vai mirgojošu LED indikatora gaismu"
    ],
    step1Note: "Piezīme:",
    step1NoteText: "Ierīcei jābūt ieslēgtai, lai pabeigtu iestatīšanas procesu.",
    
    // Step 2
    step2Number: "2",
    step2Title: "Savienojieties ar Ierīces WiFi",
    step2Description: "Izmantojot savu viedtālruni vai datoru, izveidojiet savienojumu ar pagaidu WiFi tīklu, ko izveidojusi jūsu ierīce:",
    step2List: [
      "Atveriet WiFi iestatījumus savā tālrunī vai datorā",
      "Meklējiet tīklu ar nosaukumu \"Mistify Connect\"",
      "Atlasiet un izveidojiet savienojumu ar šo tīklu",
      "Šim savienojumam nav nepieciešama parole"
    ],
    step2Note: "Padoms:",
    step2NoteText: "Šis ir pagaidu savienojums, ko izmanto tikai ierīces iestatīšanai. Pēc konfigurācijas jūs atkal pieslēgsieties savam parastajam WiFi.",
    
    // Step 3
    step3Number: "3",
    step3Title: "Konfigurējiet Ierīces Iestatījumus",
    step3Description: "Pēc savienojuma izveides ar Mistify Connect tīklu, konfigurējiet savas ierīces WiFi iestatījumus:",
    step3List: [
      "Atveriet savu tīmekļa pārlūkprogrammu (Chrome, Safari, Firefox, u.c.)",
      "Dodieties uz: 192.168.4.1",
      "Ievadiet savas mājas WiFi tīkla nosaukumu (SSID)",
      "Ievadiet savas mājas WiFi paroli",
      "Noklikšķiniet uz \"Saglabāt\", lai saglabātu iestatījumus"
    ],
    step3Note: "Svarīgi:",
    step3NoteText: "Pārliecinieties, ka pareizi ievadāt WiFi piekļuves datus. Ierīcei ir nepieciešams stabils interneta savienojums, lai tā darbotos.",
    
    // Step 4
    step4Number: "4",
    step4Title: "Uzgaidiet Savienojumu",
    step4Description: "Pēc WiFi piekļuves datu iesniegšanas, ierīce mēģinās izveidot savienojumu ar jūsu mājas tīklu:",
    step4List: [
      "Ierīce atvienosies no iestatīšanas tīkla",
      "Uzgaidiet 15-30 sekundes savienojuma izveidošanas procesam",
      "Jūsu tālrunis/dators automātiski atkal pieslēgsies jūsu parastajam WiFi"
    ],
    step4Note: "Piezīme:",
    step4NoteText: "Ja savienojums neizdodas, ierīce restartēs iestatīšanas tīklu. Vienkārši atkārtojiet 2.-3. soli ar pareiziem piekļuves datiem.",
    
    // Step 5
    step5Number: "5",
    step5Title: "Pievienojiet Ierīci Vadības Panelim",
    step5Description: "Tagad, kad jūsu ierīce ir tiešsaistē, pievienojiet to savam vadības panelim:",
    step5List: [
      "Apmeklējiet https://mistify.lv/connect",
      "Noklikšķiniet uz pogas \"Pievienot Ierīci\" augšējā labajā stūrī",
      "Ievadiet savu unikālo Ierīces ID",
      "Noklikšķiniet uz \"Pievienot\", lai verificētu un pievienotu ierīci",
      "Jūsu ierīce parādīsies ierīču sarakstā zemāk"
    ],
    step5Note: "Padoms:",
    step5NoteText: "Varat pievienot pielāgotu nosaukumu savai ierīcei, noklikšķinot uz pogas \"Pievienot nosaukumu\" uz ierīces kartītes ērtākai identificēšanai.",
    
    // Troubleshooting
    troubleshootingTitle: "Problēmu Novēršana",
    trouble1Title: "Nevarat atrast \"Mistify Connect\" WiFi tīklu?",
    trouble1Text: "Pārliecinieties, ka ierīce ir ieslēgta un uzgaidiet vismaz 15 sekundes. Mēģiniet restartēt ierīci, to atvienojot un atkal pievienojot.",
    trouble2Title: "Nevarat piekļūt 192.168.4.1?",
    trouble2Text: "Pārliecinieties, ka esat savienojies ar \"Mistify Connect\" tīklu. Daži tālruņi var parādīt brīdinājumu \"Nav interneta\" - tas ir normāli, palieciet savienojumā.",
    trouble3Title: "Ierīce neizveido savienojumu ar mājas WiFi?",
    trouble3Text: "Pārbaudiet, vai jūsu WiFi nosaukums un parole ir pareizi. Pārliecinieties, ka jūsu WiFi tīkls ir 2.4GHz saderīgs (lielākā daļa maršrutētāju to atbalsta).",
    trouble5Title: "Ierīce jau eksistē kļūda?",
    trouble5Text: "Šī ierīce jau ir pievienota jūsu vadības panelim. Pārbaudiet savu ierīču sarakstu zemāk.",
    
    // Support
    supportTitle: "Nepieciešama Vairāk Palīdzības?",
    supportText: "Ja jums joprojām ir problēmas ar ierīces pievienošanu, lūdzu, sazinieties ar mūsu atbalsta komandu personalizētai palīdzībai. Mēs esam šeit, lai palīdzētu!",
    
    // Footer
    footerButton: "Sapratu, paldies!"
  }
};

export const getGuideText = (locale) => {
  return guideText[locale] || guideText.en;
};