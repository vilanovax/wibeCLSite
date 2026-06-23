import Logo from "./Logo";
import StoreBadges from "./StoreBadges";
import { APP_URL } from "@/data/landing";

const LINKS: { label: string; href: string }[] = [
  { label: "درباره وایب", href: "#why" },
  { label: "لیست‌ها", href: "#featured" },
  { label: "اپلیکیشن", href: "#app" },
  { label: "تماس با ما", href: "#" },
  { label: "قوانین", href: "#" },
  { label: "حریم خصوصی", href: "#" },
];

const SOCIAL = ["اینستاگرام", "تلگرام", "توییتر"];

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-cream">
      <div className="container-wibe py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-sm text-sm leading-7 text-navy-500">
              وایب، راه ساده‌تر برای کشف چیزهای خوب. از فیلم و سریال تا کافه،
              کتاب، سفر و ایده‌های روزمره — همه در قالب لیست‌های قابل ذخیره.
            </p>
            <a
              href={APP_URL}
              className="btn-primary mt-5"
              data-analytics="hero_start_discovery_click"
            >
              ورود به وایب
            </a>
            <div className="mt-5">
              <p className="mb-2 text-xs font-medium text-navy-400">
                دانلود اپلیکیشن:
              </p>
              <StoreBadges variant="compact" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-navy-900">دسترسی سریع</h3>
            <ul className="mt-3 space-y-2">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-500 transition hover:text-azure-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-navy-900">ما را دنبال کنید</h3>
            <ul className="mt-3 space-y-2">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-navy-500 transition hover:text-azure-600"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>© ۱۴۰۴ وایب — همه‌ی حقوق محفوظ است.</p>
          <p>ساخته‌شده با ❤️ برای کشف چیزهای خوب</p>
        </div>
      </div>
    </footer>
  );
}
