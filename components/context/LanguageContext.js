// /contexts/LanguageContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Check localStorage first
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('lv') ? 'lv' : 'en';
      setLocale(browserLang);
    }
  }, []);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}