"use client";

import Link from "next/link";
import { Coffee, UtensilsCrossed, Flame, Sparkles, ArrowRight, Check } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";

export default function BreakfastSection() {
  const breakfastPlatters = MENU_ITEMS.filter((i) => i.category === "kahvalti-tabaklari");
  const tavadanItems = MENU_ITEMS.filter((i) => i.category === "tavadan-klasikler");
  const omletItems = MENU_ITEMS.filter((i) => i.category === "kabaran-klasikler");

  return (
    <section id="kahvalti" className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#E05A2B]/10">
            <span>✦</span>
            <span>GÜN BOYU KAHVALTI KEYFİ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
            Sabah Brechdan'da Başlar.
          </h2>
          <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
            Kızarmış ekşi mayalı ekmekler, çırpılmış veya sahanda sıcak yumurtalar, seçme şarküteri ve 
            kupa çay ikramlı zengin kahvaltı tabaklarımızla güne güçlü bir başlangıç yapın.
          </p>
        </div>

        {/* 3 Main Breakfast Platters Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {breakfastPlatters.map((platter) => (
            <div
              key={platter.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                platter.id === "lokal-kahvalti-tabagi"
                  ? "bg-[#1B4332] text-[#FAF7F0] shadow-2xl border-2 border-[#2D6A4F] scale-100 md:-translate-y-2"
                  : "bg-[#FFFFFF] text-[#1A1D1B] border border-[#E5DEC9] shadow-md hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                    platter.id === "lokal-kahvalti-tabagi"
                      ? "bg-[#E05A2B] text-[#FAF7F0]"
                      : "bg-[#E8F0EA] text-[#1B4332]"
                  }`}
                >
                  {platter.badge || "Kahvaltı Tabağı"}
                </span>

                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold ${
                    platter.id === "lokal-kahvalti-tabagi" ? "text-[#A3B899]" : "text-[#E05A2B]"
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  Kupa Çay Dahil
                </span>
              </div>

              {/* Title & Price */}
              <div className="mb-6">
                <h3
                  className={`font-serif text-2xl sm:text-3xl font-bold mb-3 ${
                    platter.id === "lokal-kahvalti-tabagi" ? "text-[#FAF7F0]" : "text-[#1B4332]"
                  }`}
                >
                  {platter.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-serif text-3xl sm:text-4xl font-bold ${
                      platter.id === "lokal-kahvalti-tabagi" ? "text-[#E05A2B]" : "text-[#1B4332]"
                    }`}
                  >
                    {platter.price}
                  </span>
                  <span className="text-lg font-bold">₺</span>
                </div>
              </div>

              {/* Detailed Contents */}
              <div className="grow space-y-4 mb-8">
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    platter.id === "lokal-kahvalti-tabagi" ? "text-[#FAF7F0]/90" : "text-[#5C675E]"
                  }`}
                >
                  {platter.description}
                </p>

                {platter.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {platter.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-md ${
                          platter.id === "lokal-kahvalti-tabagi"
                            ? "bg-[#2D6A4F] text-[#FAF7F0]"
                            : "bg-[#F4EFE6] text-[#1B4332]"
                        }`}
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <Link
                href="#menu"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  platter.id === "lokal-kahvalti-tabagi"
                    ? "bg-[#FAF7F0] text-[#1B4332] hover:bg-[#E8F0EA]"
                    : "bg-[#1B4332] text-[#FAF7F0] hover:bg-[#245842]"
                }`}
              >
                <span>Menüde İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Tavadan Klasikler & Kabaran Omletler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Tavadan Klasikler */}
          <div className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 border border-[#E5DEC9] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5DEC9]">
              <div className="w-10 h-10 rounded-full bg-[#E05A2B]/15 text-[#E05A2B] flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                  Tavadan Klasikler
                </h3>
                <p className="text-xs text-[#5C675E]">
                  Tereyağında sıcak tavada pişen geleneksel yumurtalar
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {tavadanItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between pb-3 border-b border-[#F4EFE6] last:border-0 last:pb-0"
                >
                  <div className="pr-4">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1A1D1B] hover:text-[#1B4332]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#5C675E]">{item.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-lg font-bold text-[#1B4332]">
                      {item.price}₺
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Kabaran Klasikler (Omletler) */}
          <div className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 border border-[#E5DEC9] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5DEC9]">
              <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1B4332]">
                  Kabaran Klasikler
                </h3>
                <p className="text-xs text-[#5C675E]">
                  Domates, salatalık, zeytin ve yeşillik eşliğinde taze omletler
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {omletItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between pb-3 border-b border-[#F4EFE6] last:border-0 last:pb-0"
                >
                  <div className="pr-4">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1A1D1B] hover:text-[#1B4332]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#5C675E]">{item.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-lg font-bold text-[#1B4332]">
                      {item.price}₺
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
