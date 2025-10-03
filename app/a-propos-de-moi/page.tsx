"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const imageCount = 6; // nombre total d'images dans ton carrousel
  const carouselRef = useRef<HTMLDivElement>(null); // ✅ typage HTMLDivElement
  const [selectedBook, setSelectedBook] = useState<'witcher'|'1984'>('witcher');

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanScrollLeft(carousel.scrollLeft > 0);
    setCanScrollRight(
      carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth
    );
  };

  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number
  ) => {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    // easing easeInOutQuad
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / duration;
      const progress = Math.min(elapsed, 1);
      const easedProgress = easeInOutQuad(progress);

      element.scrollLeft = start + change * easedProgress;

      if (elapsed < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // === Modifie ta fonction scroll pour utiliser smoothScrollTo ===
  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const containerWidth = el.clientWidth;
    const itemWidth = 600 + 16;
    const totalItems = 6; // ou dynamique : items.length
    const maxIndex = totalItems - 1;

    const scrollLeft = el.scrollLeft;
    const currentIndex = Math.round(scrollLeft / itemWidth);
    let newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1;

    // Clamp index entre 0 et maxIndex
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));

    // Position de base (centrée)
    let newScrollLeft =
      newIndex * itemWidth - (containerWidth / 2 - itemWidth / 2);

    // ⚠️ Ne pas limiter ici ! On veut autoriser le "scroll en trop"
    // Supprime la ligne suivante :
    // newScrollLeft = Math.min(newScrollLeft, maxScrollLeft);

    // Si on est sur la DERNIÈRE image, on décale un peu + vers la droite
    if (newIndex === maxIndex) {
      const offsetRight = 200; // Décalage vers la droite (ajuste selon ton besoin)
      newScrollLeft += offsetRight;
    }

    // Clamp au scroll maximum
    const maxScrollLeft = el.scrollWidth - containerWidth;
    newScrollLeft = Math.min(newScrollLeft, maxScrollLeft);

    smoothScrollTo(el, newScrollLeft, 400);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    handleScroll(); // Vérifie l'état des flèches dès le chargement

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    handleScroll(); // Vérifie la position au début

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#282c33] text-[#abb2bf] min-h-screen font-fira-code">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* About Me Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-normal mb-2">
            <span className="text-[#c778dd]">/</span>a-propos-de-moi
          </h1>
          <p className="text-[#abb2bf]">Qui suis-je ?</p>
        </div>

        {/* About Me Content */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/2">
            <p className="mb-4">Serge</p>
            <p className="mb-4 text-sm leading-relaxed">
              Je suis un développeur web fullstack autodidacte et étudiant en
              MMI à l'IUT Nancy-Charlemagne. Je conçois des sites web
              responsives de A à Z avec passion.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              Entre design sur Figma, montage vidéo sur DaVinci Resolve et
              apprentissage constant, je cherche à allier technique et
              créativité dans chaque projet.
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

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]">#</span>compétences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

            {/* Frameworks */}
            <div className="border border-[#abb2bf]">
              <div className="border-b border-[#abb2bf] p-2">
                <h3 className="font-medium">Frameworks</h3>
              </div>
              <div className="p-2">
                <p className="text-sm">React Vue</p>
                <p className="text-sm">Node.js</p>
                <p className="text-sm">Typescript</p>
              </div>
            </div>
          </div>
        </section>





        {/* Ma Vidéo */}
        <section className="mt-16">
          <h2 className="text-2xl mb-8">
            <span className="text-[#c778dd]">#</span>ma-vidéo
          </h2>

          <div className="border border-[#ABB2BF] rounded-lg overflow-hidden max-w-6xl mx-auto">
            <video
              controls
              className="w-full h-auto"
              poster="/images/imagevideo.jpg"
            >
              <source src="/videos/vidéo_portfolio.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
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

      {/* Left side icons */}

      {/* Decorative dots */}
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
