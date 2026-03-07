export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">מדיניות פרטיות</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>עודכן לאחרונה: מרץ 2026</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">1. מידע שאנו אוספים</h2>
          <p>אנו אוספים מידע שאתם מספקים לנו ישירות בעת השימוש במערכת, כולל: שם מלא, כתובת דוא"ל, מספר טלפון, ופרטי משרד.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. שימוש ב-Google API</h2>
          <p>המערכת משתמשת ב-Google API לצורך:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>שליחת מיילים דרך Gmail בשם המשתמש</li>
            <li>סנכרון אירועים עם Google Calendar</li>
            <li>ניהול מסמכים עם Google Drive</li>
          </ul>
          <p>השימוש בנתונים מ-Google APIs עומד בדרישות <strong>Google API Services User Data Policy</strong>, כולל דרישות Limited Use.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. אבטחת מידע</h2>
          <p>אנו מיישמים אמצעי אבטחה מתקדמים כולל הצפנת נתונים, אימות דו-שלבי, ושרתים מאובטחים.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">4. שיתוף מידע</h2>
          <p>אנו לא מוכרים, משכירים או משתפים את המידע האישי שלכם עם צדדים שלישיים למטרות שיווקיות.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">5. יצירת קשר</h2>
          <p>לשאלות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו בכתובת: <a href="mailto:legalcrm2025@gmail.com" className="text-blue-600">legalcrm2025@gmail.com</a></p>
        </div>
      </main>
    </div>
  );
}
