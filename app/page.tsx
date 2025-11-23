'use client';

import Hero from './components/Hero';
import Program from './components/Program';
import PreviousActivitiesBanner from './components/PreviousActivitiesBanner';
import PrayerAndCarols from './components/PrayerAndCarols';
import Location from './components/Location';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

export default function App() {
  return (
    <div className="font-['Montserrat'] antialiased text-gray-800">
      <main>
        <Hero />
        
        <FadeInSection>
          <Program />
        </FadeInSection>
        
        <FadeInSection>
          <PreviousActivitiesBanner /> 
        </FadeInSection>

        <FadeInSection>
          <PrayerAndCarols />
        </FadeInSection>
        
        <FadeInSection>
          <Location />
        </FadeInSection>
      </main>
      
      <Footer />
    </div>
  );
}
