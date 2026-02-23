import React from "react";

const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[50vh] bg-[#0b101e] px-6 py-16 text-center z-10">
      {/* İsteğe bağlı arkaya hafif bir logo veya terazi deseni eklenebilir, şu an temiz koyu arka plan */}
      <div className="max-w-2xl relative z-10 flex flex-col items-center">
        <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Parlons de votre projet
        </h2>

        <p className="text-[#94a3b8] text-base md:text-lg mb-10 leading-relaxed px-4">
          N'hésitez pas à nous contacter pour une première consultation. Nous
          serons ravis de vous accompagner.
        </p>

        <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d8a865] hover:bg-[#c49658] text-[#0b101e] font-semibold rounded-lg transition-colors">
          Prendre rendez-vous
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
      </div>
    </section>
  );
};

export default ContactSection;
