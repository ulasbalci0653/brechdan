"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E05A2B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#E05A2B]/10">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SIKÇA SORULAN SORULAR</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332]">
            Merak Edilenler
          </h2>

          <p className="text-xs sm:text-sm text-[#5C675E]">
            Brechdan menüsü, çalışma saatleri ve hizmetlerimiz hakkında bilmek istedikleriniz.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E5DEC9] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1B4332]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#E8F0EA] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1B4332] text-white" : "text-[#1B4332]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#5C675E] leading-relaxed border-t border-[#F4EFE6] pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
