"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Clock, Utensils, Star, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-cream-paper border-b border-[#E5DEC9]"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-12 left-10 text-[#E05A2B]/20 select-none pointer-events-none text-4xl font-serif">
        ✦
      </div>
      <div className="absolute bottom-20 right-12 text-[#1B4332]/15 select-none pointer-events-none text-5xl font-serif">
        ✦
      </div>
      <div className="absolute top-1/3 right-1/4 text-[#E05A2B]/15 select-none pointer-events-none text-3xl font-serif">
        ★
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#B7CDB9] text-[#1B4332] text-xs font-semibold tracking-wide shadow-sm">
              <span className="text-[#E05A2B] font-bold text-sm">✦</span>
              <span>BAHÇELİEVLER · ÇANKAYA · ANKARA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span className="text-[#5C675E] font-medium">09:00 - 21:30</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1B4332] leading-[1.08]">
              Günün En Güzel <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#E05A2B] italic">
                Isırığı.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#E05A2B]/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q50,0 100,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#3D4741] max-w-2xl leading-relaxed font-normal">
              Günlük taze hazırlanan <strong className="font-semibold text-[#1B4332]">ekşi mayalı ciabatta sandviçler</strong>, 
              özel konfi soslar, fırından ve tavadan sıcacık lezzetler ile <strong className="font-semibold text-[#1B4332]">zengin kahvaltı tabakları</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-[#FAF7F0] bg-[#1B4332] hover:bg-[#245842] rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Utensils className="w-4 h-4 text-[#FAF7F0]" />
                <span>Menüyü Keşfet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={BUSINESS_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#1B4332] bg-[#FAF7F0] hover:bg-[#E8F0EA] border-2 border-[#1B4332] rounded-full transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-[#E05A2B]" />
                <span>Yol Tarifi Al</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E5DEC9] w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  100%
                </span>
                <span className="text-xs text-[#5C675E] font-medium mt-0.5">
                  Ekşi Mayalı Ciabatta
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E05A2B]">
                  14+
                </span>
                <span className="text-xs text-[#5C675E] font-medium mt-0.5">
                  Özel Sandviç Çeşidi
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  4.8 ★
                </span>
                <span className="text-xs text-[#5C675E] font-medium mt-0.5">
                  Google Müşteri Puanı
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#FAF7F0] border-2 border-[#1B4332] p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* Vintage Card Ribbon */}
                <div className="absolute -top-1 -right-1 bg-[#E05A2B] text-[#FAF7F0] text-[11px] font-bold tracking-wider px-4 py-1.5 rounded-bl-xl uppercase shadow">
                  Özel Reçete
                </div>

                {/* Mascot Visual Display */}
                <div className="relative w-full aspect-square max-h-72 sm:max-h-80 mx-auto rounded-2xl bg-[#E8F0EA] border border-[#B7CDB9] flex items-center justify-center p-4 overflow-hidden group">
                  <Image
                    src="/images/mascot-eating.png"
                    alt="Brechdan Sandviç Keyfi Maskotu"
                    width={320}
                    height={320}
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F0]/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-[#E5DEC9] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1B4332]">Dana Tiftik & Ciabatta</span>
                    <span className="text-xs font-bold text-[#E05A2B]">380₺</span>
                  </div>
                </div>

                {/* Card Sub-Info */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E05A2B] animate-ping"></div>
                    <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                      Şu Anda Açık · Kahvaltı & Sandviç
                    </span>
                  </div>

                  <p className="text-xs text-[#5C675E] leading-relaxed">
                    Dana Tiftik, Roast Beef, Ev Yapımı Kavurma, Avokadolu & Hellimli Sandviçler ve zengin kahvaltı tabakları masanızda.
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E5DEC9] text-xs">
                    <span className="font-semibold text-[#1B4332]">Tüm Gün Servis</span>
                    <a
                      href={`tel:${BUSINESS_INFO.contact.phone}`}
                      className="font-bold text-[#E05A2B] hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {BUSINESS_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-[#1B4332] text-[#FAF7F0] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-[#2D6A4F] animate-bounce-slow">
                <Sparkles className="w-4 h-4 text-[#E05A2B]" />
                <div className="text-left">
                  <p className="text-[10px] text-[#A3B899] font-medium leading-none">Gurme Ekmek</p>
                  <p className="text-xs font-bold leading-tight">Ekşi Maya Ciabatta</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-[#FFFFFF] text-[#1B4332] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-[#E5DEC9]">
                <div className="w-7 h-7 rounded-full bg-[#E8F0EA] flex items-center justify-center font-bold text-xs text-[#1B4332]">
                  ★
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#5C675E] font-medium leading-none">Google Yorumları</p>
                  <p className="text-xs font-bold leading-tight">4.8 / 5.0 (200+)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
