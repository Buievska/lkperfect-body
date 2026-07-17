"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Container from "../Container";

interface SanityArticlePreview {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: Record<string, unknown>;
  categoryName?: string;
}

export default function BlogPreview() {
  const [articles, setArticles] = useState<SanityArticlePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestArticles() {
      try {
        setIsLoading(true);

        const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          "categoryName": categories[0]->title
        }`;

        const data = await client.fetch(query);
        setArticles(data || []);
      } catch (error) {
        console.error("Помилка завантаження прев'ю блогу:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestArticles();
  }, []);

  return (
    <section className="w-full py-20 md:py-28 bg-brand-card border-t border-brand-gold/5">
      <Container className="flex flex-col items-center">
        <div className="text-center max-w-2xl flex flex-col items-center space-y-4 mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] font-serif">
            Блог
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-gold leading-tight">
            Освітні матеріали
          </h2>

          <div className="w-16 h-px bg-brand-gold/30 my-2"></div>
          <p className="text-sm sm:text-base text-foreground/80 font-serif italic font-light leading-relaxed">
            Прості пояснення про тіло, рух, розвиток дітей та здоров&apos;я.{" "}
            <br className="hidden sm:inline" />
            Практичні рекомендації для батьків і дорослих.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center py-10">
            <div className="w-6 h-6 border-2 border-brand-gold/35 border-t-brand-gold rounded-full animate-spin"></div>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-sm text-brand-gold/40 font-serif italic py-10">
            Нові матеріали готуються до публікації.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mb-12 md:mb-16">
            {articles.map((article, idx) => {
              const cardClassName = idx === 2 ? "hidden lg:flex" : "flex";

              return (
                <article
                  key={article._id}
                  className={`${cardClassName} flex flex-col rounded-2xl border border-brand-gold/15 overflow-hidden bg-brand-card hover:border-brand-gold/40 transition-all duration-300 group`}
                >
                  <div className="aspect-4/3 w-full bg-background/50 border-b border-brand-gold/10 relative overflow-hidden flex items-center justify-center">
                    {article.mainImage ? (
                      <Image
                        src={urlFor(article.mainImage).url()}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="text-brand-gold/20 font-serif italic text-sm group-hover:scale-105 transition-transform duration-500">
                        Зображення відсутнє
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1 bg-background text-left space-y-4">
                    <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-widest font-serif">
                      {article.categoryName || "Загальне"}
                    </span>

                    <h3 className="text-lg sm:text-xl font-serif text-brand-gold leading-snug group-hover:text-brand-gold/90 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-foreground/70 font-serif italic font-light leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt ||
                        "Натисніть нижче, щоб прочитати повний текст статті..."}
                    </p>

                    <Link
                      href={`/blog/${article.slug.current}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-gold/80 hover:text-brand-gold font-serif italic group/link pt-2"
                    >
                      <span>Переглянути повний текст</span>
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <Link
          href="/blog"
          className="px-8 py-3 rounded-md border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-background text-xs sm:text-sm uppercase tracking-[0.15em] font-serif transition-all duration-300"
        >
          Перейти до блогу
        </Link>
      </Container>
    </section>
  );
}
