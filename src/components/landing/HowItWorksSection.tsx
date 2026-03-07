import { UserPlus, Settings, Rocket } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { icon: UserPlus, number: '1', title: 'הרשמו למערכת', description: 'צרו חשבון חינם תוך דקה עם חשבון Google שלכם' },
  { icon: Settings, number: '2', title: 'הגדירו את המשרד', description: 'הוסיפו עורכי דין, תחומי התמחות והגדרות משרד' },
  { icon: Rocket, number: '3', title: 'התחילו לעבוד', description: 'הוסיפו לקוחות, תיקים ומשימות והתחילו לנהל ביעילות' },
];

export default function HowItWorksSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="how-it-works" aria-label="איך זה עובד" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-16 reveal-hidden ${headingVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">התחילו בשלושה צעדים פשוטים</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">ההקמה פשוטה ומהירה — ותוך דקות אתם בפנים</p>
        </div>

        <div ref={stepsRef} className="relative">
          <div className="hidden md:block absolute top-24 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-cyan-500/30 via-blue-500/30 to-purple-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center text-center reveal-hidden reveal-delay-${index + 1} ${stepsVisible ? 'is-visible' : ''}`}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                    <Icon className="h-9 w-9 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 counter-value">{step.number}</span>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-cyan-500/30 to-blue-500/30 -mt-2 mb-2" />
                  )}

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
