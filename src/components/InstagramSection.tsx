"use client";

import Link from "next/link";
import { Instagram, Sparkles, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function InstagramSection() {
  const posts = [
    {
      title: "Dana Tiftik Sandviç",
      caption: "Kuru domates aromalı sarımsak konfi et sos ve trüflü mayonez ile.",
      likes: "340+",
      category: "İmza Sandviç",
      bgClass: "from-[#1B4332] to-[#245842]",
    },
    {
      title: "Lokal Kahvaltı Tabağı",
      subtitle: "Kızarmış ekşi maya ekmeği, sucuk, pastırma ve kupa çay.",
      likes: "410+",
      category: "Kahvaltı",
      bgClass: "from-[#E05A2B] to-[#D9683E]",
    },
    {
      title: "Avokado & Suda Mozzarella",
      subtitle: "Akdeniz yeşillikleri ve taze zeytinyağı ile hafif lezzet.",
      likes: "290+",
      category: "Yeşil Isırık",
      bgClass: "from-[#2D6A4F] to-[#52796F]",
    },
    {
      title: "Tavadan Şarküteri Yumurta",
      subtitle: "Sucuk, pastırma ve kavurmanın sıcak tava buluşması.",
      likes: "360+",
      category: "Tavadan",
      bgClass: "from-[#1C1F1D] to-[#3D4741]",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#E05A2B]/10">
            <Instagram className="w-3.5 h-3.5" />
            <span>INSTAGRAM AKIŞI</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332]">
            {BUSINESS_INFO.contact.instagramHandle}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C675E]">
            Günlük taze sunumlarımızı, yeni menü lezzetlerimizi ve Bahçelievler atmosferini takip edin.
          </p>
        </div>

        {/* 4 Instagram Feed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={BUSINESS_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5DEC9] bg-[#FFFFFF] p-5 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#E8F0EA] text-[#1B4332]">
                    {post.category}
                  </span>
                  <Instagram className="w-4 h-4 text-[#5C675E] group-hover:text-[#E05A2B] transition-colors" />
                </div>

                <div className={`h-36 rounded-xl bg-gradient-to-br ${post.bgClass} p-4 flex flex-col justify-end text-white relative overflow-hidden shadow-inner`}>
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    ✦
                  </div>
                  <h4 className="font-serif text-lg font-bold leading-tight drop-shadow-sm">
                    {post.title}
                  </h4>
                </div>

                <p className="text-xs text-[#5C675E] leading-relaxed line-clamp-2">
                  {post.caption || post.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F4EFE6] flex items-center justify-between text-xs text-[#5C675E]">
                <span className="flex items-center gap-1 text-[#E05A2B] font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                </span>
                <span className="font-bold text-[#1B4332] group-hover:underline flex items-center gap-1">
                  Profili Aç <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Big Instagram CTA */}
        <div className="text-center">
          <Link
            href={BUSINESS_INFO.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1B4332] hover:bg-[#245842] text-[#FAF7F0] font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <Instagram className="w-4 h-4 text-[#E05A2B]" />
            <span>Instagram'da Takip Et</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
