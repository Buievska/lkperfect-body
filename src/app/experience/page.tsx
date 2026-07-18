"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/Container";

type Tab = "diplomas" | "statistics";

const diplomasData = [
  { id: 1, title: "Сертифікат Фізіотерапевта", image: "/certificate-14.jpg" },
  { id: 2, title: "Диплом Фізіотерапевта", image: "/certificate-19.jpg" },
  { id: 3, title: "Сертифікат Масажист", image: "/certificate-10.jpg" },
  { id: 4, title: "Сертифікат  Масажиста", image: "/certificate-17.jpg" },
  { id: 5, title: "Сертифікат Дитячиий масаж", image: "/certificate-2.jpg" },
  { id: 6, title: "Сертифікат Дитячий масаж", image: "/certificate-21.jpg" },
  {
    id: 7,
    title: "Сертифікат Техніка косметичних послуг",
    image: "/certificate-11.jpg",
  },
  {
    id: 8,
    title: "Сертифікат Косметичні процедури",
    image: "/certificate-16.jpg",
  },
  {
    id: 9,
    title: "Диплом Технік косметичних послуг",
    image: "/certificate-13.jpg",
  },

  { id: 10, title: "Сертифікат Гомеопатія", image: "/certificate-7.jpg" },
  { id: 11, title: "Сертифікат", image: "/certificate-15.jpg" },
  { id: 12, title: "Диплом Дієтолога", image: "/certificate-20.jpg" },
  { id: 13, title: "Сертифікат DIETETYKPRO", image: "/certificate-1.jpg" },
  { id: 14, title: "Сертифікат FARMONA", image: "/certificate-4.jpg" },
  { id: 15, title: "Сертифікат BIELENDA", image: "/certificate-5.jpg" },
  {
    id: 16,
    title: "Сертифікат Сенсорна інтеграція",
    image: "/certificate-8.jpg",
  },
  {
    id: 17,
    title: "Сертифікат Сенсорна інтеграція",
    image: "/certificate-9.jpg",
  },
  {
    id: 18,
    title: "Сертифікат педагогіка",
    image: "/certificate-6.jpg",
  },

  { id: 19, title: "Диплом Психолог-Консультант", image: "/dyploma-1.jpg" },
  {
    id: 20,
    title: "Сертифікат Спеціалізація у консультуванні",
    image: "/certificate-12.jpg",
  },
  { id: 21, title: "Сертифікат Психосоматика", image: "/certificate-3.jpg" },
  {
    id: 22,
    title: "Сертифікат Сімейна психотерапія",
    image: "/certificate-18.jpg",
  },
];

const statisticsData = [
  { label: "Постава та симетрія тіла", percentage: 40 },
  { label: "Біль у спині та попереку", percentage: 30 },
  { label: "Дитяча ортопедія", percentage: 20 },
  { label: "Інше (реабілітація, спорт)", percentage: 10 },
];

const timelineWeeks = [
  { label: "Тиждень 1-2", val: "20%" },
  { label: "Тиждень 3-4", val: "45%" },
  { label: "Тиждень 6-8", val: "70%" },
  { label: "Тиждень 10-12", val: "95%+" },
];

