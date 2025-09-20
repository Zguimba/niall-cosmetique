import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 4 Gels Nettoyants
const gelsNettoyants = [
  { img: "/images/soin1.webp", title: "Gel Nettoyant Curcuma", link: "/produit/soin-a" },
  { img: "/images/soin2.webp", title: "Gel Nettoyant Vitamine C", link: "/produit/soin-b" },
  { img: "/images/soin3.webp", title: "Gel Nettoyant Concombre", link: "/produit/soin-c" },
  { img: "/images/soin4.webp", title: "Gel Nettoyant Cocktail Vitaminé", link: "/produit/soin-d" },
];

// 3 Lotions Toniques
const lotionsToniques = [
  { img: "/images/soin6.webp", title: "Toner Cocktail Vitaminé", link: "/produit/soin-f" },
  { img: "/images/soin7.webp", title: "Toner Vitamine C", link: "/produit/soin-g" },
  { img: "/images/soin8.webp", title: "Toner Eau De Rose", link: "/produit/soin-h" },
];

// 7 Masques Visage
const masquesVisage = [
  { img: "/images/soin11.webp", title: "Masque Visage Avocado", link: "/produit/soin-k" },
  { img: "/images/soin12.webp", title: "Masque Visage Thé Vert", link: "/produit/soin-l" },
  { img: "/images/soin13.webp", title: "Masque Visage Nila Bleu", link: "/produit/soin-m" },
  { img: "/images/soin14.webp", title: "Masque Visage Charbon Actif", link: "/produit/soin-n" },
  { img: "/images/soin15.webp", title: "Masque Visage Argile Blanche", link: "/produit/soin-o" },
  { img: "/images/soin16.webp", title: "Masque Visage Banane", link: "/produit/soin-p" },
  { img: "/images/soin17.webp", title: "Masque Visage Milky", link: "/produit/soin-q" },
];

// 1 Sérum
const serum = { img: "/images/soin-serum.webp", title: "Sérum Vitaminé", link: "/produit/soin-serum" };

// Composant Carrousel générique
const Carousel = ({ products, customPrev, customNext, title }) => (
  <div className="relative mb-16">
    <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false }}
      pagination={{ clickable: true }}
      navigation={{ nextEl: `.${customNext}`, prevEl: `.${customPrev}` }}
      breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
    >
      {products.map((p, i) => (
        <SwiperSlide key={i} className="shadow-xl">
          <a href={p.link} className="block">
            <img src={p.img} alt={p.title} className="w-full h-[300px] object-cover" />
            <h3 className="text-center mt-2 font-semibold">{p.title}</h3>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={`${customPrev} absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 cursor-pointer`}>
      <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
        <ChevronLeft className="w-6 h-6 text-black" />
      </div>
    </div>
    <div className={`${customNext} absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 cursor-pointer`}>
      <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
        <ChevronRight className="w-6 h-6 text-black" />
      </div>
    </div>
  </div>
);

export default function SoinsVisagePage() {
  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Soins Visage</h1>

      <Carousel products={gelsNettoyants} customPrev="custom-prev1" customNext="custom-next1" title="Gels Nettoyants" />
      <Carousel products={lotionsToniques} customPrev="custom-prev2" customNext="custom-next2" title="Lotions Toniques" />
      <Carousel products={masquesVisage} customPrev="custom-prev3" customNext="custom-next3" title="Masques Visage" />

      {/* Visuel Sérum */}
      <div className="mt-16 w-full md:w-1/2 mx-auto">
        <a href={serum.link} className="block">
          <img src={serum.img} alt={serum.title} className="w-full h-[350px] object-cover rounded-xl shadow-lg" />
          <h2 className="text-xl font-semibold mt-4 text-center">{serum.title}</h2>
        </a>
      </div>
    </div>
  );
}
