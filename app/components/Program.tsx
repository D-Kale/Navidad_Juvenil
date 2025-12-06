'use client';

import React, { useState, useRef, useEffect } from 'react';

// Datos del programa
const schedule = [
  {
    time: "5:00 PM - 5:25 PM",
    title: "Introducción",
    desc: "Iniciamos con una oración, cantos y dinámicas de bienvenida. (25 min)",
    details: [
      { 
        type: 'info', 
        text: "Oración guiada (5 min)", 
        by: "Sacerdote",
        description: "Momento de oración y reflexión para iniciar el evento.",
        duration: "5:00"
      },
      { 
        type: 'canto', 
        text: "Noche de paz", 
        by: "Todos los grupos",
        duration: "2:40"
      },
      { 
        type: 'canto', 
        text: "Un gajo de chilincoco", 
        by: "Jóvenes y Matrimonio",
        duration: "2:40"
      },
      { 
        type: 'canto', 
        text: "Los peces en el río", 
        by: "Niños",
        duration: "2:00"
      },
      { 
        type: 'canto', 
        text: "Campanas sobre campanas", 
        by: "Niños",
        duration: "2:39"
      },
      { 
        type: 'canto', 
        text: "En la Capilla hay repique", 
        by: "Niños y Jóvenes",
        duration: "2:30"
      },
      { 
        type: 'dinamica', 
        text: "Dinámica: Montaña Rusa",
        by: "Equipo de animación",
        duration: "5:00",
        description: "¡Prepárate para subir y bajar en esta divertida dinámica grupal!"
      }
    ]
  },
  {
    time: "5:25 PM - 5:40 PM",
    title: "Historia del Nacimiento",
    desc: "Representación de la historia de la Navidad. (15 min)",
    details: [
      { 
        type: 'canto', 
        text: "Posada (canto)",
        by: "Todos",
        duration: "8:00"
      },
      { 
        type: 'canto', 
        text: "Una bella pastorcita", 
        by: "Matrimonio",
        duration: "2:26"
      },
      { 
        type: 'canto', 
        text: "Pastores venid", 
        by: "Niños",
        duration: "2:07"
      },
      { 
        type: 'canto', 
        text: "Ya vienen los reyes magos", 
        by: "Jóvenes",
        duration: "1:53"
      },
      { 
        type: 'canto', 
        text: "La sagrada familia", 
        by: "Matrimonio",
        duration: "2:19"
      }
    ]
  },
  {
    time: "5:40 PM - 6:10 PM",
    title: "Concierto Navideño",
    desc: "Espectáculo musical navideño con todos los grupos. (30 min)",
    details: [
      { 
        type: 'dinamica', 
        text: "Presentación de Cantos",
        by: "Equipo de animación",
        description: "¡Participa en esta dinámica musical!",
        duration: "5:00"
      },
      { 
        type: 'canto', 
        text: "Del cielo", 
        by: "Todos los grupos",
        duration: "4:20"
      },
      { 
        type: 'canto', 
        text: "La marimorena", 
        by: "Jóvenes",
        duration: "3:10"
      },
      { 
        type: 'canto', 
        text: "Chiquirritin", 
        by: "Matrimonios y Jóvenes",
        duration: "2:30"
      },
      { 
        type: 'canto', 
        text: "Canta un ángel", 
        by: "Jóvenes y Matrimonio",
        duration: "2:45"
      },
      { 
        type: 'canto', 
        text: "El rey vendrá", 
        by: "Todos los grupos",
        duration: "2:21"
      }
    ]
  }
];

