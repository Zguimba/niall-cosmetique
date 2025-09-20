import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-10 px-4 md:px-16">
      {/* Section À propos & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Bloc À propos */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">À propos</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/apropos" className="hover:text-gray-900">
                Qui sommes-nous ?
              </a>
            </li>
            <li>
              <a href="/conditions-utilisation" className="hover:text-gray-900">
                Conditions Générales d'Utilisation
              </a>
            </li>
            <li>
              <a href="/conditions-livraison" className="hover:text-gray-900">
                Conditions Générales de Livraison
              </a>
            </li>
            <li>
              <a href="/paiement" className="hover:text-gray-900">
                Méthode de paiement
              </a>
            </li>
          </ul>
        </div>

        {/* Bloc Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <MapPin size={20} className="text-gray-600 mt-1" />
              <span>
                Tassala El Merdja, Groupe Propriété N°116, Section 03, Alger, Algérie
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-gray-600" />
              <span>0560 83 48 13 | 0560 85 74 66</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-gray-600" />
              <span>infos@niallcosmetique.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={20} className="text-gray-600" />
              <span>Dimanche - Jeudi / 08:00 - 16:30</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ligne séparation */}
      <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col items-center">
        {/* Réseaux sociaux */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Niall. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
