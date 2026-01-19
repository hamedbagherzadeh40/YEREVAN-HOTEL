<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1q3UaXj8UrPtitOcHPDBLyKgAUCk4StYU

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

import React, { useState } from 'react';
import Header from './components/Header';
import LoyaltyCard from './components/LoyaltyCard';
import Concierge from './components/Concierge';
import { 
  Star, Shield, MapPin, Coffee, Check, MessageCircle, Info, TrendingUp, 
  AlertTriangle, Hotel, Plane, Globe, Camera, Search, Smartphone, 
  Map, CreditCard, Crosshair, HelpCircle, Activity, ArrowRight
} from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-[#fcfafc] selection:bg-[#da70d6] selection:text-white pb-20`} style={{ fontFamily: t.font }} dir={t.dir}>
      <Header lang={lang} setLang={setLang} />
      
      {/* Hero Section: Updated with real exterior photo */}
      <section id="hero" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="test-yeravan-1.jpg" 
            alt="YERAVAN Real Exterior" 
            className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
          />
          {/* Subtle gradient overlay to help text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/40 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/20 backdrop-blur-3xl p-10 rounded-[40px] border border-white/30 shadow-2xl text-white">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#da70d6] text-white text-[10px] font-black tracking-widest uppercase mb-6 shadow-lg">
              <Shield className="w-3 h-3 mr-1 fill-current" /> Verified Reality: Building & Staff
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-xl">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 font-medium drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#4B0082] px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all">
                {t.book}
              </button>
              <button className="bg-[#4B0082]/80 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-[#4B0082] transition-all">
                {t.hub.scam}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flight & Terminal Schedule Widget UI */}
      <section className="py-12 -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Plane className="w-32 h-32 rotate-12" />
            </div>
            <div className={`flex flex-col md:flex-row items-center gap-10 ${t.dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-6 md:border-r md:pr-10 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-10 border-gray-100">
                <div className="p-5 bg-[#4B0082]/5 rounded-[25px] border border-[#4B0082]/10">
                  <Plane className="w-10 h-10 text-[#4B0082]" />
                </div>
                <div>
                  <h4 className="font-black text-[#4B0082] text-xl">Zvartnots Live</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Flight Hub EVN</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Arrival</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-black">ACTIVE</span>
                  </div>
                  <div className="text-2xl font-black text-gray-800">14:20 <span className="text-sm font-medium opacity-50">PM</span></div>
                  <div className="text-xs font-bold text-gray-600">EVN - Flight RM-723</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Departure</span>
                    <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-black">GATE B04</span>
                  </div>
                  <div className="text-2xl font-black text-gray-800">18:45 <span className="text-sm font-medium opacity-50">PM</span></div>
                  <div className="text-xs font-bold text-gray-600">THR - Qatar Airways</div>
                </div>
                <div className="bg-[#4B0082] p-6 rounded-3xl shadow-xl shadow-[#4B0082]/20">
                  <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">Terminal Access</div>
                  <div className="text-white font-bold text-lg">VIP Lounge Open</div>
                  <div className="flex items-center gap-2 mt-2 text-white/80 text-xs">
                    <Check className="w-3 h-3" /> YERAVAN Card Holders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reality Section: Rooms */}
      <section id="rooms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#4B0082] mb-4">{t.truth.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">{t.truth.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000",
                title: "Forest Green Suite",
                desc: "Verified Bathroom Cleanliness"
              },
              { 
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
                title: "Crystal Clear Bath",
                desc: "100% Anti-Bacterial Protocol"
              },
              { 
                img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
                title: "Artisan Kitchen",
                desc: "Zero-Contamination Food Safety"
              }
            ].map((room, i) => (
              <div key={i} className="group relative rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
                <img src={room.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={room.title} />
                <div className="absolute top-8 left-8 right-8 flex justify-between">
                  <span className="bg-[#50c878] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-xl">Verified Reality</span>
                  <span className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full"><Camera className="w-4 h-4" /></span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-2xl p-8 rounded-[35px] border border-white/40 shadow-2xl">
                  <h4 className="font-black text-[#4B0082] text-xl">{room.title}</h4>
                  <p className="text-sm text-gray-500 mt-2 font-bold uppercase tracking-wide">{room.desc}</p>
                  <div className="flex gap-2 mt-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vault - Anti-Scam About Us (Persian Copy Refined) */}
      <section className="py-28 bg-[#4B0082] text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-lilac-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-10" dir="rtl">
            <h2 className="text-4xl md:text-7xl font-black leading-[1.1]">
                تعهد به <span className="text-[#da70d6]">شفافیت مطلق</span><br/>در قلب ایروان
            </h2>
            <div className="space-y-8 text-xl opacity-90 leading-relaxed font-medium text-justify">
                <p>
                    ما در YERAVAN باور داریم که اعتماد، گران‌بهاترین ارز در سفر است. ایروان شهری زیباست، اما برای مسافری که بار اول می‌آید، می‌تواند پر از چالش باشد. از تاکسی‌هایی که ده برابر قیمت می‌گیرند تا اتاق‌هایی که در عکس زیبا اما در واقعیت دور از انتظارند.
                </p>
                <p className="bg-white/5 p-8 rounded-[40px] border border-white/10">
                    ما YERAVAN را ساختیم تا سنگر شما باشیم. اینجا هیچ فیلتری روی عکس‌ها نیست. بهداشت حمام‌ها وسواس ماست و دانش ما از تله‌های توریستی، سپر بلای شما. ما به شما قیمت‌های واقعی را می‌گوییم و مکان‌های امن را نشان می‌دهیم.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-emerald-400/20 rounded-2xl flex items-center justify-center border border-emerald-400/30">
                            <Shield className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="font-black text-2xl">بدون فیلتر</h4>
                            <p className="text-xs opacity-60">تطبیق ۱۰۰٪ واقعیت با تصویر</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-orange-400/20 rounded-2xl flex items-center justify-center border border-orange-400/30">
                            <AlertTriangle className="w-8 h-8 text-orange-400" />
                        </div>
                        <div>
                            <h4 className="font-black text-2xl">ضد کلاهبرداری</h4>
                            <p className="text-xs opacity-60">قیمت‌های تایید شده بازار</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-full md:w-[400px] shrink-0">
             <div className="bg-white/10 backdrop-blur-3xl p-12 rounded-[50px] border border-white/20 shadow-2xl space-y-8 text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto border-4 border-[#da70d6]/30">
                    <Activity className="w-10 h-10 text-[#da70d6]" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-black italic">98% Satisfied</h3>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-widest">Traveler Consensus</p>
                </div>
                <div className="space-y-4">
                    <button className="w-full bg-white text-[#4B0082] py-5 rounded-3xl font-black text-lg hover:bg-[#fcfafc] transition-all shadow-xl">
                        Verify Our Safety PDF
                    </button>
                    <p className="text-[10px] opacity-40">Updated every 24 hours via YERAVAN-Labs API</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Traveler’s Toolkit - 12 Tools */}
      <section className="py-32 bg-[#fcfafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex flex-col mb-16 ${t.dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
              <div className="inline-block px-4 py-1 bg-[#4B0082]/5 text-[#4B0082] text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em]">Traveler's Digital Swiss Army Knife</div>
              <h2 className="text-4xl font-black text-[#4B0082] mb-4">{t.toolkit.title}</h2>
              <p className="text-gray-500 font-medium text-lg">{t.toolkit.desc}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { label: "Google Lens", icon: <Camera />, color: "bg-red-50 text-red-600", desc: "Scan Landmarks" },
              { label: "XE Exchange", icon: <TrendingUp />, color: "bg-emerald-50 text-emerald-600", desc: "Live Rates" },
              { label: "Yandex Taxi", icon: <Smartphone />, color: "bg-yellow-50 text-yellow-700", desc: "Fair Pricing" },
              { label: "AI Concierge", icon: <Star />, color: "bg-purple-50 text-purple-600", desc: "Smart Guide" },
              { label: "Metro Map", icon: <Map />, color: "bg-blue-50 text-blue-600", desc: "Transit Help" },
              { label: "Scam Vault", icon: <Shield />, color: "bg-orange-50 text-orange-600", desc: "Report Fraud" },
              { label: "Laws Helper", icon: <Info />, color: "bg-indigo-50 text-indigo-600", desc: "Local Laws" },
              { label: "Food Check", icon: <Coffee />, color: "bg-teal-50 text-teal-600", desc: "Safety First" },
              { label: "Pharmacy", icon: <Activity />, color: "bg-pink-50 text-pink-600", desc: "24/7 Support" },
              { label: "SIM Guide", icon: <Globe />, color: "bg-cyan-50 text-cyan-600", desc: "Data Setup" },
              { label: "Payments", icon: <CreditCard />, color: "bg-gray-50 text-gray-600", desc: "Card Usage" },
              { label: "Emergency", icon: <AlertTriangle />, color: "bg-rose-50 text-rose-600", desc: "911 Access" },
            ].map((item, i) => (
              <button key={i} className={`group ${item.color} p-8 rounded-[40px] border border-transparent hover:border-current/20 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center justify-center text-center space-y-4`}>
                <div className="p-4 bg-white rounded-[24px] shadow-sm group-hover:shadow-lg transition-all ring-4 ring-transparent group-hover:ring-current/10">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="space-y-1">
                    <span className="text-sm font-black block leading-none">{item.label}</span>
                    <span className="text-[10px] opacity-60 font-bold block leading-none uppercase tracking-tighter mt-1">{item.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LoyaltyCard />
      <Concierge />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/37400000000" 
            target="_blank" 
            className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
          <button className="bg-[#4B0082] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
            <Smartphone className="w-8 h-8" />
          </button>
      </div>

      <footer className="bg-[#4B0082] text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left rtl:text-right">
            <div className="col-span-1 md:col-span-1">
               <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                 <div className="p-2 bg-white/10 rounded-xl"><Hotel className="w-8 h-8 text-[#da70d6]" /></div>
                 <span className="text-3xl font-black tracking-tighter uppercase">YERAVAN</span>
               </div>
               <p className="opacity-50 text-sm leading-relaxed">
                  The first AI-driven tourism ecosystem dedicated to total transparency and security in Armenia. 
               </p>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Safety Portal</h5>
                <ul className="space-y-2 text-sm opacity-60 font-bold">
                    <li><a href="#">Report Scam</a></li>
                    <li><a href="#">Verify a Hotel</a></li>
                    <li><a href="#">Taxi Price Checker</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Partners</h5>
                <ul className="space-y-2 text-sm opacity-60 font-bold">
                    <li><a href="#">Zvartnots Airport</a></li>
                    <li><a href="#">Armenian Tourism Board</a></li>
                    <li><a href="#">Local Guides</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Mobile App</h5>
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all"><Smartphone className="w-6 h-6" /></div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all"><Globe className="w-6 h-6" /></div>
                </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <div className="text-[10px] opacity-30 tracking-[0.4em] uppercase">© 2024 YERAVAN ECOSYSTEM • VERIFIED BY YERAVAN-LABS S.A.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

<img width="1861" height="928" alt="image" src="https://github.com/user-attachments/assets/5f85a323-409e-4085-8334-12847a19b24e" />

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import LoyaltyCard from './components/LoyaltyCard';
import Concierge from './components/Concierge';
import { 
  Star, Shield, MapPin, Coffee, Check, MessageCircle, Info, TrendingUp, 
  AlertTriangle, Hotel, Plane, Globe, Camera, Search, Smartphone, 
  Map, CreditCard, Crosshair, HelpCircle, Activity, ArrowRight
} from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-[#fcfafc] selection:bg-[#da70d6] selection:text-white pb-20`} style={{ fontFamily: t.font }} dir={t.dir}>
      <Header lang={lang} setLang={setLang} />
      
      {/* Hero Section: Updated with real exterior photo */}
      <section id="hero" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="test-yeravan-1.jpg" 
            alt="YERAVAN Real Exterior" 
            className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05]"
          />
          {/* Subtle gradient overlay to help text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/40 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/20 backdrop-blur-3xl p-10 rounded-[40px] border border-white/30 shadow-2xl text-white">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#da70d6] text-white text-[10px] font-black tracking-widest uppercase mb-6 shadow-lg">
              <Shield className="w-3 h-3 mr-1 fill-current" /> Verified Reality: Building & Staff
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-xl">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 font-medium drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#4B0082] px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all">
                {t.book}
              </button>
              <button className="bg-[#4B0082]/80 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-[#4B0082] transition-all">
                {t.hub.scam}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flight & Terminal Schedule Widget UI */}
      <section className="py-12 -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Plane className="w-32 h-32 rotate-12" />
            </div>
            <div className={`flex flex-col md:flex-row items-center gap-10 ${t.dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-6 md:border-r md:pr-10 rtl:md:border-r-0 rtl:md:border-l rtl:md:pl-10 border-gray-100">
                <div className="p-5 bg-[#4B0082]/5 rounded-[25px] border border-[#4B0082]/10">
                  <Plane className="w-10 h-10 text-[#4B0082]" />
                </div>
                <div>
                  <h4 className="font-black text-[#4B0082] text-xl">Zvartnots Live</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Flight Hub EVN</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Arrival</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-black">ACTIVE</span>
                  </div>
                  <div className="text-2xl font-black text-gray-800">14:20 <span className="text-sm font-medium opacity-50">PM</span></div>
                  <div className="text-xs font-bold text-gray-600">EVN - Flight RM-723</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Departure</span>
                    <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-black">GATE B04</span>
                  </div>
                  <div className="text-2xl font-black text-gray-800">18:45 <span className="text-sm font-medium opacity-50">PM</span></div>
                  <div className="text-xs font-bold text-gray-600">THR - Qatar Airways</div>
                </div>
                <div className="bg-[#4B0082] p-6 rounded-3xl shadow-xl shadow-[#4B0082]/20">
                  <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">Terminal Access</div>
                  <div className="text-white font-bold text-lg">VIP Lounge Open</div>
                  <div className="flex items-center gap-2 mt-2 text-white/80 text-xs">
                    <Check className="w-3 h-3" /> YERAVAN Card Holders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reality Section: Rooms */}
      <section id="rooms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#4B0082] mb-4">{t.truth.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">{t.truth.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000",
                title: "Forest Green Suite",
                desc: "Verified Bathroom Cleanliness"
              },
              { 
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
                title: "Crystal Clear Bath",
                desc: "100% Anti-Bacterial Protocol"
              },
              { 
                img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
                title: "Artisan Kitchen",
                desc: "Zero-Contamination Food Safety"
              }
            ].map((room, i) => (
              <div key={i} className="group relative rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
                <img src={room.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={room.title} />
                <div className="absolute top-8 left-8 right-8 flex justify-between">
                  <span className="bg-[#50c878] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-xl">Verified Reality</span>
                  <span className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full"><Camera className="w-4 h-4" /></span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-2xl p-8 rounded-[35px] border border-white/40 shadow-2xl">
                  <h4 className="font-black text-[#4B0082] text-xl">{room.title}</h4>
                  <p className="text-sm text-gray-500 mt-2 font-bold uppercase tracking-wide">{room.desc}</p>
                  <div className="flex gap-2 mt-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vault - Anti-Scam About Us (Persian Copy Refined) */}
      <section className="py-28 bg-[#4B0082] text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-lilac-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-10" dir="rtl">
            <h2 className="text-4xl md:text-7xl font-black leading-[1.1]">
                تعهد به <span className="text-[#da70d6]">شفافیت مطلق</span><br/>در قلب ایروان
            </h2>
            <div className="space-y-8 text-xl opacity-90 leading-relaxed font-medium text-justify">
                <p>
                    ما در YERAVAN باور داریم که اعتماد، گران‌بهاترین ارز در سفر است. ایروان شهری زیباست، اما برای مسافری که بار اول می‌آید، می‌تواند پر از چالش باشد. از تاکسی‌هایی که ده برابر قیمت می‌گیرند تا اتاق‌هایی که در عکس زیبا اما در واقعیت دور از انتظارند.
                </p>
                <p className="bg-white/5 p-8 rounded-[40px] border border-white/10">
                    ما YERAVAN را ساختیم تا سنگر شما باشیم. اینجا هیچ فیلتری روی عکس‌ها نیست. بهداشت حمام‌ها وسواس ماست و دانش ما از تله‌های توریستی، سپر بلای شما. ما به شما قیمت‌های واقعی را می‌گوییم و مکان‌های امن را نشان می‌دهیم.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-emerald-400/20 rounded-2xl flex items-center justify-center border border-emerald-400/30">
                            <Shield className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="font-black text-2xl">بدون فیلتر</h4>
                            <p className="text-xs opacity-60">تطبیق ۱۰۰٪ واقعیت با تصویر</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-orange-400/20 rounded-2xl flex items-center justify-center border border-orange-400/30">
                            <AlertTriangle className="w-8 h-8 text-orange-400" />
                        </div>
                        <div>
                            <h4 className="font-black text-2xl">ضد کلاهبرداری</h4>
                            <p className="text-xs opacity-60">قیمت‌های تایید شده بازار</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-full md:w-[400px] shrink-0">
             <div className="bg-white/10 backdrop-blur-3xl p-12 rounded-[50px] border border-white/20 shadow-2xl space-y-8 text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto border-4 border-[#da70d6]/30">
                    <Activity className="w-10 h-10 text-[#da70d6]" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-black italic">98% Satisfied</h3>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-widest">Traveler Consensus</p>
                </div>
                <div className="space-y-4">
                    <button className="w-full bg-white text-[#4B0082] py-5 rounded-3xl font-black text-lg hover:bg-[#fcfafc] transition-all shadow-xl">
                        Verify Our Safety PDF
                    </button>
                    <p className="text-[10px] opacity-40">Updated every 24 hours via YERAVAN-Labs API</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Traveler’s Toolkit - 12 Tools */}
      <section className="py-32 bg-[#fcfafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex flex-col mb-16 ${t.dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
              <div className="inline-block px-4 py-1 bg-[#4B0082]/5 text-[#4B0082] text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em]">Traveler's Digital Swiss Army Knife</div>
              <h2 className="text-4xl font-black text-[#4B0082] mb-4">{t.toolkit.title}</h2>
              <p className="text-gray-500 font-medium text-lg">{t.toolkit.desc}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { label: "Google Lens", icon: <Camera />, color: "bg-red-50 text-red-600", desc: "Scan Landmarks" },
              { label: "XE Exchange", icon: <TrendingUp />, color: "bg-emerald-50 text-emerald-600", desc: "Live Rates" },
              { label: "Yandex Taxi", icon: <Smartphone />, color: "bg-yellow-50 text-yellow-700", desc: "Fair Pricing" },
              { label: "AI Concierge", icon: <Star />, color: "bg-purple-50 text-purple-600", desc: "Smart Guide" },
              { label: "Metro Map", icon: <Map />, color: "bg-blue-50 text-blue-600", desc: "Transit Help" },
              { label: "Scam Vault", icon: <Shield />, color: "bg-orange-50 text-orange-600", desc: "Report Fraud" },
              { label: "Laws Helper", icon: <Info />, color: "bg-indigo-50 text-indigo-600", desc: "Local Laws" },
              { label: "Food Check", icon: <Coffee />, color: "bg-teal-50 text-teal-600", desc: "Safety First" },
              { label: "Pharmacy", icon: <Activity />, color: "bg-pink-50 text-pink-600", desc: "24/7 Support" },
              { label: "SIM Guide", icon: <Globe />, color: "bg-cyan-50 text-cyan-600", desc: "Data Setup" },
              { label: "Payments", icon: <CreditCard />, color: "bg-gray-50 text-gray-600", desc: "Card Usage" },
              { label: "Emergency", icon: <AlertTriangle />, color: "bg-rose-50 text-rose-600", desc: "911 Access" },
            ].map((item, i) => (
              <button key={i} className={`group ${item.color} p-8 rounded-[40px] border border-transparent hover:border-current/20 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center justify-center text-center space-y-4`}>
                <div className="p-4 bg-white rounded-[24px] shadow-sm group-hover:shadow-lg transition-all ring-4 ring-transparent group-hover:ring-current/10">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="space-y-1">
                    <span className="text-sm font-black block leading-none">{item.label}</span>
                    <span className="text-[10px] opacity-60 font-bold block leading-none uppercase tracking-tighter mt-1">{item.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LoyaltyCard />
      <Concierge />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
          <a 
            href="https://wa.me/37400000000" 
            target="_blank" 
            className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
          <button className="bg-[#4B0082] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
            <Smartphone className="w-8 h-8" />
          </button>
      </div>

      <footer className="bg-[#4B0082] text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left rtl:text-right">
            <div className="col-span-1 md:col-span-1">
               <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                 <div className="p-2 bg-white/10 rounded-xl"><Hotel className="w-8 h-8 text-[#da70d6]" /></div>
                 <span className="text-3xl font-black tracking-tighter uppercase">YERAVAN</span>
               </div>
               <p className="opacity-50 text-sm leading-relaxed">
                  The first AI-driven tourism ecosystem dedicated to total transparency and security in Armenia. 
               </p>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Safety Portal</h5>
                <ul className="space-y-2 text-sm opacity-60 font-bold">
                    <li><a href="#">Report Scam</a></li>
                    <li><a href="#">Verify a Hotel</a></li>
                    <li><a href="#">Taxi Price Checker</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Partners</h5>
                <ul className="space-y-2 text-sm opacity-60 font-bold">
                    <li><a href="#">Zvartnots Airport</a></li>
                    <li><a href="#">Armenian Tourism Board</a></li>
                    <li><a href="#">Local Guides</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h5 className="font-black text-xs uppercase tracking-widest text-[#da70d6]">Mobile App</h5>
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all"><Smartphone className="w-6 h-6" /></div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all"><Globe className="w-6 h-6" /></div>
                </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <div className="text-[10px] opacity-30 tracking-[0.4em] uppercase">© 2024 YERAVAN ECOSYSTEM • VERIFIED BY YERAVAN-LABS S.A.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

