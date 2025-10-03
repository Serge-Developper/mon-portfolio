"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
      {/* SUPPRIMÉ: Proust Questionnaire Section */}

      {/* Footer */}
      <footer className="border-t border-[#abb2bf] py-8 mt-16">
        <div className="px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo_serge.svg" alt="Logo Serge" width={28} height={28} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <p className="text-sm">FullStack developer</p>
            </div>
            <div>
              <h3 className="text-white mb-4">Media</h3>
              <div className="flex gap-4">
                <Link href="https://github.com/Serge-Developper" aria-label="GitHub">
                  <Github className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/serge-tovmassian/" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-sm">© Copyright 2025. made by Serge</p>
        </div>
      </footer>
      {/* Decorative dots */}
      <div className="fixed right-0 top-1/3 hidden lg:block">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(15)].map((_, i) => (
            <div key={`dot-right-${i}`} className="w-1 h-1 bg-[#abb2bf] rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="fixed left-0 bottom-1/3 hidden lg:block">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(15)].map((_, i) => (
            <div key={`dot-left-${i}`} className="w-1 h-1 bg-[#abb2bf] rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}