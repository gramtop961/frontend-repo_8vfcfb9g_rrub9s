export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground">© {new Date().getFullYear()} ForgeAI. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">المزايا</a>
          <a href="#build" className="hover:text-foreground transition-colors">ابدأ الآن</a>
          <a href="#" className="hover:text-foreground transition-colors">سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  );
}
