import React, { useState } from "react";

const CompetencesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Accordion içerik verileri ve ikonlar
  const competencesData = [
    {
      title: "Droit commercial",
      content:
        "Conseil et contentieux en matiere de baux commerciaux, fonds de commerce et contrats commerciaux. Accompagnement dans la redaction et la negociation de vos contrats.",
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
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: "Droit des societes",
      content:
        "Creation, gestion et transmission d'entreprises, operations sur le capital, cessions de parts. Assistance lors des assemblees generales et litiges entre associes.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5"
          />
        </svg>
      ),
    },
    {
      title: "Difficultes de l'entreprise",
      content:
        "Prevention et traitement des difficultes, procedures collectives, sauvegarde et redressement. Accompagnement du dirigeant face aux creanciers et mandataires judiciaires.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="competences"
      className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Accordion Listesi */}
        <div className="flex flex-col border-t border-gray-200">
          {competencesData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                {/* Accordion Başlık Butonu */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    {/* İkon Konteyneri */}
                    <div className="w-10 h-10 rounded-lg bg-[#fdf8f0] text-[#d8a865] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#d8a865] group-hover:text-white">
                      {item.icon}
                    </div>
                    {/* Başlık Metni */}
                    <span
                      className={`text-[15px] md:text-base font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-[#d8a865]"
                          : "text-[#0b101e] group-hover:text-[#d8a865]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Chevron Ok İkonu */}
                  <svg
                    className={`w-5 h-5 text-[#64748b] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#d8a865]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Accordion İçerik (Animasyonlu Yumuşak Açılış) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-14 pr-4 text-[#475569] text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Açıklama Kutusu (Görseldeki gri/italik alan) */}
        <div className="mt-12 bg-[#f1f5f9] border border-gray-200 rounded-xl p-6 md:p-8">
          <p className="text-[#475569] text-sm md:text-base leading-relaxed italic">
            Selon les besoins de sa mission, le Cabinet peut collaborer
            etroitement avec divers professionnels et notamment des
            experts-comptables, commissaires aux comptes et commissaires de
            justice. Il exerce son activite en francais et en anglais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;
