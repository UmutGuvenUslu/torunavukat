import React, { useState } from "react";
import { ShieldCheck, User, Lock, AlertCircle } from "lucide-react";

const AdminLogin = ({ onLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all">
        {/* Dekoratif Üst Kısım */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 text-center">
          <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-4 ring-1 ring-blue-500/50">
            <ShieldCheck className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            LN Avocat
          </h2>
          <p className="text-slate-400 mt-2 font-medium">
            Yönetim Paneline Giriş
          </p>
        </div>

        {/* Form Alanı */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="flex items-center p-4 text-sm text-red-800 border border-red-100 rounded-xl bg-red-50 animate-shake">
              <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
              <span className="font-semibold">{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Kullanıcı Adı
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                placeholder="admin"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Şifre
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            Sisteme Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
