import { BUSINESS_INFO } from "@/data/business";
import { FAQ_ITEMS } from "@/data/faq";
import { MENU_ITEMS } from "@/data/menu";

export default function JsonLd() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": BUSINESS_INFO.name,
    "image": [
      "https://brechdan.com/images/menu-sandwich.png",
      "https://brechdan.com/images/menu-classics.png"
    ],
    "@id": "https://brechdan.com",
    "url": "https://brechdan.com",
    "telephone": BUSINESS_INFO.contact.phone,
    "priceRange": "₺₺",
    "servesCuisine": [
      "Breakfast",
      "Sandwiches",
      "Brunch",
      "Turkish Breakfast",
      "Artisan Bakery"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.district,
      "addressRegion": BUSINESS_INFO.address.city,
      "postalCode": BUSINESS_INFO.address.postalCode,
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": BUSINESS_INFO.hours.openTime,
        "closes": BUSINESS_INFO.hours.closeTime
      }
    ],
    "sameAs": [
      BUSINESS_INFO.contact.instagram,
      BUSINESS_INFO.contact.googleMapsUrl
    ],
    "hasMenu": {
      "@type": "Menu",
      "name": "Brechdan Menü",
      "url": "https://brechdan.com/#menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Retro Isırıklar",
          "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "retro-isiriklar").map((item) => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price,
              "priceCurrency": "TRY"
            }
          }))
        },
        {
          "@type": "MenuSection",
          "name": "Yeşil Isırıklar",
          "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "yesil-isiriklar").map((item) => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price,
              "priceCurrency": "TRY"
            }
          }))
        },
        {
          "@type": "MenuSection",
          "name": "Kahvaltı Tabakları",
          "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "kahvalti-tabaklari").map((item) => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price,
              "priceCurrency": "TRY"
            }
          }))
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
