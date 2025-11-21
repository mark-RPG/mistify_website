"use client";

import { LanguageProvider } from "../components/context/LanguageContext";

export default function ClientProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
