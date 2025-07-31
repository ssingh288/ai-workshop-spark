
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
      <HeroSection language="en" />
      <WhatYouLearnSection language="en" />
      <AgendaSection language="en" />
      <InstructorSection language="en" />
      <ShortCoursesSection />
      <RegistrationSection language="en" />
      <TestimonialsSection language="en" />
      <FAQSection language="en" />
      <Footer language="en" />
    </div>
  );
};

export default Index;
