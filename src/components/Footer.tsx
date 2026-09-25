"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Instagram, Clock, ArrowUp, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#153427] text-[#FAF7F0] pt-16 pb-24 sm:pb-16 border-t border-[#2D6A4F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#2D6A4F]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#FAF7F0] p-1 flex items-center justify-center overflow-hidden shadow-inner border-2 border-[#E05A2B]">
                <Image
                  src="/images/mascot-whisk.png"
                  alt="Brechdan Maskot"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-wider text-[#FAF7F0] leading-none">
                  BRECHDAN
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#E05A2B] uppercase mt-0.5">
                  Breakfast & Sandwich · Ankara
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A3B899] leading-relaxed max-w-sm">
              Bahçelievler'de günlük taze ekşi mayalı Ciabatta ekmeğinde imza sandviçler, zengin kahvaltı tabakları ve gurme lezzetler.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href={BUSINESS_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#245842] hover:bg-[#E05A2B] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href={BUSINESS_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#245842] hover:bg-[#E05A2B] text-white flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="w-9 h-9 rounded-full bg-[#245842] hover:bg-[#E05A2B] text-white flex items-center justify-center transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FAF7F0] tracking-wider uppercase">
              Menü & Keşfet
            </h4>
            <ul className="space-y-2 text-xs text-[#A3B899]">
              <li>
                <Link href="#favoriler" className="hover:text-[#FAF7F0] transition-colors">
                  Favori Sandviçler
                </Link>
              </li>
              <li>
                <Link href="#sandvicler" className="hover:text-[#FAF7F0] transition-colors">
                  Retro Isırıklar
                </Link>
              </li>
              <li>
                <Link href="#kahvalti" className="hover:text-[#FAF7F0] transition-colors">
                  Kahvaltı Tabakları
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#FAF7F0] transition-colors">
                  Tavadan & Omletler
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#FAF7F0] transition-colors">
                  Ekstralar & İçecekler
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FAF7F0] tracking-wider uppercase">
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 text-xs text-[#A3B899]">
              <p className="font-semibold text-[#FAF7F0]">Her Gün Açık</p>
              <p>Pazartesi - Pazar</p>
              <p className="text-[#E05A2B] font-bold">09:00 – 21:30</p>
              <p className="text-[11px] text-[#A3B899]/80 pt-1">
                Tüm gün kahvaltı ve sandviç servisi
              </p>
            </div>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FAF7F0] tracking-wider uppercase">
              İletişim & Konum
            </h4>
            <div className="space-y-2.5 text-xs text-[#A3B899]">
              <p className="leading-relaxed">
                {BUSINESS_INFO.address.fullAddress}
              </p>
              <p>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="font-bold text-[#FAF7F0] hover:text-[#E05A2B] transition-colors"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href={BUSINESS_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E05A2B] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Haritalarda Aç</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B899]">
          <p>© 2026 Brechdan. Tüm hakları saklıdır.</p>
          
          <div className="flex items-center gap-4">
            <span>Bahçelievler / Çankaya / Ankara</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#245842] hover:bg-[#E05A2B] text-white transition-colors"
              aria-label="Yukarı Çık"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
