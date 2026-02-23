import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // JSON dosyalarındaki (tr.json, fr.json, eng.json) "nav" objesinin altındaki anahtarlar
  const menuKeys = ["cabinet", "honoraires", "competences", "postulation"];
  const languages = ["FR", "EN", "TR"];

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  // Güvenli dil kontrolü
  const currentLang = (i18n.language || "fr").toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#0b101e] font-sans z-50">
      {/* --- ÜST BAR (Header) --- */}
      <div className="flex items-center justify-between px-6 py-4 md:px-8 relative z-20 bg-[#0b101e]">
        {/* Logo Sol Kısım */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
            <span className="text-[#c4a661] font-serif font-semibold text-xl leading-none">
              LN
            </span>
          </div>
          <div className="hidden md:flex flex-col justify-center">
            <h1 className="text-white font-serif font-bold text-xl tracking-wide mb-1">
              LN Avocat
            </h1>
            <span className="text-[#64748b] text-[10px] font-bold tracking-[0.25em] uppercase">
              Barreau de Paris
            </span>
          </div>
        </div>

        {/* Masaüstü Menü Linkleri - Eşleştirme Burada */}
        <div className="hidden md:flex items-center gap-10 px-10 py-3 bg-[#1a2235] rounded-full">
          {menuKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`} // Sayfa içi scroll için id
              className="text-[#cbd5e1] text-sm font-medium hover:text-white transition-colors"
            >
              {t(`nav.${key}`)}{" "}
              {/* JSON'daki nav.cabinet, nav.honoraires vb. */}
            </a>
          ))}
        </div>

        {/* Masaüstü Sağ Kısım: Dil Seçimi ve İletişim */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#1a2235] px-4 py-3 rounded-full">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`text-xs font-bold transition-colors ${
                  currentLang.includes(lang)
                    ? "text-[#c4a661]"
                    : "text-[#64748b] hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a2235] hover:bg-[#232e48] text-white text-sm font-medium rounded-full transition-colors cursor-pointer">
            {t("nav.contact")}
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

        {/* Mobil Hamburger Butonu */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden text-white p-2 transition-opacity duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* --- MOBİL AÇILIR MENÜ (Overlay) --- */}
      <div
        className={`fixed inset-0 bg-[#0b101e] z-50 flex flex-col px-6 py-4 md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex justify-between items-center pb-6 border-b border-[#1a2235]">
          <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
            <span className="text-[#c4a661] font-serif font-semibold text-xl leading-none">
              LN
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 bg-[#1a2235] rounded-full text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-6 pt-8 pl-2">
          {menuKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-[#cbd5e1] font-semibold text-[17px] hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-[#334155] rounded-full"></span>
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-[#1a2235] pb-4">
          <div className="flex justify-center gap-6 mb-6">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`text-sm font-bold tracking-wider transition-colors ${
                  currentLang.includes(lang)
                    ? "text-[#c4a661]"
                    : "text-[#64748b] hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button className="w-full flex justify-center items-center gap-2 bg-[#d8a865] hover:bg-[#c49658] text-[#0b101e] font-bold text-[15px] py-4 rounded-xl transition-colors">
            {t("nav.contact_button")}
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
      </div>
    </nav>
  );
};

export default Navbar;
