import React from 'react';
import CountdownTimer from './CountdownTimer';
import { LOGO_PARROQUIA, FECHA_EVENTO, HERO_BACKGROUND } from '@/app/constants';

const InfoItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center justify-center gap-2">
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center text-center text-white p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <img 
            src={LOGO_PARROQUIA} 
            alt="Logo de la Parroquia San Luis" 
            className="h-24 w-24 sm:h-32 sm:w-32 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80"
            onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/128x128/ffffff/000000?text=Logo" }}
          />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-shadow-lg mb-4">
          Luz y Alegría: Nuestra Navidad Parroquial
        </h1>
        <p className="text-lg sm:text-2xl mb-8 text-shadow">
          Una velada de cantos, oración y comunidad.
        </p>
        
        <CountdownTimer eventDate={FECHA_EVENTO} />
        
        <div className="mt-8 bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-8">
          <InfoItem icon="📅" text="Sábado, 24 Diciembre" />
          <InfoItem icon="⏰" text="4:30 PM - 6:10 PM" /> 
          <InfoItem icon="📍" text="Salón Parroquial San Luis" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
