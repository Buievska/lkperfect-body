"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import Container from "@/components/Container";
import { PortableText, PortableTextComponents } from "@portabletext/react";

// Інтерфейс для детальної статті з Sanity (позбулися any)
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  categoryName?: string;
  mainImage?: Record<string, unknown>;
  gallery?: Record<string, unknown>[]; // Додаткові фото
  body: Record<string, unknown>[]; // Вміст статті (Portable Text)
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.id as string; // або params?.slug залежно від назви папки

  const [article, setArticle] = useState<BlogPost | null>(null);
  const [images, setImages] = useState<Record<string, unknown>[]>([]);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Завантаження статті з Sanity за її slug
  useEffect(() => {
    if (!slug) return;

    async function fetchArticle() {
      try {
        setIsLoading(true);

        // GROQ-запит для отримання конкретної статті
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          publishedAt,
          mainImage,
          gallery,
          body,
          "categoryName": categories[0]->title
        }`;

        const data = await client.fetch(query, { slug });

        if (data) {
          setArticle(data);

          // Формуємо масив зображень для галереї (головне + додаткові з gallery)
          const allImages: Record<string, unknown>[] = [];
          if (data.mainImage) {
            allImages.push(data.mainImage);
          }
          if (data.gallery && Array.isArray(data.gallery)) {
            allImages.push(...data.gallery);
          }
          setImages(allImages);
        }
      } catch (error) {
        console.error("Помилка при завантаженні статті з Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  // Навігація галереї
  const handlePrevPhoto = () => {
    setActivePhotoIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setActivePhotoIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Кастомні компоненти для рендерингу Portable Text (позбулися any)
  const portableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="text-sm sm:text-base md:text-lg text-foreground/85 font-serif italic font-light leading-relaxed first-letter:text-brand-gold first-letter:font-normal mb-6">
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl font-serif text-brand-gold mt-8 mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl font-serif text-brand-gold mt-6 mb-3">
          {children}
        </h3>
      ),
    },
  };

  // 1. Стан завантаження
  if (isLoading) {
    return (
      <main className="w-full min-h-screen bg-background pt-32 text-center">
        <Container>
          <div className="inline-block w-8 h-8 border-2 border-brand-gold/35 border-t-brand-gold rounded-full animate-spin"></div>
          <p className="mt-4 text-brand-gold font-serif italic">
            Завантаження статті...
          </p>
        </Container>
      </main>
    );
  }

  // 2. Якщо статтю не знайдено
  if (!article) {
    return (
      <main className="w-full min-h-screen bg-background pt-32 text-center">
        <Container>
          <p className="text-brand-gold font-serif italic mb-6">
            Пост не знайдено
          </p>
          <Link href="/blog" className="text-brand-gold underline font-serif">
            Назад до блогу
          </Link>
        </Container>
      </main>
    );
  }

  // Форматування дати: виправлено "Long" на "long"
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("uk-UA", {
        day: "numeric",
        month: "long", // Тепер усе валідно для TS!
        year: "numeric",
      })
    : "";

  return (
    <main className="w-full min-h-screen bg-background pt-28 pb-20 sm:pt-36 sm:pb-32">
      <Container className="max-w-4xl">
        {/* Кнопка "Назад" */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-gold/60 hover:text-brand-gold font-serif italic mb-8 transition-colors cursor-pointer"
        >
          <span>← Назад</span>
        </button>

        {/* Хедер поста */}
        <div className="flex flex-col items-start text-left space-y-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-4 text-xs sm:text-sm font-serif italic text-brand-gold/50">
            <span>{article.categoryName || "Без категорії"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/20"></span>
            <span className="capitalize">{formattedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
            {article.title}
          </h1>
          {/* Тонка лінія — h-[1px] оптимізовано до h-px */}
          <div className="w-20 h-px bg-brand-gold/30 pt-2"></div>
        </div>

        {/* ================= ГАЛЕРЕЯ ЗОБРАЖЕНЬ ПОСТА (МУЛЬТИФОТО) ================= */}
        {images.length > 0 && (
          <div className="w-full flex flex-col items-center mb-10 sm:mb-14">
            {/* 
              Головне велике фото (активне зараз).
              Клас aspect-[16/9] замінено на сучасний aspect-video!
            */}
            <div className="relative w-full aspect-video rounded-2xl border border-brand-gold/15 bg-brand-card overflow-hidden flex items-center justify-center p-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-background/40">
                <Image
                  src={urlFor(images[activePhotoIdx]).url()}
                  alt={`Фото ${activePhotoIdx + 1} до статті`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Стрілочки навігації (показуємо лише якщо фото більше ніж одне) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-gold/20 bg-brand-card/85 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-background transition-all cursor-pointer text-lg z-10"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-gold/20 bg-brand-card/85 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-background transition-all cursor-pointer text-lg z-10"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Прев'ю-іконки під головним фото */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto max-w-full py-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-14 h-10 rounded-md border overflow-hidden bg-brand-card shrink-0 cursor-pointer transition-all ${
                      activePhotoIdx === idx
                        ? "border-brand-gold scale-105"
                        : "border-brand-gold/20 hover:border-brand-gold/50"
                    }`}
                  >
                    <Image
                      src={urlFor(img).width(100).height(80).url()}
                      alt={`Мініатюра ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= ТЕКСТ СТАТТІ ================= */}
        <div className="prose prose-invert max-w-none text-left">
          {article.body ? (
            <PortableText
              value={article.body}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-foreground/70 font-serif italic">
              Вміст статті порожній.
            </p>
          )}
        </div>

        {/* Розділювач та футер поста — h-[1px] замінено на h-px */}
        <div className="w-full h-px bg-brand-gold/10 my-12 sm:my-16"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="text-xs sm:text-sm text-brand-gold/70 hover:text-brand-gold border-b border-brand-gold/20 hover:border-brand-gold pb-1 font-serif italic transition-all"
          >
            Повернутися до всіх освітніх матеріалів
          </Link>

          <span className="text-xs text-brand-gold/40 font-serif italic">
            Дякуємо, що дбаєте про своє здоров&apos;я
          </span>
        </div>
      </Container>
    </main>
  );
}
