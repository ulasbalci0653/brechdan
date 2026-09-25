"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Utensils, Sparkles, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import OpenStatusBadge from "@/components/OpenStatusBadge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#151816]"
    >
      {/* Full-Width Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Brechdan Artisan Sandviç ve Kahvaltı Masası"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transform animate-pulse-slow"
          quality={90}
        />
        {/* Multi-layered Vignette & Dark Overlay for Optimal Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111413] via-[#111413]/70 to-[#111413]/55" />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Top Right Live Open/Closed Status Badge */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 lg:right-12 z-20">
        <OpenStatusBadge />
      </div>

      {/* Decorative Star Accents */}
      <div className="absolute top-28 left-8 sm:left-16 text-[#E05A2B]/40 select-none pointer-events-none text-3xl sm:text-4xl font-serif z-10">
        ✦
      </div>
      <div className="absolute bottom-28 left-12 sm:left-24 text-[#FAF7F0]/25 select-none pointer-events-none text-2xl font-serif z-10">
        ★
      </div>
      <div className="absolute bottom-28 right-12 sm:right-24 text-[#E05A2B]/40 select-none pointer-events-none text-3xl font-serif z-10">
        ✦
      </div>

      {/* Centered Hero Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-7">
        
        {/* Top Location & Info Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FAF7F0] text-xs font-semibold tracking-wider shadow-lg">
          <span className="text-[#E05A2B] font-bold text-sm">✦</span>
          <span className="uppercase text-[11px] sm:text-xs">
            BAHÇELİEVLER / ANKARA · ARTISAN BREAKFAST & SANDWICH
          </span>
          <span className="text-[#E05A2B] font-bold text-sm">✦</span>
        </div>

        {/* Brand Big Serif Title & Subtitle */}
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-[#FAF7F0] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-none">
            BRECHDAN
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#E05A2B] uppercase drop-shadow-md">
            KAHVALTI & ARTISAN SANDVİÇ
          </p>
        </div>

        {/* Tagline in Quotes */}
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FAF7F0] italic font-medium drop-shadow-md leading-snug">
            “Günün En Güzel Isırığı.”
          </p>
        </div>

        {/* Subtitle / Description Text */}
        <p className="text-sm sm:text-base md:text-lg text-[#FAF7F0]/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
          Bahçelievler’in kalbinde; günlük taze hazırlanan <strong className="font-semibold text-white">ekşi mayalı ciabatta sandviçler</strong>, 
          özel konfi soslar, fırından ve tavadan sıcacık lezzetler ile <strong className="font-semibold text-white">zengin kahvaltı tabakları</strong>.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-[#FAF7F0] bg-[#E05A2B] hover:bg-[#C94B20] rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 border border-[#E05A2B]/80"
          >
            <Utensils className="w-4 h-4 text-[#FAF7F0]" />
            <span>Menüyü Keşfet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={BUSINESS_INFO.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F0] bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 hover:border-white/50 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <MapPin className="w-4 h-4 text-[#E05A2B]" />
            <span>Yol Tarifi Al</span>
          </Link>
        </div>

        {/* Bottom Feature & Category Bar */}
        <div className="pt-8 sm:pt-10 w-full">
          <div className="py-3 px-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs text-[#FAF7F0]/85 font-medium tracking-wide uppercase">
            <span className="flex items-center gap-1.5 text-[#E05A2B] font-semibold">
              <span>●</span> BAHÇELİEVLER / ÇANKAYA
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>EKŞİ MAYALI CİABATTA</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>KAHVALTI TABAKLARI</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>TAVADAN KLASİKLER</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-[#FAF7F0] font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E05A2B]" /> 09:00 - 21:30
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
