"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const certificates = [
  "/certificate-14.jpg",
  "/certificate-19.jpg",
  "/certificate-10.jpg",
  "/certificate-17.jpg",
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
            <span className="text-xs sm:text-sm text-brand-gold/60 uppercase tracking-[0.2em] font-serif">
              Кваліфікація та досвід
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
              Досвід, на який ви можете покластися
            </h2>

            <div className="w-20 h-px bg-brand-gold/40"></div>

            {/* Збільшено розмір тексту: text-base sm:text-lg lg:text-xl */}
            <div className="space-y-3 text-base sm:text-lg lg:text-xl text-foreground/90 font-serif italic font-light leading-relaxed">
              <p>
                Мій професійний шлях сформувався завдяки роботі в Україні та
                Польщі.
              </p>
              <p className="text-brand-gold/90">
                Маю досвід роботи в медичних, реабілітаційних,
                санаторно-курортних закладах та хоспісі в Польщі. Робота в
                різних напрямках медичної допомоги дозволила мені сформувати
                комплексний погляд на физичну терапію, відновлення та потреби
                людей різного віку.
              </p>
            </div>

            {/* Збільшено розмір елементів списку: text-base sm:text-lg lg:text-xl */}
            <ul className="space-y-4 pt-4 text-base sm:text-lg lg:text-xl text-foreground/90 font-serif italic font-light w-full">
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/50 shrink-0"></span>
                <span>Фізіотерапія — Україна та Польща</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/50 shrink-0"></span>
                <span>Психосоматика</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/50 shrink-0"></span>
                <span>Дієтологія</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/50 shrink-0"></span>
                <span>Сенсорна інтеграція</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-px bg-brand-gold/50 shrink-0"></span>
                <span>Косметологія</span>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            {/* Оновлено max-w-[400px] -> max-w-100 та sm:max-w-[500px] -> sm:max-w-125 */}
            <div className="relative flex items-center justify-center w-full max-w-100 sm:max-w-125 mb-6">
              <button
                onClick={handlePrev}
                className="hidden sm:block absolute -left-12 lg:-left-16 z-20 text-2xl sm:text-3xl text-brand-gold/50 hover:text-brand-gold transition-colors duration-300 font-serif p-2 cursor-pointer select-none"
              >
                «
              </button>

              <div className="relative w-full aspect-4/3 rounded-2xl border border-brand-gold/25 bg-brand-card/30 p-2 sm:p-4 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={certificates[currentIndex]}
                    alt={`Сертифікат ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-w-500px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="hidden sm:block absolute -right-12 lg:-right-16 z-20 text-2xl sm:text-3xl text-brand-gold/50 hover:text-brand-gold transition-colors duration-300 font-serif p-2 cursor-pointer select-none"
              >
                »
              </button>
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="flex items-center gap-8 sm:hidden">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold text-lg bg-brand-card/40 active:bg-brand-card/80 transition-all"
                  aria-label="Попередній сертифікат"
                >
                  «
                </button>
                <span className="text-sm text-brand-gold/70 font-serif italic">
                  {currentIndex + 1} / {certificates.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold text-lg bg-brand-card/40 active:bg-brand-card/80 transition-all"
                  aria-label="Наступний сертифікат"
                >
                  »
                </button>
              </div>

              <Link
                href="/experience"
                className="text-sm sm:text-base text-brand-gold/80 hover:text-brand-gold border-b border-brand-gold/30 hover:border-brand-gold/90 pb-1 font-serif italic transition-all duration-300 text-center"
              >
                Ознайомитися з дипломами та статистикою
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
