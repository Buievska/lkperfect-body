"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Container from "@/components/Container";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: Record<string, unknown>;
  excerpt: string;
  categoryName?: string;
}

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>(["Всі категорії"]);
  const [selectedCategory, setSelectedCategory] = useState("Всі категорії");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          "excerpt": coalesce(excerpt, "Читати детальніше у статті..."),
          "categoryName": categories[0]->title
        }`;

        const fetchedPosts: Post[] = await client.fetch(postsQuery);
        setPosts(fetchedPosts);

        const uniqueCategories = new Set<string>();
        fetchedPosts.forEach((post) => {
          if (post.categoryName) {
            uniqueCategories.add(post.categoryName);
          }
        });

        setCategories(["Всі категорії", ...Array.from(uniqueCategories)]);
      } catch (error) {
        console.error("Помилка під час завантаження даних із Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "Всі категорії") {
      return posts;
    }
    return posts.filter((post) => post.categoryName === selectedCategory);
  }, [posts, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedCategory("Всі категорії");
    setCurrentPage(1);
  };

  return (
    <main className="w-full min-h-screen bg-background pt-28 pb-20 sm:pt-36 sm:pb-32">
      <Container className="flex flex-col items-center">
        <div className="text-center max-w-2xl flex flex-col items-center space-y-4 mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-[0.2em] font-serif">
            Блог
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-gold leading-tight">
            Освітні матеріали
          </h1>

          <div className="w-16 h-px bg-brand-gold/30 my-2"></div>
        </div>

        <div className="w-full max-w-6xl flex items-center justify-between gap-4 mb-10 md:mb-14 relative z-20">
          <div className="relative w-55 sm:w-65">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-md border border-brand-gold/30 bg-brand-card/40 text-brand-gold text-xs sm:text-sm font-serif italic cursor-pointer focus:outline-none hover:border-brand-gold/60 transition-colors"
            >
              <span>{selectedCategory}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-1 w-full rounded-md border border-brand-gold/20 bg-brand-card py-1 shadow-lg max-h-60 overflow-y-auto z-30">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-serif italic transition-colors hover:bg-brand-gold hover:text-background ${
                        selectedCategory === category
                          ? "text-brand-gold bg-brand-gold/10"
                          : "text-brand-gold/80"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={handleResetFilters}
            className="text-xs sm:text-sm text-brand-gold/60 hover:text-brand-gold transition-colors font-serif italic pb-0.5 border-b border-dashed border-brand-gold/30 hover:border-brand-gold/80 cursor-pointer"
          >
            Скинути фільтри
          </button>
        </div>

        {isLoading ? (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-2 border-brand-gold/35 border-t-brand-gold rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-brand-gold/60 font-serif italic">
              Завантаження статей...
            </p>
          </div>
        ) : currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mb-16">
            {currentArticles.map((article) => (
              <article
                key={article._id}
                className="flex flex-col rounded-2xl border border-brand-gold/15 overflow-hidden bg-brand-card hover:border-brand-gold/40 transition-all duration-300 group"
              >
                <div className="aspect-4/3 w-full bg-background/50 border-b border-brand-gold/10 relative overflow-hidden flex items-center justify-center">
                  {article.mainImage ? (
                    <Image
                      src={urlFor(article.mainImage).url()}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-brand-gold/20 font-serif italic text-sm group-hover:scale-105 transition-transform duration-500">
                      Немає зображення
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 text-left space-y-4">
                  <span className="text-[10px] sm:text-xs text-brand-gold/50 uppercase tracking-widest font-serif">
                    {article.categoryName || "Без категорії"}
                  </span>

                  <h3 className="text-lg sm:text-xl font-serif text-brand-gold leading-snug group-hover:text-brand-gold/90 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-foreground/70 font-serif italic font-light leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug.current}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-gold/80 hover:text-brand-gold font-serif italic group/link pt-2"
                  >
                    <span>Читати повний текст</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-brand-gold/60 font-serif italic">
              Статей у цій категорії поки немає.
            </p>
          </div>
        )}

        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 text-brand-gold disabled:text-brand-gold/20 hover:text-brand-gold transition-colors font-serif cursor-pointer disabled:cursor-not-allowed select-none"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full font-serif text-sm transition-all cursor-pointer ${
                    currentPage === page
                      ? "text-brand-gold font-bold underline decoration-brand-gold decoration-2 underline-offset-4"
                      : "text-brand-gold/50 hover:text-brand-gold"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 text-brand-gold disabled:text-brand-gold/20 hover:text-brand-gold transition-colors font-serif cursor-pointer disabled:cursor-not-allowed select-none"
            >
              &gt;
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}
