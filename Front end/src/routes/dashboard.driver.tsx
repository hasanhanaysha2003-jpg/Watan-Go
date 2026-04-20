import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardShell, StatCard } from "@/components/dashboard-shell";
import { Navigation, Power, Star, MapPin } from "lucide-react";

export const Route = createFileRoute("/dashboard/driver")({
  component: () => {
    const [online, setOnline] = useState(true);
    return (
      <DashboardShell expectedRole="driver">
        {(user) => (
          <div className="space-y-8">
            <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="font-display text-3xl font-bold">مرحباً يا {user.name} 🚗</h1>
                <p className="mt-2 text-muted-foreground">جاهز لاستلام طلبات اليوم؟</p>
              </div>
              <button
                onClick={() => setOnline((o) => !o)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-bold transition-all ${
                  online ? "bg-primary text-primary-foreground glow" : "border border-border bg-secondary text-muted-foreground"
                }`}
              >
                <Power className="h-4 w-4" />
                {online ? "متصل · جاهز" : "غير متصل"}
              </button>
            </section>

            <section className="grid gap-4 md:grid-cols-4">
              <StatCard label="رحلات اليوم" value="٨" accent="primary" />
              <StatCard label="أرباح اليوم" value="١٤٠ ₪" accent="amber" />
              <StatCard label="التقييم" value="٤.٩ ⭐" accent="cyan" />
              <StatCard label="ساعات العمل" value="٦.٢" accent="primary" />
            </section>

            <section className="card-elevated p-6">
              <h2 className="font-display text-xl font-bold">طلبات قادمة</h2>
              <div className="mt-4 space-y-3">
                {[
                  { from: "وسط المدينة", to: "الجامعة", price: "١٨ ₪", dist: "٣.٢ كم" },
                  { from: "حي الزهور", to: "المستشفى", price: "٢٢ ₪", dist: "٤.٥ كم" },
                ].map((r) => (
                  <div key={r.from} className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-4">
                    <div className="flex items-center gap-3">
                      <Navigation className="h-5 w-5 text-cyan" />
                      <div>
                        <div className="font-medium">{r.from} ← {r.to}</div>
                        <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" /> {r.dist}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg font-bold text-primary">{r.price}</span>
                      <button className="rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">قبول</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card-elevated p-6">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber" /><h2 className="font-display text-lg font-bold">آخر تقييمات الركاب</h2></div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {["سائق محترف وودود", "وصول سريع وآمن"].map((c) => (
                  <div key={c} className="rounded-xl bg-secondary/30 p-3 text-sm text-muted-foreground">"{c}"</div>
                ))}
              </div>
            </section>
          </div>
        )}
      </DashboardShell>
    );
  },
});
