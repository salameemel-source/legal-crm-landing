import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { question: 'מה זה מערכת CRM לעורכי דין?', answer: 'מערכת CRM (Customer Relationship Management) לעורכי דין היא תוכנה לניהול קשרי לקוחות, תיקים, משימות ותקשורת במשרד עורכי דין. המערכת מרכזת את כל המידע במקום אחד ומייעלת את עבודת המשרד.' },
  { question: 'האם המערכת מתאימה למשרד קטן?', answer: 'בהחלט! המערכת מותאמת למשרדים בכל גודל — מעורך דין יחיד ועד משרד עם עשרות עורכי דין. התוכנית הבסיסית חינמית ומאפשרת להתחיל מיד.' },
  { question: 'איך עובד הסנכרון עם Gmail?', answer: 'המערכת מתחברת לחשבון ה-Gmail שלכם באמצעות OAuth מאובטח. תוכלו לשלוח מיילים ללקוחות ישירות מתוך המערכת, וכל ההתכתבות נשמרת בתיק הלקוח.' },
  { question: 'האם המידע שלי מאובטח?', answer: 'כן. אנו משתמשים בהצפנה מתקדמת, אימות דו-שלבי ושרתי Supabase מאובטחים. כל נתוני Google מאוחסנים בצורה מוצפנת בהתאם למדיניות Google API.' },
  { question: 'האם אפשר לנסות בחינם?', answer: 'כן! ניתן להירשם ולהתחיל להשתמש במערכת מיד ללא צורך בכרטיס אשראי. התוכנית הבסיסית חינמית לצמיתות.' },
  { question: 'איך מנהלים תיקים במערכת?', answer: 'כל תיק כולל סטטוס, אירועים (דיונים, ישיבות), משימות, מסמכים והיסטוריית פעילות. ניתן לחפש, לסנן ולעקוב אחר כל התיקים במקום אחד.' },
  { question: 'האם יש אפליקציה לנייד?', answer: 'המערכת בנויה כ-PWA (Progressive Web App) ופועלת מצוין בכל מכשיר — מחשב, טאבלט ונייד. ניתן להתקין אותה כאפליקציה ישירות מהדפדפן.' },
  { question: 'איך עובדים דפי הנחיתה?', answer: 'ניתן ליצור דפי נחיתה מקצועיים ללקוחות פוטנציאליים, עם טפסי יצירת קשר, לחצני WhatsApp ומערכת תיאום שיחות אוטומטית.' },
  { question: 'האם ניתן לייבא לקוחות קיימים?', answer: 'כן, ניתן להוסיף לקוחות ותיקים קיימים למערכת בקלות. המערכת תומכת בהוספה ידנית מהירה של כל הנתונים.' },
  { question: 'מה התמיכה הטכנית?', answer: 'אנו מספקים תמיכה בעברית דרך מייל. צוות התמיכה שלנו זמין לסייע בכל שאלה טכנית או הדרכה.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-right bg-transparent border-none cursor-pointer"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="faq-content"
        style={{ maxHeight: isOpen ? '300px' : '0px' }}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="faq" aria-label="שאלות נפוצות" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-12 reveal-hidden ${headingVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">שאלות נפוצות</h2>
          <p className="text-lg text-gray-600">תשובות לשאלות הנפוצות ביותר על המערכת</p>
        </div>

        <div ref={accordionRef} className={`space-y-3 reveal-hidden ${accordionVisible ? 'is-visible' : ''}`}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
