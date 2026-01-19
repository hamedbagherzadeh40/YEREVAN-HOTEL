
export type Language = 'am' | 'fa' | 'en';

export const translations = {
  am: {
    dir: 'ltr',
    font: 'Inter',
    brand: 'YERAVAN',
    nav: { home: 'Գլխավոր', rooms: 'Սենյակներ', loyalty: 'YERAVAN Key', concierge: 'AI Կոնսյերժ' },
    hero: { title: 'Շքեղ հանգիստ Երևանի սրտում', subtitle: 'Բացահայտեք YERAVAN-ի թափանցիկությունը' },
    truth: { title: 'Իրական լուսանկարներ - առանց ֆիլտրի', subtitle: 'Մենք առաջնահերթություն ենք տալիս հիգիենային և անվտանգությանը' },
    hub: { title: 'Ճամփորդի գործիքակազմ', flights: 'Թռիչքներ', rates: 'Փոխարժեք', scam: 'Հակախարդախություն' },
    toolkit: { title: 'AI Գործիքներ', desc: '12 թվային օգնական ձեր ուղևորության համար' },
    book: 'Ամրագրել',
    hygiene: 'Հիգիենա',
    safety: 'Անվտանգություն',
  },
  fa: {
    dir: 'rtl',
    font: 'Vazirmatn',
    brand: 'YERAVAN',
    nav: { home: 'صفحه اصلی', rooms: 'اتاق‌ها', loyalty: 'کلید یروان', concierge: 'کانسیرج هوشمند' },
    hero: { title: 'اقامتی شیک و آرام در قلب ایروان', subtitle: 'تجربه شفافیت در YERAVAN؛ جایی که صداقت اولویت ماست' },
    truth: { title: 'عکس‌های واقعی - بدون فیلتر', subtitle: 'تمرکز ما بر بهداشت، حمام‌های پاکیزه و ایمنی غذاست' },
    hub: { title: 'جعبه‌ابزار مسافر', flights: 'برنامه پروازها', rates: 'نرخ ارز', scam: 'راهنمای ضد کلاهبرداری' },
    toolkit: { title: 'ابزارهای هوشمند', desc: '۱۲ ابزار کاربردی برای سفری هوشمندانه' },
    book: 'رزرو کنید',
    hygiene: 'بهداشت',
    safety: 'ایمنی غذا',
  },
  en: {
    dir: 'ltr',
    font: 'Inter',
    brand: 'YERAVAN',
    nav: { home: 'Home', rooms: 'Rooms', loyalty: 'YERAVAN Key', concierge: 'AI Concierge' },
    hero: { title: 'Sophisticated Comfort in the Heart of Yerevan', subtitle: 'Real Prices. Real Photos. Real Hospitality.' },
    truth: { title: 'Verified Reality - No Filter', subtitle: 'Focusing on hygiene, bathrooms, and food safety standards' },
    hub: { title: 'Traveler’s Toolkit', flights: 'Flights', rates: 'Exchange', scam: 'Anti-Scam' },
    toolkit: { title: 'AI Ecosystem', desc: '12 Essential tools for your smart stay' },
    book: 'Book Now',
    hygiene: 'Hygiene',
    safety: 'Food Safety',
  }
};
