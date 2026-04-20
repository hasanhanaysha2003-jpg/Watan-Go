// نظام أدوار للعرض التقديمي — يخزن محلياً (localStorage)
export type Role = "customer" | "driver" | "restaurant" | "shop" | "admin";

export interface AuthUser {
  name: string;
  phone: string;
  role: Role;
}

const KEY = "watan_go_auth";

export const ROLES: { value: Role; label: string; emoji: string; route: string; desc: string }[] = [
  { value: "customer",   label: "مستخدم",       emoji: "🙋", route: "/dashboard/customer",   desc: "اطلب طعام، تسوّق، احجز رحلة" },
  { value: "driver",     label: "سائق",         emoji: "🚗", route: "/dashboard/driver",     desc: "استلم طلبات التوصيل والرحلات" },
  { value: "restaurant", label: "صاحب مطعم",    emoji: "🍔", route: "/dashboard/restaurant", desc: "أدر قائمتك والطلبات الواردة" },
  { value: "shop",       label: "صاحب محل",     emoji: "🏪", route: "/dashboard/shop",       desc: "أدر منتجاتك ومخزون متجرك" },
  { value: "admin",      label: "أدمن المنصة",  emoji: "🛡️", route: "/dashboard/admin",      desc: "إشراف كامل على المنظومة" },
];

export function routeForRole(role: Role): string {
  return ROLES.find((r) => r.value === role)?.route ?? "/";
}

export function labelForRole(role: Role): string {
  return ROLES.find((r) => r.value === role)?.label ?? role;
}

export function emojiForRole(role: Role): string {
  return ROLES.find((r) => r.value === role)?.emoji ?? "👤";
}

export function setAuth(user: AuthUser) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getAuth(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
