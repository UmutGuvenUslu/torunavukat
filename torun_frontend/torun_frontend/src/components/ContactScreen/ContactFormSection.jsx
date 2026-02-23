import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const ContactFormSection = () => {
  const [countries, setCountries] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+33",
    flag: "🇫🇷",
    cca2: "FR",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      countryCode: "+33",
      countryCca2: "FR",
    },
  });

  // Ülkeleri API'den çekme
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flag,cca2")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .filter((c) => c.idd && c.idd.root)
          .map((c) => {
            const suffix =
              c.idd.suffixes && c.idd.suffixes.length === 1
                ? c.idd.suffixes[0]
                : "";
            return {
              name: c.name.common,
              code: `${c.idd.root}${suffix}`,
              flag: c.flag,
              cca2: c.cca2,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formatted);
      });
  }, []);

  // Dropdown dışı tıklama kontrolü
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menü açılınca aramaya odaklan
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 10);
    }
  }, [isDropdownOpen]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setValue("countryCode", country.code);
    setValue("countryCca2", country.cca2);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const onSubmit = (data) => {
    const fullData = {
      ...data,
      fullNumber: `${selectedCountry.code}${data.telephone}`,
    };
    console.log("Form Başarıyla Gönderildi:", fullData);
    alert("Merci! Votre message a été envoyé.");
  };

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.code.includes(searchTerm),
  );

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* 1. Satır: İsim ve Soyisim */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#0b101e] text-sm font-semibold">
                Prenom
              </label>
              <input
                type="text"
                placeholder="Votre prenom"
                className={`w-full px-4 py-3 rounded-lg border ${errors.prenom ? "border-red-500" : "border-gray-200"} bg-white text-[#0b101e] focus:outline-none focus:ring-2 focus:ring-[#d8a865] transition-all`}
                {...register("prenom", { required: "Ce champ est requis" })}
              />
              {errors.prenom && (
                <span className="text-red-500 text-xs">
                  {errors.prenom.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#0b101e] text-sm font-semibold">
                Nom
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className={`w-full px-4 py-3 rounded-lg border ${errors.nom ? "border-red-500" : "border-gray-200"} bg-white text-[#0b101e] focus:outline-none focus:ring-2 focus:ring-[#d8a865] transition-all`}
                {...register("nom", { required: "Ce champ est requis" })}
              />
              {errors.nom && (
                <span className="text-red-500 text-xs">
                  {errors.nom.message}
                </span>
              )}
            </div>
          </div>

          {/* 2. Satır: E-posta ve Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#0b101e] text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-200"} bg-white text-[#0b101e] focus:outline-none focus:ring-2 focus:ring-[#d8a865] transition-all`}
                {...register("email", {
                  required: "Ce champ est requis",
                  pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label className="text-[#0b101e] text-sm font-semibold">
                Telephone
              </label>
              <div
                className={`flex w-full rounded-lg border ${errors.telephone ? "border-red-500" : "border-gray-200"} bg-white focus-within:ring-2 focus-within:ring-[#d8a865] relative transition-all overflow-visible`}
              >
                {/* Custom Dropdown */}
                <div
                  ref={dropdownRef}
                  className="relative flex border-r border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-3 bg-gray-50 hover:bg-gray-100 rounded-l-lg transition-colors min-w-[90px]"
                  >
                    <span>{selectedCountry.flag}</span>
                    <span className="text-sm font-bold">
                      {selectedCountry.code}
                    </span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 max-h-[300px] flex flex-col bg-white border border-gray-100 rounded-lg shadow-2xl z-[100] overflow-hidden">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 text-sm border-b focus:outline-none bg-gray-50"
                      />
                      <div className="overflow-y-auto flex-1">
                        {filteredCountries.map((c, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleCountrySelect(c)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm transition-colors"
                          >
                            <span className="text-lg">{c.flag}</span>
                            <span className="font-bold w-12">{c.code}</span>
                            <span className="truncate text-gray-500">
                              {c.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="tel"
                  placeholder="Numéro"
                  className="flex-1 px-4 py-3 focus:outline-none rounded-r-lg"
                  {...register("telephone", {
                    required: "Ce champ est requis",
                    validate: (value) => {
                      const phoneNumber = parsePhoneNumberFromString(
                        value,
                        selectedCountry.cca2,
                      );
                      return (
                        (phoneNumber && phoneNumber.isValid()) ||
                        `Numéro invalide pour ${selectedCountry.cca2}`
                      );
                    },
                  })}
                />
              </div>
              {errors.telephone && (
                <span className="text-red-500 text-xs">
                  {errors.telephone.message}
                </span>
              )}
            </div>
          </div>

          {/* 3. Satır: Mesaj */}
          <div className="flex flex-col gap-2">
            <label className="text-[#0b101e] text-sm font-semibold">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Votre message..."
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-200"} bg-white text-[#0b101e] focus:outline-none focus:ring-2 focus:ring-[#d8a865] transition-all`}
              {...register("message", { required: "Ce champ est requis" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Gönder Butonu */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-12 py-4 bg-[#0b101e] hover:bg-[#d8a865] text-white hover:text-[#0b101e] font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Envoyer le message
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-[#64748b] text-[11px] leading-relaxed max-w-2xl mx-auto opacity-70">
            Le cabinet LN Avocat traite les données afin de faire suite à la
            prise de contact...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
