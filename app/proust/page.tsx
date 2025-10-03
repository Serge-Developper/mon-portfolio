"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"
import BurgerMenu from "@/components/BurgerMenu"

export default function AboutPage() {
  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">

      {/* Section Questionnaire de Proust */}
      <section className="px-8 py-16">
        <h2 className="text-2xl mb-8">
          <span className="text-[#c778dd]">#</span>mon-questionnaire-de-proust
        </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl">

          {[
            { q: "La qualité que je préfère chez les autres", a: "L'authenticité" },
            { q: "Mon principal trait de caractère", a: "La curiosité" },
            { q: "Ce que j'apprécie le plus chez mes amis", a: "Leur loyauté" },
            { q: "Mon rêve de bonheur", a: "Être un développeur web épanoui et créatif" },
            { q: "Ce que je voudrais être", a: "Un créateur inspirant et utile" },
            { q: "Mes occupations préférées", a: "Coder, créer des maquettes, monter des vidéos" },
            { q: "Mon héros ou héroïne dans la vie réelle", a: "Mes mentors et amis développeurs" },
            { q: "Le talent que je voudrais avoir", a: "Savoir improviser au piano" },
            { q: "Ma devise", a: "Créer, apprendre, partager" },
            { q: "Ma plus grande réussite", a: "Avoir appris le développement web en autodidacte" },
          ].map((item, index) => (
            <div key={index} className="border border-[#abb2bf] p-4 max-w-sm w-full">
              <h3 className="font-semibold text-white mb-2 text-sm md:text-base">{item.q}</h3>
              <p className="text-sm text-[#abb2bf]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#abb2bf] py-8 mt-16">
        <div className="px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo_serge.svg" alt="Logo Serge" width={28} height={28} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <p className="text-sm">FullStack développeur</p>
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
          <p className="text-center text-sm">© Copyright 2025. réalisé par Serge</p>
        </div>
      </footer>

      {/* Left side icons */}

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
  )
}
