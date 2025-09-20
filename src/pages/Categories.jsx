import React from "react";
import { useParams } from "react-router-dom";

// Produits partagés

const sharedProducts = [
  {
    img: "/images/soins pour corps.webp",
    title: "",
    desc: "Gel douche rafraîchissant et doux pour tous types de peau",
    link: "/produit/gel-douche",
  },
];

// Produits par catégorie
const productsPourElle = [
  ...sharedProducts,
  {
    img: "/images/soins pour visage.webp",
    title: "Soins pour Visage",
    desc: "Nettoie, hydrate et éclaire le teint",
    link: "/produit/soins-visage",
  },
  {
    img: "/images/soins pour cheveux.webp",
    title: "Soins pour Cheveux",
    desc: "Hydrate et renforce vos cheveux",
    link: "/categorie/cheveux"
  },
];

const productsPourLui = [
  ...sharedProducts,
  // ajouter ici d'autres produits spécifiques pour lui si besoin
];

const productsPourBebe = [
  {
    img: "/images/produit-bebe1.webp",
    title: "Shampoing Bébé",
    desc: "Shampoing doux et hypoallergénique",
    link: "/produit/shampoing-bebe",
  },
  {
    img: "/images/produit-bebe2.webp",
    title: "Lotion Bébé",
    desc: "Hydrate et protège la peau délicate de bébé",
    link: "/produit/lotion-bebe",
  },
];

export default function Categories() {
  const { category } = useParams(); // récupère "elle", "lui" ou "bebe" depuis l'URL

  // Déterminer les produits à afficher selon la catégorie
  const products =
    category === "elle"
      ? productsPourElle
      : category === "lui"
      ? productsPourLui
      : category === "bebe"
      ? productsPourBebe
      : [];

  const categoryTitle =
    category === "elle"
      ? "Pour Elle"
      : category === "lui"
      ? "Pour Lui"
      : category === "bebe"
      ? "Pour Bébé"
      : "Toutes les catégories";

  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Catégorie : {categoryTitle}</h1>
      <p className="text-gray-700 text-center mb-10">
        Découvrez nos produits adaptés à cette catégorie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md overflow-hidden flex flex-col group"
          >
            <a
              href={item.link}
              className="h-[250px] flex items-center justify-center bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="px-4 py-4 flex flex-col items-center text-center">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              <button className="mt-4 px-4 py-2 bg-[#D8A47F] text-white font-semibold hover:bg-[#F4E1D2] transition">
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
