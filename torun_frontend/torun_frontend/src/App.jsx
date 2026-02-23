import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

// --- HOME SCREEN BİLEŞENLERİ ---
import HeroSection from "./components/HomeScreen/HeroSection";
import AboutSeciton from "./components/HomeScreen/AboutSeciton";
import ContactSection from "./components/HomeScreen/ContactSection";
import MapSection from "./components/HomeScreen/MapSection";

// --- DİĞER SAYFALAR ---
import ServiceSection from "./components/OfficeScreen/ServiceSection";
import FeesSection from "./components/FeesScreen/FeesSection";
import CompetencesSection from "./components/CompetencesScreen/CompetencesSection";
import PostulationSection from "./components/PostulationScreen/PostulationSection";
import ContactFormSection from "./components/ContactScreen/ContactFormSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* ANASAYFA (Banner yok, senin sectionlar arka arkaya dizili) */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSeciton />
                <ContactSection />
                <MapSection />
              </>
            }
          />

          {/* ALT SAYFALAR (MainLayout bunlara otomatik Banner ekleyecek) */}
          <Route path="/cabinet" element={<ServiceSection />} />
          <Route path="/honoraires" element={<FeesSection />} />
          <Route path="/competences" element={<CompetencesSection />} />
          <Route path="/postulation" element={<PostulationSection />} />
          <Route path="/contact" element={<ContactFormSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
