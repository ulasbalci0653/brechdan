"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Sparkles,
  Leaf,
  Coffee,
  Flame,
  PlusCircle,
  Check,
  ChevronRight,
  Filter,
} from "lucide-react";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  SANDWICH_EXTRAS,
  BREAKFAST_EXTRAS,
  DRINKS,
  MenuCategoryKey,
  MenuItem,
} from "@/data/menu";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyVegetarian, setOnlyVegetarian] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Vegetarian filter
      if (onlyVegetarian && !item.vegetarian) {
        return false;
      }
      // Popular filter
      if (onlyPopular && !item.popular) {
        return false;
      }
      // Search query match
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const tagMatch = item.tags?.some((t) => t.toLowerCase().includes(query));
        return nameMatch || descMatch || tagMatch;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, onlyVegetarian, onlyPopular]);

  // Group filtered items by category if "all" is selected
  const groupedCategories = useMemo(() => {
    if (selectedCategory !== "all") {
      const catInfo = MENU_CATEGORIES.find((c) => c.key === selectedCategory);
      return catInfo ? [catInfo] : [];
    }
    return MENU_CATEGORIES.filter((c) => c.key !== "ekstralar" && c.key !== "icecekler");
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#E05A2B]/10">
            <span>✦</span>
            <span>BRECHDAN LEZZETLERİ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
            Güncel Menü & Fiyatlar
          </h2>
          <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
            Bahçelievler işletmemizde servis edilen el yapımı sandviçler, kahvaltı tabakları, tavadan lezzetler ve içecekler.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#5C675E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Menüde ara... (Örn: Tiftik, Avokado, Omlet, Sucuk, Ciabatta)"
              className="w-full pl-12 pr-4 py-3.5 bg-[#FFFFFF] border border-[#E5DEC9] rounded-2xl text-sm text-[#1A1D1B] placeholder-[#8A958E] focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#5C675E] hover:text-[#1B4332] px-2 py-1 rounded-md bg-[#F4EFE6]"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Quick Filters Pill bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlyVegetarian(!onlyVegetarian)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  onlyVegetarian
                    ? "bg-[#2D6A4F] text-[#FAF7F0] border-[#2D6A4F]"
                    : "bg-[#FFFFFF] text-[#3D4741] border-[#E5DEC9] hover:bg-[#E8F0EA]"
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>Vejetaryen ({MENU_ITEMS.filter((i) => i.vegetarian).length})</span>
              </button>

              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  onlyPopular
                    ? "bg-[#E05A2B] text-[#FAF7F0] border-[#E05A2B]"
                    : "bg-[#FFFFFF] text-[#3D4741] border-[#E5DEC9] hover:bg-[#FBEBE4]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Favoriler</span>
              </button>
            </div>

            <span className="text-xs text-[#5C675E] font-medium">
              {filteredItems.length} ürün listeleniyor
            </span>
          </div>
        </div>

        {/* Category Tabs (Horizontally scrollable on mobile) */}
        <div className="max-w-6xl mx-auto mb-12 overflow-x-auto pb-3 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max justify-start md:justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#1B4332] text-[#FAF7F0] shadow-md scale-105"
                  : "bg-[#FFFFFF] text-[#3D4741] border border-[#E5DEC9] hover:bg-[#E8F0EA]"
              }`}
            >
              Tüm Menü
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? "bg-[#1B4332] text-[#FAF7F0] shadow-md scale-105"
                    : "bg-[#FFFFFF] text-[#3D4741] border border-[#E5DEC9] hover:bg-[#E8F0EA]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Menu Products Listing */}
        {selectedCategory !== "ekstralar" && selectedCategory !== "icecekler" && (
          <div className="max-w-6xl mx-auto space-y-16">
            {groupedCategories.map((cat) => {
              const catItems = filteredItems.filter((i) => i.category === cat.key);
              if (catItems.length === 0) return null;

              return (
                <div key={cat.key} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b-2 border-[#1B4332]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#E05A2B] text-lg font-bold">✦</span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332] uppercase tracking-wide">
                          {cat.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5C675E] mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>

                    {cat.key.includes("isiriklar") && (
                      <span className="text-[11px] font-semibold text-[#E05A2B] bg-[#E05A2B]/10 px-3 py-1 rounded-full shrink-0">
                        Ekşi Mayalı Ciabatta ile
                      </span>
                    )}
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {catItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E5DEC9] shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Item Title & Price Row */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="space-y-1">
                              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1A1D1B]">
                                {item.name}
                              </h4>
                              {item.badge && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E05A2B]/10 text-[#E05A2B]">
                                  ★ {item.badge}
                                </span>
                              )}
                              {item.vegetarian && !item.badge && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                  <Leaf className="w-3 h-3" /> Vejetaryen
                                </span>
                              )}
                            </div>

                            {/* Price Badge */}
                            <div className="shrink-0 px-3 py-1.5 rounded-xl bg-[#E8F0EA] border border-[#B7CDB9] text-right">
                              <span className="font-serif text-lg sm:text-xl font-bold text-[#1B4332]">
                                {item.price}
                              </span>
                              <span className="text-xs font-bold text-[#1B4332] ml-0.5">₺</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-[#5C675E] leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        {/* Ingredient Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-2 border-t border-[#F4EFE6]">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium text-[#5C675E] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#E5DEC9]/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-12 bg-[#FFFFFF] rounded-3xl border border-[#E5DEC9] p-8">
                <p className="font-serif text-xl font-bold text-[#1B4332]">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </p>
                <p className="text-xs text-[#5C675E] mt-1">
                  Arama terimini değiştirerek veya filtreleri temizleyerek tekrar deneyebilirsiniz.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setOnlyVegetarian(false);
                    setOnlyPopular(false);
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-4 py-2 bg-[#1B4332] text-[#FAF7F0] text-xs font-bold rounded-full"
                >
                  Filtreleri Sıfırla
                </button>
              </div>
            )}
          </div>
        )}

        {/* Dedicated Ekstralar Section */}
        {(selectedCategory === "all" || selectedCategory === "ekstralar") && (
          <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-[#E5DEC9]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#E05A2B] text-lg font-bold">✦</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332] uppercase tracking-wide">
                EKSTRALAR
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5C675E] mb-8">
              Sandviçlerinizi veya kahvaltı tabaklarınızı dilediğiniz gibi zenginleştirin.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Sandviç Ekstraları */}
              <div className="bg-[#E05A2B]/10 rounded-3xl p-6 sm:p-8 border border-[#E05A2B]/30">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E05A2B]/20">
                  <h4 className="font-serif text-xl font-bold text-[#E05A2B] uppercase tracking-wider">
                    Sandviç Ekstraları
                  </h4>
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#E05A2B] text-[#FAF7F0] rounded-full">
                    {SANDWICH_EXTRAS.length} Çeşit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {SANDWICH_EXTRAS.map((extra) => (
                    <div
                      key={extra.name}
                      className="flex items-center justify-between py-1.5 border-b border-[#E05A2B]/15 text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-[#1A1D1B]">{extra.name}</span>
                      <span className="font-serif font-bold text-[#E05A2B] bg-[#FFFFFF] px-2 py-0.5 rounded-md shadow-xs">
                        {extra.price}₺
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kahvaltı Ekstraları */}
              <div className="bg-[#E8F0EA] rounded-3xl p-6 sm:p-8 border border-[#B7CDB9]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#B7CDB9]">
                  <h4 className="font-serif text-xl font-bold text-[#1B4332] uppercase tracking-wider">
                    Kahvaltı Ekstraları
                  </h4>
                  <span className="text-xs font-bold px-2.5 py-1 bg-[#1B4332] text-[#FAF7F0] rounded-full">
                    {BREAKFAST_EXTRAS.length} Çeşit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {BREAKFAST_EXTRAS.map((extra) => (
                    <div
                      key={extra.name}
                      className="flex items-center justify-between py-1.5 border-b border-[#B7CDB9]/50 text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-[#1A1D1B]">{extra.name}</span>
                      <span className="font-serif font-bold text-[#1B4332] bg-[#FFFFFF] px-2 py-0.5 rounded-md shadow-xs">
                        {extra.price}₺
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Dedicated İçecekler Section */}
        {(selectedCategory === "all" || selectedCategory === "icecekler") && (
          <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-[#E5DEC9]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#E05A2B] text-lg font-bold">✦</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332] uppercase tracking-wide">
                İÇECEKLER
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5C675E] mb-8">
              Taze sıkılmış meyve suları, sıcak kahveler, geleneksel çaylar ve serinletici içecekler.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DRINKS.map((drink) => (
                <div
                  key={drink.name}
                  className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E5DEC9] shadow-sm hover:border-[#1B4332] transition-all flex items-center justify-between"
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-base font-bold text-[#1A1D1B]">
                        {drink.name}
                      </h4>
                      {drink.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#E05A2B]/10 text-[#E05A2B] rounded">
                          {drink.badge}
                        </span>
                      )}
                    </div>
                    {drink.variants && (
                      <p className="text-[11px] text-[#5C675E] mt-0.5">({drink.variants})</p>
                    )}
                  </div>

                  <div className="shrink-0 px-2.5 py-1 rounded-lg bg-[#E8F0EA] border border-[#B7CDB9]">
                    <span className="font-serif font-bold text-[#1B4332] text-sm">
                      {drink.price}₺
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
