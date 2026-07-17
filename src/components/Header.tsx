"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+380956586855";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-card border-b border-brand-gold/20 h-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <NextImage
                src="/logo-lk.png"
                alt="Perfect Body LK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* ================= НАВІГАЦІЯ ПО ЦЕНТРУ ================= */}
          <nav className="hidden lg:flex items-center gap-8 font-serif text-brand-gold/90 text-base xl:text-lg mx-auto">
            <Link
              href="/#about"
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              Про мене
            </Link>
            <Link
              href="/#specialization"
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              Спеціалізація
            </Link>
            <Link
              href="/experience"
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              Досвід
            </Link>
            <Link
              href="/blog"
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              Блог
            </Link>
            <Link
              href="/#contacts"
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              Контакти
            </Link>
          </nav>

          {/* ================= КНОПКА ДЗВІНКА СПРАВА ================= */}
          <div className="hidden lg:block shrink-0">
            <a
              href={`tel:${phoneNumber}`}
              className="border border-brand-gold text-brand-gold px-5 py-2.5 rounded-sm font-serif text-xs xl:text-sm hover:bg-brand-gold hover:text-background transition-all duration-300 whitespace-nowrap inline-block"
            >
              Зателефонувати нам
            </a>
          </div>

          {/* ================= БУРГЕР-КНОПКА ДЛЯ МОБІЛЬНИХ ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-brand-gold focus:outline-none hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Відкрити меню"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        phoneNumber={phoneNumber}
      />
    </>
  );
}
