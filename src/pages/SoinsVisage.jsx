import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// Import des visuels
import soin1 from "../assets/soin1.webp";
import soin2 from "../assets/soin2.webp";
import soin3 from "../assets/soin3.webp";
import soin4 from "../assets/soin4.webp";
import soin6 from "../assets/soin6.webp";
import soin7 from "../assets/soin7.webp";
import soin8 from "../assets/soin8.webp";
import soin11 from "../assets/soin11.webp";
import soin12 from "../assets/soin12.webp";
import soin13 from "../assets/soin13.webp";
import soin14 from "../assets/soin14.webp";
import soin15 from "../assets/soin15.webp";
import soin16 from "../assets/soin16.webp";
import soin17 from "../assets/soin17.webp";
import serumImg from "../assets/soin-serum.webp";

// 4 Gels Nettoyants
const carousel1 = [
  { img: soin1, title: "Gel Nettoyant Curcuma", link: "/produit/gel-nettoyant-curcuma" },
  { img: soin2, title: "Gel Nettoyant Vitamine C", link: "/produit/gel-nettoyant-vitamine-c" },
  { img: soin3, title: "Gel Nettoyant Concombre", link: "/produit/gel-nettoyant-concombre" },
  { img: soin4, title: "Gel Nettoyant Cocktail Vitaminé", link: "/produit/gel-nettoyant-cocktail-vitaminé" },
];

// 3 Lotions Toniques
const carousel2 = [
  { img: soin6, title: "Toner Cocktail Vitaminé", link: "/produit/toner-cocktail-vitaminé" },
  { img: soin7, title: "Toner Vitamine C", link: "/produit/toner-vitamine-c" },
  { img: soin8, title: "Toner Eau De Rose", link: "/produit/toner-eau-de-rose" },
];

// 7 Masques Visage
const carousel3 = [
  { img: soin11, title: "Masque Visage Avocado", link: "/produit/masque-visage-avocado" },
  { img: soin12, title: "Masque Visage Thé Vert", link: "/produit/masque-visage-thé-vert" },
  { img: soin13, title: "Masque Visage Nila Bleu", link: "/produit/masque-visage-nila-bleu" },
  { img: soin14, title: "Masque Visage Charbon Actif", link: "/produit/masque-visage-charbon-actif" },
  { img: soin15, title: "Masque Visage Argile Blanche", link: "/produit/masque-visage-argile-blanche" },
  { img: soin16, title: "Masque Visage Banane", link: "/produit/masque-visage-banane" },
  { img: soin17, title: "Masque Visage Milky", link: "/produit/masque-visage-milky" },
];

// Sérum
const serum = { img: serumImg, title: "Sérum", link: "/produit/soin-serum" };

// Composant Carrousel
const Carousel = ({ products, customPrev, customNext }) => (
  <div className="relative mb-16">
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={{ nextEl: `.${customNext}`, prevEl: `.${customPrev}` }}
      breakpoints={{
        320: { slidesPerView: 1, centeredSlides: false, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {products.map((product, i) => (
        <SwiperSlide key={i} className="shadow-xl">
          <Link to={product.link} className="block">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[300px] object-cover"
            />
            <h3 className="text-center mt-2 font-semibold">{product.title}</h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Boutons navigation */}
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

export default function SoinsVisage() {
  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Soins Visage</h1>

      {/* Carrousels */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Gels Nettoyants</h2>
      <Carousel products={carousel1} customPrev="custom-prev1" customNext="custom-next1" />

      <h2 className="text-2xl font-semibold mb-6 text-center">Lotions Toniques</h2>
      <Carousel products={carousel2} customPrev="custom-prev2" customNext="custom-next2" />

      <h2 className="text-2xl font-semibold mb-6 text-center">Masques Visage</h2>
      <Carousel products={carousel3} customPrev="custom-prev3" customNext="custom-next3" />

      {/* Visuel Sérum */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Sérum</h2>
      <div className="flex justify-center mb-16">
        <div className="w-full md:w-1/2 lg:w-1/3 h-[350px] bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4 rounded-xl shadow-lg flex items-center justify-center">
          <Link to={serum.link} className="block w-full h-full">
            <img
              src={serum.img}
              alt={serum.title}
              className="w-full h-full object-contain rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
