
import { Github, Instagram, Linkedin } from 'lucide-react';
import { translations } from '../utils/translations';

interface FooterProps {
  language: 'en' | 'sv';
}

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4">Build with AI</h3>
            <p className="text-white/70 mb-4">
              {t.footer.description}
            </p>
            <button className="bg-workshop-pink text-black px-6 py-3 rounded-full font-semibold hover:bg-workshop-pink/90 transition-all duration-300">
              {t.cta.reserve}
            </button>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-2 text-white/70">
              <p>{t.footer.contact.email}</p>
              <p>{t.footer.contact.support}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.follow}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-workshop-pink transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-workshop-pink transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-workshop-pink transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            {t.footer.copyright}
          </p>
          <div className="flex space-x-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
