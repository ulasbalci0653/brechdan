"use client";

import Link from "next/link";
import { Utensils, Phone, MapPin, Instagram } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-t border-[#E5DEC9] py-2 px-4 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Menu */}
        <Link
          href="#menu"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1B4332] active:bg-[#E8F0EA]"
        >
          <Utensils className="w-4 h-4 text-[#1B4332]" />
          <span className="text-[10px] font-bold mt-1">Menü</span>
        </Link>

        {/* Call */}
        <a
          href={`tel:${BUSINESS_INFO.contact.phone}`}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1B4332] active:bg-[#E8F0EA]"
        >
          <Phone className="w-4 h-4 text-[#E05A2B]" />
          <span className="text-[10px] font-bold mt-1">Ara</span>
        </a>

        {/* Directions */}
        <Link
          href={BUSINESS_INFO.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1B4332] active:bg-[#E8F0EA]"
        >
          <MapPin className="w-4 h-4 text-[#1B4332]" />
          <span className="text-[10px] font-bold mt-1">Yol Tarifi</span>
        </Link>

        {/* Instagram */}
        <Link
          href={BUSINESS_INFO.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1B4332] active:bg-[#E8F0EA]"
        >
          <Instagram className="w-4 h-4 text-[#E05A2B]" />
          <span className="text-[10px] font-bold mt-1">Instagram</span>
        </Link>
      </div>
    </div>
  );
}
