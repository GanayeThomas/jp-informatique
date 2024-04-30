"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation principale avec un style de fond et une mise en page flexible */}
      <nav className="bg-[#333333] text-white p-3 flex items-center relative z-10">
        {/* Bouton pour basculer la visibilité du menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="z-20">
          {/* Icone de menu hamburger avec trois lignes horizontales */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Titre ou marque au centre de la barre de navigation */}
        <p className="text-3xl font-semibold m-auto">jp-informatique</p>
      </nav>

      {/* Conteneur pour les éléments du menu, avec animation de transition */}
      <div
        className={`fixed duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {/* Menu déroulant avec fond et transition */}
        <div
          className={`fixed h-full bg-[#333333] p-3 w-64 duration-300 flex flex-col items-center ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Liens de navigation */}
          <div>
            <a href="/accueil" className="block text-white py-2">
              Accueil
            </a>
            <a href="/services" className="block text-white py-2">
              Services
            </a>
            <a href="/tarifs" className="block text-white py-2">
              Tarifs
            </a>
            <a href="/a-propos" className="block text-white py-2">
              A propos
            </a>
            <a href="/contact" className="block text-white py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
