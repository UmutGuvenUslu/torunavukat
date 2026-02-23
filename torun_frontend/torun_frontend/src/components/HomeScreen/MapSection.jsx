import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapSection = () => {
  // Bandırma koordinatları
  const position = [40.35, 27.965];

  return (
    <section className="relative w-full h-[50vh] bg-[#1a2235]">
      {/* Üst Kısım Karartma Efekti (Tasarım bütünlüğü için, harita kullanımını engellemez) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0b101e] to-transparent z-20 pointer-events-none"></div>

      {/* Harita Konteyneri - Etkileşimli ama butonsuz */}
      <div className="w-full h-full grayscale-[90%] hover:grayscale-[50%] transition-all duration-500 opacity-80 hover:opacity-100 relative z-10">
        <MapContainer
          center={position}
          zoom={14}
          zoomControl={false} // <-- + ve - butonlarını gizleyen sihirli prop
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default MapSection;
