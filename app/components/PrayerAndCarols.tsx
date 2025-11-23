'use client';

import React from 'react';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <details className="bg-white border-2 border-green-100 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <summary className="p-5 font-bold text-lg cursor-pointer hover:bg-green-50 transition-colors list-none flex justify-between items-center text-green-800">
      {title}
      <span className="text-green-700 transform transition-transform duration-300 details-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </summary>
    <div className="p-5 bg-white border-t border-green-100">
      <p className="whitespace-pre-line text-gray-700 leading-relaxed">{children}</p>
    </div>
  </details>
);

const PrayerAndCarols = () => {
  return (
    <section id="letras-oracion" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-green-800 mb-4">🎵 Letras de Villancicos</h2>
          <p className="text-xl text-gray-600">
            ¡Canta con alegría estas hermosas canciones navideñas!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <AccordionItem title="Los Peces en el Río">
            La Virgen se está peinando{'\n'}
            Entre cortina y cortina{'\n'}
            Sus cabellos son de oro{'\n'}
            Y el peine de plata fina{'\n'}
            {'\n'}
            Pero mira cómo beben los peces en el río{'\n'}
            Pero mira cómo beben por ver al Dios nacido{'\n'}
            Beben y beben y vuelven a beber{'\n'}
            Los peces en el río por ver a Dios nacer{'\n'}
            {'\n'}
            La Virgen está lavando{'\n'}
            Y tendiendo en el romero{'\n'}
            Los angelitos cantando{'\n'}
            Y el romero florecido{'\n'}
            {'\n'}
            Pero mira cómo beben los peces en el río{'\n'}
            Pero mira cómo beben por ver al Dios nacido{'\n'}
            Beben y beben y vuelven a beber{'\n'}
            Los peces en el río por ver a Dios nacer{'\n'}
            {'\n'}
            La Virgen está lavando{'\n'}
            Con muy poquito jabón{'\n'}
            Se le picaron las manos{'\n'}
            Manos de mi corazón{'\n'}
            {'\n'}
            Pero mira cómo beben los peces en el río{'\n'}
            Pero mira cómo beben por ver al Dios nacido{'\n'}
            Beben y beben y vuelven a beber{'\n'}
            Los peces en el río por ver a Dios nacer
            </AccordionItem>

            <AccordionItem title="Campana sobre Campana">
            Campana sobre campana{'\n'}
            Y sobre campana una{'\n'}
            Asómate a la ventana{'\n'}
            Y verás al Niño en la cuna{'\n'}
            {'\n'}
            Belén, campana de Belén{'\n'}
            Que los ángeles tocan{'\n'}
            Que nuevas nos traen{'\n'}
            {'\n'}
            Recogío tu rebaño{'\n'}
            ¿Y a dónde va tu pastorcillo?{'\n'}
            Voy llevando al portal{'\n'}
            De queso, manteca y vino{'\n'}
            {'\n'}
            Belén, campana de Belén{'\n'}
            Que los ángeles tocan{'\n'}
            Que nuevas nos traen{'\n'}
            {'\n'}
            Campana sobre campana{'\n'}
            Y sobre campana dos{'\n'}
            Asómate a la ventana{'\n'}
            Y verás al Niño de Dios{'\n'}
            {'\n'}
            Belén, campana de Belén{'\n'}
            Que los ángeles tocan{'\n'}
            Que nuevas nos traen{'\n'}
            {'\n'}
            Belén, campana de Belén{'\n'}
            Que los ángeles tocan{'\n'}
            Que nuevas nos traen{'\n'}
            </AccordionItem>

            <AccordionItem title="Los Reyes Magos">
            //Eran Melchor, gaspar y Baltazar. Eran los tres reyes magos//{'\n'}
            //Que encontraron a Jesús en el portal//{'\n'}
            {'\n'}
            Por el brillo de una estrella descubrieron unos magos{'\n'}
            Que a la tierra había llegado un salvador y desde la noche aquella{'\n'}
            Encaminaron sus pasos, tras la pista y tras la huella que hasta Jesús les llevó. {'\n'}
            Encaminaron sus pasos, tras la pista y tras la huella que hasta Jesús les llevó. {'\n'}
            {'\n'}
            //Eran Melchor, gaspar y Baltazar. Eran los tres reyes magos//{'\n'}
            //Que encontraron a Jesús en el portal//{'\n'}
            {'\n'}
            De la mano de la estrella descubrieron al Mesías{'\n'}
            Que según las profecías era Jesús, Los Reyes magos de oriente,        {'\n'}
            Fueron mágicos testigos de que aquel recién nacido era el Señor de la luz.{'\n'}
            Fueron mágicos testigos de que aquel recién nacido era el Señor de la luz.{'\n'}
            </AccordionItem>

            <AccordionItem title="Pastores Venid">
            En el portal de Belén{'\n'}
            Hay estrellas, Sol y Luna{'\n'}
            La Virgen y San José{'\n'}
            Y el niño que está en la cuna{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Ábreme tu pecho, niño{'\n'}
            Ábreme tu corazón{'\n'}
            Que hace mucho frío afuera{'\n'}
            Y allí solo hallo calor{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Al niño miró la Virgen{'\n'}
            A la Virgen, San José{'\n'}
            Al niño miran los dos{'\n'}
            Y se sonríen los tres{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            No sé si será el amor{'\n'}
            No sé si serán mis ojos{'\n'}
            Mas cada vez que te miro{'\n'}
            Me pareces más hermoso{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            {'\n'}
            Pastores, venid{'\n'}
            Pastores, llegad{'\n'}
            Adorad al niño{'\n'}
            Adorad al niño{'\n'}
            Que ha nacido ya{'\n'}
            </AccordionItem>
          </div>

          <div className="space-y-4">
            <AccordionItem title="Los Pastores a Belén">
            Los pastores a Belén{'\n'}
            Corren presurosos{'\n'}
            Llevan de tanto correr{'\n'}
            Los zapatos rotos{'\n'}
            {'\n'}
            Ay, ay, ay, qué alegres van{'\n'}
            Ay, ay, ay, si volverán{'\n'}
            Con la pan, pan, pan{'\n'}
            Con la de, de, de{'\n'}
            Con la pan, con la de{'\n'}
            Con la pandereta y las castañuelas{'\n'}
            {'\n'}
            Un pastor se tropezó
            A media vereda{'\n'}
            Y un borreguito grito
            ¡Este aquí se queda!{'\n'}
            {'\n'}
            Ay, ay, ay, qué alegres van{'\n'}
            Ay, ay, ay, si volverán{'\n'}
            Con la pan, pan, pan{'\n'}
            Con la de, de, de{'\n'}
            Con la pan, con la de{'\n'}
            Con la pandereta y las castañuelas{'\n'}
            {'\n'}
            Los pastores a Belén{'\n'}
            Casi, casi vuelan{'\n'}
            Y es que de tanto correr{'\n'}
            No les queda suelas{'\n'}
            {'\n'}
            Ay, ay, ay, qué alegres van{'\n'}
            Ay, ay, ay, si volverán{'\n'}
            Con la pan, pan, pan{'\n'}
            Con la de, de, de{'\n'}
            Con la pan, con la de{'\n'}
            Con la pandereta y las castañuelas{'\n'}
            {'\n'}
            Ay, ay, ay, qué alegres van{'\n'}
            Ay, ay, ay, si volverán{'\n'}
            Con la pan, pan, pan{'\n'}
            Con la de, de, de{'\n'}
            Con la pan, con la de{'\n'}
            Con la pandereta y las castañuelas{'\n'}
            </AccordionItem>

            <AccordionItem title="La Marimorena">
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            {'\n'}
            En el portal de Belén, hay estrellas, Sol y Luna{'\n'}
            La Virgen y San José, y el Niño que está en la cuna{'\n'}
            Todos le llevan al Niño, yo no tengo qué llevarle{'\n'}
            Le llevo mi corazón, que en el mundo es lo que vale{'\n'}
            {'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            {'\n'}
            Esta noche es Nochebuena y mañana es Navidad{'\n'}
            Dame la bota, María, que me voy a emborrachar{'\n'}
            Y si quieres comprar pan más blanco que la azucena{'\n'}
            En el portal de Belén, La Virgen es panadera{'\n'}
            {'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            {'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            {'\n'}
            En el portal de Belén, hay una piedra redonda{'\n'}
            Donde Cristo puso el pie para subir a la gloria{'\n'}
            Pastores, venid, venid, veréis lo que no habéis visto{'\n'}
            En el portal de Belén, el nacimiento de Cristo{'\n'}
            {'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            {'\n'}
            Ande, ande, ande, la marimorena{'\n'}
            Ande, ande, ande que es la Nochebuena{'\n'}
            </AccordionItem>

            <AccordionItem title="Ay del Chiquirritín">
            Ay del chiquirritín, chiquirriquitín, chiquirriquitín{'\n'}
            Metidito entre pajas{'\n'}
            Ay del chiquirritín, chiquirriquitín{'\n'}
            Queridín, queridito del alma{'\n'}
            {'\n'}
            Por debajo del arco del portalico{'\n'}
            Se descubre a María, José y al Niño{'\n'}
            {'\n'}
            Ay del chiquirritín, chiquirriquitín, chiquirriquitín{'\n'}
            Metidito entre pajas{'\n'}
            Ay del chiquirritín, chiquirriquitín{'\n'}
            Queridín, queridito del alma{'\n'}
            {'\n'}
            Entre un buey y una mula{'\n'}
            Dios ha nacido{'\n'}
            Y en un pobre pesebre{'\n'}
            Le han recogido{'\n'}
            {'\n'}
            Ay del chiquirritín, chiquirriquitín, chiquirriquitín{'\n'}
            Metidito entre pajas{'\n'}
            Ay del chiquirritín, chiquirriquitín{'\n'}
            Queridín, queridito del alma{'\n'}
            {'\n'}
            El niño tiene hambre{'\n'}
            Y está mamando{'\n'}
            Y un rayito de Luna{'\n'}
            Lo está mirando{'\n'}
            {'\n'}
            Ay del chiquirritín, chiquirriquitín, chiquirriquitín{'\n'}
            Metidito entre pajas{'\n'}
            Ay del chiquirritín, chiquirriquitín{'\n'}
            Queridín, queridito del alma{'\n'}
            {'\n'}
            Por debajo del arco del portalico{'\n'}
            Se descubre a María, José y al Niño{'\n'}
            {'\n'}
            Ay del chiquirritín, chiquirriquitín, chiquirriquitín{'\n'}
            Metidito entre pajas{'\n'}
            Ay del chiquirritín, chiquirriquitín{'\n'}
            Queridín, queridito del alma{'\n'}
            {'\n'}
            Queridín, queridito del alma
            </AccordionItem>

            <AccordionItem title="Noche de Paz">
            Noche de paz, noche de amor{'\n'}
            Todo duerme alrededor{'\n'}
            Entre los astros que esparcen su luz{'\n'}
            Bella, anunciando al niño Jesús{'\n'}
            Brilla la estrella de paz{'\n'}
            Brilla la estrella de amor{'\n'}
            {'\n'}
            Noche de paz, noche de luz{'\n'}
            Ha nacido Jesús{'\n'}
            Pastorcillos que oíd anunciar{'\n'}
            No temáis cuando entréis a adorar{'\n'}
            Que ha nacido el amor{'\n'}
            Que ha nacido el amor{'\n'}
            {'\n'}
            Desde el pesebre del niño Jesús{'\n'}
            La Tierra entera se llena de luz{'\n'}
            Porque ha nacido Jesús{'\n'}
            Entre canciones de amor
            </AccordionItem>

            <AccordionItem title="Vayamos Cristianos (Adeste Fideles)">
            Vayamos, cristianos, llenos de alegría{'\n'}
            Vayamos, vayamos con fe a Belén{'\n'}
            Hoy ha nacido Cristo nuestro hermano{'\n'}
            {'\n'}
            Que nuestra fe te adore{'\n'}
            Que nuestro amor te cante{'\n'}
            Que nuestro ser te aclame{'\n'}
            Oh hijo de Dios{'\n'}
            {'\n'}
            Humildes pastores dejan sus rebaños{'\n'}
            Y llevan sus dones al niño Dios{'\n'}
            Nuestras ofrendas con amor llevamos{'\n'}
            {'\n'}
            Que nuestra fe te adore{'\n'}
            Que nuestro amor te cante{'\n'}
            Que nuestro ser te aclame{'\n'}
            Oh hijo de Dios{'\n'}
            {'\n'}
            Bendita la noche que nos trajo el día{'\n'}
            Bendita la noche de Navidad{'\n'}
            Desde un pesebre el señor nos llama{'\n'}
            {'\n'}
            Que nuestra fe te adore{'\n'}
            Que nuestro amor te cante{'\n'}
            Que nuestro ser te aclame{'\n'}
            Oh hijo de Dios{'\n'}
            {'\n'}
            Que nuestra fe te adore{'\n'}
            Que nuestro amor te cante{'\n'}
            Que nuestro ser te aclame{'\n'}
            Oh hijo de Dios
            </AccordionItem>
            <AccordionItem title='Canta Un Angel En El Cielo'>
            Canta un ángel en el Cielo{'\n'}
            Gloria, gloria, gloria a Dios{'\n'}
            Y a los hombres en la tierra{'\n'}
            Gracia y paz les de el Señor{'\n'}
            {'\n'}
            Con los cielos alabemos{'\n'}
            Y al eterno Rey honremos{'\n'}
            Con angélico cantar{'\n'}
            Cristo nace en un portal{'\n'}
            Canta un ángel con gran voz{'\n'}
            Gloria, gloria a nuestro Dios{'\n'}
            {'\n'}
            Vamos todos a adorarlo{'\n'}
            Es el Cristo nuestro Dios{'\n'}
            De sus gracias esperamos{'\n'}
            Nos vendrá la salvación{'\n'}
            {'\n'}
            Con los cielos alabemos{'\n'}
            Y al eterno Rey honremos{'\n'}
            Con angélico cantar{'\n'}
            Cristo nace en un portal{'\n'}
            Canta un ángel con gran voz{'\n'}
            Gloria, gloria a nuestro Dios{'\n'}
            {'\n'}
            Salve príncipe de paz{'\n'}
            Que trajiste plenitud{'\n'}
            Luz y vida con amor{'\n'}
            Y en tus alas la salud{'\n'}
            {'\n'}
            Con los cielos alabemos{'\n'}
            Y al eterno Rey honremos{'\n'}
            Con angélico cantar{'\n'}
            Cristo nace en un portal{'\n'}
            Canta un ángel con gran voz{'\n'}
            Gloria, gloria a nuestro Dios
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrayerAndCarols;
