import React from "react";

const Banner = (props) => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0b101e] font-sans overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Arka Plan Görseli (İnternetten temsili hukuk/adalet görseli) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')",
        }}
      ></div>

      {/* Koyu renk gradyan (Metnin okunaklı olması için) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0b101e] via-[#0b101e]/80 to-transparent"></div>

      {/* İçerik */}
      <div className="relative z-10 px-6">
        <span className="block text-[#d8a865] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          LN AVOCAT
        </span>
        <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-[56px] font-medium mb-4">
          {props.name}
        </h2>
        <p className="text-[#94a3b8] text-sm md:text-base font-medium">
          {props.desc}
        </p>
      </div>
    </section>
  );
};

export default Banner;
