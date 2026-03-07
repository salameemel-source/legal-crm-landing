import { Clock, FileX, CalendarX, UserX } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const painPoints = [
  {
    icon: Clock,
    title: 'בזבוז זמן על ניהול ידני',
    description: 'עורכי דין מבזבזים עד 40% מהזמן שלהם על ניהול אדמיניסטרטיבי במקום על עבודה משפטית',
    color: 'from-red-500/10 to-orange-500/10',
    iconColor: 'text-red-500',
  },
  {
    icon: FileX,
    title: 'מסמכים שהולכים לאיבוד',
    description: 'חיפוש מסמכים בתיקיות, מיילים ודיסקים חיצוניים גוזל זמן יקר ופוגע ביעילות',
    color: 'from-amber-500/10 to-yellow-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: CalendarX,
    title: 'פספוס מועדים חשובים',
    description: 'דיונים, ישיבות ומועדים קריטיים שנשכחים עלולים לגרום נזק ללקוחות ולמשרד',
    color: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-500',
  },
  {
    icon: UserX,
    title: 'לידים שנופלים בין הכיסאות',
    description: 'פניות של לקוחות פוטנציאליים שלא מטופלות בזמן הופכות ללקוחות אבודים',
    color: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-500',
  },
];

export default function PainPointsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section aria-label="בעיות נפוצות" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-16 reveal-hidden ${headingVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            האם גם אתם מתמודדים עם זה?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אתגרים שכל משרד עורכי דין מכיר — ויש להם פתרון פשוט
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 reveal-hidden reveal-delay-${index + 1} ${cardsVisible ? 'is-visible' : ''}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