const Program = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="programa" className="py-12 sm:py-16 bg-gradient-to-b from-green-50 to-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-amber-600 mb-4">
            🎵 Itinerario del Evento
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Disfruta de un programa lleno de música, alegría y el verdadero espíritu navideño
          </p>
        </div>
        
        <div className="relative">
          {/* Línea de tiempo decorativa */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-amber-300 to-green-400 -translate-x-1/2 hidden sm:block"></div>
          
          <ul className="space-y-8 sm:space-y-12">
            {schedule.map((item, index) => (
              <TimeLineItem key={index} item={item} index={index} openIndex={openIndex} handleToggle={handleToggle} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Componente para un ítem de la línea de tiempo
const TimeLineItem = ({ item, index, openIndex, handleToggle }: { item: any, index: number, openIndex: number | null, handleToggle: (index: number) => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const isOpen = openIndex === index;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getDetailPanelStyles = () => {
    if (!isClient || window.innerWidth <= 640) {
      return { marginLeft: '2.5rem', marginRight: '0' };
    }
    return {
      marginLeft: index % 2 === 0 ? 'calc(50% + 2rem)' : '0',
      marginRight: index % 2 === 0 ? '0' : 'calc(50% + 2rem)',
    };
  };

  // Extraer hora de inicio y fin del formato "5:00 PM - 5:30 PM"
  const [startTime, endTime] = item.time.split(' - ');
  const duration = item.desc.match(/\(([^)]+)\)/)?.[1] || '';

  return (
    <li className="relative group">
      {/* Línea de tiempo y punto */}
      <div className="absolute left-0 sm:left-1/2 top-6 w-8 h-8 -ml-4 sm:-ml-4 flex items-center justify-center z-10">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-green-600 scale-110' : 'bg-amber-500 group-hover:bg-green-500'
        }`}>
          <span className="text-white text-xs font-bold">{index + 1}</span>
        </div>
      </div>
      
      {/* Tarjeta del evento */}
      <div 
        className={`relative pl-12 sm:pl-0 mb-8 transition-all duration-300 ${
          isOpen ? 'scale-[1.02]' : ''
        }`}
        onClick={() => handleToggle(index)}
      >
        <div className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${
          isOpen ? 'border-green-500' : 'border-amber-400'
        } transition-all duration-300 hover:shadow-lg`}>
          {/* Encabezado */}
          <div className="p-5 sm:p-6 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    {startTime} - {endTime}
                  </span>
                  <span className="text-xs text-gray-500">{duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc.replace(/\([^)]+\)/g, '').trim()}</p>
              </div>
              {item.details && item.details.length > 0 && (
                <button 
                  className={`p-2 rounded-full transition-colors ${
                    isOpen ? 'bg-green-50 text-green-600' : 'text-gray-400 hover:bg-gray-50'
                  }`}
                  onClick={(e) => { e.stopPropagation(); handleToggle(index); }}
                >
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Detalles desplegables */}
          {item.details && item.details.length > 0 && (
            <div 
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 0) : 0 }}
            >
              <div 
                ref={contentRef}
                className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100"
              >
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Actividades</h4>
                <ul className="space-y-3">
                  {item.details.map((detail: any, i: number) => {
                    const iconMap: Record<string, { emoji: string; color: string }> = {
                      'canto': { emoji: '🎵', color: 'bg-blue-100 text-blue-600' },
                      'dinamica': { emoji: '🏃‍♂️', color: 'bg-green-100 text-green-600' },
                      'info': { emoji: 'ℹ️', color: 'bg-amber-100 text-amber-600' }
                    };
                    const { emoji, color } = iconMap[detail.type] || { emoji: '•', color: 'bg-gray-100 text-gray-600' };
                    
                    return (
                      <li key={i} className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg mr-3 ${color}`}>
                          {emoji}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{detail.text}</p>
                          {detail.by && (
                            <p className="text-xs text-gray-500 mt-1">
                              <span className="font-medium">Responsable:</span> {detail.by}
                            </p>
                          )}
                          {detail.duration && (
                            <p className="text-xs text-gray-500">
                              <span className="font-medium">Duración:</span> {detail.duration}
                            </p>
                          )}
                          {detail.description && (
                            <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                              {detail.description}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Program;