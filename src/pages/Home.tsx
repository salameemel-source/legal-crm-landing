import { useEffect } from 'react';
import LandingHeader from '@/components/landing/LandingHeader';
import HeroSection from '@/components/landing/HeroSection';
import PainPointsSection from '@/components/landing/PainPointsSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import StatsSection from '@/components/landing/StatsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';

const faqItems = [
  { q: 'מה זה מערכת CRM לעורכי דין?', a: 'מערכת CRM (Customer Relationship Management) לעורכי דין היא תוכנה לניהול קשרי לקוחות, תיקים, משימות ותקשורת במשרד עורכי דין. המערכת מרכזת את כל המידע במקום אחד ומייעלת את עבודת המשרד.' },
  { q: 'האם המערכת מתאימה למשרד קטן?', a: 'בהחלט! המערכת מותאמת למשרדים בכל גודל — מעורך דין יחיד ועד משרד עם עשרות עורכי דין. התוכנית הבסיסית חינמית ומאפשרת להתחיל מיד.' },
  { q: 'איך עובד הסנכרון עם Gmail?', a: 'המערכת מתחברת לחשבון ה-Gmail שלכם באמצעות OAuth מאובטח. תוכלו לשלוח מיילים ללקוחות ישירות מתוך המערכת, וכל ההתכתבות נשמרת בתיק הלקוח.' },
  { q: 'האם המידע שלי מאובטח?', a: 'כן. אנו משתמשים בהצפנה מתקדמת, אימות דו-שלבי ושרתי Supabase מאובטחים. כל נתוני Google מאוחסנים בצורה מוצפנת בהתאם למדיניות Google API.' },
  { q: 'האם אפשר לנסות בחינם?', a: 'כן! ניתן להירשם ולהתחיל להשתמש במערכת מיד ללא צורך בכרטיס אשראי. התוכנית הבסיסית חינמית לצמיתות.' },
  { q: 'איך מנהלים תיקים במערכת?', a: 'כל תיק כולל סטטוס, אירועים (דיונים, ישיבות), משימות, מסמכים והיסטוריית פעילות. ניתן לחפש, לסנן ולעקוב אחר כל התיקים במקום אחד.' },
  { q: 'האם יש אפליקציה לנייד?', a: 'המערכת בנויה כ-PWA (Progressive Web App) ופועלת מצוין בכל מכשיר — מחשב, טאבלט ונייד. ניתן להתקין אותה כאפליקציה ישירות מהדפדפן.' },
  { q: 'איך עובדים דפי הנחיתה?', a: 'ניתן ליצור דפי נחיתה מקצועיים ללקוחות פוטנציאליים, עם טפסי יצירת קשר, לחצני WhatsApp ומערכת תיאום שיחות אוטומטית.' },
  { q: 'האם ניתן לייבא לקוחות קיימים?', a: 'כן, ניתן להוסיף לקוחות ותיקים קיימים למערכת בקלות. המערכת תומכת בהוספה ידנית מהירה של כל הנתונים.' },
  { q: 'מה התמיכה הטכנית?', a: 'אנו מספקים תמיכה בעברית דרך מייל. צוות התמיכה שלנו זמין לסייע בכל שאלה טכנית או הדרכה.' },
];

export default function Home() {
  useEffect(() => {
    // Inject JSON-LD structured data for GEO
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LegalCRM',
        alternateName: 'דין לדין',
        url: 'https://legal-crm.com',
        logo: 'https://legal-crm.com/favicon.png',
        description: 'מערכת CRM מקצועית לעורכי דין בישראל — ניהול לקוחות, תיקים, משימות, מיילים ולוח שנה',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'legalcrm2025@gmail.com',
          contactType: 'customer service',
          availableLanguage: 'Hebrew',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LegalCRM',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'ILS' },
        description: 'מערכת ניהול קשרי לקוחות לעורכי דין — ניהול לקוחות, תיקים, משימות, מיילים ולוח שנה',
        inLanguage: 'he',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ];

    const scriptElements: HTMLScriptElement[] = [];
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => { scriptElements.forEach((s) => s.remove()); };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen">
      <LandingHeader />
      <main>
        <article>
          <HeroSection />
          <PainPointsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <StatsSection />
          <TestimonialsSection />
          <FAQSection />
        </article>
      </main>
      <CTASection />
    </div>
  );
}
