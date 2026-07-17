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

  openGraph: {
    title: "Perfect Body LK",
    description: "Досконале тіло — природний рух",
    url: "https://lkperfect-body.vercel.app",
    siteName: "Perfect Body LK",
    images: [
      {
        url: "/logo-lk.png",
        width: 1200,
        height: 630,
        alt: "Perfect Body LK Logo",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Perfect Body LK",
    description: "Досконале тіло — природний рух",
    images: ["/logo-lk.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={cormorantGaramond.variable}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col items-center font-serif w-full">
        <Header />

        <main className="w-full grow flex flex-col items-center pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
