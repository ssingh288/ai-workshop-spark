
import { translations } from '../utils/translations';

interface TestimonialsSectionProps {
  language: 'en' | 'sv';
}

const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const t = translations[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-6">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-workshop-lavender to-workshop-sky rounded-3xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{testimonial.icon}</div>
              <p className="text-black font-medium mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="text-black/70 text-sm font-medium">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
