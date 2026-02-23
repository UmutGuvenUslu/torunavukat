import React from "react";

const PostulationSection = () => {
  const postulationData = [
    {
      id: "01",
      title: "Une couverture geographique etendue",
      content: (
        <p className="text-[#475569] text-sm md:text-base leading-relaxed">
          Le Cabinet est en mesure d'assurer les vacations de plaidoirie devant
          le Tribunal Judiciaire de Paris et les Tribunaux de Commerce d'Ile de
          France.
        </p>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Une maitrise en adequation avec la situation",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-[#475569] text-sm md:text-base leading-relaxed">
            Le Cabinet assurera le suivi de vos procedures, de vos audiences de
            mise en etat de plaidoirie au fond comme en refere, et vous
            accompagnera dans tous actes et demarches judiciaires.
          </p>
          <p className="text-[#475569] text-sm md:text-base leading-relaxed">
            Selon les procedures et les juridictions, les correspondances avec
            les juridictions et les auxiliaires de justice sont assurees par
            RPVA, courrier electronique ou par voie postale.
          </p>
        </div>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.25 15.75l-4.5 4.5a2.121 2.121 0 01-3-3l4.5-4.5m10.5-3l1.5-1.5a3.182 3.182 0 10-4.5-4.5l-1.5 1.5m3 4.5l-4.5 4.5m4.5-4.5l-4.5-4.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="postulation"
      className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-8">
        {postulationData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-start gap-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Sol Kısım: Numara ve İkon */}
            <div className="flex flex-col items-center justify-start shrink-0 md:w-16">
              <span className="text-[#d8a865] font-serif text-3xl font-bold tracking-tight">
                {item.id}
              </span>
              <div className="w-10 h-10 mt-2 rounded-lg bg-[#fdf8f0] text-[#d8a865] flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Sağ Kısım: Başlık ve Metinler */}
            <div className="flex flex-col">
              <h3 className="text-[#0b101e] font-serif text-xl font-bold mb-4">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostulationSection;
