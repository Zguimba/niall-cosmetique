import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function APropos() {
  return (
    <div className="px-6 md:px-16 py-12">
      {/* Section Hero */}
      <FadeInSection>
        <div className="relative mb-16">
          <img
            src="/images/produit01.webp"
            alt="Niall Cosmétique"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Votre Beauté est Notre Responsabilité
            </h1>
            <p className="max-w-3xl text-lg font-medium">
              Notre objectif est de vous offrir le meilleur de la beauté en
              termes de qualité, d’efficacité, de sécurité et de responsabilité
              pour satisfaire tous les besoins et les désirs de beauté dans
              toutes ses diversités.
            </p>
            <p className="mt-6 italic font-semibold">
              Mot de la Fondatrice : Touat Amina
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Section Histoire */}
      <FadeInSection>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <img
            src="/images/produit02.webp"
            alt="Fondatrice"
            className="w-full h-[400px] object-cover"
          />
          <p className="font-semibold text-gray-800 leading-relaxed">
            La passion de Mme Amina Touat pour les produits de beauté ainsi que
            son expertise en Marketing et en cosmétique, ont été les
            précurseurs de son aventure entrepreneuriale et la création de sa
            propre marque <strong>Niall Cosmétique</strong> en 2018 à Alger.
          </p>
        </div>
      </FadeInSection>

      {/* Section Nature */}
      <FadeInSection>
        <div className="mb-20">
          <h2
            className="text-3xl md:text-4xl mb-8 text-center font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Partagez les merveilles de la nature
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/produit03.webp"
              alt="Nature"
              className="w-full h-[350px] object-cover"
            />
            <p className="font-semibold text-gray-800 leading-relaxed">
              Niall Cosmétique s'inspire des merveilles de la nature pour créer
              des produits de beauté qui apportent soin et douceur au
              quotidien...
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Section Qualité */}
      <FadeInSection>
        <div className="mb-20">
          <h2
            className="text-3xl md:text-4xl mb-8 text-center font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Des ingrédients de qualité pour des produits de haute qualité
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="font-semibold text-gray-800 leading-relaxed order-2 md:order-1">
              Niall Cosmétique mise avant tout sur une production de qualité en
              n’utilisant que des ingrédients répondant aux standards les plus
              exigeants...
            </p>
            <img
              src="/images/gel10.webp"
              alt="Qualité"
              className="w-full h-[350px] object-cover order-1 md:order-2"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Section Sécurité */}
      <FadeInSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-6 font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            La Qualité et la Sécurité de nos produits sont notre priorité
          </h2>
          <p className="font-semibold text-gray-800 leading-relaxed">
            La qualité occupe une place indispensable pour garantir nos produits
            de beauté...
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
