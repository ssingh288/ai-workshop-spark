
import { translations } from '../utils/translations';

const AgendaSection = () => {
  const t = translations.en;

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-6">
            {t.curriculum.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.curriculum.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {t.curriculum.items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start mb-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-2xl flex flex-col items-center justify-center mr-6">
                <span className="font-bold text-xs text-center">{item.week}</span>
              </div>
              <div className="flex-grow bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="font-display font-semibold text-xl text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="text-xs font-medium text-workshop-pink bg-workshop-pink/10 px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
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
