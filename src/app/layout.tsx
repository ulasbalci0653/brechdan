import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Brechdan | Bahçelievler Kahvaltı & Artisan Sandviç – Ankara",
  description:
    "Ankara Bahçelievler'de el yapımı ekşi mayalı ciabatta sandviçler, zengin kahvaltı tabakları ve gurme lezzetler. Brechdan güncel menüsü, fiyatları ve konumu.",
  keywords: [
    "Brechdan",
    "Brechdan Ankara",
    "Brechdan Bahçelievler",
    "Ankara kahvaltı",
    "Bahçelievler kahvaltı",
    "Ankara sandviç",
    "Bahçelievler sandviç",
    "Ankara brunch",
    "Bahçelievler brunch",
    "Tiftik Sandviç Ankara",
    "Ekşi mayalı sandviç",
    "Çankaya kahvaltı mekanları",
    "Brechdan menü",
  ],
  authors: [{ name: "Brechdan" }],
  creator: "Brechdan",
  publisher: "Brechdan",
  metadataBase: new URL("https://brechdan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brechdan | Bahçelievler Kahvaltı & Artisan Sandviç – Ankara",
    description:
      "Günün en güzel ısırığı. Ankara Bahçelievler'de günlük hazırlanan ekşi mayalı sandviçler ve zengin kahvaltı tabakları.",
    url: "https://brechdan.com",
    siteName: "Brechdan Breakfast & Sandwich",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/menu-sandwich.png",
        width: 1200,
        height: 630,
        alt: "Brechdan Breakfast & Sandwich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brechdan | Bahçelievler Kahvaltı & Artisan Sandviç – Ankara",
    description: "Ankara Bahçelievler'de el yapımı ekşi mayalı ciabatta sandviçler ve kahvaltı şöleni.",
    images: ["/images/menu-sandwich.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FAF7F0] text-[#1A1D1B] antialiased font-sans flex flex-col selection:bg-[#1B4332] selection:text-[#FAF7F0]">
        {children}
      </body>
    </html>
  );
}
