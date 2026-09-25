export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  dish?: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Mert K.",
    rating: 5,
    date: "1 ay önce",
    comment:
      "Tiftik sandviç tek kelimeyle muazzam. Sosları, karamelize soğanı ve ekşi mayalı ciabatta ekmeğinin çıtırlığı çok başarılı. Ankara'da böyle butik ve lezzet odaklı bir yer bulmak harika.",
    highlight: "Tiftik sandviç tek kelimeyle muazzam",
    dish: "Tiftik Sandviç",
  },
  {
    id: "rev-2",
    author: "Zeynep S.",
    rating: 5,
    date: "3 hafta önce",
    comment:
      "Lokal kahvaltı tabağı ve çırpılmış yumurtası inanılmaz lezzetliydi. Malzemelerin kalitesi tabaktaki her detayda belli oluyor. Kupa çay servisi ve personelin samimiyeti de çok hoş.",
    highlight: "Malzemelerin kalitesi tabaktaki her detayda belli",
    dish: "Lokal Kahvaltı Tabağı",
  },
  {
    id: "rev-3",
    author: "Caner D.",
    rating: 5,
    date: "2 ay önce",
    comment:
      "Avokadolu ve hellimli sandviçleri taptaze. Hem doyurucu hem de hafif. Bahçelievler'de gürültüden uzak, sakin ve kaliteli bir sabah geçirmek için bir numara.",
    highlight: "Sakin ve kaliteli bir sabah geçirmek için bir numara",
    dish: "Avokadolu & Hellim Sandviç",
  },
  {
    id: "rev-4",
    author: "Elif B.",
    rating: 5,
    date: "1 hafta önce",
    comment:
      "Frankfurter sosisli ve roast beef sandviçleri denedik, porsiyonlar gayet doyurucu. Ekşi maya ciabatta ekmeğinin tazeliği fark yaratıyor. Mutlaka gelinmeli!",
    highlight: "Ekşi maya ciabatta ekmeğinin tazeliği fark yaratıyor",
    dish: "Roast Beef & Sosisli Sandviç",
  },
];
