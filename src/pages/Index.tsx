
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatYouLearnSection from '../components/WhatYouLearnSection';
import AgendaSection from '../components/AgendaSection';
import InstructorSection from '../components/InstructorSection';
import RegistrationSection from '../components/RegistrationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ShortCoursesSection from '../components/ShortCoursesSection';

const Index = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <WhatYouLearnSection />
      <AgendaSection />
      <InstructorSection />
      <ShortCoursesSection />
      <RegistrationSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