const steps = [
  "Усунення симптомів та болю",
  "Відновлення рухливості суглобів",
  "Зміцнення м'язового корсету",
  "Закріплення результату та профілактика",
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<Tab>("diplomas");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = () => setActiveIndex(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev === 0 ? diplomasData.length - 1 : (prev as number) - 1,
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) =>
        prev === diplomasData.length - 1 ? 0 : (prev as number) + 1,
      );
    }
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) =>
          prev === 0 ? diplomasData.length - 1 : (prev as number) - 1,
        );
      if (e.key === "ArrowRight")
        setActiveIndex((prev) =>
          prev === diplomasData.length - 1 ? 0 : (prev as number) + 1,
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <main className="w-full min-h-screen bg-background pt-28 pb-20 sm:pt-36 sm:pb-32">
      <Container className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold text-center mb-12 sm:mb-16">
          Мій досвід
        </h1>

        <div className="flex justify-center items-center w-full max-w-lg border-b border-brand-gold/10 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab("diplomas")}
            className={`w-1/2 pb-4 text-center text-sm sm:text-base font-serif uppercase tracking-widest cursor-pointer transition-all duration-300 ${
              activeTab === "diplomas"
                ? "text-brand-gold border-b-2 border-brand-gold font-medium"
                : "text-brand-gold/40 hover:text-brand-gold/70"
            }`}
          >
            Дипломи
          </button>
          <button
            onClick={() => setActiveTab("statistics")}
            className={`w-1/2 pb-4 text-center text-sm sm:text-base font-serif uppercase tracking-widest cursor-pointer transition-all duration-300 ${
              activeTab === "statistics"
                ? "text-brand-gold border-b-2 border-brand-gold font-medium"
                : "text-brand-gold/40 hover:text-brand-gold/70"
            }`}
          >
            Статистика
          </button>
        </div>

        {activeTab === "diplomas" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {diplomasData.map((diploma, index) => (
              <div
                key={diploma.id}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col rounded-2xl border border-brand-gold/20 overflow-hidden bg-brand-card hover:border-brand-gold/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-4/3 w-full bg-background/50 flex items-center justify-center p-6 border-b border-brand-gold/10">
                  <div className="relative w-full h-full rounded-lg bg-brand-card flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <span className="absolute z-0 text-brand-gold/30 font-serif italic text-sm"></span>

                    <Image
                      src={diploma.image}
                      alt={`Сертифікат ${diploma.id}`}
                      fill
                      className="object-contain p-2 z-10"
                    />
                  </div>
                </div>

                <div className="py-4 text-center bg-brand-card/90">
                  <span className="text-brand-gold font-serif italic text-sm sm:text-base">
                    {diploma.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "statistics" && (
          <div className="w-full max-w-3xl flex flex-col space-y-16">
            <div className="space-y-6">
              {statisticsData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-end text-sm sm:text-base font-serif italic text-brand-gold/90">
                    <span>{item.label}</span>
                    <span className="text-brand-gold">{item.percentage}%</span>
                  </div>

                  <div className="h-0.5 w-full bg-brand-gold/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gold transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full bg-brand-card/40 border border-brand-gold/10 rounded-3xl p-6 sm:p-10 space-y-12">
              <div className="space-y-8">
                {timelineWeeks.map((week, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <span className="text-xs sm:text-sm font-serif italic text-brand-gold/80">
                      {week.val}
                    </span>

                    <div className="w-full h-8 sm:h-10 rounded-md bg-brand-gold/5 border border-brand-gold/10 relative overflow-hidden">
                      <div
                        className="h-full bg-brand-gold/30 rounded-r-md transition-all duration-1000"
                        style={{
                          width:
                            week.val.replace("%", "").replace("+", "") + "%",
                        }}
                      />
                    </div>

                    <span className="text-xs sm:text-sm font-serif italic text-brand-gold/60">
                      {week.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-4 border-t border-brand-gold/5">
                {steps.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 sm:gap-6 text-left"
                  >
                    <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif text-sm shrink-0">
                      {idx + 1}
                    </div>

                    <p className="text-sm sm:text-base text-foreground/90 font-serif italic font-light">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>

      {activeIndex !== null && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-brand-gold/70 hover:text-brand-gold p-2 cursor-pointer transition-colors z-50"
            aria-label="Закрити"
          >
            <svg
              className="w-8 h-8 stroke-current"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 text-brand-gold/70 hover:text-brand-gold p-3 rounded-full border border-brand-gold/20 hover:border-brand-gold/60 cursor-pointer bg-[#03362A]/40 backdrop-blur-md transition-all duration-300 z-50"
            aria-label="Попередній"
          >
            <svg
              className="w-8 h-8 stroke-current"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90vw] h-[70vh] max-w-4xl flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={diplomasData[activeIndex].image}
                alt={diplomasData[activeIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-6 text-brand-gold font-serif italic text-base sm:text-lg tracking-wide">
              {diplomasData[activeIndex].title}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 text-brand-gold/70 hover:text-brand-gold p-3 rounded-full border border-brand-gold/20 hover:border-brand-gold/60 cursor-pointer bg-[#03362A]/40 backdrop-blur-md transition-all duration-300 z-50"
            aria-label="Наступний"
          >
            <svg
              className="w-8 h-8 stroke-current"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}
