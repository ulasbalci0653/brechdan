"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MapPin, Phone, Instagram, Sparkles, UtensilsCrossed } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Favoriler", href: "#favoriler" },
    { name: "Sandviçler", href: "#sandvicler" },
    { name: "Kahvaltı", href: "#kahvalti" },
    { name: "Tam Menü", href: "#menu" },
    { name: "Galeri", href: "#galeri" },
    { name: "Bizi Bulun", href: "#konum" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b border-[#E5DEC9] py-3 text-[#1A1D1B]"
            : "bg-[#111413]/60 backdrop-blur-md border-b border-white/10 py-4 md:py-5 text-[#FAF7F0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E05A2B] rounded-lg p-1"
          >
            <div className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-1 flex items-center justify-center overflow-hidden shadow-inner border transition-transform group-hover:scale-105 ${
              isScrolled
                ? "bg-[#1B4332] border-[#E05A2B]/40"
                : "bg-white/10 backdrop-blur-md border-white/30"
            }`}>
              <Image
                src="/images/mascot-whisk.png"
                alt="Brechdan Maskot"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl sm:text-3xl tracking-wider font-bold leading-none transition-colors ${
                isScrolled ? "text-[#1B4332]" : "text-[#FAF7F0]"
              }`}>
                BRECHDAN
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#E05A2B] uppercase mt-0.5">
                Bahçelievler · Ankara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-200 ${
                  isScrolled
                    ? "text-[#1A1D1B] hover:text-[#1B4332] after:bg-[#1B4332] hover:after:w-full"
                    : "text-[#FAF7F0]/90 hover:text-white after:bg-[#E05A2B] hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={BUSINESS_INFO.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full transition-all hover:scale-105 ${
                isScrolled
                  ? "text-[#1B4332] bg-[#E8F0EA] hover:bg-[#D5E4D8] border border-[#B7CDB9]"
                  : "text-[#FAF7F0] bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm"
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isScrolled ? "text-[#1B4332]" : "text-[#E05A2B]"}`} />
              <span>Yol Tarifi</span>
            </Link>

            <Link
              href="#menu"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FAF7F0] rounded-full shadow-sm hover:shadow transition-all hover:scale-105 ${
                isScrolled
                  ? "bg-[#1B4332] hover:bg-[#245842]"
                  : "bg-[#E05A2B] hover:bg-[#C94B20]"
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#FAF7F0]" />
              <span>Menüyü İncele</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç / Kapat"
            className={`lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E05A2B] ${
              isScrolled
                ? "text-[#1B4332] hover:bg-[#E5DEC9]/40"
                : "text-[#FAF7F0] hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#FAF7F0] shadow-2xl p-6 flex flex-col justify-between border-l border-[#E5DEC9]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DEC9]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/mascot-whisk.png"
                      alt="Brechdan Maskot"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#1B4332]">BRECHDAN</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-[#1A1D1B] hover:bg-[#E5DEC9]/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-3 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-[#1A1D1B] hover:bg-[#E8F0EA] hover:text-[#1B4332] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#E5DEC9] space-y-3">
              <Link
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1B4332] text-[#FAF7F0] font-semibold text-sm rounded-xl shadow"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Güncel Menüyü Gör</span>
              </Link>
              <Link
                href={BUSINESS_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#E8F0EA] text-[#1B4332] font-semibold text-sm rounded-xl border border-[#B7CDB9]"
              >
                <MapPin className="w-4 h-4 text-[#1B4332]" />
                <span>Google Maps Yol Tarifi</span>
              </Link>
              <div className="flex items-center justify-center gap-4 pt-2 text-[#5C675E] text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="flex items-center gap-1 hover:text-[#1B4332]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>
                <span>•</span>
                <a
                  href={BUSINESS_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#E05A2B]"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
