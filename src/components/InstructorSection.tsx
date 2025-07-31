
import { translations } from '../utils/translations';

const InstructorSection = () => {
  const t = translations.en;

  return (
    <section id="instructor" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-workshop-mint rounded-full opacity-20 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-6">
            {t.instructor.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-workshop-lavender to-workshop-sky rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="w-48 h-48 bg-black rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <h3 className="font-display font-bold text-2xl text-black mb-2">
                  {t.instructor.name}
                </h3>
                <p className="text-black/70 font-medium mb-2">{t.instructor.title_role}</p>
                <div className="space-y-1 text-sm text-black/60">
                  <div>{t.instructor.experience}</div>
                  <div>{t.instructor.students}</div>
                  <div>{t.instructor.locations}</div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-black text-lg mb-6 leading-relaxed">
                  {t.instructor.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.instructor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
