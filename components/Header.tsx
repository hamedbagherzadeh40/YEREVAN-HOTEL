
import React from 'react';
import { Hotel } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const t = translations[lang];
  
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#4B0082] rounded-xl flex items-center justify-center">
                <Hotel className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-[#4B0082] tracking-tighter">YERAVAN</span>
          </div>
          
          <nav className={`hidden md:flex space-x-8 text-sm font-semibold text-gray-600 ${t.dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <a href="#hero" className="hover:text-[#8b008b] transition-colors">{t.nav.home}</a>
            <a href="#rooms" className="hover:text-[#8b008b] transition-colors">{t.nav.rooms}</a>
            <a href="#loyalty" className="hover:text-[#8b008b] transition-colors">{t.nav.loyalty}</a>
            <a href="#concierge" className="hover:text-[#8b008b] transition-colors">{t.nav.concierge}</a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
              <button onClick={() => setLang('am')} className={`px-2 py-1 rounded-full text-xs transition-all ${lang === 'am' ? 'bg-white shadow-sm font-bold text-[#4B0082]' : 'text-gray-400'}`}>AM</button>
              <button onClick={() => setLang('fa')} className={`px-2 py-1 rounded-full text-xs transition-all ${lang === 'fa' ? 'bg-white shadow-sm font-bold text-[#4B0082]' : 'text-gray-400'}`}>FA</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-full text-xs transition-all ${lang === 'en' ? 'bg-white shadow-sm font-bold text-[#4B0082]' : 'text-gray-400'}`}>EN</button>
            </div>
            <button className="bg-[#4B0082] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg">
              {t.book}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
