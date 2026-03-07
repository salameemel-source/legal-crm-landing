import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'עו"ד דנה כהן',
    title: 'שותפה, כהן ושות\'',
    quote: 'המערכת חסכה לנו שעות עבודה בכל שבוע. הכל מאורגן במקום אחד — לקוחות, תיקים ומשימות.',
    initial: 'ד',
  },
  {
    name: 'עו"ד יוסי לוי',
    title: 'עורך דין פלילי',
    quote: 'הסנכרון עם Gmail ו-Calendar שינה לי את חיי המקצועיים. אני לא מפספס שום דיון.',
    initial: 'י',
  },
  {
    name: 'עו"ד מיכל אברהם',
    title: 'דיני משפחה',
    quote: 'ניהול הלידים ודפי הנחיתה הביא לי 30% יותר לקוחות חדשים תוך חודשיים.',
    initial: 'מ',
  },
];

export default function TestimonialsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section aria-label="המלצות" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-16 reveal-hidden ${headingVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">מה אומרים עורכי הדין שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">משרדים שכבר עובדים חכם יותר עם LegalCRM</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm reveal-hidden reveal-delay-${index + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 text-base">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
