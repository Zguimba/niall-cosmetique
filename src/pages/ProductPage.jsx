// src/pages/ProductPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/ProductData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openSection, setOpenSection] = useState(null);

  if (!product) {
    return <h1 className="text-center mt-16 text-2xl">Produit introuvable</h1>;
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="px-4 md:px-16 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Visuel produit */}
        <div className="md:w-1/2 flex justify-center items-start relative">
          <div className="w-full md:w-96 h-auto bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4 rounded-xl shadow-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>

        {/* Description et accordéon */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Conteneur gris clair */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md block gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* Description détaillée complète */}
            <div className="bg-white p-4 rounded shadow-inner whitespace-pre-line flex-none">
              {product.description}
            </div>
          </div>

          {/* Accordéon dynamique */}
          <div className="flex flex-col gap-2">
            {[
              { key: "ingredients", title: "Ingrédients", content: product.ingredients },
              { key: "caracteristiques", title: "Caractéristiques", content: product.caracteristiques, isList: true },
              product.bienfaits && { key: "bienfaits", title: "Bienfaits", content: product.bienfaits, isList: true },
              { key: "utilisation", title: "Utilisation", content: product.utilisation },
            ]
              .filter(Boolean) // supprime "bienfaits" si non défini
              .map((section) => (
                <div key={section.key} className="bg-gray-50 rounded shadow-md">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full text-left px-4 py-2 font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-t-md flex justify-between items-center"
                  >
                    {section.title}
                    <span
                      className={`transform transition-transform duration-300 ${
                        openSection === section.key ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openSection === section.key && (
                    <div className="px-4 py-3 bg-white rounded-b-md transition-all duration-500">
                      {section.isList ? (
                        <ul className="list-disc list-inside space-y-1">
                          {section.content?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="whitespace-pre-line">{section.content}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Découvrez aussi */}
      <section className="mt-16 relative">
        <h2 className="text-2xl font-semibold mb-6 text-center">Découvrez aussi</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={{ nextEl: ".discover-next", prevEl: ".discover-prev" }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {products
            .filter((p) => p.id !== id)
            .slice(0, 6)
            .map((p, i) => (
              <SwiperSlide key={i} className="shadow-lg rounded-md overflow-hidden">
                <Link to={`/produit/${p.id}`} className="block">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 object-cover"
                  />
                  <h3 className="text-center mt-2 font-semibold">{p.name}</h3>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="discover-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <ChevronLeft className="w-6 h-6 text-black bg-white/50 rounded-full p-1" />
        </div>
        <div className="discover-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 cursor-pointer">
          <ChevronRight className="w-6 h-6 text-black bg-white/50 rounded-full p-1" />
        </div>
      </section>
    </div>
  );
}
