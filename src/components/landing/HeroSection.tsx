import { ChevronDown, Play } from 'lucide-react';

const APP_URL = 'https://app.legal-crm.com/auth';

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="ברוכים הבאים ל-LegalCRM"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(-45deg, #0a0f1e, #0d1f3c, #0a2540, #121a3a, #0e1e38, #091428)',
        }}
      />

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-72 h-72 rounded-full animate-float-slow opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, hsl(190 100% 60%), transparent)',
            top: '10%',
            right: '10%',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full animate-float opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, hsl(260 80% 60%), transparent)',
            bottom: '10%',
            left: '5%',
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full animate-float-reverse opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, hsl(190 100% 50%), transparent)',
            top: '40%',
            left: '30%',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full animate-float-fast opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, hsl(220 80% 60%), transparent)',
            bottom: '30%',
            right: '25%',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-cyan-300 text-sm font-medium">
            מערכת #1 לניהול משרדי עורכי דין בישראל
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          נהלו את המשרד שלכם
          <br />
          <span className="bg-gradient-to-l from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            בצורה חכמה ויעילה
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          לקוחות, תיקים, משימות, מיילים, לוח שנה ומסמכים — הכל במקום אחד
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href={APP_URL}
            className="inline-flex items-center text-lg px-8 py-4 bg-gradient-to-l from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-medium animate-pulse-glow transition-all"
          >
            התחילו תקופת ניסיון חינם
          </a>
          <button
            className="inline-flex items-center text-lg px-8 py-4 bg-white/5 border border-white/20 text-white hover:bg-white/10 rounded-xl font-medium transition-all cursor-pointer"
          >
            <Play className="h-5 w-5 ml-2" />
            צפו בהדגמה
          </button>
        </div>

        {/* Trust text */}
        <p
          className="text-sm text-gray-400 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          ללא צורך בכרטיס אשראי &middot; הקמה תוך 2 דקות
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <ChevronDown className="h-6 w-6 text-white/40" />
      </div>
    </section>
  );
}
