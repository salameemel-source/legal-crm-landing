export default function TermsOfService() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 text-gray-900 no-underline">
            <img src="/favicon.png" alt="legal-crm" className="h-8 w-8" />
            <span className="font-bold text-lg">legal-crm</span>
          </a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">תנאי שימוש</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>עודכן לאחרונה: מרץ 2026</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">1. הסכמה לתנאים</h2>
          <p>בשימוש במערכת LegalCRM אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים, אנא הימנעו משימוש במערכת.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. תיאור השירות</h2>
          <p>LegalCRM היא מערכת ניהול קשרי לקוחות המיועדת למשרדי עורכי דין בישראל, הכוללת ניהול לקוחות, תיקים, משימות, מיילים, לוח שנה ומסמכים.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. חשבון משתמש</h2>
          <p>אתם אחראים על שמירת סודיות פרטי החשבון שלכם ועל כל הפעילות המתבצעת תחת החשבון שלכם.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">4. הגבלת אחריות</h2>
          <p>המערכת מסופקת "כמות שהיא" ואנו לא נושאים באחריות לנזקים ישירים או עקיפים הנובעים מהשימוש במערכת.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">5. יצירת קשר</h2>
          <p>לשאלות בנוגע לתנאי השימוש, ניתן לפנות אלינו בכתובת: <a href="mailto:legalcrm2025@gmail.com" className="text-blue-600">legalcrm2025@gmail.com</a></p>
        </div>
      </main>
    </div>
  );
}
