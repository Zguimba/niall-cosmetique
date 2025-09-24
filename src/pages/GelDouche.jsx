// src/pages/GelDouchePage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Données des produits
const carousel1Products = [
  { img: "/niall-cosmetique/images/gel3.webp", title: "Gel Douche Citrus", link: "/produit/gel-douche-citrus" },
  { img: "/niall-cosmetique/images/gel2.webp", title: "Gel Douche Musk Tahara", link: "/produit/gel-douche-musk-tahara" },
  { img: "/niall-cosmetique/images/gel10.webp", title: "Gel Douche Ligne Rouge", link: "/produit/gel-douche-ligne-rouge" },
  { img: "/niall-cosmetique/images/gel20.webp", title: "Gel Douche Savon Dzair", link: "/produit/gel-douche-savon-dzair" },
];

const carousel2Products = [
  { img: "/niall-cosmetique/images/gel4.webp", title: "Smooth Me Fraise Cerise", link: "/produit/smooth-me-fraise-cerise" },
  { img: "/niall-cosmetique/images/gel5.webp", title: "Smooth Me Pomme Verte", link: "/produit/smooth-me-pomme-verte" },
  { img: "/niall-cosmetique/images/gel6.webp", title: "Smooth Me Fruit De La Passion", link: "/produit/smooth-me-fruit-de-la-passion" },
  { img: "/niall-cosmetique/images/gel7.webp", title: "Smooth Me Pêche Ice Tea", link: "/produit/smooth-me-pêche-ice-tea" },
  { img: "/niall-cosmetique/images/gel8.webp", title: "Smooth Me Monoï", link: "/produit/smooth-me-monoï" },
  { img: "/niall-cosmetique/images/gel9.webp", title: "Smooth Me Mangue", link: "/produit/smooth-me-mangue" },
];

export default function GelDouchePage() {
  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Gel Douche</h1>

      {/* Premier carrousel */}
      <section className="mb-16 relative">
        <h2 className="text-2xl font-semibold mb-6 text-center">Notre sélection spéciale</h2>
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={800}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".custom-next1", prevEl: ".custom-prev1" }}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: false },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {carousel1Products.map((product, i) => (
            <SwiperSlide key={i} className="shadow-xl">
              <Link to={product.link} className="block">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[350px] md:h-[400px] object-cover rounded-md"
                />
                <h3 className="text-center mt-2 font-semibold">{product.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="custom-prev1 absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm rounded-full">
            <ChevronLeft className="w-6 h-6 text-black" />
          </div>
        </div>
        <div className="custom-next1 absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm rounded-full">
            <ChevronRight className="w-6 h-6 text-black" />
          </div>
        </div>
      </section>

      {/* Deuxième carrousel */}
      <section className="relative">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gel Douche Smooth Me</h2>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".custom-next2", prevEl: ".custom-prev2" }}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: false, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {carousel2Products.map((product, i) => (
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

        {/* Navigation */}
        <div className="custom-prev2 absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
            <ChevronLeft className="w-6 h-6 text-black" />
          </div>
        </div>
        <div className="custom-next2 absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
            <ChevronRight className="w-6 h-6 text-black" />
          </div>
        </div>
      </section>
    </div>
  );
}
