
import { useState } from 'react';

interface LanguageToggleProps {
  language: 'en' | 'sv';
  onLanguageChange: (lang: 'en' | 'sv') => void;
}

const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-white text-black shadow-sm'
            : 'text-white hover:bg-white/10'
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => onLanguageChange('sv')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'sv'
            ? 'bg-white text-black shadow-sm'
            : 'text-white hover:bg-white/10'
        }`}
      >
        🇸🇪 SV
      </button>
    </div>
  );
};

export default LanguageToggle;
