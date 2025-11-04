'use client'
import LandingPage from "@/components/landingpage/LandingPage";
import { LanguageProvider } from '@/components/context/LanguageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <div>
          <LandingPage/>
        </div>
      </div>
    </LanguageProvider>
  );
}
