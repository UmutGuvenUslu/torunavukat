import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Droit commercial",
      description:
        "Conseil et contentieux en matiere de baux commerciaux, fonds de commerce et contrats commerciaux.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: "Droit des societes",
      description:
        "Creation, gestion et transmission d'entreprises, operations sur le capital, cessions de parts.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5"
          />
        </svg>
      ),
    },
    {
      title: "Difficultes de l'entreprise",
      description:
        "Prevention et traitement des difficultes, procedures collectives, sauvegarde et redressement.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    // Alt gri arka plan
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* CSS Grid ile mobilde 1, tablette 2, masaüstünde 3 kolonlu yapı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // group sınıfı ve hover efektleri eklendi
              className="group cursor-pointer bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col h-full"
            >
              {/* İkon Çerçevesi - Hover durumunda renk değiştirir */}
              <div className="w-12 h-12 rounded-xl bg-[#fdf8f0] text-[#d8a865] group-hover:bg-[#d8a865] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Kart Başlığı - Hover durumunda altın sarısı olur */}
              <h3 className="text-[#0b101e] group-hover:text-[#d8a865] transition-colors duration-300 font-serif text-xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Kart Açıklaması */}
              <p className="text-[#475569] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
