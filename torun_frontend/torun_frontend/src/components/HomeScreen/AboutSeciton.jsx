import React from "react";

const AboutSection = () => {
  return (
    <section
      id="le-cabinet"
      className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Sol Kısım: Görsel */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-md mx-auto md:max-w-none">
            {/* İnternetten temsili profesyonel portre görseli */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Laurent Novella"
              className="w-full h-auto object-cover rounded-2xl shadow-sm aspect-[4/5] object-top"
            />
          </div>
        </div>

        {/* Sağ Kısım: İçerik */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          {/* Üst Kicker (Küçük Başlık) */}
          <span className="text-[#d8a865] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Le Cabinet
          </span>

          {/* Ana Başlık */}
          <h2 className="text-[#0b101e] font-serif text-3xl md:text-4xl lg:text-[44px] font-bold mb-6">
            Laurent Novella
          </h2>

          {/* 1. Paragraf */}
          <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-6">
            Inscrit au Barreau de Paris, le Cabinet LN Avocat accompagne les
            entreprises et les dirigeants dans l'ensemble de leurs
            problématiques juridiques. Fort d'une expertise reconnue en droit
            commercial, droit des sociétés et difficultés de l'entreprise, le
            Cabinet intervient tant en conseil qu'en contentieux.
          </p>

          {/* 2. Paragraf */}
          <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-8">
            Le Cabinet assure une approche personnalisée et rigoureuse, en
            privilégiant la proximité avec ses clients et la recherche de
            solutions adaptées à chaque situation.
          </p>

          {/* Buton */}
          <button className="flex items-center gap-2 px-7 py-3.5 bg-[#0b101e] hover:bg-[#1a2235] text-white text-sm font-medium rounded-lg transition-colors">
            En savoir plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
