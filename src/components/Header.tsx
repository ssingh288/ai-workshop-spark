
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { translations } from '../utils/translations';

interface HeaderProps {
  language: 'en' | 'sv';
  onLanguageChange: (lang: 'en' | 'sv') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-display font-bold text-xl text-white">
          Build with AI
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#what-you-learn" className="text-white/80 hover:text-white transition-colors">
            {t.nav.whatYouLearn}
          </a>
          <a href="#agenda" className="text-white/80 hover:text-white transition-colors">
            {t.nav.agenda}
          </a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          <button className="bg-workshop-pink text-black px-6 py-2 rounded-full font-semibold hover:bg-workshop-pink/90 transition-all duration-300 animate-pulse-glow">
            {t.cta.reserve}
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
            <a href="#what-you-learn" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.whatYouLearn}
            </a>
            <a href="#agenda" className="block text-white/80 hover:text-white transition-colors">
              {t.nav.agenda}
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
