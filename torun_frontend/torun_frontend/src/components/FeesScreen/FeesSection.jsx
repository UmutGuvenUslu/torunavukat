import React, { useState } from "react";

const FeesAccordion = () => {
  // Hangi sekmenin açık olduğunu tutan state. null ise hepsi kapalıdır.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Eğer tıklanan zaten açıksa kapat, değilse onu aç
    setOpenIndex(openIndex === index ? null : index);
  };

  // Accordion içerik verileri (Görseldeki başlıklar ve eklenecek içerikler)
  const accordionData = [
    {
      title: "Les honoraires au temps passe",
      content:
        "Le client est facturé au temps passé sur la base d'un taux horaire convenu à l'avance. Un décompte détaillé des diligences accomplies est régulièrement communiqué au client.",
    },
    {
      title: "Les honoraires au forfait",
      content:
        "Une rémunération globale et intangible est fixée pour l'ensemble de la procédure ou de la mission. Ce mode est privilégié pour les procédures standardisées.",
    },
    {
      title: "Les honoraires au resultat",
      content:
        "Il se compose d'un honoraire de base (fixe) complété par un honoraire supplémentaire calculé en fonction du résultat obtenu ou du service rendu.",
    },
    {
      title: "L'abonnement",
      content:
        "Pour les clients ayant des besoins juridiques récurrents, un contrat d'abonnement mensuel ou annuel peut être mis en place pour un accompagnement régulier.",
    },
    {
      title: "L'assurance protection juridique",
      content:
        "Votre contrat d'assurance (habitation, carte bancaire, etc.) peut inclure une garantie protection juridique prenant en charge tout ou partie des honoraires du Cabinet.",
    },
    {
      title: "Les frais",
      content:
        "Les frais et débours (frais d'huissier, droits de plaidoirie, timbres fiscaux, frais d'expertise) sont toujours facturés en sus des honoraires et restent à la charge du client.",
    },
    {
      title: "La contestation des honoraires",
      content:
        "En cas de litige relatif au paiement des honoraires, le Bâtonnier de l'Ordre des Avocats de Paris peut être saisi par la partie la plus diligente.",
    },
  ];

  return (
    <section
      id="honoraires"
      className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Üst Açıklama Metni */}
        <p className="text-center text-[#475569] text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Le Cabinet propose differents modes de facturation adaptes a la nature
          de la mission et aux besoins du client. Chaque mode est presente
          ci-dessous.
        </p>

        {/* Accordion Listesi */}
        <div className="flex flex-col border-t border-gray-200">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                {/* Accordion Başlık (Tıklanabilir Buton) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
                >
                  <span
                    className={`text-[15px] md:text-base font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#d8a865]"
                        : "text-[#0b101e] group-hover:text-[#d8a865]"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Chevron (Ok) İkonu - Açıkken 180 derece döner */}
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

                {/* Accordion İçerik (Grid hilesi ile yumuşak açılıp kapanma animasyonu) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[#475569] text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeesAccordion;
