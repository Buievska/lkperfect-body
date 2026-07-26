"use client";

import Image from "next/image";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center py-12 bg-background">
      <Container className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-start text-left space-y-6 w-full lg:max-w-md">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold leading-tight">
              Досконале тіло - <br />
              <span className="italic font-light">природний рух</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-gold/90 font-serif italic leading-relaxed">
              Розуміти своє тіло. Рухатися вільно. <br />
              Жити без болю.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-xl p-3 sm:p-4 rounded-2xl border border-brand-gold/30 bg-background shadow-lg">
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full rounded-xl overflow-hidden bg-brand-card">
                <Image
                  src="/hero-7.jpg"
                  alt="Perfect Body LK"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
