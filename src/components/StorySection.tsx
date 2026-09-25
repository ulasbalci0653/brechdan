"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, Heart, Award, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function StorySection() {
  const pillars = [
    {
      title: "Ekşi Mayalı Ciabatta",
      description:
        "Uzun fermantasyonla hazırlanan, dışı çıtır içi gözenekli ve hafif el yapımı artisan ekmeklerimiz her sabah taze fırınlanır.",
    },
    {
      title: "İmza Konfi & Gurme Soslar",
      description:
        "Kuru domates aromalı sarımsak konfi et sos, maydanozlu sarımsak konfi, trüflü mayonez ve ev yapımı lutenitsa ile zenginleştirilir.",
    },
    {
      title: "Özenle Seçilen Şarküteri",
      description:
        "Saatlerce fırınlanıp tiftiklenen dana eti, geleneksel ev yapımı kavurma, roast beef ve premium şarküteri çeşitleri.",
    },
    {
      title: "Taze & Doğal Malzemeler",
      description:
        "Suda mozzarella, İzmir tulum, eski kaşar, ızgara hellim ve taptaze Akdeniz yeşillikleriyle hazırlanan dengeli tabaklar.",
    },
  ];

  return (
    <section id="sandvicler" className="py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#E5DEC9] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-[#E05A2B]/20 text-4xl select-none">✦</div>
      <div className="absolute bottom-10 left-10 text-[#1B4332]/15 text-5xl select-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Outer Decorative Frame */}
              <div className="rounded-3xl bg-[#FAF7F0] border-2 border-[#1B4332] p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5DEC9]">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-[#E05A2B] uppercase">
                      Artisan Standart
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B4332]">
                      Ekmekten Fazlası
                    </h3>
                  </div>
                  <span className="text-2xl">✨</span>
                </div>

                {/* Mascot / Bread Visual */}
                <div className="relative aspect-4/3 rounded-2xl bg-[#E8F0EA] border border-[#B7CDB9] flex items-center justify-center p-6 overflow-hidden">
                  <Image
                    src="/images/mascot-chef-pan.png"
                    alt="Brechdan Şef Maskotu"
                    width={280}
                    height={280}
                    className="object-contain max-h-full"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#FAF7F0]/95 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center text-xs font-bold text-[#1B4332] border border-[#E5DEC9]">
                    "İyi bir sandviç, doğru ekmek ve sabırla pişmiş etle başlar."
                  </div>
                </div>

                {/* Feature checklist */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                    <CheckCircle2 className="w-4 h-4 text-[#E05A2B] shrink-0" />
                    <span>Katkısız ve Doğal Mayalanma Süreci</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                    <CheckCircle2 className="w-4 h-4 text-[#E05A2B] shrink-0" />
                    <span>Özel Reçeteli Konfi Soslar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                    <CheckCircle2 className="w-4 h-4 text-[#E05A2B] shrink-0" />
                    <span>Anında Sıcak & Taze Hazırlanış</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#1B4332] text-[#FAF7F0] p-4 rounded-2xl shadow-xl border border-[#2D6A4F] max-w-xs">
                <p className="font-serif text-sm font-bold text-[#FAF7F0]">
                  Günün Her Saati Taze
                </p>
                <p className="text-[11px] text-[#A3B899] mt-0.5">
                  Bahçelievler'de butik ve kaliteli sandviç anlayışı.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest">
              <span className="text-base">✦</span>
              <span>BRECHDAN FELSEFESİ</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
              Her Şey İyi Bir <br />
              <span className="text-[#E05A2B] italic">Ekmekle Başlar.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3D4741] leading-relaxed">
              Brechdan sıradan bir sandviççi veya hızlı tüketim mekanı değildir. Bizim için bir sandviç, 
              ekşi mayanın sabırlı fermantasyonundan etin saatlerce kısık ateşte aromatik otlarla tiftiklenmesine kadar 
              uzanan butik bir gastronomi hikayesidir.
            </p>

            <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
              Kendi fırınımızdan çıkan çıtır kabuklu Ciabatta ekmekleri; kuru domates aromalı sarımsak konfi et sosumuz, 
              trüflü mayonezimiz ve taze Akdeniz yeşillikleriyle buluşarak unutulmaz bir lezzet dengesi oluşturur.
            </p>

            {/* 4 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-[#FAF7F0] rounded-xl p-4 border border-[#E5DEC9] shadow-sm hover:border-[#1B4332] transition-colors"
                >
                  <h4 className="font-serif text-base font-bold text-[#1B4332] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#5C675E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-[#245842] text-[#FAF7F0] font-bold text-xs rounded-full shadow transition-all hover:scale-105"
              >
                <span>Sandviç Menüsünü Aç</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#kahvalti"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] hover:bg-[#FAF7F0] text-[#1B4332] border border-[#1B4332] font-bold text-xs rounded-full transition-all"
              >
                <span>Kahvaltı Dünyasını Keşfet</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
