
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { translations } from '../utils/translations-new';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations.en;

  const handleApplyClick = () => {
    // Redirect to Razorpay payment gateway
    window.open('https://rzp.io/l/your-payment-link', '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-display font-bold text-xl text-white">
          BonjourSQL.com
        </div>
        
        <Tabs defaultValue="workshops" className="hidden md:block">
          <TabsList className="bg-black/20 border border-white/10">
            <TabsTrigger value="workshops" className="text-white/80 data-[state=active]:text-white data-[state=active]:bg-white/10">
              {t.nav.workshops}
            </TabsTrigger>
            <TabsTrigger value="shortcourses" className="text-white/80 data-[state=active]:text-white data-[state=active]:bg-white/10">
              {t.nav.shortCourses}
            </TabsTrigger>
            <TabsTrigger value="about" className="text-white/80 data-[state=active]:text-white data-[state=active]:bg-white/10">
              {t.nav.aboutCourse}
            </TabsTrigger>
            <TabsTrigger value="faq" className="text-white/80 data-[state=active]:text-white data-[state=active]:bg-white/10">
              {t.nav.faq}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleApplyClick}
            className="bg-workshop-pink text-black px-6 py-2 rounded-full font-semibold hover:bg-workshop-pink/90 transition-all duration-300 animate-pulse-glow"
          >
            {t.cta.apply}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about-course" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.aboutCourse}
            </a>
            <a href="#curriculum" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.curriculum}
            </a>
            <a href="#instructor" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.instructor}
            </a>
            <a href="#faq" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.faq}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
