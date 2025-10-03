"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function NavMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState<string>("");
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';
  const [openLang, setOpenLang] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const labels = currentLocale === 'en'
    ? {
        home: '#home',
        projects: '#projects',
        about: '#about-me',
        contacts: '#contacts',
      }
    : {
        home: '#accueil',
        projects: '#projets',
        about: '#a-propos-de-moi',
        contacts: '#contacts',
      };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setOpenLang(false);
      }
    }
    if (openLang) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openLang]);

  if (!mounted) return null;

  // Fonction pour gérer clic sur un lien ancre
  function handleAnchorClick(anchor: string) {
    setHash(anchor);
  }

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
    setOpenLang(false);
  }

  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link
        href="/#home"
        onClick={() => handleAnchorClick("#home")}
        className={`transition-colors ${
          pathname === "/" && (hash === "" || hash === "#home")
            ? "text-[#c778dd]"
            : "text-[#ABB2BF] hover:text-white"
        }`}
      >
        {labels.home}
      </Link>
      <Link
        href={currentLocale === 'en' ? "/en/projets" : "/projets"}
        className={`transition-colors ${
          pathname === "/projets" || pathname === "/en/projets"
            ? "text-[#c778dd]"
            : "text-[#ABB2BF] hover:text-white"
        }`}
      >
        {labels.projects}
      </Link>
      <Link
        href={currentLocale === 'en' ? "/en/a-propos-de-moi" : "/a-propos-de-moi"}
        className={`transition-colors ${
          pathname === "/a-propos-de-moi" || pathname === "/en/a-propos-de-moi"
            ? "text-[#c778dd]"
            : "text-[#ABB2BF] hover:text-white"
        }`}
      >
        {labels.about}
      </Link>
      <Link
        href="/#contacts"
        onClick={() => handleAnchorClick("#contacts")}
        className={`transition-colors ${
          pathname === "/" && hash === "#contacts"
            ? "text-[#c778dd]"
            : "text-[#ABB2BF] hover:text-white"
        }`}
      >
        {labels.contacts}
      </Link>
      <div className="flex items-center gap-1 relative" ref={langMenuRef}>
        <button type="button" className="flex items-center gap-1 text-[#ABB2BF] hover:text-white focus:outline-none" aria-haspopup="listbox" onClick={() => setOpenLang(v => !v)}>
          <span>{currentLocale === 'en' ? 'EN' : 'FR'}</span>
          <span>▼</span>
        </button>
        {openLang && (
          <div className="absolute top-full right-0 mt-2 bg-[#282c33] border border-[#abb2bf] rounded shadow-lg z-10 min-w-[80px]">
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
        )}
      </div>
    </nav>
  );
}
