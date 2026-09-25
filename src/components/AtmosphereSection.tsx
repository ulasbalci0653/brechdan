"use client";

import Link from "next/link";
import { Coffee, MapPin, Heart, Clock, Award, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function AtmosphereSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1B4332] text-[#FAF7F0] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-12 text-[#E05A2B]/30 text-5xl select-none pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-12 right-12 text-[#A3B899]/20 text-6xl select-none pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#E05A2B]/20 border border-[#E05A2B]/30">
            <span>✦</span>
            <span>BAHÇELİEVLER ATMOSFERİ</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bahçelievler'de Bir <br />
            <span className="text-[#E05A2B] italic">Sabah Klasiği.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A3B899] max-w-2xl mx-auto leading-relaxed">
            İyi bir kahvaltı, çıtır ekşi mayalı sandviçler ve acele etmeden keyifle oturabileceğiniz samimi bir mahalle masası. 
            Günün her saati taze demlenen çay ve sıcak lezzetler sizi bekliyor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={BUSINESS_INFO.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FAF7F0] text-[#1B4332] font-bold text-sm rounded-full shadow-lg hover:bg-[#E8F0EA] transition-all hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-[#E05A2B]" />
              <span>Bize Ulaşın / Yol Tarifi</span>
            </Link>

            <Link
              href="#menu"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-[#FAF7F0] border border-[#FAF7F0]/40 hover:border-[#FAF7F0] font-bold text-sm rounded-full transition-all"
            >
              <span>Menüyü Görüntüle</span>
            </Link>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#245842]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2D6A4F] hover:border-[#E05A2B] transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-[#E05A2B] text-white flex items-center justify-center font-bold text-sm mb-4 shadow">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF7F0] mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-[#A3B899] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
