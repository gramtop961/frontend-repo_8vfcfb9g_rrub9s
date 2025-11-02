import { Code2, Shield, Zap, Settings } from 'lucide-react';

const features = [
  {
    title: 'توليد فوري',
    desc: 'حوّل الأوامر النصية إلى مخططات تطبيقات مفصلة خلال ثوانٍ.',
    icon: Zap,
    color: 'from-amber-500/20 to-amber-500/0',
  },
  {
    title: 'قابلية تخصيص',
    desc: 'عدّل الصفحات والمكوّنات بسهولة وصدّر الكود الجاهز.',
    icon: Settings,
    color: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    title: 'أفضل الممارسات',
    desc: 'اقتراحات تقنية متوازنة مع معايير أمن وجودة حديثة.',
    icon: Shield,
    color: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'كود حديث',
    desc: 'ولّد واجهات React وواجهات برمجة FastAPI وقواعد بيانات MongoDB.',
    icon: Code2,
    color: 'from-fuchsia-500/20 to-fuchsia-500/0',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">لماذا ForgeAI؟</h2>
      <p className="mt-2 text-center text-muted-foreground">من الفكرة إلى مخطط التنفيذ — كل ما تحتاجه للانطلاق بسرعة.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-white/5 overflow-hidden">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${f.color}`} />
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-black/80 dark:bg-white/10 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
