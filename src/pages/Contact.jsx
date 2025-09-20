import React from "react";

export default function Contact() {
  return (
    <div className="px-4 md:px-16 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-gray-900 font-serif text-center">
        Contactez-nous
      </h1>

      {/* Formulaire de contact */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Envoyez-nous un message
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D8A47F] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D8A47F] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Votre message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#D8A47F] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D8A47F] text-white font-semibold py-3 rounded-lg hover:bg-[#c28d6c] transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Carte Google Maps */}
      <div className="max-w-5xl mx-auto w-full h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.157538769119!2d3.0242442152364337!3d36.6996748800494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb0874f7e26bb%3A0x5ad93b4c4f39c89c!2sAlger!5e0!3m2!1sfr!2sdz!4v1694012345678!5m2!1sfr!2sdz" // 👉 Mets ici ton lien Google Maps
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
