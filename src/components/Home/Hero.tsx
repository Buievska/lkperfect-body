"use client";

import { useState, useEffect } from "react";
import Container from "../Container";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center py-12 bg-background">
      <Container className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full max-w-5xl mx-auto">
          {/* ЛІВА КОЛОНКА: Текст з новим лімітом ширини */}
          <div className="flex flex-col items-start text-left space-y-6 w-full lg:max-w-450px">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold leading-tight">
              Досконале тіло - <br />
              <span className="italic font-light text-white">
                природний рух
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-gold/90 font-serif italic leading-relaxed">
              Розуміти своє тіло. Рухатися вільно. <br />
              Жити без болю.
            </p>
          </div>

          {/* ПРАВА КОЛОНКА: Слайдер з чистими пропорціями та шириною */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-500px p-3 sm:p-4 rounded-2xl border border-brand-gold/30 bg-background shadow-lg">
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full rounded-xl overflow-hidden bg-brand-card">
                {images.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-brand-card">
                      <span className="text-brand-gold/30 font-serif italic">
                        Фото {index + 1}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Індикатори */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentIndex
                          ? "w-6 bg-brand-gold"
                          : "w-1.5 bg-white/40"
                      }`}
                      aria-label={`Перейти до слайду ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
