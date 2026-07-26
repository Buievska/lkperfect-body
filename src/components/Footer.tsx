"use client";

import NextImage from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-card border-t border-brand-gold/10 py-10 sm:py-14 text-brand-gold font-serif">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-105">
              <NextImage
                src="/logo-lk.png"
                alt="Perfect Body LK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 md:w-full">
            <p className="text-xs sm:text-sm italic font-light tracking-wide leading-relaxed">
              <span className="block md:whitespace-nowrap">
                Лілія Каревич — фізичний терапевт, спеціаліст з руху
              </span>
              <span className="block text-brand-gold/80 mt-1">
                Кам&apos;янець-Подільський
              </span>
            </p>

            <div className="flex items-center gap-5">
              <a
                href="mailto:lilikarevych@gmail.com"
                className="w-10 h-10 rounded-full bg-brand-gold text-[#03362A] flex items-center justify-center hover:scale-105 hover:bg-brand-gold/90 transition-all duration-300"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/lilijakarevich?igsh=M3AycngxZ2x4NDQ0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-gold text-[#03362A] flex items-center justify-center hover:scale-105 hover:bg-brand-gold/90 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-[2.2]"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://t.me/LKBody"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-gold text-[#03362A] flex items-center justify-center hover:scale-105 hover:bg-brand-gold/90 transition-all duration-300 pl-0.5"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>

            <p className="text-[10px] sm:text-xs text-brand-gold/60 italic font-light tracking-wide">
              © 2026 Perfect Body LK. Кожен рух має значення.
            </p>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </Container>
    </footer>
  );
}
