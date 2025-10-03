"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-normal mb-2">
            <span className="text-[#c778dd]">/</span>projects
          </h1>
          <p className="text-[#abb2bf]">List of my projects</p>
        </div>
        <section className="mb-16">
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]">#</span>complete-projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


      <div className="border border-[#abb2bf]">
              <div className="h-48 overflow-hidden relative bg-[#282c33]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/planifylogo.png"
                    alt="ChertNodes background"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 relative z-10">
                  <div className="mt-4 flex flex-col gap-1"></div>
                </div>
              </div>
              <div className="border-t border-[#abb2bf] p-2 text-xs">
                <p>Vue.js Node.js Mongo DB</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-white mb-2">Planify</h3>
                <p className="text-sm mb-4">Student website project</p>
                <div className="flex gap-2">
                  <Link
                    href="https://planifymmi.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors flex items-center gap-1"
                  >
                    Discover <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>


            {/* ICDX */}
            <div className="border border-[#abb2bf]">
              <div className="h-48 overflow-hidden relative bg-[#282c33]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/Group 65.svg"
                    alt="ChertNodes background"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 relative z-10">
                  <div className="mt-4 flex flex-col gap-1"></div>
                </div>
              </div>
              <div className="border-t border-[#abb2bf] p-2 text-xs">
                <p>HTML CSS Javascript</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-white mb-2">ICDX</h3>
                <p className="text-sm mb-4">Showcase website</p>
                <div className="flex gap-2">
                  <Link
                    href="https://serge-developper.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors flex items-center gap-1"
                  >
                    Discover <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* ICDX Figma Mockup */}
            <div className="border border-[#abb2bf] bg-[#282c33]">
              <div className="h-48 overflow-hidden relative flex items-center justify-center">
                <img
                  src="/images/icdx_maquette.png"
                  alt="ICDX Mockup Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-center"></div>
              </div>
              <div className="border-t border-[#abb2bf] p-2 text-xs">
                <p>Figma</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-white mb-2">ICDX Mockup</h3>
                <p className="text-sm mb-4">Figma mockup of the ICDX website</p>
                <div className="flex gap-2">
                  <Link
                    href="https://www.figma.com/design/rzTS9rAOrdJ9bXfdsPFvd2/Projet-ICDX?node-id=0-1&t=1DU1zEpLYVKMdcfv-1 "
                    className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors flex items-center gap-1"
                  >
                    Discover <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* SOS Futur Figma Mockup */}
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
                <h3 className="text-xl text-white mb-2">SOS Futur Mockup</h3>
                <p className="text-sm mb-4">Figma mockup for SOS Futur</p>
                <div className="flex gap-2">
                  <a
                    href="https://www.figma.com/design/A3B5trPsYJnTpYR91mpJ55/SOS-FUTUR--Copy-?node-id=2003-525&t=zxbQcHVoSVKLZGq5-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors"
                  >
                    Discover <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Video Editing */}
            <div className="border border-[#abb2bf] bg-[#282c33]">
              <div className="h-48 overflow-hidden relative flex items-center justify-center">
                <img
                  src="/images/ziak.jpg"
                  alt="Bot Kotik"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-center"></div>
              </div>
              <div className="border-t border-[#abb2bf] p-2 text-xs">
                <p>Davinci Resolve</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-white mb-2">Video Editing</h3>
                <p className="text-sm mb-4">Video about the evolution of a rapper</p>
                <div className="flex gap-2">
                  <Link
                    href="https://www.youtube.com/watch?v=b8Hd2cMmyyw&feature=youtu.be "
                    className="border border-[#c778dd] px-4 py-1 text-white text-sm hover:bg-[#c778dd]/10 transition-colors flex items-center gap-1"
                  >
                    Discover <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </section>
      </main>
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
                <Link
                  href="https://www.linkedin.com/in/serge-tovmassian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-sm">© Copyright 2025. Made by Serge</p>
        </div>
      </footer>
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