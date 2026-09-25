"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Sparkles, Utensils, Heart, Coffee } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Ekşi Mayalı Tiftik & Ciabatta",
      subtitle: "Saatlerce pişen dana tiftik & sarımsak konfi et sos",
      tag: "İmza Sandviç",
      bgClass: "bg-[#1B4332] text-[#FAF7F0]",
      icon: "sandwich",
    },
    {
      title: "Lokal Kahvaltı Tabağı",
      subtitle: "Sucuk, pastırma, çırpılmış yumurta ve kupa çay",
      tag: "Kahvaltı Şöleni",
      bgClass: "bg-[#E05A2B] text-[#FAF7F0]",
      icon: "breakfast",
    },
    {
      title: "Taze Avokado & Izgara Hellim",
      subtitle: "Akdeniz yeşillikleri ve taze soslar ile hafif lezzetler",
      tag: "Yeşil Isırıklar",
      bgClass: "bg-[#2D6A4F] text-[#FAF7F0]",
      icon: "leaf",
    },
    {
      title: "Tavadan Sıcak Yumurtalar",
      subtitle: "Kasap sucuklu ve kavurmalı sahanda yumurta keyfi",
      tag: "Tavadan",
      bgClass: "bg-[#F4EFE6] text-[#1B4332]",
      icon: "pan",
    },
  ];

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest">
              <span>✦</span>
              <span>GÖRSEL ŞÖLEN</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
              Brechdan Sofrasından Kareler
            </h2>
            <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
              Bahçelievler'de her tabakta özen, her ısırıkta lezzet. Taze malzemeler ve artisan sunumlar.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href={BUSINESS_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F0] hover:bg-[#FFFFFF] text-[#1B4332] border border-[#1B4332] text-xs font-bold transition-all hover:scale-105 shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#E05A2B]" />
              <span>@brechdanbreakfast Takip Et</span>
            </Link>
          </div>
        </div>

        {/* Editorial Asymmetric Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero Showcase Card (7 cols) */}
          <div className="md:col-span-7 bg-[#FAF7F0] rounded-3xl p-8 border-2 border-[#1B4332] shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5DEC9]">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#E05A2B] uppercase">
                  Orijinal Menü Tasarımı
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  Brechdan Maskotu & Retro Ruh
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-white">
                ★
              </div>
            </div>

            <div className="my-6 relative rounded-2xl bg-[#E8F0EA] border border-[#B7CDB9] p-6 flex items-center justify-center">
              <Image
                src="/images/mascot-eating.png"
                alt="Brechdan Sandviç Maskotu"
                width={300}
                height={300}
                className="object-contain max-h-60 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-2">
              <p className="font-serif text-lg font-bold text-[#1B4332]">
                "Her sandviç, günlük hazırlanan ekşi mayalı Ciabatta ekmeğimizle bir sanat eserine dönüşür."
              </p>
              <p className="text-xs text-[#5C675E]">
                Bahçelievler'in kalbinde, butik ve samimi gastronomi adresi.
              </p>
            </div>
          </div>

          {/* Right Column Grid (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Card 1: Breakfast Platter highlight */}
            <div className="bg-[#1B4332] text-[#FAF7F0] rounded-3xl p-7 shadow-lg border border-[#2D6A4F] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#E05A2B] text-[#FAF7F0] uppercase">
                    Kahvaltı Şöleni
                  </span>
                  <Coffee className="w-4 h-4 text-[#A3B899]" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                  Zengin Kahvaltı Tabakları
                </h4>
                <p className="text-xs text-[#A3B899] leading-relaxed">
                  Lokal, Soft ve Grill kahvaltı seçenekleri. Yanında sıcacık taze kupa çay ikramı ile.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2D6A4F] flex items-center justify-between text-xs font-semibold text-[#FAF7F0]">
                <span>Lokal · Soft · Grill</span>
                <span className="font-serif text-sm font-bold text-[#E05A2B]">350₺ - 400₺</span>
              </div>
            </div>

            {/* Card 2: Fresh Sandwiches highlight */}
            <div className="bg-[#FFFFFF] text-[#1A1D1B] rounded-3xl p-7 shadow-lg border border-[#E5DEC9] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#E8F0EA] text-[#1B4332] uppercase">
                    Yeşil & Retro Isırıklar
                  </span>
                  <Utensils className="w-4 h-4 text-[#E05A2B]" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1B4332] mb-2">
                  14+ Artisan Sandviç Çeşidi
                </h4>
                <p className="text-xs text-[#5C675E] leading-relaxed">
                  Dana Tiftik, Roast Beef, Hellim, Avokado, Mozzarella ve 4 Peynirli özel reçeteler.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F4EFE6] flex items-center justify-between text-xs">
                <span className="font-medium text-[#5C675E]">Kişiselleştirilebilir Ekstralar</span>
                <Link
                  href="#menu"
                  className="font-bold text-[#1B4332] hover:text-[#E05A2B] hover:underline"
                >
                  Menüye Göz At →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
