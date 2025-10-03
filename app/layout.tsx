import type React from "react";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import type { Metadata } from "next";
import BurgerMenu from "@/components/BurgerMenu";
import NavMenu from "@/components/NavMenu";
import Image from "next/image";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Serge - Développeur fullstack",
  description:
    "Portfolio website for Elias, a web designer and front-end developer",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
        {/* Header commun à toutes les pages */}
        <header className="py-5 px-8 flex justify-between items-center border-b border-[#ABB2BF]/30">
          <div className="flex items-center gap-2">
            <a href="/" className="text-white font-semibold flex items-center">
              <Image src="/images/logo_serge.svg" alt="Logo Serge" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>

          {/* Burger menu pour mobile */}
          <BurgerMenu />

          {/* Menu desktop dynamique */}
          <NavMenu />
        </header>

        {/* Contenu de la page */}
        <main>{children}</main>

        {/* Footer commun si besoin */}
      </body>
    </html>
  );
}
