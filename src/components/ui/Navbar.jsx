import { useState } from "react";
import { Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-4 py-4 sticky top-0 z-50 font-FranklinGothicURW">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 md:h-16 object-contain" />
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center justify-center flex-1 space-x-12 text-base font-FranklinGothicURW tracking-widest uppercase">
          <li>
            <Link to="/" className="transition-colors duration-300 hover:text-pink-500">
              Accueil
            </Link>
          </li>

          {/* Catégories avec flèche + sous-menu */}
          <li className="relative group flex items-center">
            <span className="cursor-pointer flex items-center gap-1 transition-colors duration-300 hover:text-pink-500">
              Catégories <ChevronDown size={16} className="mt-0.5" />
            </span>
            {/* Sous-menu */}
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
              <li>
                <Link
                  to="/categorie/elle"
                  className="block px-4 py-2 hover:bg-pink-100 transition"
                >
                  Pour Elle
                </Link>
              </li>
              <li>
                <Link
                  to="/categorie/lui"
                  className="block px-4 py-2 hover:bg-pink-100 transition"
                >
                  Pour Lui
                </Link>
              </li>
              <li>
                <Link
                  to="/categorie/bebe"
                  className="block px-4 py-2 hover:bg-pink-100 transition"
                >
                  Bébé
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/soins" className="transition-colors duration-300 hover:text-pink-500">
              Soins
            </Link>
          </li>
          <li>
            <Link to="/apropos" className="transition-colors duration-300 hover:text-pink-500">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition-colors duration-300 hover:text-pink-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icônes & menu burger mobile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100040407313983&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1877F2] transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/niallcosmetique?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#C13584] transition"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-3 text-base font-FranklinGothicURW tracking-widest uppercase">
          <li>
            <Link to="/" className="transition-colors duration-300 hover:text-pink-500">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/categorie/pour-elle" className="transition-colors duration-300 hover:text-pink-500">
             Elle
            </Link>
          </li>
          <li>
            <Link to="/categorie/pour-lui" className="transition-colors duration-300 hover:text-pink-500">
              Lui
            </Link>
          </li>
          <li>
            <Link to="/categorie/bebe" className="transition-colors duration-300 hover:text-pink-500">
              Bébé
            </Link>
          </li>
          <li>
            <Link to="/soins" className="transition-colors duration-300 hover:text-pink-500">
              Soins
            </Link>
          </li>
          <li>
            <Link to="/apropos" className="transition-colors duration-300 hover:text-pink-500">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition-colors duration-300 hover:text-pink-500">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
