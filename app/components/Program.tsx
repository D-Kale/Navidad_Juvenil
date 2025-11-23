'use client';

import React, { useState, useRef, useEffect } from 'react';

// Datos del programa
const schedule = [
    {
      time: "4:30 PM",
      title: "¡Llegada y Bienvenida Alegre!",
      desc: "Mientras llegan todos, cantaremos villancicos conocidos y tendremos dinámicas para animar el ambiente. (30 min)",
      details: [
        { type: 'canto', text: "Canto: \"Los peces en el río\"", by: "Niños de Amiguitos de Jesús y María." },
        { type: 'dinamica', text: "Dinámica de \"El vaso\"", description: "En parejas jugaremos a ver quien logra primero agarrar el vaso y lograr la victoria." },
        { type: 'canto', text: "Canto: \"Campana sobre campana\"", by: "Pastoral juvenil y niños de Amiguitos de Jesús y María." }
      ]
    },
    {
      time: "5:00 PM",
      title: "Las Posadas: Entrada de José y María",
      desc: "Iniciamos oficialmente con una Oración y la representación de la búsqueda de posada. (Tiempo de 20 minutos para que los actores se ubiquen).",
      details: [
        { type: 'info', text: "Oración comunitaria e Inicio oficial." },
        { type: 'info', text: "Entrada de José y María: Pasarán por todo el público hasta llegar a su ubicación final." },
        { type: 'canto', text: "Canto: \"Las Posadas\"", by: "Grupo de Encuentros Conyugales (acompañando la entrada)." }
      ]
    },
    {
      time: "5:20 PM",
      title: "Representación de Reyes Magos y Pastores",
      desc: "Cantos especiales y representación para honrar el Nacimiento del Señor. (20 min)",
      details: [
        { 
          type: 'canto', 
          text: `Canto: "Los Reyes Magos - Villancicos Infantiles"`, 
          by: "Pastoral Juvenil",
          description: `¡Escucha en YouTube!: https://youtu.be/VmARBltUtNE` 
        },
        { 
          type: 'canto', 
          text: `Canto: "Pastores Venid - La Pandilla Navideña"`, 
          by: "Pastoral Juvenil (Canto) y Amiguitos de Jesús y María (Actuación)",
          description: `¡Escucha en YouTube!: https://youtu.be/zfxVfgp6qmU` 
        },
        { 
          type: 'canto', 
          text: `Canto: "Los Pastores a Belén"`, 
          by: "Pastoral Juvenil",
          description: `¡Escucha en YouTube!: https://youtu.be/E0-jqTPjyLE` 
        }
      ]
    },
    {
      time: "5:40 PM",
      title: "Dinámica: ¡De pie con Simón Dice Navideño!",
      desc: "Juego simple y rápido para que todos se levanten, se estiren y se rían. (10 min)",
      details: [
        { 
          type: 'dinamica', 
          text: "Instrucciones de la Dinámica: Simón Dice Navideño",
          by: "Liderada por Jafet Sirias (Pastoral Juvenil)", 
          description: "La persona guía dirá: 'Simón dice que...' y una acción (ej: 'Simón dice que abracen a un pastor'). Si la acción se hace sin el 'Simón dice', el que lo haga pierde. ¡Es un juego de agilidad mental y física para todas las edades!"
        }
      ]
    },
    {
      time: "5:50 PM",
      title: "Cantos Navideños: ¡A Cantar Juntos y al Acto Final!",
      desc: "Veinte minutos de villancicos tradicionales y populares que todos conocen, finalizando el plan y dando paso directo a la Santa Misa. (20 min)",
      details: [
        { type: 'canto', text: "Canto: \"La Marimorena\"" },
        { type: 'canto', text: "Canto: \"Ay del Chiquirritín\"" },
        { type: 'canto', text: "Canto: \"Noche de Paz\"" },
        { type: 'canto', text: "Canto: \"Vayamos Cristianos (Adeste Fideles)\"." },
        { type: 'info', text: "¡Al finalizar los cantos (6:00 PM), pasamos directamente a la celebración de la Santa Misa!" }, 
      ]
    },
];

