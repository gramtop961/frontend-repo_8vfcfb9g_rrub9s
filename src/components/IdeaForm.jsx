import { useMemo, useState } from 'react';
import { Wand2, Loader2, Copy, Check } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || '';

export default function IdeaForm() {
  const [idea, setIdea] = useState('منصة لإدارة متاجر إلكترونية تنشئ الصفحات والمنتجات بالذكاء الاصطناعي');
  const [industry, setIndustry] = useState('التجارة الإلكترونية');
  const [complexity, setComplexity] = useState('متوسط');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const disabled = useMemo(() => !idea.trim(), [idea]);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCopied(false);
    setError('');

    try {
      // 1) اطلب الخطة من الواجهة الخلفية
      const planRes = await fetch(`${API_BASE}/api/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, industry, complexity }),
      });
      if (!planRes.ok) throw new Error('فشل توليد الخطة');
      const plan = await planRes.json();

      setResult(plan);

      // 2) خزّن الفكرة والخطة في قاعدة البيانات
      try {
        await fetch(`${API_BASE}/api/ideas`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idea, industry, complexity, plan }),
        });
      } catch (_) {
        // عدم إيقاف التجربة إن فشل التخزين، فقط تجاهل الخطأ
      }

      const section = document.getElementById('result');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      setError(err.message || 'حدث خطأ غير متوقع');
    } finally {
      setLoading(false);
    }
  };

  const copyText = async () => {
    if (!result) return;
    const text = `الاسم: ${result.name}\n\nالمقدمة: ${result.pitch}\n\nالصفحات: \n- ${result.pages.join('\n- ')}\n\nالمزايا:\n- ${result.features.join('\n- ')}\n\nالتقنيات:\n- ${result.stack.join('\n- ')}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="build" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold mb-4">صف فكرتك وسنحوّلها إلى مخطط تطبيق</h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الفكرة</label>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="اكتب وصفاً مختصراً للتطبيق الذي تريد بناءه"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">المجال</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="التعليم، الصحة، التجارة…"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">درجة التعقيد</label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>سهل</option>
                  <option>متوسط</option>
                  <option>متقدم</option>
                </select>
              </div>
            </div>
            <button
              disabled={disabled || loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  جاري التوليد…
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  توليد المخطط
                </>
              )}
            </button>
            {error && (
              <p className="text-sm text-red-600 mt-2">{error}</p>
            )}
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h3 className="text-lg font-semibold mb-2">ما الذي سنقدمه لك؟</h3>
          <p className="text-sm text-muted-foreground mb-4">
            سنقترح اسم التطبيق، مقدمة تسويقية، الصفحات الأساسية، مزايا رئيسية، وتقنيات مناسبة للبناء.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>خطة واضحة للانطلاق</li>
            <li>هيكل صفحات قابل للتوسّع</li>
            <li>اقتراحات تقنية متوازنة</li>
            <li>يمكنك تعديل أي جزء قبل البدء بالتنفيذ</li>
          </ul>
        </div>
      </div>

      {result && (
        <div id="result" className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-gradient-to-br from-white to-indigo-50/40 dark:from-background dark:to-indigo-950/20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{result.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-3xl">{result.pitch}</p>
            </div>
            <button onClick={copyText} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />} نسخ الخطة
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">الصفحات</h4>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {result.pages.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">المزايا</h4>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {result.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">التقنيات المقترحة</h4>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {result.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
