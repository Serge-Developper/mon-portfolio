"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState<string>("");
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  // Fermer menu + mettre à jour hash si clic sur ancre
  function handleAnchorClick(anchor: string) {
    setHash(anchor);
    setIsOpen(false);
  }

  // Fermer menu simplement
  function handleClose() {
    setIsOpen(false);
  }

  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Bouton Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 flex flex-col justify-center items-center p-2 rounded bg-[#282c33]/80 shadow-md backdrop-blur lg:hidden md:hidden"
        aria-label="Menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white mb-1.5"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-white mb-1.5"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white"
        />
      </button>

      {/* Overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#282c33] z-40 pt-20 px-8 lg:hidden md:hidden"
          >
            <nav className="flex flex-col gap-8 text-2xl">
              <Link
                href="/#home"
                onClick={() => handleAnchorClick("#home")}
                className={`py-2 transition-colors ${
                  pathname === "/" && (hash === "" || hash === "#home")
                    ? "text-[#c778dd]"
                    : "text-[#ABB2BF] hover:text-white"
                }`}
              >
                #accueil
              </Link>
              <Link
                href="/projets"
                onClick={handleClose}
                className={`py-2 transition-colors ${
                  pathname === "/projets"
                    ? "text-[#c778dd]"
                    : "text-[#ABB2BF] hover:text-white"
                }`}
              >
                #projets
              </Link>
              <Link
                href="/a-propos-de-moi"
                onClick={handleClose}
                className={`py-2 transition-colors ${
                  pathname === "/a-propos-de-moi"
                    ? "text-[#c778dd]"
                    : "text-[#ABB2BF] hover:text-white"
                }`}
              >
                #a-propos-de-moi
              </Link>
              <Link
                href="/#contacts"
                onClick={() => handleAnchorClick("#contacts")}
                className={`py-2 transition-colors ${
                  pathname === "/" && hash === "#contacts"
                    ? "text-[#c778dd]"
                    : "text-[#ABB2BF] hover:text-white"
                }`}
              >
                #contacts
              </Link>
            </nav>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  let newPath = pathname;
                  if (currentLocale === 'en') {
                    newPath = pathname.replace(/^\/en/, '/fr');
                    if (!newPath.startsWith('/fr')) newPath = '/fr' + (pathname.startsWith('/') ? pathname : '/' + pathname);
                  } else {
                    newPath = pathname.replace(/^\/fr/, '/en');
                    if (!newPath.startsWith('/en')) newPath = '/en' + (pathname.startsWith('/') ? pathname : '/' + pathname);
                  }
                  router.push(newPath);
                  setIsOpen(false);
                }}
                className="border border-[#c778dd] text-white px-4 py-2 rounded hover:bg-[#c778dd]/10 transition-colors"
              >
                {currentLocale === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
