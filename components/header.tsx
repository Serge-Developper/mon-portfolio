'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo ou titre */}
        <div className="text-xl font-bold">
          <Link href="/">MonSite</Link>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">Accueil</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/about-me">À propos</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>

        {/* Burger button mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-6 bg-white rounded transform transition duration-300 ease-in-out
              ${open ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'}`}
          />
          <span
            className={`block h-1 w-6 bg-white rounded my-1 transition duration-300 ease-in-out
              ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-1 w-6 bg-white rounded transform transition duration-300 ease-in-out
              ${open ? '-rotate-45 -translate-y-2.5' : 'translate-y-1.5'}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden bg-gray-800 text-white flex flex-col items-center space-y-6 py-6 transition-all duration-300 ease-in-out overflow-hidden
        ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link href="/projets" onClick={() => setOpen(false)}>Projets</Link>
        <Link href="/about-me" onClick={() => setOpen(false)}>À propos</Link>
        <Link href="/contacts" onClick={() => setOpen(false)}>Contacts</Link>
      </nav>
    </header>
  );
}
