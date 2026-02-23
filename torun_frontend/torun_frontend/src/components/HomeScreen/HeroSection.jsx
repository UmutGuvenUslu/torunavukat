import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0b101e] font-sans overflow-hidden">
      {/* Arka Plan Görseli */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')",
        }}
      ></div>

      {/* Görselin üzerine binen koyu gradyan (Metnin okunabilirliği için sola doğru koyulaşır) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b101e] via-[#0b101e]/80 to-transparent"></div>

      {/* İçerik Konteyneri */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Üst Kicker (Küçük Başlık) */}
          <h2 className="text-[#d8a865] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Avocat au Barreau de Paris
          </h2>

          {/* Ana Başlık */}
          <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.1] mb-6">
            Votre partenaire
            <br />
            juridique de confiance
          </h1>

          {/* Açıklama Metni */}
          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            Le Cabinet LN Avocat accompagne les entreprises et les dirigeants
            dans l'ensemble de leurs problématiques juridiques avec rigueur et
            proximité.
          </p>

          {/* Butonlar Grubu (Mobilde alt alta, ekranda yan yana) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Buton */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d8a865] hover:bg-[#c49658] text-[#0b101e] font-semibold rounded-lg transition-colors">
              Découvrir le Cabinet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
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

            {/* Secondary Buton */}
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border border-[#334155] hover:border-white text-[#cbd5e1] hover:text-white font-medium rounded-lg transition-all bg-transparent hover:bg-white/5">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
