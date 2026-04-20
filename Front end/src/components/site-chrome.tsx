import { Link } from "@tanstack/react-router";
import { Car, UtensilsCrossed, Store } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/rides", label: "الرحلات" },
    { to: "/food", label: "توصيل الطعام" },
    { to: "/shops", label: "المتاجر" },
    { to: "/users", label: "المستخدمون" },
    { to: "/drivers", label: "السائقون" },
    { to: "/merchants", label: "التجار" },
    { to: "/admin", label: "الإدارة" },
    { to: "/architecture", label: "النظام" },
    { to: "/contact", label: "تواصل" },
    { to: "/login", label: "دخول" },
    { to: "/register", label: "تسجيل" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan glow">
            <span className="font-display text-base font-bold text-primary-foreground">و</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">
              وطن جو <span className="font-mono text-sm text-muted-foreground">/ Watan Go</span>
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">v1.0 · منصة</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-lg px-3 py-2 text-sm font-medium text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-1.5 md:flex">
            <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">عرض حي</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan">
                <span className="font-display text-base font-bold text-primary-foreground">و</span>
              </div>
              <span className="font-display text-lg font-bold">
                وطن جو <span className="font-mono text-sm text-muted-foreground">/ Watan Go</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              منصة واحدة للتنقل وتوصيل الطعام والتسوق. منظومة رقمية موحدة مصممة للمدن الحديثة.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">الخدمات</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Car className="h-3.5 w-3.5" /> رحلات</li>
              <li className="flex items-center gap-2"><UtensilsCrossed className="h-3.5 w-3.5" /> توصيل طعام</li>
              <li className="flex items-center gap-2"><Store className="h-3.5 w-3.5" /> متاجر</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">المشروع</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>مشروع تخرج جامعي</li>
              <li>هندسة برمجيات</li>
              <li>2025</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted-foreground">© 2025 وطن جو · جميع الأنظمة تعمل</p>
          <p className="font-mono text-xs text-muted-foreground">صُمم للعرض التقديمي</p>
        </div>
      </div>
    </footer>
  );
}
