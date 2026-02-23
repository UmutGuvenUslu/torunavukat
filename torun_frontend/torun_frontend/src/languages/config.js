import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// JSON dosyalarının yollarını kendi projene göre kontrol et
import tr from "../languages/tr.json";
import fr from "../languages/fr.json";
import en from "../languages/eng.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // Burada 'translation' anahtarını biz manuel ekliyoruz
      // Çünkü JSON dosyalarımızın içinde en dışta 'translation' kelimesi yok
      fr: { translation: fr },
      tr: { translation: tr },
      en: { translation: en },
    },
    lng: "fr", // Başlangıç dili
    fallbackLng: "fr",
    debug: true, // Hata varsa tarayıcı konsolunda (F12) detaylı gösterir
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
