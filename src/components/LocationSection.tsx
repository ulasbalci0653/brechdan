"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function LocationSection() {
  return (
    <section id="konum" className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest">
            <span>✦</span>
            <span>KOLAY ULAŞIM & KONUM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
            Bahçelievler'de Bizi Ziyaret Edin
          </h2>
          <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
            Şevket Süreyya Aydemir Caddesi'nde, merkezi ve sakin bir konumdayız. 
            Beşevler ve Bahçelievler metro duraklarından yürüyerek rahatlıkla ulaşabilirsiniz.
          </p>
        </div>

        {/* Location Grid: Info Cards + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* Address Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E5DEC9] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F0EA] text-[#1B4332] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1B4332]">Açık Adres</h3>
                  <span className="text-[11px] font-semibold text-[#E05A2B]">Bahçelievler / Çankaya</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#3D4741] font-medium leading-relaxed">
                {BUSINESS_INFO.address.fullAddress}
              </p>
              <div className="pt-2">
                <Link
                  href={BUSINESS_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4332] hover:text-[#E05A2B] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E05A2B]" />
                  <span>Google Maps'te Yol Tarifi Al</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E5DEC9] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F0EA] text-[#1B4332] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1B4332]">Çalışma Saatleri</h3>
                  <span className="text-[11px] font-semibold text-[#2D6A4F]">Haftanın 7 Günü Açık</span>
                </div>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#1A1D1B] font-semibold">
                  <span>Pazartesi – Pazar</span>
                  <span className="font-bold text-[#1B4332] bg-[#F4EFE6] px-2.5 py-0.5 rounded-md">
                    09:00 – 21:30
                  </span>
                </div>
                <p className="text-[11px] text-[#5C675E]">
                  Kahvaltı ve sandviç servisi gün boyu kesintisiz devam etmektedir.
                </p>
              </div>
            </div>

            {/* Phone & Contact Card */}
            <div className="bg-[#1B4332] text-[#FAF7F0] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E05A2B] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF7F0]">Telefon & İletişim</h3>
                  <span className="text-[11px] text-[#A3B899]">Bilgi ve Rezervasyon</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF7F0] hover:bg-[#FFFFFF] text-[#1B4332] font-bold text-xs rounded-xl transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E05A2B]" />
                  <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>
                <a
                  href={BUSINESS_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#2D6A4F] hover:bg-[#245842] text-[#FAF7F0] font-bold text-xs rounded-xl border border-[#FAF7F0]/20 transition-all"
                >
                  <span>Instagram DM</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border-2 border-[#1B4332] shadow-xl relative bg-[#E8F0EA]">
            <iframe
              title="Brechdan Bahçelievler Harita Konumu"
              src="https://maps.google.com/maps?q=39.9286583,32.8251885&hl=tr&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", height: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Float Overlay on Map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FAF7F0]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E5DEC9] shadow-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E05A2B] animate-ping shrink-0"></div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#1B4332]">Brechdan Breakfast & Sandwich</p>
                <p className="text-[10px] text-[#5C675E]">Bahçelievler / Çankaya / Ankara</p>
              </div>
              <Link
                href={BUSINESS_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[10px] font-bold text-[#FAF7F0] bg-[#1B4332] px-3 py-1.5 rounded-lg hover:bg-[#245842] shrink-0"
              >
                Haritada Aç
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
