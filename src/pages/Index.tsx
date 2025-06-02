
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatYouLearnSection from '../components/WhatYouLearnSection';
import AgendaSection from '../components/AgendaSection';
import RegistrationSection from '../components/RegistrationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  return (
    <div className="font-sans">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <WhatYouLearnSection language={language} />
      <AgendaSection language={language} />
      <RegistrationSection language={language} />
      <TestimonialsSection language={language} />
      <FAQSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
