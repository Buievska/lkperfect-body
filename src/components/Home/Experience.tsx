"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const certificates = [
  "/certificate-1.jpg",
  "/certificate-2.jpg",
  "/certificate-3.jpg",
  "/certificate-4.jpg",
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div className="flex flex-col items-start text-left space-y-6 w-full">
            <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] font-serif">
              Кваліфікація та досвід
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
              Досвід, на який ви можете покластися
            </h2>

            <div className="w-20 h-px bg-brand-gold/40"></div>

            <div className="space-y-2 text-base sm:text-lg text-foreground/95 font-serif italic font-light leading-relaxed">
              <p>Освіта у двох країнах та з різних дисциплін.</p>
              <p className="text-brand-gold/90">
                Тіло заслуговує на те, щоб його розуміли.
              </p>
            </div>

            <ul className="space-y-4 pt-4 text-sm sm:text-base text-foreground/90 font-serif italic font-light w-full">
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/40 shrink-0"></span>
                <span>Фізіотерапія — Україна та Польща</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/40 shrink-0"></span>
                <span>Психосоматика</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/40 shrink-0"></span>
                <span>Дієтологія</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/40 shrink-0"></span>
                <span>Сенсорна інтеграція</span>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-full max-w-500px mb-6">
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-12 z-20 text-2xl sm:text-3xl text-brand-gold/60 hover:text-brand-gold transition-colors duration-300 font-serif p-2.5 sm:p-2 bg-background/80 sm:bg-transparent rounded-full border border-brand-gold/15 sm:border-none shadow-sm sm:shadow-none cursor-pointer select-none"
              >
                «
              </button>

              <div className="relative w-full aspect-4/5 lg:aspect-4/3 rounded-2xl border border-brand-gold/30 bg-background p-3 sm:p-4 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand-card flex items-center justify-center">
                  <Image
                    src={certificates[currentIndex]}
                    alt={`Сертифікат ${currentIndex + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="(max-w-500px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-12 z-20 text-2xl sm:text-3xl text-brand-gold/60 hover:text-brand-gold transition-colors duration-300 font-serif p-2.5 sm:p-2 bg-background/80 sm:bg-transparent rounded-full border border-brand-gold/15 sm:border-none shadow-sm sm:shadow-none cursor-pointer select-none"
              >
                »
              </button>
            </div>

            <Link
              href="/experience"
              className="text-xs sm:text-sm text-brand-gold/70 hover:text-brand-gold border-b border-brand-gold/30 hover:border-brand-gold/90 pb-1 font-serif italic transition-all duration-300 text-center"
            >
              Ознайомитися з дипломами та статистикою
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
