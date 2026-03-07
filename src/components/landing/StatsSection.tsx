import { Shield, MessageCircle, Cloud } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { end: 500, suffix: '+', label: 'משרדי עורכי דין' },
  { end: 10000, suffix: '+', label: 'תיקים מנוהלים' },
  { end: 98, suffix: '%', label: 'שביעות רצון' },
  { end: 40, suffix: '%', label: 'חיסכון בזמן' },
];

const trustBadges = [
  { icon: Shield, label: 'אבטחת מידע מתקדמת' },
  { icon: MessageCircle, label: 'תמיכה בעברית' },
  { icon: Cloud, label: 'ללא התקנה — עובד מהדפדפן' },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollReveal();

  const count0 = useCountUp({ end: stats[0].end, duration: 2000, trigger: isVisible });
  const count1 = useCountUp({ end: stats[1].end, duration: 2000, trigger: isVisible });
  const count2 = useCountUp({ end: stats[2].end, duration: 2000, trigger: isVisible });
  const count3 = useCountUp({ end: stats[3].end, duration: 2000, trigger: isVisible });
  const counters = [count0, count1, count2, count3];

  return (
    <section aria-label="נתונים ואמון" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center reveal-hidden reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <span className="counter-value">{counters[index].toLocaleString()}</span>
                <span className="text-cyan-600">{stat.suffix}</span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={badgesRef} className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`flex items-center gap-3 reveal-hidden reveal-delay-${index + 1} ${badgesVisible ? 'is-visible' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
