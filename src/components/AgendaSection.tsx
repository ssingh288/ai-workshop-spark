
import { translations } from '../utils/translations';

interface AgendaSectionProps {
  language: 'en' | 'sv';
}

const AgendaSection = ({ language }: AgendaSectionProps) => {
  const t = translations[language];

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-6">
            {t.agenda.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.agenda.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {t.agenda.items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start mb-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-2xl flex items-center justify-center mr-6">
                <span className="font-bold text-sm">{item.time}</span>
              </div>
              <div className="flex-grow bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-display font-semibold text-xl text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center mt-3">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <span className="text-sm font-medium text-workshop-pink">{item.tool}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
