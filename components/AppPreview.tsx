import { appFeatures } from "@/data/landing";
import { BookmarkIcon, HomeIcon, CompassIcon, HeartIcon } from "./icons";
import StoreBadges from "./StoreBadges";

/* قاب موبایل ساده برای ماک‌آپ‌ها */
function Phone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[230px] shrink-0 rounded-[2.2rem] border-[6px] border-navy-900 bg-navy-900 shadow-lift ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-navy-700" />
      <div
        dir="rtl"
        className="h-[440px] overflow-hidden rounded-[1.7rem] bg-cream"
      >
        {children}
      </div>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "explore" | "saved" }) {
  const item = (
    key: "home" | "explore" | "saved",
    label: string,
    Icon: typeof HomeIcon
  ) => (
    <div
      className={`flex flex-1 flex-col items-center gap-0.5 text-[10px] ${
        active === key ? "text-azure-600" : "text-navy-300"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </div>
  );
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center border-t border-navy-100 bg-white px-3 py-2">
      {item("home", "خانه", HomeIcon)}
      {item("explore", "اکسپلور", CompassIcon)}
      {item("saved", "ذخیره‌ها", BookmarkIcon)}
    </div>
  );
}

function MiniChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[10px] font-bold text-navy-600">
      {children}
    </span>
  );
}

/* صفحه‌ی اکسپلور */
function ExploreScreen() {
  return (
    <div className="relative h-full">
      <div className="px-3 pt-5">
        <p className="text-[11px] text-navy-400">سلام 👋</p>
        <h4 className="text-sm font-extrabold text-navy-900">امروز چی کشف کنیم؟</h4>
        <div className="mt-3 flex gap-1.5 overflow-hidden">
          <MiniChip>🎬 فیلم</MiniChip>
          <MiniChip>☕ کافه</MiniChip>
          <MiniChip>📚 کتاب</MiniChip>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 px-3">
        {[
          { t: "امشب چی ببینم؟", tone: "navy", e: "🌙" },
          { t: "قرار اول", tone: "plum", e: "💞" },
          { t: "آخر هفته", tone: "ocean", e: "🌤️" },
          { t: "حال خوب", tone: "ember", e: "⚡" },
        ].map((c) => (
          <div
            key={c.t}
            className={`flex h-20 flex-col justify-between rounded-xl p-2.5 text-white tone-${c.tone}`}
          >
            <span className="text-lg">{c.e}</span>
            <span className="text-[11px] font-bold">{c.t}</span>
          </div>
        ))}
      </div>
      <BottomNav active="explore" />
    </div>
  );
}

/* صفحه‌ی جزئیات لیست */
function ListDetailScreen() {
  return (
    <div className="relative h-full">
      <div className="tone-navy px-3 pb-4 pt-6 text-white">
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold">
          فیلم
        </span>
        <h4 className="mt-2 text-sm font-extrabold leading-5">
          فیلم‌هایی که دوبار باید دید
        </h4>
        <p className="mt-1 text-[10px] text-white/70">۳۵ آیتم · ۲.۴K ذخیره</p>
      </div>
      <div className="space-y-2 px-3 py-3">
        {["پرستیژ", "ممنتو", "وقتی نیچه گریست", "جدایی"].map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white p-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-sand text-base">
              🎬
            </span>
            <span className="flex-1 text-[11px] font-bold text-navy-800">{f}</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-azure-50 text-azure-600">
              <BookmarkIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        ))}
      </div>
      <BottomNav active="home" />
    </div>
  );
}

/* صفحه‌ی ذخیره‌شده‌ها */
function SavedScreen() {
  return (
    <div className="relative h-full">
      <div className="px-3 pt-5">
        <h4 className="text-sm font-extrabold text-navy-900">ذخیره‌شده‌های من</h4>
        <p className="text-[11px] text-navy-400">۱۲ لیست · ۴۸ آیتم</p>
      </div>
      <div className="mt-3 space-y-2 px-3">
        {[
          { t: "کافه‌های دنج تهران", e: "☕", tone: "ember" },
          { t: "کتاب‌های ماندگار", e: "📚", tone: "forest" },
          { t: "مینی‌سریال‌های عالی", e: "📺", tone: "ocean" },
        ].map((c) => (
          <div
            key={c.t}
            className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white p-2"
          >
            <span className={`grid h-10 w-10 place-items-center rounded-lg text-white tone-${c.tone}`}>
              {c.e}
            </span>
            <div className="flex-1">
              <p className="text-[11px] font-bold text-navy-800">{c.t}</p>
              <p className="text-[10px] text-navy-400">برای بعد ذخیره شده</p>
            </div>
            <HeartIcon className="h-4 w-4 text-azure-500" />
          </div>
        ))}
      </div>
      <BottomNav active="saved" />
    </div>
  );
}

export default function AppPreview() {
  return (
    <section id="app" className="bg-sand/60 py-14 sm:py-20">
      <div className="container-wibe">
        <div className="mb-10 text-center">
          <h2 className="section-title">وایب روی موبایل، همیشه همراه تو</h2>
          <p className="section-sub mx-auto">
            لیست‌ها را ببین، ذخیره کن، پیشنهاد بده و هر وقت لازم داشتی برگرد.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-4">
          <Phone className="lg:translate-y-6">
            <ExploreScreen />
          </Phone>
          <Phone className="lg:-translate-y-2">
            <ListDetailScreen />
          </Phone>
          <Phone className="lg:translate-y-6">
            <SavedScreen />
          </Phone>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {appFeatures.map((f) => (
            <div key={f.id} className="text-center">
              <h3 className="text-sm font-extrabold text-navy-900">{f.title}</h3>
              <p className="mt-1 text-xs leading-6 text-navy-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm font-bold text-navy-700">
            همین حالا وایب را دانلود کن:
          </p>
          <StoreBadges className="justify-center" />
        </div>
      </div>
    </section>
  );
}
