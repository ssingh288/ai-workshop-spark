
import AnimatedBlob from './AnimatedBlob';
import { translations } from '../utils/translations-new';

const HeroSection = () => {
  console.log('=== TESTING WITH NEW TRANSLATIONS FILE ===');
  console.log('translations:', translations);
  console.log('translations.en:', translations.en);
  
  const t = translations.en;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background blobs */}
      <AnimatedBlob 
        color="bg-workshop-pink" 
        size="w-64 h-64" 
        position="top-20 left-10" 
        delay="0s"
      />
      <AnimatedBlob 
        color="bg-workshop-yellow" 
        size="w-48 h-48" 
        position="top-40 right-20" 
        delay="2s"
      />
      <AnimatedBlob 
        color="bg-workshop-lavender" 
        size="w-72 h-72" 
        position="bottom-20 left-1/3" 
        delay="4s"
      />
      <AnimatedBlob 
        color="bg-workshop-sky" 
        size="w-56 h-56" 
        position="bottom-40 right-10" 
        delay="1s"
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          
          <h2 className="font-sans text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </h2>
          
          <p className="font-sans text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-workshop-pink text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-workshop-pink/90 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              {t.cta.apply}
            </button>
            <div className="text-white/60 text-sm">
              📅 {t.hero.dateTime} | 💳 {t.hero.price}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🗃️</div>
              <h3 className="font-display font-semibold text-white mb-2">SQL Mastery</h3>
              <p className="text-white/70 text-sm">{t.hero.tools.sql}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="font-display font-semibold text-white mb-2">Python</h3>
              <p className="text-white/70 text-sm">{t.hero.tools.python}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-display font-semibold text-white mb-2">Tableau</h3>
              <p className="text-white/70 text-sm">{t.hero.tools.tableau}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-display font-semibold text-white mb-2">AI Tools</h3>
              <p className="text-white/70 text-sm">{t.hero.tools.ai}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
