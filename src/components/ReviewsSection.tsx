"use client";

import Link from "next/link";
import { Star, MapPin, MessageSquareQuote, CheckCircle2, ArrowRight } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { BUSINESS_INFO } from "@/data/business";

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest">
              <span>✦</span>
              <span>GERÇEK MİSAFİR DENEYİMLERİ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight">
              Misafirlerimiz Ne Diyor?
            </h2>
            <p className="text-sm sm:text-base text-[#5C675E] leading-relaxed">
              Google Maps üzerindeki gerçek misafir değerlendirmeleri ve sandviç tutkunlarının yorumları.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <div className="flex flex-col text-right">
              <div className="flex items-center justify-end gap-1 text-[#E05A2B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#1B4332] mt-0.5">
                4.8 / 5.0 Google Puanı (200+)
              </span>
            </div>

            <Link
              href={BUSINESS_INFO.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#E8F0EA] hover:bg-[#D5E4D8] text-[#1B4332] text-xs font-bold border border-[#B7CDB9] transition-all shrink-0"
            >
              <span>Haritada Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5DEC9] shadow-sm hover:border-[#1B4332] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-[#E05A2B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#5C675E]">{review.date}</span>
                </div>

                {/* Highlight Quote */}
                <p className="font-serif text-base font-bold text-[#1B4332] mb-2 leading-snug">
                  "{review.highlight}"
                </p>

                {/* Full Review Comment */}
                <p className="text-xs text-[#5C675E] leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              {/* Author & Verified Dish */}
              <div className="pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1A1D1B]">{review.author}</h4>
                  <span className="text-[10px] text-[#2D6A4F] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Doğrulanmış Misafir
                  </span>
                </div>

                {review.dish && (
                  <span className="text-[10px] font-semibold text-[#E05A2B] bg-[#E05A2B]/10 px-2 py-0.5 rounded">
                    {review.dish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
