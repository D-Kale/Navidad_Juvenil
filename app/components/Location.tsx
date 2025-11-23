import React from 'react';

const infoList = [
  { 
    icon: "🎟️", 
    title: "¡Entrada Libre!", 
    text: "Todos son bienvenidos, no es necesaria inscripción. ¡Solo ven con tu corazón dispuesto!" 
  },
  { 
    icon: "✨", 
    title: "¡Pura Alegría!", 
    text: "Recordemos que la Navidad es una época de felicidad. ¡Ven a compartir esa luz con nosotros!" 
  },
  { 
    icon: "🧑‍🤝‍🧑", 
    title: "¡Invita a un amigo!", 
    text: "La verdadera alegría se multiplica cuando se comparte. ¡No vengas solo!" 
  },
];

const mapEmbedHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5631168962!2d-86.2372094258071!3d12.142017730302363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff6504a44b9d%3A0x6b8641151d7c07b6!2sParroquia%20San%20Luis%20Gonzaga!5e0!3m2!1ses-419!2sni!4v1732325049389!5m2!1ses-419!2sni" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-green-800 mb-6">
            📍 ¡No Faltes! Te esperamos
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Dirección:</strong> Parroquia San Luis Gonzaga, Managua.
          </p>
          
          <div 
            className="w-full h-80 sm:h-96 rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
            dangerouslySetInnerHTML={{ __html: mapEmbedHtml }}
          >
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">
            Información Importante
          </h3>
          <ul className="space-y-6">
            {infoList.map((item) => (
              <li key={item.title} className="flex items-start">
                <span className="text-3xl mr-4 mt-1">{item.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Location;
