
import { useState } from 'react';
import { translations } from '../utils/translations';

interface RegistrationSectionProps {
  language: 'en' | 'sv';
}

const RegistrationSection = ({ language }: RegistrationSectionProps) => {
  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-workshop-yellow rounded-full opacity-20 -translate-y-1/2 -translate-x-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-workshop-pink rounded-full opacity-20 translate-y-1/2 translate-x-1/2 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              {t.registration.title}
            </h2>
            <p className="text-xl text-white/80">
              {t.registration.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Registration Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-2">{t.registration.price}</div>
                <div className="text-white/60 text-sm">
                  📅 {t.registration.duration}<br/>
                  🕒 {t.registration.schedule}<br/>
                  💻 {t.registration.format}
                </div>
              </div>
              
              <button className="w-full bg-workshop-pink text-black py-4 rounded-xl font-bold text-lg hover:bg-workshop-pink/90 transition-all duration-300 transform hover:scale-105 mb-4">
                {t.registration.cta}
              </button>
              
              <p className="text-white/60 text-sm text-center">
                {t.registration.note}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div className="text-white/80">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="text-xs">{t.registration.features.liveClasses}</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-xs">{t.registration.features.portfolio}</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="text-xs">{t.registration.features.interview}</div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                {t.registration.requirements.title}
              </h3>
              
              <ul className="space-y-4">
                {t.registration.requirements.items.map((item, index) => (
                  <li key={index} className="flex items-start text-white">
                    <span className="w-2 h-2 bg-workshop-pink rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
