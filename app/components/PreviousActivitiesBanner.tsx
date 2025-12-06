import React from 'react';

const placeholders = [
  { url: "/images/dulce_nacimiento.jpeg", alt: "Gran Espiritu Navide;o y Juvenil", span: "lg:col-span-2 lg:row-span-2" },
  { url: "/images/nacimiento.jpeg", alt: "Representación de el nacimiento del señor", span: "lg:col-span-2" },
  { url: "/images/nacimiento2.jpeg", alt: "Centrandonos en un Cristo joven", span: "" },
  { url: "/images/niños_cantores.jpeg", alt: "Grupo de Cantores", span: "" },
  { url: "/images/navidad_juvenil.jpeg", alt: "Actuación con los mas peque;os", span: "lg:col-span-2" },
];

const PreviousActivitiesBanner = () => {
  return (
    <section id="galeria" className="py-20 sm:py-24 bg-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-amber-300 mb-4">
          📸 Momentos de Alegría Pasada
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Mira la alegría que hemos compartido en navidades anteriores. ¡Este año será aún mejor!
        </p>
        
        <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-4 lg:auto-rows-fr">
          {placeholders.map((photo, index) => {
            // Determinar el ancho de cada elemento basado en su posición y tamaño
            let widthClass = 'w-full sm:w-[calc(50%-0.5rem)]';
            
            // Si es la primera imagen, ocupa todo el ancho en móviles
            if (index === 0) {
              widthClass = 'w-full lg:col-span-2 lg:row-span-2';
            } 
            // Si es la última imagen, también ocupa todo el ancho en móviles
            else if (index === placeholders.length - 1) {
              widthClass = 'w-full lg:col-span-2';
            }
            
            return (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${widthClass} ${photo.span} aspect-video lg:aspect-auto`}
                style={{ 
                  minHeight: index === 0 ? '250px' : '150px',
                  flex: index === 0 ? '1 0 100%' : '1 0 calc(50% - 0.5rem)'
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:opacity-90"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = "https://placehold.co/400x300/000000/ffffff?text=Placeholder";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm sm:text-base px-4 text-center">
                    {photo.alt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PreviousActivitiesBanner;
