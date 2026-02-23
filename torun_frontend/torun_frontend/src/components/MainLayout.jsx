import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import BannerComponent from "./BannerComponent";

const MainLayout = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // Eğer kök dizindeysek anasayfadayız demektir
  const isHome = location.pathname === "/";

  // URL'den sayfa ismini alıyoruz (örn: "/cabinet" -> "cabinet")
  // Anasayfadaysak patlamaması için varsayılan olarak "home" atadık
  const pageKey = location.pathname.split("/")[1] || "home";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Her sayfada Navbar sabit */}
      <NavBar />

      {/* 2. Anasayfa değilse BannerComponent'i göster ve propsları i18n'den çek */}
      {!isHome && (
        <BannerComponent
          name={t(`pages.${pageKey}.title`)}
          desc={t(`pages.${pageKey}.description`)}
        />
      )}

      {/* 3. İlgili sayfanın içeriği buraya yüklenecek */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 4. Her sayfada Footer sabit */}
      <FooterSection />
    </div>
  );
};

export default MainLayout;
