'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useLanguage } from '@/components/context/LanguageContext'
import { Globe } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, switchLanguage } = useLanguage()

  const toggleLanguage = () => {
    switchLanguage(locale === 'en' ? 'lv' : 'en')
  }

  return (
    <>
      <div className="fixed top-6 left-0 w-full px-4 sm:px-10 z-50 flex justify-between items-center">
        {/* Left side: Logo + Connect (Desktop) */}
        <div className="flex items-center gap-6 relative">
          {/* Smooth fading dark gradient behind logo */}
          <div className="absolute -left-10 -top-6 w-[320px] h-[90px] bg-gradient-to-r from-black/20 via-black/10 to-transparent rounded-3xl blur-3xl pointer-events-none hidden md:block"></div>

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 backdrop-blur-2xl bg-black/20 rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] hover:bg-black/25 transition-all duration-300 flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={52}
              height={52}
              className="hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Connect Button - Desktop Only */}
          <Link
            href="/connect"
            className="hidden md:block relative z-10 backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-3 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            Connect
          </Link>
        </div>

        {/* Right side: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="backdrop-blur-xl bg-white/20 text-black font-medium px-4 py-3 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-label="Switch language"
          >
            <Globe className="w-5 h-5" />
            <span className="uppercase font-semibold">{locale}</span>
          </button>

          <Link
            href="/contact"
            className="backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-3 rounded-2xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:bg-white/35 hover:shadow-[0_8px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>

          <Link
            href="/buy"
            className="backdrop-blur-2xl bg-white/40 text-black font-semibold px-7 py-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/50 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-110"
          >
            Buy Now
          </Link>
        </div>

        {/* Burger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 backdrop-blur-xl bg-white/25 text-black p-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/35 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-2xl bg-black/60"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-28 right-4 left-4 backdrop-blur-2xl bg-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4">
            {/* Language Switcher - Mobile */}
            <button
              onClick={() => {
                toggleLanguage()
                setIsOpen(false)
              }}
              className="backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-semibold">{locale === 'en' ? 'Switch to LV' : 'Switch to EN'}</span>
            </button>

            <Link
              href="/connect"
              onClick={() => setIsOpen(false)}
              className="backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 text-center"
            >
              Connect
            </Link>
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/35 transition-all duration-300 text-center"
            >
              Contact
            </Link>

            <Link
              href="/buy"
              onClick={() => setIsOpen(false)}
              className="backdrop-blur-2xl bg-white/40 text-black font-semibold px-6 py-4 rounded-2xl shadow-lg hover:bg-white/50 transition-all duration-300 text-center"
            >
              Buy Now
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav