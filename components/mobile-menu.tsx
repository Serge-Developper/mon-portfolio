"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

interface MobileMenuProps {
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';

  function handleLocaleChange(locale: string) {
    let newPath = pathname;
    if (locale === 'en') {
      newPath = pathname.replace(/^\/fr/, '/en');
      if (!newPath.startsWith('/en')) newPath = '/en' + (pathname.startsWith('/') ? pathname : '/' + pathname);
    } else {
      newPath = pathname.replace(/^\/en/, '/fr');
      if (!newPath.startsWith('/fr')) newPath = '/fr' + (pathname.startsWith('/') ? pathname : '/' + pathname);
    }
    router.push(newPath);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div className="fixed inset-0 bg-black bg-opacity-50 mobile-menu-overlay" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-[#282c33] shadow-lg mobile-menu flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#abb2bf]">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">⚡ Elias</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#c778dd] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-8 gap-8 text-xl">
          <Link
            href="#home"
            onClick={onClose}
            className="text-white hover:text-[#c778dd] transition-colors border-b border-[#abb2bf] pb-2"
          >
            #home
          </Link>
          <Link
            href="#works"
            onClick={onClose}
            className="hover:text-white transition-colors border-b border-[#abb2bf] pb-2"
          >
            #works
          </Link>
          <Link
            href="#about-me"
            onClick={onClose}
            className="hover:text-white transition-colors border-b border-[#abb2bf] pb-2"
          >
            #about-me
          </Link>
          <Link
            href="#contacts"
            onClick={onClose}
            className="hover:text-white transition-colors border-b border-[#abb2bf] pb-2"
          >
            #contacts
          </Link>
          <div className="flex items-center gap-1 mt-4 relative">
            <button className="flex items-center gap-1 text-white hover:text-[#c778dd] focus:outline-none" aria-haspopup="listbox">
              <span>{currentLocale === 'en' ? 'EN' : 'FR'}</span>
              <span>▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 bg-[#282c33] border border-[#abb2bf] rounded shadow-lg z-10 min-w-[80px]">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-[#c778dd]/10 text-white"
                onClick={() => handleLocaleChange('fr')}
                disabled={currentLocale === 'fr'}
              >
                Français
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-[#c778dd]/10 text-white"
                onClick={() => handleLocaleChange('en')}
                disabled={currentLocale === 'en'}
              >
                English
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
