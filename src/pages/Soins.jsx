import React from "react";
import { Link } from "react-router-dom";

export default function Soins() {
  const categories = [
    {
      title: "Soins pour le visage",
      img: "/images/soins pour visage.webp",
      link: "/produit/soins-visage",
    },
    {
      title: "Soins pour les cheveux",
      img: "/images/soins pour cheveux.webp",
      link: "/categorie/cheveux",
    },
    {
      title: "Soins pour le corps",
      img: "/images/soins pour corps.webp",
      link: "/produit/gel-douche",
    },
  ];

  return (
    <div className="px-4 md:px-16 py-16">
      {/* Grille de catégories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={cat.link}
            className="block bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-56 object-cover"
            />
            <h2 className="text-xl font-semibold text-center py-4">
              {cat.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
