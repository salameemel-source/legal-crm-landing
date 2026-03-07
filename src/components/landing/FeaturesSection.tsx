import { Users, Briefcase, CheckSquare, Mail, Calendar, FileText, UserPlus, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Users, title: 'ניהול לקוחות', description: 'תיק לקוח מלא עם היסטוריית פעילות, מסמכים ותקשורת', gradient: 'from-blue-500 to-blue-600' },
  { icon: Briefcase, title: 'ניהול תיקים', description: 'מעקב אחר כל תיק — סטטוס, אירועים, מסמכים ומשימות', gradient: 'from-purple-500 to-purple-600' },
  { icon: CheckSquare, title: 'ניהול משימות', description: 'משימות חכמות עם תזכורות, עדיפויות ומעקב ביצוע', gradient: 'from-emerald-500 to-emerald-600' },
  { icon: Mail, title: 'אימייל מובנה', description: 'שליחת מיילים ישירות מהמערכת דרך חשבון Gmail שלכם', gradient: 'from-red-500 to-red-600' },
  { icon: Calendar, title: 'סנכרון לוח שנה', description: 'סנכרון אוטומטי של דיונים ופגישות עם Google Calendar', gradient: 'from-amber-500 to-amber-600' },
  { icon: FileText, title: 'ניהול מסמכים', description: 'אחסון וארגון מסמכים עם Google Drive ישירות מהתיק', gradient: 'from-cyan-500 to-cyan-600' },
  { icon: UserPlus, title: 'ניהול לידים', description: 'דפי נחיתה, טפסים וניהול לידים עם תיאום שיחות אוטומטי', gradient: 'from-pink-500 to-pink-600' },
  { icon: BarChart3, title: 'דוחות ואנליטיקה', description: 'מעקב אחר ביצועים, סטטיסטיקות וניתוח נתוני המשרד', gradient: 'from-indigo-500 to-indigo-600' },
];

export default function FeaturesSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="features" aria-label="תכונות המערכת" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-16 reveal-hidden ${headingVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הכל במקום אחד</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">כל הכלים שמשרד עורכי דין צריך — בפלטפורמה אחת חכמה</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 reveal-hidden reveal-delay-${index + 1} ${gridVisible ? 'is-visible' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
