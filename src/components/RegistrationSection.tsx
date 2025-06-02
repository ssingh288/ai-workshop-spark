
import { useState } from 'react';
import { translations } from '../utils/translations';

interface RegistrationSectionProps {
  language: 'en' | 'sv';
}

const RegistrationSection = ({ language }: RegistrationSectionProps) => {
  const [discountCode, setDiscountCode] = useState('');
  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-workshop-yellow rounded-full opacity-20 -translate-y-1/2 -translate-x-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-workshop-pink rounded-full opacity-20 translate-y-1/2 translate-x-1/2 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            {t.registration.title}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t.registration.subtitle}
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="text-left mb-4 md:mb-0">
                <div className="text-3xl font-bold text-white">{t.registration.price}</div>
                <div className="text-white/60">{t.registration.platform}</div>
              </div>
              <div className="text-white/60 text-sm">
                📅 {t.registration.date}<br/>
                🕒 {t.registration.time}
              </div>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t.registration.discountPlaceholder}
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-workshop-pink"
              />
              
              <button className="w-full bg-workshop-pink text-black py-4 rounded-xl font-bold text-lg hover:bg-workshop-pink/90 transition-all duration-300 transform hover:scale-105">
                {t.registration.cta}
              </button>
              
              <p className="text-white/60 text-sm">
                {t.registration.note}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="text-white/80">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-sm">{t.registration.features.liveDemo}</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm">{t.registration.features.resources}</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-sm">{t.registration.features.qa}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
