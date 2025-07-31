import { translations } from '../utils/translations';

const ShortCoursesSection = () => {
  const t = translations.en;

  return (
    <section id="short-courses" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t.shortCourses.title}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t.shortCourses.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.shortCourses.courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-workshop-pink/30 transition-all duration-300">
              <div className="mb-4">
                <div className="inline-block bg-workshop-pink/20 text-workshop-pink px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {course.status}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {course.duration}
                </p>
              </div>
              
              <p className="text-white/80 mb-6">
                {course.description}
              </p>

              <button className="w-full bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Notify Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortCoursesSection;