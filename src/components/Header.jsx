import { Rocket, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-lg">
            <Rocket className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight">ForgeAI</p>
            <p className="text-xs text-muted-foreground">اصنع تطبيقك بالذكاء الاصطناعي</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#build"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500 transition-colors"
          >
            ابدأ الآن
            <Sparkles className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            المزايا
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/40 dark:to-background p-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              ابنِ تطبيقات كاملة باستخدام الأوامر فقط
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              اكتب فكرتك، ودع ForgeAI يحولها إلى مخطط تطبيق وصفحات وواجهات وخطوات تنفيذ قابلة للتخصيص.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#build" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-500 transition-colors">
                ابدأ ببناء فكرتك
                <Sparkles className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 px-5 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                استكشف المزايا
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
      </div>
    </header>
  );
}
