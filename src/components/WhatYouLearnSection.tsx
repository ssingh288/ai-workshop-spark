
import { translations } from '../utils/translations';

const WhatYouLearnSection = () => {
  const t = translations.en;

  return (
    <section id="what-you-learn" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-workshop-mint rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-6">
            {t.whatYouLearn.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.whatYouLearn.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whatYouLearn.audience.map((item, index) => (
            <div 
              key={index}
              className="bg-black text-white rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-workshop-lavender to-workshop-sky rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-3xl text-black mb-4">
                {t.whatYouLearn.learn.title}
              </h3>
              <ul className="space-y-3">
                {t.whatYouLearn.learn.items.map((item, index) => (
                  <li key={index} className="flex items-center text-black">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-white rounded-2xl p-6 inline-block shadow-lg">
                <div className="text-6xl mb-2">⚡</div>
                <div className="font-bold text-black">60 min</div>
                <div className="text-gray-600 text-sm">{t.whatYouLearn.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