const Program = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="programa" className="py-20 sm:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center text-green-800 mb-12 md:mb-16">
          🎶 Nuestro Itinerario de Alegría
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-amber-300 -translate-x-1/2"></div>
          
          <ul className="space-y-4">
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
    // Nuevo estado para saber si estamos en el cliente
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Esto solo se ejecuta en el navegador
        setIsClient(true);
    }, []);

    // Función para calcular los estilos de margen de forma segura
    const getDetailPanelStyles = () => {
        // En SSR o si es móvil (< 640px, que es el breakpoint 'sm' de Tailwind)
        // aplicamos el margen móvil, o si aún no se ha montado el cliente.
        if (!isClient || window.innerWidth <= 640) {
            return {
                marginLeft: '3rem',
                marginRight: '0',
            };
        }
        
        // Vista de escritorio: alternamos izquierda y derecha
        return {
            marginLeft: index % 2 === 0 ? 'calc(50% + 2rem)' : '0',
            marginRight: index % 2 === 0 ? '0' : 'calc(50% + 2rem)',
        };
    };


    return (
        <li className="relative transition-all duration-300">
            {/* Punto de la línea de tiempo */}
            <div className="absolute left-4 sm:left-1/2 top-1 w-4 h-4 bg-red-700 rounded-full -translate-x-1/2 z-10"></div>
            
            {/* Contenido principal del evento */}
            <div 
                className="pl-12 sm:pl-0 sm:flex sm:items-center rounded-lg hover:bg-gray-50 cursor-pointer p-2 sm:p-0 transition-colors" 
                style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
                onClick={() => handleToggle(index)}
            >
                {/* Hora */}
                <div className="sm:w-1/2 sm:pr-8" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-red-700">{item.time}</span>
                </div>
                {/* Título y Descripción */}
                <div className="relative sm:w-1/2 sm:pl-8" style={{ textAlign: 'left' }}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-1 sm:mt-0">{item.title}</h3>
                    <p className="text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl">{item.desc}</p>
                    
                    {/* Icono de flecha para expandir */}
                    {item.details && item.details.length > 0 && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-green-700 transition-transform duration-300" 
                            style={{ transform: openIndex === index ? 'rotate(180deg) translateY(50%)' : 'translateY(-50%)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>
            
            {/* Panel de detalles expandible */}
            <div 
                className="transition-all duration-500 ease-in-out overflow-hidden"
                // Altura dinámica basada en el contenido. Usamos un valor seguro si contentRef no está listo.
                style={{ maxHeight: openIndex === index ? (contentRef.current?.scrollHeight ?? 0) + 50 : 0 }}
            >
                {item.details && item.details.length > 0 && (
                    <div 
                        ref={contentRef}
                        className="mt-4 sm:mt-2 p-6 bg-white rounded-lg shadow-xl border-2 border-amber-200"
                        // Aplicamos los estilos calculados de forma segura
                        style={isClient ? getDetailPanelStyles() : {}}
                    >
                        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 text-green-800 border-b border-gray-200 pb-2">Detalles:</h4>
                        <ul className="list-none space-y-3">
                            {item.details.map((detail:any, i:number) => (
                                <li key={i} className="flex items-start p-3">
                                    <span className="mr-4 text-xl bg-amber-100 text-amber-700 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        {detail.type === 'canto' && '🎶'}
                                        {detail.type === 'dinamica' && '🏃‍♂️'}
                                        {detail.type === 'info' && 'ℹ️'}
                                    </span>
                                    <div>
                                        <span className="font-semibold text-gray-700 text-base sm:text-lg md:text-xl">{detail.text}</span>
                                        {detail.by && <p className="text-sm sm:text-base md:text-lg text-gray-600 italic pl-1 mt-1">Por: {detail.by}</p>}
                                        {detail.description && (
                                            detail.type === 'canto' ? (
                                                <p className="text-sm sm:text-base text-gray-600 pl-1 mt-1">
                                                    <a 
                                                      href={detail.description.replace('¡Escucha en YouTube!: ', '')} 
                                                      target="_blank" 
                                                      rel="noopener noreferrer" 
                                                      className="text-blue-500 hover:text-blue-700 underline text-sm sm:text-base"
                                                    >
                                                      {detail.description.replace('¡Escucha en YouTube!: ', '').substring(0, 30)}...
                                                    </a>
                                                </p>
                                            ) : (
                                                <p className="text-sm sm:text-base text-gray-600 pl-1 mt-1">Instrucciones: {detail.description}</p>
                                            )
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </li>
    );
}

export default Program;