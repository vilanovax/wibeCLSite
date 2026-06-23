import Image from "next/image";
import { heroCards, categories, APP_URL } from "@/data/landing";
import { BookmarkIcon, ArrowLeftIcon } from "./icons";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* پس‌زمینه‌ی نرم بدون بلاب بی‌معنی */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 0%, rgba(47,107,245,0.10) 0%, rgba(250,248,244,0) 60%), radial-gradient(50% 45% at 10% 10%, rgba(34,51,90,0.07) 0%, rgba(250,248,244,0) 55%)",
        }}
      />

      <div className="container-wibe grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:py-20">
        {/* متن */}
        <div className="animate-rise text-center lg:text-right">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-navy-700">
            ✨ پلتفرم کشف لیست‌های منتخب
          </span>
          <h1 className="mt-5 text-3xl font-black leading-[1.25] tracking-tight text-navy-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            وایب، راه ساده‌تر برای
            <br className="hidden sm:block" />{" "}
            <span className="text-ember-600">کشف چیزهای خوب</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-navy-500 lg:mx-0">
            نمی‌دونی چی ببینی، کجا بری یا چی بخونی؟ فیلم، سریال، کافه، کتاب و
            تجربه‌های خوب را از طریق لیست‌های منتخب پیدا کن، ذخیره کن و بعداً برگرد.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={APP_URL}
              className="btn-primary px-7 py-3.5 text-base"
              data-analytics="hero_start_discovery_click"
            >
              شروع کشف
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
            <a
              href="#featured"
              className="btn-secondary px-7 py-3.5 text-base"
              data-analytics="hero_view_lists_click"
            >
              مشاهده لیست‌های منتخب
            </a>
          </div>

          {/* دانلود از استورهای ایرانی */}
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium text-navy-400">
              دانلود اپلیکیشن وایب:
            </p>
            <StoreBadges variant="compact" className="justify-center lg:justify-start" />
          </div>

          {/* چیپس دسته‌ها */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {categories.map((c) => (
              <a
                key={c.key}
                href={APP_URL}
                data-analytics="category_chip_click"
                data-category={c.key}
                className="chip"
              >
                <span aria-hidden="true">{c.emoji}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* ترکیب بصری کارت‌ها */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroCards.slice(0, 4).map((card, i) => (
              <a
                key={card.id}
                href={APP_URL}
                data-analytics="featured_list_click"
                data-list-id={card.id}
                className={`group relative flex h-40 flex-col justify-between overflow-hidden rounded-card p-4 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:h-48 tone-${card.tone} ${
                  i % 2 === 1 ? "lg:translate-y-6" : ""
                } animate-rise`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {card.thumbnail && (
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={i < 2}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <span aria-hidden="true" className="card-scrim" />
                <div className="relative flex items-center justify-between">
                  <span className="badge">{card.category}</span>
                  {!card.thumbnail && (
                    <span aria-hidden="true" className="text-3xl">
                      {card.emoji}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <h3 className="text-sm font-extrabold leading-6 sm:text-base">
                    {card.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-white/90">
                    <span className="inline-flex items-center gap-1">
                      <BookmarkIcon className="h-3.5 w-3.5" />
                      {card.saveCount} ذخیره
                    </span>
                    <span className="font-bold text-white/90 group-hover:underline">
                      مشاهده لیست
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* کارت شناور آمار */}
          <div className="absolute -bottom-4 right-1/2 hidden translate-x-1/2 items-center gap-3 rounded-full border border-navy-100 bg-white px-5 py-2.5 shadow-lift sm:flex">
            <span className="text-xs font-bold text-navy-700">
              +۵۰۰ لیست منتخب آماده‌ی کشف
            </span>
            <span aria-hidden className="text-lg">🔥</span>
          </div>
        </div>
      </div>
    </section>
  );
}
