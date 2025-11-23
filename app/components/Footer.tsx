import React from 'react';
import { NOMBRE_PARROQUIA, NOMBRE_PASTORAL, LOGO_PASTORAL } from '@/app/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-12 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <img 
            src={LOGO_PASTORAL} 
            alt="Logo de la Pastoral Juvenil" 
            className="h-16 w-16 mx-auto rounded-full object-cover border-2 border-white/50"
            onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/64x64/334155/ffffff?text=P.J." }}
          />
        </div>
        <p className="font-semibold text-lg text-white mb-2">
          Organizado con amor por la {NOMBRE_PASTORAL}
        </p>
        <p>
          {NOMBRE_PARROQUIA} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
