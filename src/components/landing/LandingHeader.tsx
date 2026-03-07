import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const APP_URL = 'https://app.legal-crm.com/auth';

const navLinks = [
  { label: 'תכונות', href: '#features' },
  { label: 'איך זה עובד', href: '#how-it-works' },
  { label: 'שאלות נפוצות', href: '#faq' },
];

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="legal-crm" className="h-9 w-9" />
          <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            legal-crm
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 cursor-pointer bg-transparent border-none ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={APP_URL}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25'
            }`}
          >
            כניסה למערכת
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="תפריט"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-700 text-right bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={APP_URL}
              className="block text-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              כניסה למערכת
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
