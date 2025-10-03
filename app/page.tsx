"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import BurgerMenu from "@/components/BurgerMenu";
import { use } from "react";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const isEn = locale === "en";

  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
      {/* Hero Section */}
      <section
        id="home"
        className="py-16 px-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto"
      >
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-normal mb-4">
          Serge,{" "}
            <span className="text-[#c778dd]">développeur web fullstack</span>
            <br />
            <span className="text-[#c778dd]"></span>
          </h1>
          <p className="mb-8 text-[#abb2bf]">
            Je crée des sites web responsive où les technologies
            <br />
            rencontrent la créativité
          </p>
          <a
            href="mailto:tovmassian.serge@gmail.com"
            className="border border-[#c778dd] text-white px-4 py-2 hover:bg-[#c778dd]/10 transition-colors inline-block"
          >
            Contactez-moi !!
          </a>
        </div>
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="relative">
            <Image
              src="/images/phototergesite1.png"
              alt="Photo de Serge"
              width={400}
              height={400}
              className="z-10 relative"
            />
            <div style={{ height: '1px', background: '#c778dd', width: '100%', marginLeft: 0, marginRight: 'auto' }} />
            <div className="absolute top-10 left-10 z-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2036-zp2EAMihUsONA3xkjJMmzKeWKi2A1P.png"
                alt="Decorative element"
                width={150}
                height={150}
              />
            </div>
            <div className="absolute grid grid-cols-6 gap-2 right-0 bottom-0">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-[#c778dd] rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="border border-[#c778dd] p-2 mt-4 inline-flex items-center">
            <div className="w-3 h-3 bg-[#c778dd] mr-2"></div>
            <span>  Bienvenue sur mon </span>
            <span className="ml-2 font-medium text-white">Portfolio !</span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-8 flex justify-center max-w-6xl mx-auto">
        <div className="w-full max-w-3xl flex justify-center">
          <div className="relative px-6 py-4 text-white inline-flex items-center justify-center border border-[#c778dd] w-auto min-w-[250px] md:min-w-[300px] h-[90px] md:h-[100px] mx-auto">
            {/* Coin haut gauche */}
            <Image
              src="/quote.svg"
              width={50}
              height={50}
              alt="Citation début" // Texte alternatif ajouté
              className="absolute -top-5 left-3 bg-[#282c33] p-1"
            />

            {/* Coin bas droite */}
            <Image
              src="/quote.svg"
              width={50}
              height={50}
              alt="Citation fin" // Texte alternatif ajouté
              className="absolute -bottom-5 right-3 bg-[#282c33] p-1 rotate-180"
            />

            {/* Contenu centré avec texte responsive */}
            <div className="px-4 text-center">
              <span className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem]">
                Coder, tester, améliorer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="works" className="py-16 px-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium flex items-center gap-2">
            <span className="text-[#c778dd]">#</span>projets
          </h2>

          {/* "Voir tout" avec flèche */}
          <a
            href="/projets"
            className="text-white flex items-center gap-1 text-sm font-medium hover:text-[#c778dd]"
          >
            Voir tout <span>→</span>
          </a>
        </div>

        <div className="w-full h-px bg-[#c778dd] mb-8 opacity-30"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Project 1 - ChertNodes */}
          <div className="border border-[#abb2bf]">
            <div className="h-48 overflow-hidden relative bg-[#282c33]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-2R49GZn00bYOYPihyS2Ei1FphmVD05.svg"
                  alt="ChertNodes background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 relative z-10">
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2"></div>
                  <div className="flex items-center gap-2"></div>
                  <div className="flex items-center gap-2"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs mb-2">Figma</div>
              <h3 className="text-xl text-white mb-2">Maquette SOS Futur</h3>
              <p className="text-sm mb-4">Maquette Figma pour SOS Futur</p>
              <div className="flex gap-2">
                <a
                  href="https://www.figma.com/design/A3B5trPsYJnTpYR91mpJ55/SOS-FUTUR--Copy-?node-id=2003-525&t=zxbQcHVoSVKLZGq5-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors"
                >
                  Découvrir <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - ProtectX */}
          <div className="border border-[#abb2bf]">
            <div className="h-48 overflow-hidden relative bg-[#282c33]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/planifylogo.png"
                  alt="ProtectX background"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 relative z-10">
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2"></div>
                  <div className="flex items-center gap-2"></div>
                  <div className="flex items-center gap-2"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs mb-2">Vue.js Node.js Mongo DB</div>
              <h3 className="text-xl text-white mb-2">Planify</h3>
              <p className="text-sm mb-4">Projet étudiant site web</p>
              <div className="flex gap-2">
                <a
                  href="https://planifymmi.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors"
                >
                  Découvrir <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Kahoot Answers */}
          <div className="border border-[#abb2bf]">
            <div className="h-48 overflow-hidden relative flex items-center justify-center">
              <img
                src="/images/ziak.jpg"
                alt="ChertNodes background"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-4">
              <div className="text-xs mb-2">Davinci Resolve</div>
              <h3 className="text-xl text-white mb-2">Montage Vidéo</h3>
              <p className="text-sm mb-4">Vidéo sur l'évolution d'un rappeur</p>
              <div className="flex gap-2">
                <a
                  href="https://youtu.be/b8Hd2cMmyyw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors"
                >
                  Découvrir <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium mb-4">
          <span className="text-[#c778dd]">#</span>compétences
        </h2>
        <div className="w-full h-px bg-[#c778dd] mb-12 opacity-30"></div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side decorative elements */}
          <div className="md:w-1/3 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2036-zp2EAMihUsONA3xkjJMmzKeWKi2A1P.png"
              alt="Decorative element"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* Right side skills categories */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Languages */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Langages</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">HTML</p>
                <p className="text-sm">CSS</p>
                <p className="text-sm">Javascript</p>
              </div>
            </div>

            {/* Databases */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Bases de données</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">SQLite</p>
                <p className="text-sm">Mongo</p>
              </div>
            </div>

            {/* Tools */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Outils</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">Visual Studio Code</p>
                <p className="text-sm">Figma</p>
                <p className="text-sm">GitHub</p>
              </div>
            </div>

            {/* Other */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Autres</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">Davinci Resolve</p>
                <p className="text-sm">Photoshop</p>
                <p className="text-sm">Blender</p>
              </div>
            </div>

            {/* Frameworks */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Frameworks</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">Vue.js</p>
                <p className="text-sm">Node.js</p>
                <p className="text-sm">Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-16 px-8 max-w-6xl mx-auto relative">
        <h2 className="text-2xl font-medium mb-4">
          <span className="text-[#c778dd]">#</span>a-propos-de-moi
        </h2>
        <div className="w-full h-px bg-[#c778dd] mb-12 opacity-30"></div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="mb-4">Bonjour, Je suis Serge !</p>
            <p className="mb-4 text-sm leading-relaxed">
              Je suis un développeur web fullstack passionné par la création
              d'expériences numériques modernes et intuitives. Autodidacte et
              curieux, j'ai commencé mon parcours en apprenant à concevoir des
              sites web responsives à partir de zéro.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              Ce qui me motive, c'est de transformer des idées en projets
              concrets grâce aux technologies web. Je suis constamment en train
              d'apprendre les dernières innovations pour proposer des solutions
              performantes, élégantes et adaptées aux besoins des utilisateurs.
            </p>
            <button
              className="border border-[#c778dd] text-white px-4 py-2 mt-4 hover:bg-[#c778dd]/10 transition-colors flex items-center"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const isEn = window.location.pathname.startsWith('/en');
                  window.location.href = isEn ? '/en/a-propos-de-moi' : '/a-propos-de-moi';
                }
              }}
            >
              En savoir plus <span className="ml-2">→</span>
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/images/phototergesite2.png"
              alt="About Me"
              width={400}
              height={500}
              className="z-10 relative"
            />
            <div style={{ height: '1px', background: '#c778dd', width: '85%', marginLeft: 0, marginRight: 'auto' }} />
            <div className="absolute grid grid-cols-6 gap-2 right-0 top-1/4">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`dot-1-${i}`}
                  className="w-1 h-1 bg-[#abb2bf] rounded-full"
                ></div>
              ))}
            </div>
            <div className="absolute grid grid-cols-6 gap-2 right-1/4 bottom-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`dot-2-${i}`}
                  className="w-1 h-1 bg-[#abb2bf] rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute grid grid-cols-6 gap-2 -left-8">
          {[...Array(30)].map((_, i) => (
            <div
              key={`dot-3-${i}`}
              className="w-1 h-1 bg-[#abb2bf] rounded-full"
            ></div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium mb-4">
          <span className="text-[#c778dd]">#</span>contacts
        </h2>
        <div className="w-full h-px bg-[#c778dd] mb-12 opacity-30"></div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <p className="mb-4 text-sm leading-relaxed">
              Je suis intéressée par des opportunités de travail en freelance.
              Cependant, si vous avez d'autres demandes ou questions, n'hésitez
              pas à me contacter.
            </p>
            <div className="absolute grid grid-cols-6 gap-1 -left-10 bottom-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`contact-dot-${i}`}
                  className="w-1 h-1 bg-[#abb2bf] rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="border border-[#abb2bf] p-4">
              <h3 className="font-medium mb-4">Envoyez-moi un message ici </h3>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-[#c778dd]">✉️</span>
                </div>
                <span className="text-[#abb2bf] text-xs md:text-base break-all">tovmassian.serge@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#abb2bf] py-8">
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
                <Link
                  href="https://github.com/Serge-Developper"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/serge-tovmassian/"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-sm">
            © Copyright 2025. réalisé par Serge
          </p>
        </div>
      </footer>
    </div>
  );
}
