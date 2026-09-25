"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Check, Flame, Leaf, Utensils } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";

export default function FeaturedProducts() {
  // Select signature items directly from verified menu
  const featuredIds = [
    "tiftik-sandvic",
    "kavurmali-sandvic",
    "roast-beef-sandvic",
    "hellim-sandvic",
    "avokadolu-sandvic",
    "izgara-tavuk-sandvic",
  ];

  const featuredItems = MENU_ITEMS.filter((item) => featuredIds.includes(item.id));

  return (
    <section id="favoriler" className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest">
              <span className="text-base">✦</span>
              <span>BRECHDAN İMZASI</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
              Öne Çıkan Sandviç Favorileri
            </h2>
            <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
              Her biri günlük taze pişen ekşi mayalı Ciabatta ekmeğinde, özel konfi soslar ve seçme malzemelerle hazırlanır.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1B4332] hover:text-[#E05A2B] group transition-colors"
            >
              <span>Tüm Sandviçleri Gör</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E5DEC9] hover:border-[#1B4332] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8F0EA] text-[#1B4332]">
                    {item.categoryName}
                  </span>

                  {item.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E05A2B]/10 text-[#E05A2B]">
                      <Sparkles className="w-3 h-3" />
                      {item.badge}
                    </span>
                  )}
                  {item.vegetarian && !item.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      <Leaf className="w-3 h-3" />
                      Vejetaryen
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B4332] group-hover:text-[#E05A2B] transition-colors mb-2.5">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C675E] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Ingredient Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-[#F4EFE6] text-[#3D4741] px-2 py-0.5 rounded-md border border-[#E5DEC9]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price & Action */}
                <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332]">
                      {item.price}
                    </span>
                    <span className="text-base font-bold text-[#1B4332]">₺</span>
                  </div>

                  <Link
                    href="#menu"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#FAF7F0] bg-[#1B4332] group-hover:bg-[#E05A2B] px-3.5 py-2 rounded-xl transition-all"
                  >
                    <span>Detay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Bar */}
        <div className="mt-12 rounded-2xl bg-[#E8F0EA] border border-[#B7CDB9] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B4332] text-[#FAF7F0] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-[#1B4332]">
                Sandviçlerimizde Ekşi Mayalı El Yapımı Ciabatta Ekmekleri Kullanılır
              </h4>
              <p className="text-xs text-[#5C675E]">
                Her sabah fırından taze çıkan çıtır dış kabuk ve hafif havadar doku.
              </p>
            </div>
          </div>

          <Link
            href="#sandvicler"
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-[#FAF7F0] bg-[#1B4332] hover:bg-[#245842] rounded-full transition-all"
          >
            Tüm Sandviçleri İncele
          </Link>
        </div>

      </div>
    </section>
  );
}
