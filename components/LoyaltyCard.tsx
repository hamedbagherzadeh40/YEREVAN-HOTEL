
import React, { useState } from 'react';
import { Key, Check, Mail, FileText, Gift } from 'lucide-react';

const LoyaltyCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="loyalty" className="py-24 px-4 bg-[#fcfafc]">
      <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-[0_40px_100px_rgba(75,0,130,0.08)] border border-gray-100 p-10 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#da70d6]/10 blur-[120px] -mr-40 -mt-40 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4B0082]/5 blur-[120px] -ml-40 -mb-40 rounded-full"></div>
        
        <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#4B0082] rounded-[35px] mb-10 shadow-2xl ring-8 ring-[#4B0082]/5">
                <Key className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-[#4B0082] mb-8 tracking-tighter">
              The YERAVAN Key
            </h3>
            <p className="text-gray-600 mb-14 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              Join <span className="text-[#da70d6] font-black">12,000+</span> smart travelers. Unlock <span className="bg-[#4B0082]/5 px-2 rounded-lg text-[#4B0082]">private booking rates</span> and the weekly "Anti-Scam Vault" report.
            </p>
            
            {!subscribed ? (
              <div className="max-w-3xl mx-auto space-y-10">
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-5 bg-gray-50 p-4 rounded-[35px] border border-gray-100 shadow-inner">
                    <input 
                      type="email" 
                      placeholder="Enter your email to secure access..." 
                      required
                      className="flex-1 px-8 py-5 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-400 font-black text-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="bg-[#4B0082] text-white px-12 py-5 rounded-[28px] font-black text-lg shadow-2xl hover:bg-[#8b008b] hover:scale-105 transition-all active:scale-95"
                    >
                      Unlock Access
                    </button>
                  </form>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left rtl:text-right">
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-[#da70d6] shrink-0" />
                        <div>
                            <h5 className="font-black text-[#4B0082]">Welcome Package</h5>
                            <p className="text-xs text-gray-400 font-bold">PDF Anti-Scam Vault Guide</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Gift className="w-6 h-6 text-[#da70d6] shrink-0" />
                        <div>
                            <h5 className="font-black text-[#4B0082]">Direct Discounts</h5>
                            <p className="text-xs text-gray-400 font-bold">15% Off All Bookings</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FileText className="w-6 h-6 text-[#da70d6] shrink-0" />
                        <div>
                            <h5 className="font-black text-[#4B0082]">Market Watch</h5>
                            <p className="text-xs text-gray-400 font-bold">Weekly Currency Alerts</p>
                        </div>
                    </div>
                  </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="py-10 px-16 bg-emerald-50 text-emerald-600 rounded-[40px] font-black text-2xl border-2 border-emerald-100 inline-flex flex-col items-center gap-4">
                    <Check className="w-12 h-12 bg-emerald-600 text-white p-2 rounded-full" />
                    Welcome to the Ecosystem. ✨
                  </div>
                  <div className="max-w-lg mx-auto bg-gray-50 border border-gray-200 p-8 rounded-[35px] text-left rtl:text-right">
                      <h4 className="font-black text-[#4B0082] mb-4 flex items-center gap-2">
                          <Mail className="w-5 h-5" /> 🗝️ ایمیل تأیید در راه است...
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-bold">
                          "سلام مسافر عزیز، کلید شما صادر شد. پیوست این ایمیل شامل لیست قیمت‌های واقعی تاکسی و هشدارهای بهداشتی است..."
                      </p>
                      <button className="mt-6 text-[#da70d6] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2">
                          Preview Anti-Scam PDF <FileText className="w-4 h-4" />
                      </button>
                  </div>
              </div>
            )}
            
            <div className="mt-24 pt-12 border-t border-gray-50 flex flex-col items-center">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-6">Real-Time Traveler Consensus Engine</span>
              <div className="w-full max-w-md">
                <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden shadow-inner border border-gray-200 p-1">
                  <div 
                    className="bg-gradient-to-r from-[#4B0082] via-[#da70d6] to-[#4B0082] h-full rounded-full transition-all duration-[2000ms] relative overflow-hidden" 
                    style={{ width: '98%' }}
                  >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 text-[13px] font-black uppercase text-[#4B0082]">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> 98% Verified Recommendations
                  </span>
                  <span className="opacity-40">LIVE DATA</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyCard;
