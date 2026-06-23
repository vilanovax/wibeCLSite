import { appStores } from "@/data/landing";

function StoreGlyph({ id }: { id: string }) {
  // نشانه‌ی ساده و یکدست برای همه‌ی استورها (قابل جایگزینی با لوگوی واقعی)
  const common = "h-5 w-5";
  if (id === "play") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path
          d="M4 3.5 14.5 12 4 20.5c-.4.2-.9-.1-.9-.6V4.1c0-.5.5-.8.9-.6Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="m14.5 12 3.7-3 .1 6-3.8-3Z" fill="currentColor" />
      </svg>
    );
  }
  if (id === "sibapp") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true" fill="none">
        <path
          d="M15.5 8.5c-.6-.7-1.5-1-2.4-.9-.5 0-1.3.4-1.7.4s-1-.4-1.7-.4c-1.3 0-2.5.8-3.1 2-1.1 2.1-.3 5.2 .8 6.9.5.8 1.1 1.7 1.9 1.7.7 0 1-.4 1.9-.4.9 0 1.1.4 1.9.4.8 0 1.3-.8 1.8-1.6.4-.6.6-1 .9-1.7-1.7-.7-2-3.4-.2-4.4Z"
          fill="currentColor"
        />
        <path d="M13.6 4c.1.9-.3 1.7-.8 2.3-.5.6-1.3 1-2 1 0-.9.4-1.8.9-2.3.5-.6 1.3-.9 1.9-1Z" fill="currentColor" />
      </svg>
    );
  }
  // بازار و مایکت — آیکن فروشگاه
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true" fill="none">
      <path
        d="M4 9h16l-1 11H5L4 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 9V7a4 4 0 0 1 8 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface StoreBadgesProps {
  variant?: "default" | "compact";
  theme?: "light" | "dark";
  className?: string;
}

export default function StoreBadges({
  variant = "default",
  theme = "light",
  className = "",
}: StoreBadgesProps) {
  const compact = variant === "compact";
  const base =
    theme === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
      : "border-navy-200 bg-white text-navy-800 hover:border-navy-300 hover:bg-navy-50";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {appStores.map((store) => (
        <a
          key={store.id}
          href={store.href}
          data-analytics="download_app_click"
          data-store={store.id}
          aria-label={`${store.tagline} ${store.name}`}
          className={`inline-flex items-center gap-2 rounded-xl border px-3 ${
            compact ? "py-1.5" : "py-2"
          } shadow-card transition active:scale-[0.98] ${base}`}
        >
          <StoreGlyph id={store.id} />
          <span className="text-right leading-none">
            <span className="block text-[9px] opacity-70">{store.tagline}</span>
            <span
              className={`block font-extrabold ${
                compact ? "text-xs" : "text-sm"
              }`}
            >
              {store.name}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
