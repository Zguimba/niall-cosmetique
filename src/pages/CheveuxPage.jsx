import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Shampoings
const shampoings = [
  { img: "/images/shamp1.webp", title: "Shampooing BB Hair Sans Sulfate", link: "/produit/shampooing-bb-hair-sans-sulfate" },
  { img: "/images/shamp2.webp", title: "Shampooing BB Hair Silver", link: "/produit/shampooing-bb-hair-silver" },
  { img: "/images/shamp3.webp", title: "Shampooing BB Hair Rose", link: "/produit/shampooing-bb-hair-rose" },
];

// Après-Shampoings
const apresShampoings = [
  { img: "/images/shamp4.webp", title: "Après Shampooing BB Hair Silver", link: "/produit/apres-shampooing-bb-hair-silver" },
  { img: "/images/shamp5.webp", title: "Après Shampooing BB Hair Rose", link: "/produit/apres-shampooing-bb-hair-rose" },
];

// Composant carrousel réutilisable
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

export default function CheveuxPage() {
  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Soins Cheveux</h1>

      {/* Carrousel Shampoings */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Shampoings</h2>
      <Carousel products={shampoings} customPrev="custom-prev1" customNext="custom-next1" />

      {/* Carrousel Après-Shampoings */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Après-Shampoings</h2>
      <Carousel products={apresShampoings} customPrev="custom-prev2" customNext="custom-next2" />
    </div>
  );
}
