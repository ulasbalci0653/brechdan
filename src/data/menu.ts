export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryKey;
  categoryName: string;
  description: string;
  price: number;
  image?: string;
  popular?: boolean;
  vegetarian?: boolean;
  tags?: string[];
  badge?: string;
}

export interface ExtraItem {
  name: string;
  price: number;
  group: 'sandwich' | 'breakfast';
}

export interface DrinkVariation {
  name: string;
  variants?: string;
  price: number;
  badge?: string;
}

export type MenuCategoryKey =
  | 'retro-isiriklar'
  | 'yesil-isiriklar'
  | 'tavadan-klasikler'
  | 'kabaran-klasikler'
  | 'kahvalti-tabaklari'
  | 'ekstralar'
  | 'icecekler';

export interface CategoryInfo {
  key: MenuCategoryKey;
  name: string;
  subtitle: string;
  badge?: string;
}

export const MENU_CATEGORIES: CategoryInfo[] = [
  {
    key: 'retro-isiriklar',
    name: 'Retro Isırıklar',
    subtitle: 'Ekşi mayalı el yapımı ciabatta ekmeğinde imza etli sandviçler',
    badge: 'İmza Lezzetler',
  },
  {
    key: 'yesil-isiriklar',
    name: 'Yeşil Isırıklar',
    subtitle: 'Taze sebzeler, özel peynirler ve hafif vejetaryen sandviçler',
    badge: 'Taze & Hafif',
  },
  {
    key: 'tavadan-klasikler',
    name: 'Tavadan Klasikler',
    subtitle: 'Sıcak tavada tereyağlı geleneksel yumurtalar ve menemen',
    badge: 'Tavadan Sıcak',
  },
  {
    key: 'kabaran-klasikler',
    name: 'Kabaran Klasikler',
    subtitle: 'Taze garnitürler eşliğinde kabaran yumuşacık omletler',
    badge: 'Omletler',
  },
  {
    key: 'kahvalti-tabaklari',
    name: 'Kahvaltı Tabakları',
    subtitle: 'Zengin içerikli, ekşi mayalı ekmekli ve kupa çay dahil kahvaltı şöleni',
    badge: 'Zengin Menü',
  },
  {
    key: 'ekstralar',
    name: 'Ekstralar',
    subtitle: 'Sandviç ve kahvaltı deneyiminizi zenginleştirecek ekstra lezzetler',
    badge: 'Özelleştir',
  },
  {
    key: 'icecekler',
    name: 'İçecekler',
    subtitle: 'Taze sıkma meyve suları, kahveler, demlik çaylar ve serinletici içecekler',
    badge: 'Sıcak & Soğuk',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // RETRO ISIRIKLAR
  {
    id: 'tiftik-sandvic',
    name: 'Tiftik Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description:
      'Dana Tiftik, Karamelize Soğan ve Mantar, Roka, Domates, Kuru Domates Aromalı Sarımsak Konfi Et Sos, Trüflü Mayonez Sos',
    price: 380,
    popular: true,
    vegetarian: false,
    tags: ['Dana Tiftik', 'Trüflü Mayonez', 'Konfi Et Sos'],
    badge: 'Brechdan Favorisi',
  },
  {
    id: 'kavurmali-sandvic',
    name: 'Kavurmalı Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description:
      'Ev Yapımı Kavurma, Marul, Domates, Kırmızı Soğan, Turşu, Maydanozlu Sarımsak Konfi Sos',
    price: 380,
    popular: true,
    vegetarian: false,
    tags: ['Ev Yapımı Kavurma', 'Konfi Sos'],
    badge: 'Şefin Seçimi',
  },
  {
    id: 'roast-beef-sandvic',
    name: 'Roast Beef Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description: 'Roast Beef, Marul, Domates, Turşu, Parmesan, Lutenitsa Sos',
    price: 380,
    popular: true,
    vegetarian: false,
    tags: ['Roast Beef', 'Parmesan', 'Lutenitsa'],
    badge: 'Gurme',
  },
  {
    id: 'izgara-tavuk-sandvic',
    name: 'Izgara Tavuk Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description:
      'Marine Edilmiş Izgara Tavuk, Karamelize Soğan, Marul, Domates, Turşu, Parmesan, Maydanozlu Konfi Sarımsaklı Sos, Pesto Sos',
    price: 330,
    popular: false,
    vegetarian: false,
    tags: ['Marine Tavuk', 'Pesto Sos', 'Parmesan'],
  },
  {
    id: 'ton-balikli-sandvic',
    name: 'Ton Balıklı Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description:
      'Ton Balığı, Marul, Domates, Siyah Zeytin, Mısır, Taze Soğanlı Labneli Yoğurt Sos',
    price: 330,
    popular: false,
    vegetarian: false,
    tags: ['Ton Balığı', 'Labneli Sos', 'Hafif'],
  },
  {
    id: 'sosisli-sandvic',
    name: 'Sosisli Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description:
      'Frankfurter Dana Sosis, Turşu, Çıtır Soğan, Hardal, Kuru Domatesli Konfi Sarımsaklı Et Sos',
    price: 330,
    popular: false,
    vegetarian: false,
    tags: ['Frankfurter Sosis', 'Çıtır Soğan', 'Hardal'],
  },
  {
    id: 'dana-fume-sandvic',
    name: 'Dana Füme Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description: 'Dana Füme, Marul, Domates, Turşu, Eski Kaşar, Lutenitsa Sos',
    price: 320,
    popular: false,
    vegetarian: false,
    tags: ['Dana Füme', 'Eski Kaşar', 'Lutenitsa'],
  },
  {
    id: 'hindi-fume-sandvic',
    name: 'Hindi Füme Sandviç',
    category: 'retro-isiriklar',
    categoryName: 'Retro Isırıklar',
    description: 'Hindi Füme, Roka, Domates, Turşu, Eski Kaşar, Pesto Sos',
    price: 270,
    popular: false,
    vegetarian: false,
    tags: ['Hindi Füme', 'Eski Kaşar', 'Pesto'],
  },

  // YEŞİL ISIRIKLAR
  {
    id: 'hellim-sandvic',
    name: 'Hellim Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description: 'Izgara Hellim, Roka, Domates, Salatalık, Kırmızı Biber, Lutenitsa Sos',
    price: 290,
    popular: true,
    vegetarian: true,
    tags: ['Izgara Hellim', 'Vejetaryen', 'Lutenitsa'],
    badge: 'Vejetaryen Favori',
  },
  {
    id: 'avokadolu-sandvic',
    name: 'Avokadolu Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description:
      'Avokado, Roka, Kuru Domates, Yeşil Zeytin, Salatalık, Mozzarella, Zeytinyağı, Limon',
    price: 290,
    popular: true,
    vegetarian: true,
    tags: ['Avokado', 'Mozzarella', 'Vejetaryen'],
    badge: 'Taze & Hafif',
  },
  {
    id: 'basit-sandvic',
    name: 'Basit Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description:
      'Kaşar Peyniri veya Beyaz Peynir, Marul, Domates, Salatalık, Biber, Zeytin Ezmesi',
    price: 200,
    popular: false,
    vegetarian: true,
    tags: ['Klasik Kahvaltı', 'Vejetaryen'],
  },
  {
    id: 'dort-peynirli-sandvic',
    name: 'Dört Peynirli Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description:
      'Eski Kaşar, Labne Peyniri, Parmesan, Suda Mozzarella, Domates, Marul, Zeytin Ezmesi',
    price: 270,
    popular: false,
    vegetarian: true,
    tags: ['4 Peynirli', 'Gurme Peynirler', 'Vejetaryen'],
  },
  {
    id: 'mozzarella-sandvic',
    name: 'Mozzarella Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description: 'Suda Mozzarella, Roka, Domates Kurusu, Reyhan, Zeytin Ezmesi',
    price: 270,
    popular: false,
    vegetarian: true,
    tags: ['Suda Mozzarella', 'Reyhan', 'Vejetaryen'],
  },
  {
    id: 'izgara-sebze-sandvic',
    name: 'Izgara Sebze Sandviç',
    category: 'yesil-isiriklar',
    categoryName: 'Yeşil Isırıklar',
    description:
      'Kabak, Patlıcan, Kapya Biber, Izgara Zeytin, Parmesan, Taze Soğanlı Labneli Yoğurt Sos',
    price: 280,
    popular: false,
    vegetarian: true,
    tags: ['Köz Sebzeler', 'Parmesan', 'Vejetaryen'],
  },

  // TAVADAN KLASİKLER
  {
    id: 'sahanda-sade-yumurta',
    name: 'Sahanda Sade Yumurta',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Köy tereyağında sıcacık sahanda pişirilmiş iki taze yumurta',
    price: 180,
    popular: false,
    vegetarian: true,
    tags: ['Tereyağlı', 'Klasik'],
  },
  {
    id: 'sucuklu-yumurta',
    name: 'Sucuklu Yumurta',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Kasap sucuk dilimleri ile tavada pişirilmiş sahanda yumurta',
    price: 250,
    popular: true,
    vegetarian: false,
    tags: ['Kasap Sucuk', 'Sıcak Tava'],
    badge: 'Kahvaltı Klasiği',
  },
  {
    id: 'kavurmali-yumurta',
    name: 'Kavurmalı Yumurta',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Özel lezzetli kavurma parçaları ile sahanda pişirilmiş yumurta',
    price: 250,
    popular: true,
    vegetarian: false,
    tags: ['Kavurma', 'Doyurucu'],
  },
  {
    id: 'pastirmali-yumurta',
    name: 'Pastırmalı Yumurta',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Seçme pastırma dilimleri ile tereyağında pişirilmiş sahanda yumurta',
    price: 250,
    popular: false,
    vegetarian: false,
    tags: ['Pastırma', 'Gurme'],
  },
  {
    id: 'sarkuteri-yumurta',
    name: 'Şarküteri Yumurta',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Sucuk, Pastırma ve Kavurmanın muhteşem üçlü buluşması',
    price: 300,
    popular: true,
    vegetarian: false,
    tags: ['Üçlü Şarküteri', 'Sucuk', 'Pastırma', 'Kavurma'],
    badge: 'Güçlü Lezzet',
  },
  {
    id: 'menemen',
    name: 'Menemen',
    category: 'tavadan-klasikler',
    categoryName: 'Tavadan Klasikler',
    description: 'Taze kabuksuz domates, yeşil biber ve tereyağı ile geleneksel menemen',
    price: 210,
    popular: true,
    vegetarian: true,
    tags: ['Geleneksel', 'Vejetaryen'],
  },

  // KABARAN KLASİKLER (Omletler)
  {
    id: 'sade-omlet',
    name: 'Sade Omlet',
    category: 'kabaran-klasikler',
    categoryName: 'Kabaran Klasikler',
    description: 'Domates, Salatalık, Zeytin, Yeşillik eşliğinde yumuşacık omlet',
    price: 200,
    popular: false,
    vegetarian: true,
    tags: ['Hafif', 'Vejetaryen'],
  },
  {
    id: 'kasarli-omlet',
    name: 'Kaşarlı Omlet',
    category: 'kabaran-klasikler',
    categoryName: 'Kabaran Klasikler',
    description: 'Eriyen lezzetli kaşar peyniri, Domates, Salatalık, Zeytin, Yeşillik eşliğinde',
    price: 250,
    popular: true,
    vegetarian: true,
    tags: ['Bol Kaşarlı', 'Vejetaryen'],
  },
  {
    id: 'mantarli-biberli-omlet',
    name: 'Mantarlı Biberli Omlet',
    category: 'kabaran-klasikler',
    categoryName: 'Kabaran Klasikler',
    description: 'Sote kültür mantarı, taze biberler, Domates, Salatalık, Zeytin, Yeşillik eşliğinde',
    price: 270,
    popular: false,
    vegetarian: true,
    tags: ['Mantar & Biber', 'Vejetaryen'],
  },
  {
    id: 'taze-soganli-ve-tulumlu-omlet',
    name: 'Taze Soğanlı ve Tulumlu Omlet',
    category: 'kabaran-klasikler',
    categoryName: 'Kabaran Klasikler',
    description: 'İzmir tulum peyniri, taze yeşil soğan, Domates, Salatalık, Zeytin, Yeşillik eşliğinde',
    price: 270,
    popular: true,
    vegetarian: true,
    tags: ['İzmir Tulum', 'Taze Soğan', 'Vejetaryen'],
    badge: 'Özel Tarif',
  },
  {
    id: 'dereotlu-ve-beyaz-peynirli-omlet',
    name: 'Dereotlu ve Beyaz Peynirli Omlet',
    category: 'kabaran-klasikler',
    categoryName: 'Kabaran Klasikler',
    description: 'Taze dereotu, kaliteli beyaz peynir, Domates, Salatalık, Zeytin, Yeşillik eşliğinde',
    price: 270,
    popular: false,
    vegetarian: true,
    tags: ['Dereotlu', 'Beyaz Peynir', 'Vejetaryen'],
  },

  // KAHVALTI TABAKLARI
  {
    id: 'lokal-kahvalti-tabagi',
    name: 'Lokal Kahvaltı Tabağı',
    category: 'kahvalti-tabaklari',
    categoryName: 'Kahvaltı Tabakları',
    description:
      'Izgara Kasap Sucuk, Pastırma, Kızarmış Ekşi Maya Ekmeği Üzerine Çırpılmış Yumurta, Beyaz Peynir, İzmir Tulum, Kaşar Peyniri, Cevizli Kuru Domatesli Yeşil Salata, Domates, Salatalık, Zeytin, Tahin-Pekmez, Kuru Domates Aromalı Sarımsak Konfi Et Sos, Bir Adet Kupa Çay',
    price: 400,
    popular: true,
    vegetarian: false,
    tags: ['Yeni', 'Kupa Çay Dahil', 'Ekşi Maya Ekmek', 'Sucuk & Pastırma'],
    badge: 'YENİ / Favori',
  },
  {
    id: 'soft-kahvalti-tabagi',
    name: 'Soft Kahvaltı Tabağı',
    category: 'kahvalti-tabaklari',
    categoryName: 'Kahvaltı Tabakları',
    description:
      'Haşlanmış Yumurta, Pastırma, Dana Füme, Hindi Füme, Kaşar Peyniri, Beyaz Peynir, İzmir Tulum, Domates, Salatalık, Zeytin, Cevizli Kuru Domatesli Yeşil Salata, Reçel, Lutenitsa Sos, Bir Adet Kupa Çay',
    price: 350,
    popular: true,
    vegetarian: false,
    tags: ['Kupa Çay Dahil', 'Dana Füme', 'Hindi Füme', 'Dengeli'],
    badge: 'Dengeli Kahvaltı',
  },
  {
    id: 'grill-kahvalti-tabagi',
    name: 'Grill Kahvaltı Tabağı',
    category: 'kahvalti-tabaklari',
    categoryName: 'Kahvaltı Tabakları',
    description:
      'Izgara Dana Frankfurter Sosis, Izgara Pastırma, Izgara Dana Füme, Izgara Hellim Peyniri, Kızarmış Ekşi Maya Ekmeği Üzerine Göz Yumurta, Izgara Cherry Domates, Salatalık, Cevizli Kuru Domatesli Yeşil Salata, Izgara Zeytin, Fıstık Ezmesi, Kuru Domates Aromalı Sarımsak Konfi Et Sos, Bir Adet Kupa Çay',
    price: 400,
    popular: true,
    vegetarian: false,
    tags: ['Kupa Çay Dahil', 'Izgara Şöleni', 'Frankfurter Sosis', 'Hellim'],
    badge: 'Izgara Gurme',
  },
];

// SANDVİÇ EKSTRALARI
export const SANDWICH_EXTRAS: ExtraItem[] = [
  { name: 'Dana Tiftik', price: 150, group: 'sandwich' },
  { name: 'Roast Beef', price: 150, group: 'sandwich' },
  { name: 'Kavurma', price: 150, group: 'sandwich' },
  { name: 'Sucuk', price: 150, group: 'sandwich' },
  { name: 'Frankfurter Sosis', price: 180, group: 'sandwich' },
  { name: 'Dana Füme', price: 130, group: 'sandwich' },
  { name: 'Izgara Tavuk', price: 130, group: 'sandwich' },
  { name: 'Hindi Füme', price: 120, group: 'sandwich' },
  { name: 'Ton Balığı', price: 100, group: 'sandwich' },
  { name: 'Patates Salatası', price: 140, group: 'sandwich' },
  { name: 'Mozarella', price: 120, group: 'sandwich' },
  { name: 'Hellim', price: 120, group: 'sandwich' },
  { name: 'Eski Kaşar', price: 110, group: 'sandwich' },
  { name: 'İzmir Tulum', price: 110, group: 'sandwich' },
  { name: 'Parmesan', price: 110, group: 'sandwich' },
  { name: 'Avokado', price: 100, group: 'sandwich' },
  { name: 'Kaşar Peyniri', price: 90, group: 'sandwich' },
  { name: 'Beyaz Peynir', price: 80, group: 'sandwich' },
  { name: 'Karamelize Soğan', price: 70, group: 'sandwich' },
  { name: 'Karamelize Mantar', price: 70, group: 'sandwich' },
  { name: 'Haşlanmış Yumurta', price: 70, group: 'sandwich' },
];

// KAHVALTI EKSTRALARI
export const BREAKFAST_EXTRAS: ExtraItem[] = [
  { name: 'Bal-Kaymak', price: 130, group: 'breakfast' },
  { name: 'Tahin-Pekmez', price: 130, group: 'breakfast' },
  { name: 'Nutella', price: 110, group: 'breakfast' },
  { name: 'Fıstık Ezmesi', price: 110, group: 'breakfast' },
  { name: 'Söğüş', price: 100, group: 'breakfast' },
  { name: 'Izgara Zeytin', price: 100, group: 'breakfast' },
  { name: 'Reçel', price: 70, group: 'breakfast' },
  { name: 'Zeytin (Siyah & Yeşil)', price: 70, group: 'breakfast' },
  { name: 'Zeytin Ezmesi', price: 70, group: 'breakfast' },
  { name: 'Ekstra Yumurta', price: 70, group: 'breakfast' },
];

// İÇECEKLER
export const DRINKS: DrinkVariation[] = [
  { name: 'Küçük Çay', price: 40 },
  { name: 'Büyük Çay', price: 50 },
  { name: 'Taze Sıkma Portakal Suyu', price: 150, badge: 'Taze Sıkım' },
  { name: 'Bitki Çayı', variants: 'Detox / Glow', price: 150 },
  { name: 'Türk Kahvesi', price: 150 },
  { name: 'Filtre Kahve', price: 150 },
  { name: 'Özerhisar Ayran', price: 70, badge: 'Özel Lezzet' },
  { name: 'Coca Cola', variants: 'Klasik / Zero', price: 80 },
  { name: 'Sprite', price: 80 },
  { name: 'Fuse Tea', variants: 'Limon / Şeftali / Mango Ananas', price: 70 },
  { name: 'Meyve Suyu', variants: 'Vişne / Şeftali / Karışık', price: 70 },
  { name: 'Soda', price: 50 },
  { name: 'Su', price: 20 },
];
