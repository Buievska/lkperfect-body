"use client";

import { useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string; // Тепер TypeScript повністю задоволений
}

const menuItems = [
  { label: "Про мене", href: "/#about" },
  { label: "Спеціалізація", href: "/#specialization" },
  { label: "Досвід", href: "/experience" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/#contacts" },
];

export default function MobileMenu({
  isOpen,
  onClose,
  phoneNumber,
}: MobileMenuProps) {
  // Блокуємо скрол основного сайту, коли меню відкрите
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#03362A] flex flex-col justify-between px-6 py-8 text-brand-gold font-serif overflow-y-auto">
      {/* --- ВЕРХНЯ ЧАСТИНА: Кнопка закриття --- */}
      <div className="flex justify-end w-full">
        <button
          onClick={onClose}
          className="p-2 text-brand-gold/80 hover:text-brand-gold cursor-pointer transition-colors"
          aria-label="Закрити меню"
        >
          {/* Тонкий елегантний хрестик */}
          <svg
            className="w-8 h-8 stroke-current"
            fill="none"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* --- ЦЕНТР: Навігаційні посилання --- */}
      <nav className="flex flex-col space-y-8 my-auto pl-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-6 group">
            {/* Тонка золота лінія ліворуч — h-[1px] замінено на h-px */}
            <div className="w-12 h-px bg-brand-gold/40 group-hover:w-16 transition-all duration-300" />

            <Link
              href={item.href}
              onClick={onClose}
              className="text-2xl sm:text-3xl font-light tracking-wide hover:text-brand-gold/80 transition-colors"
            >
              {item.label}
            </Link>
          </div>
        ))}

        {/* Кнопка "Зателефонувати нам" (замість форми запису) */}
        <div className="pt-6 pr-4 flex justify-center sm:justify-start">
          <a
            href={`tel:${phoneNumber}`}
            onClick={onClose} // закриваємо меню при кліку на дзвінок
            className="w-full max-w-xs text-center border border-brand-gold/40 hover:border-brand-gold bg-transparent py-3 px-6 rounded-md text-xs sm:text-sm tracking-widest uppercase hover:bg-brand-gold/5 transition-all duration-300 inline-block"
          >
            Зателефонувати нам
          </a>
        </div>
      </nav>

      {/* --- НИЖНЯ ЧАСТИНА: Брендовий логотип з лініями --- */}
      <div className="w-full flex items-center justify-between gap-4 mt-auto pt-8 px-4">
        {/* Ліва лінія — h-[1px] замінено на h-px */}
        <div className="flex-1 h-px bg-brand-gold/20" />

        {/* Клік по логотипу веде на головну і закриває меню */}
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center group shrink-0"
        >
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

        {/* Права лінія — h-[1px] замінено на h-px */}
        <div className="flex-1 h-px bg-brand-gold/20" />
      </div>
    </div>
  );
}
