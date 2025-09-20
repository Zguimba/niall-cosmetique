import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productImage1 from "../assets/produit01.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  const heroImages = [
    productImage1,
    "/images/produit02.webp",
    "/images/produit03.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-[#F8F8F8] text-[#1C1C1C] font-['Roboto',sans-serif]">
      {/* Section produit (Hero) */}
      <section className="py-8 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8 relative">
        <div className="md:w-3/4 flex justify-center relative z-10">
          <img
            src={heroImages[currentIndex]}
            alt={`Produit ${currentIndex + 1}`}
            className={`w-full h-[400px] sm:h-[500px] md:h-[700px] object-contain shadow-2xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div
          className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 z-20 
                     bg-white md:bg-[#F4E1D2] p-6 md:p-10 
                     w-full md:w-[450px] h-auto md:h-[380px] flex flex-col justify-center text-center shadow-lg"
        >
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Votre Beauté est Notre Responsabilité
          </h2>
          <p className="text-sm sm:text-base md:text-base mb-6 leading-relaxed">
            Notre objectif est de vous offrir le meilleur de la beauté en termes
            de qualité, d’efficacité, de sécurité et de responsabilité pour
            satisfaire tous les besoins et les désirs de beauté dans toutes ses
            diversités.
          </p>
          <a
            href=""
            className="bg-[#D8A47F] text-white px-6 py-3 font-semibold tracking-wide transition transform hover:scale-105 hover:bg-[#F4E1D2]"
          >
            Mot de la Fondatrice : Touat Amina
          </a>
        </div>
      </section>

      {/* section Nouveautés */}
      <section className="px-4 md:px-16 pt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Découvrez nos Nouveautés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "/images/gel20.webp",
              title: "Gel Douche Savon Dzair",
              desc: "Plongez dans une expérience de douche rafraîchissante avec notre Gel Douche Savon Dzair",
              link: "/produit/gel-douche-savon-dzair",
            },
            {
              img: "/images/intro1.webp",
              title: "Gommage Corporel Savon Dzair",
              desc: "Explorez notre gommage corporel Savon Dzair, une invitation à l’évasion dans les hammams traditionnels d’Algérie.",
              link: "/produit/gommage-corporel-savon-dzair",
            },
            {
              img: "/images/visu3.webp",
              title: "Gommage Corporel au Café",
              desc: "Accordez-vous une pause café pour votre peau et découvrez la fraîcheur naturelle d'une peau bien soignée.",
              link: "/produit/gommage-corporel-au-café",
            },
          ].map((item, i) => (
            <FadeInSection key={i} delay={i * 0.4}>
              <div className="group bg-white shadow-md overflow-hidden hover:shadow-lg transition h-[450px] flex flex-col">
                <Link to={item.link} className="h-[280px] flex items-center justify-center bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex-1 px-4 py-4 flex flex-col items-center text-center">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p
                    className="text-sm text-gray-600 mt-2 
                     md:max-h-0 md:opacity-0 md:overflow-hidden 
                     md:transition-all md:duration-500 
                     md:group-hover:max-h-20 md:group-hover:opacity-100"
                  >
                    {item.desc}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                    En savoir plus
                  </button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="px-4 md:px-16 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Découvrez nos Catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { img: "/images/visu01.webp", badge: "Pour Elle", link: "/categorie/elle" },
            { img: "/images/visu02.webp", badge: "Pour Lui", link: "/categorie/lui" },
            { img: "/images/visu03.webp", badge: "Pour Bébé", link: "/categorie/bebe" },
          ].map((item, i) => (
            <FadeInSection key={i} delay={i * 0.4}>
              <Link
                to={item.link}
                className="group block h-[450px] bg-white shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-[450px] flex items-center justify-center bg-white relative">
                  <img
                    src={item.img}
                    alt={item.badge}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-white border border-black px-2 py-1 text-sm font-bold z-10">
                    {item.badge}
                  </span>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Section Carrousel flottant */}
      <section className="px-4 md:px-16 mt-16 relative">
        <FadeInSection>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-8">
            Soins et Gammes Disponibles
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="w-full relative">
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false }}
              pagination={{ clickable: true }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              breakpoints={{
                320: { slidesPerView: 1, centeredSlides: false },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {[
                { img: "/images/soins pour corps.webp", link: "/produit/gel-douche" },
                { img: "/images/soins pour visage.webp", link: "/produit/soins-visage" },
                { img: "/images/soins pour cheveux.webp", link: "/categorie/cheveux" },
                { img: "/images/gel douche.webp", link: "/produit/gel-douche" },
                { img: "/images/gel nettoyants.webp", link: "/produit/soins-visage" },
                { img: "/images/smouth me.webp", link: "/produit/gel-douche" },
              ].map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] shadow-xl"
                >
                  <Link to={item.link}>
                    <img
                      src={item.img}
                      alt={`slide-${i}`}
                      className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
                <ChevronLeft className="w-6 h-6 text-black" />
              </div>
            </div>
            <div className="custom-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center border border-black bg-white/40 backdrop-blur-sm">
                <ChevronRight className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Section Google Map */}
      <section className="px-4 md:px-16 mt-16">
        <FadeInSection>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-8">
            Nous trouver
          </h2>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.157538769119!2d3.0242442152364337!3d36.6996748800494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb0874f7e26bb%3A0x5ad93b4c4f39c89c!2sAlger!5e0!3m2!1sfr!2sdz!4v1694012345678!5m2!1sfr!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
