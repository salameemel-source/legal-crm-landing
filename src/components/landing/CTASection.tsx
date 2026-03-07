import { ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const APP_URL = 'https://app.legal-crm.com/auth';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* CTA */}
      <section aria-label="הצטרפו עכשיו" className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: 'linear-gradient(-45deg, #0a0f1e, #0d1f3c, #0a2540, #121a3a)',
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-[0.08] animate-float-slow"
            style={{
              background: 'radial-gradient(circle, hsl(190 100% 60%), transparent)',
              top: '-10%',
              right: '20%',
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full opacity-[0.06] animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(260 80% 60%), transparent)',
              bottom: '-10%',
              left: '20%',
            }}
          />
        </div>

        <div ref={ref} className={`relative z-10 max-w-3xl mx-auto px-6 text-center reveal-hidden ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            מוכנים לייעל את המשרד שלכם?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            הצטרפו למאות משרדי עורכי דין שכבר עובדים חכם יותר עם LegalCRM
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center text-lg px-10 py-4 bg-gradient-to-l from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-medium animate-pulse-glow transition-all"
          >
            התחילו עכשיו — חינם
            <ArrowLeft className="h-5 w-5 mr-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070d1a] border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="legal-crm" className="h-7 w-7 opacity-60" />
            <p>&copy; 2026 legal-crm — כל הזכויות שמורות</p>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="/terms" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="mailto:legalcrm2025@gmail.com" className="hover:text-white transition-colors">צור קשר</a>
          </div>
        </div>
      </footer>
    </>
  );
}
