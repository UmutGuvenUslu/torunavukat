import AboutSection from "./components/HomeScreen/AboutSeciton";
import ContactSection from "./components/HomeScreen/ContactSection";
import HeroSection from "./components/HomeScreen/HeroSection";
import MapSection from "./components/HomeScreen/MapSection";
import Navbar from "./components/NavBar";
import Footer from "./components/FooterSection";
import Banner from "./components/BannerComponent";
import ServicesSection from "./components/OfficeScreen/ServiceSection";
import FeesAccordion from "./components/FeesScreen/FeesSection";
import CompetencesSection from "./components/CompetencesScreen/CompetencesSection";
import PostulationSection from "./components/PostulationScreen/PostulationSection";
import ContactFormSection from "./components/ContactScreen/ContactFormSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner
        name="Honoraires"
        desc="Transparence et flexibilite dans nos modes de facturation"
      ></Banner>
      <ContactFormSection></ContactFormSection>
      <Footer></Footer>
    </>
  );
}

export default App;
