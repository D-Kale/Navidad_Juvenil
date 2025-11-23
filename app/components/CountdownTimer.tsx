'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ eventDate }: { eventDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const eventTime = new Date(eventDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("¡El evento ha comenzado!");
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (!isClient || !timeLeft) {
    return (
      <div className="flex justify-center gap-4 sm:gap-6 my-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-slate-700/50 p-4 rounded-lg text-center w-20 sm:w-28 animate-pulse">
            <div className="text-3xl sm:text-5xl font-bold text-amber-400">--</div>
            <div className="text-xs sm:text-sm uppercase tracking-wider">...</div>
          </div>
        ))}
      </div>
    );
  }

  if (typeof timeLeft === 'string') {
    return <h3 className="text-3xl font-bold text-amber-400 my-8">{timeLeft}</h3>;
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-6 my-8">
      <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-5 rounded-lg text-center w-20 sm:w-28 border border-white/20">
        <span className="text-3xl sm:text-5xl font-bold text-amber-400">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="block text-xs sm:text-sm uppercase tracking-wider">Días</span>
      </div>
      <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-5 rounded-lg text-center w-20 sm:w-28 border border-white/20">
        <span className="text-3xl sm:text-5xl font-bold text-amber-400">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="block text-xs sm:text-sm uppercase tracking-wider">Horas</span>
      </div>
      <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-5 rounded-lg text-center w-20 sm:w-28 border border-white/20">
        <span className="text-3xl sm:text-5xl font-bold text-amber-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="block text-xs sm:text-sm uppercase tracking-wider">Minutos</span>
      </div>
      <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-5 rounded-lg text-center w-20 sm:w-28 border border-white/20">
        <span className="text-3xl sm:text-5xl font-bold text-red-500 animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="block text-xs sm:text-sm uppercase tracking-wider">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
