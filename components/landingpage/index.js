// /data/index.js
import landingPageText_en from "./landingPageText_en";
import landingPageText_lv from "./landingPageText_lv";

const texts = {
  en: landingPageText_en,
  lv: landingPageText_lv,
};

export function getLandingPageText(locale = "en") {
  console.log('Requesting locale:', locale);
  console.log('Available texts:', Object.keys(texts));
  console.log('Selected text:', texts[locale]);
  
  // Ensure we always return valid data, defaulting to English
  const selectedText = texts[locale] || texts.en;
  
  // Extra safety check - ensure the object has the expected structure
  if (!selectedText || !selectedText.headline) {
    console.error(`Invalid text structure for locale: ${locale}`, selectedText);
    return texts.en; // Fallback to English
  }
  
  return selectedText;
}