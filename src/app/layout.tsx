import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perfect Body LK",
  description: "Досконале тіло — природний рух",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={cormorantGaramond.variable}>
      {/* Додаємо flex flex-col items-center, щоб усе всередині body вирівнювалося по центру екрана */}
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col items-center font-serif w-full">
        {/* Шапка сайту */}
        <Header />

        {/* 
          Головна робоча область. 
          Клас flex-grow оптимізовано до сучасного grow!
        */}
        <main className="w-full grow flex flex-col items-center pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
