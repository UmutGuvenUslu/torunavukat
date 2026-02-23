import React, { useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  House,
  Users,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminSection = ({ onLogout }) => {
  // Mobil ekranlarda sol menünün açılıp kapanmasını kontrol eden state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* MOBİL OVERLAY: Menü açıkken arka planı hafifçe karartır ve tıklanınca menüyü kapatır */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR (MOBİLDE GİZLİ, BUTONLA AÇILIR) */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 md:w-64 bg-slate-900 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Sidebar Üst Başlık ve Mobil Kapatma Butonu */}
        <div className="p-6 md:p-8 text-2xl font-black border-b border-slate-800 tracking-tight text-blue-500 flex justify-between items-center">
          <span>LN Panel</span>
          <button
            className="md:hidden text-slate-400 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigasyon Linkleri */}
        <nav className="flex-1 p-4 mt-2">
          <button className="w-full flex items-center p-4 md:p-3 rounded-xl transition-all font-medium bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <LayoutDashboard className="mr-3 w-5 h-5 md:w-4 md:h-4" /> Dashboard
          </button>
        </nav>

        {/* Çıkış Butonu */}
        <button
          onClick={onLogout}
          className="m-6 p-4 md:p-3 flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all font-bold"
        >
          <LogOut className="mr-3 w-5 h-5 md:w-4 md:h-4" /> Çıkış Yap
        </button>
      </aside>

      {/* ANA İÇERİK ALANI */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* ÜST BİLGİ VE BUTONLAR */}
        <div className="p-4 md:p-10 pb-0 md:pb-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 gap-4 md:gap-0">
            <div className="flex items-center">
              {/* Mobil Menü Açma Butonu (Sadece mobilde görünür) */}
              <button
                className="mr-4 p-2 bg-slate-100 rounded-lg text-slate-600 md:hidden hover:bg-slate-200 transition active:scale-95"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

              <div>
                <h1 className="text-xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                  Hoş Geldiniz, Av. Torun
                </h1>
                <p className="text-sm text-slate-500 mt-1 font-medium hidden md:block">
                  LN Avocat web sitesinin güncel durumu.
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="w-full md:w-auto justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 md:py-3.5 rounded-xl font-bold flex items-center shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <House className="mr-2 w-5 h-5 md:w-4 md:h-4" /> Sitenin Ön Yüzüne
              Git
            </Link>
          </div>
        </div>

        {/* DASHBOARD İÇERİKLERİ */}
        <div className="p-4 md:p-10 pt-6 md:pt-10 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* ÖZET KARTLARI (Mobilde alt alta, bilgisayarda yan yana) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Kart 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageSquare className="w-24 h-24 text-blue-600" />
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs md:text-sm tracking-wider">
                Okunmamış Mesajlar
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
                5
              </h3>
            </div>

            {/* Kart 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-green-100 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-24 h-24 text-green-600" />
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs md:text-sm tracking-wider">
                Bu Ayki Ziyaretçi
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
                1.2k
              </h3>
            </div>

            {/* Kart 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-purple-100 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase className="w-24 h-24 text-purple-600" />
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs md:text-sm tracking-wider">
                Aktif Hizmet Alanları
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
                8
              </h3>
            </div>
          </div>

          {/* SON GELEN MESAJLAR BÖLÜMÜ */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 md:p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" /> Son
                İletişim Formları
              </h2>
              <button className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors">
                Tümünü Gör <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Mobilde taşmayı önlemek için overflow-x-auto eklendi */}
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800">
                        Ahmet Yılmaz
                      </p>
                      <p className="text-sm text-slate-500 mt-0.5 truncate max-w-[200px] md:max-w-md">
                        Boşanma davası süreci hakkında bilgi almak istiyorum,
                        ofisinize gelsem...
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-400 text-right whitespace-nowrap">
                      Bugün 14:30
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800">Ayşe Demir</p>
                      <p className="text-sm text-slate-500 mt-0.5 truncate max-w-[200px] md:max-w-md">
                        İşten çıkarıldım, ihbar ve kıdem tazminatımı alamadım.
                        Nasıl bir yol...
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-400 text-right whitespace-nowrap">
                      Dün
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSection;
