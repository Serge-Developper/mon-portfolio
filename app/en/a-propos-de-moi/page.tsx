"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Titre et intro */}
        <div className="mb-12">
          <h1 className="text-3xl font-normal mb-2">
            <span className="text-[#c778dd]">/</span>about-me
          </h1>
          <p className="text-[#abb2bf]">Who am I?</p>
        </div>

        {/* Intro / image / paragraphes */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/2">
            <p className="mb-4">Serge</p>
            <p className="mb-4 text-sm leading-relaxed">
              I am a self-taught fullstack web developer and a student in MMI at IUT Nancy-Charlemagne. I design responsive websites from A to Z with passion.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              Between designing on Figma, video editing on DaVinci Resolve, and constant learning, I strive to combine technical skills and creativity in every project.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/images/phototergesite1.png"
              alt="Photo de Serge"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div style={{ height: '1px', background: '#c778dd', width: '100%', marginLeft: 0, marginRight: 'auto' }} />
            <div className="absolute grid grid-cols-6 gap-1 -right-4 top-1/4">
              {[...Array(24)].map((_, i) => (
                <div
                  key={`dot-right-${i}`}
                  className="w-1 h-1 bg-[#abb2bf] rounded-full"
                ></div>
              ))}
            </div>
            <div className="absolute grid grid-cols-6 gap-1 -right-4 bottom-1/4">
              {[...Array(24)].map((_, i) => (
                <div
                  key={`dot-right-bottom-${i}`}
                  className="w-1 h-1 bg-[#abb2bf] rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]">#</span>skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Languages</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">HTML</p>
                <p className="text-sm">CSS</p>
                <p className="text-sm">Javascript</p>
              </div>
            </div>
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Other</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">Davinci Resolve</p>
                <p className="text-sm">Photoshop</p>
                <p className="text-sm">Blender</p>
              </div>
            </div>
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Tools</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">Visual Studio Code</p>
                <p className="text-sm">Figma</p>
                <p className="text-sm">GitHub</p>
              </div>
            </div>
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Databases</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">SQLite</p>
                <p className="text-sm">Mongo</p>
              </div>
            </div>
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
        </section>

        {/* Les 4 sections supprimées:
            - my-proust-questionnaire
            - my-coat-of-arms
            - my-infographic
            - my-carousel
        */}

        {/* Vidéo */}
        <section className="mt-16">
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]">#</span>my-video
          </h2>
          <div className="border border-[#ABB2BF] rounded-lg overflow-hidden max-w-6xl mx-auto">
            <video
              controls
              className="w-full h-auto"
              poster="/images/imagevideo.jpg"
            >
              <source src="/videos/vidéo_portfolio.mp4" type="video/mp4" />
              Your browser does not support the HTML5 video tag.
            </video>
          </div>
        </section>
      </main>

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
            © Copyright 2025. Made by Serge
          </p>
        </div>
      </footer>

      {/* Décorations */}
      <div className="fixed right-0 top-1/3 hidden lg:block">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(15)].map((_, i) => (
            <div
              key={`dot-right-${i}`}
              className="w-1 h-1 bg-[#abb2bf] rounded-full"
            ></div>
          ))}
        </div>
      </div>
      <div className="fixed left-0 bottom-1/3 hidden lg:block">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(15)].map((_, i) => (
            <div
              key={`dot-left-${i}`}
              className="w-1 h-1 bg-[#abb2bf] rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}