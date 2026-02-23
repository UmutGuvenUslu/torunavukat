import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="inline-flex p-5 rounded-full bg-red-100 mb-6">
          <AlertTriangle className="w-16 h-16 text-red-600" />
        </div>
        <h1 className="text-9xl font-bold text-slate-900">404</h1>
        <p className="text-2xl font-semibold text-slate-700 mt-4">
          The page you are looking for was not found.
        </p>
        <p className="text-slate-500 mt-2 mb-8">
          There might be a typo, or the page might have been moved.
        </p>
        <Link
          to="/"
          className="
    
    inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg
    transition-all duration-300 ease-out
    hover:bg-slate-800 
    hover:-translate-y-1     
    hover:shadow-2xl          
    hover:shadow-slate-500/40 
    focus:ring-4 focus:ring-slate-300 outline-none"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
