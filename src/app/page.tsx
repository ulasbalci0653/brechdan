import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import StorySection from "@/components/StorySection";
import BreakfastSection from "@/components/BreakfastSection";
import MenuSection from "@/components/MenuSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import InstagramSection from "@/components/InstagramSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A1D1B]">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Signature & Favorite Bites */}
      <FeaturedProducts />

      {/* Artisan Bread & Sourdough Ciabatta Story */}
      <StorySection />

      {/* Breakfast & Platter Showcase */}
      <BreakfastSection />

      {/* Full Interactive Menu & Verified Pricing */}
      <MenuSection />

      {/* Neighborhood Cafe Atmosphere */}
      <AtmosphereSection />

      {/* Visual Food & Ambiance Gallery */}
      <GallerySection />

      {/* Verified Google Guest Reviews */}
      <ReviewsSection />

      {/* Location, Hours, Contact & Interactive Map */}
      <LocationSection />

      {/* Official Instagram Feed */}
      <InstagramSection />

      {/* FAQ & SEO Accordion */}
      <FAQSection />

      {/* Premium Restaurant Footer */}
      <Footer />

      {/* Sticky Mobile Quick Navigation */}
      <MobileStickyBar />
    </main>
  );
}
