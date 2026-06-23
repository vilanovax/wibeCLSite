import { existsSync } from "fs";
import { join } from "path";

/**
 * لوگوی وایب.
 *
 * اگر فایل لوگوی برند در public/logo.png باشد، **همان فایل کامل** نمایش داده می‌شود
 * (بدون هیچ متنِ دستی). اگر هنوز فایل را اضافه نکرده باشید، فقط نشانِ آبیِ برند
 * (مربعِ بوک‌مارک) نشان داده می‌شود تا تصویرِ شکسته دیده نشود.
 *
 * برای جایگزینی: کافی است فایل لوگو را در مسیر زیر بگذارید و دوباره build کنید:
 *   public/logo.png
 * (اگر SVG دارید، آن را logo.png بنامید یا این مسیر را به logo.svg تغییر دهید.)
 */
// اولویت با فایل واقعیِ شما (logo.png/jpg/webp)؛ در غیر این صورت نسخه‌ی SVG.
const CANDIDATES = ["logo.png", "logo.jpg", "logo.webp", "logo.svg"];
const found = CANDIDATES.find((f) =>
  existsSync(join(process.cwd(), "public", f))
);
const hasLogoFile = Boolean(found);
const LOGO_SRC = found ? `/${found}` : "/logo.png";

interface LogoProps {
  className?: string;
  /** ارتفاع لوگو با کلاس Tailwind (پیش‌فرض h-9) */
  heightClass?: string;
}

export default function Logo({ className = "", heightClass = "h-9" }: LogoProps) {
  if (hasLogoFile) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        {/* فایل واقعی لوگوی برند */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_SRC} alt="وایب" className={`${heightClass} w-auto`} />
      </span>
    );
  }

  // Fallback: فقط نشانِ برند تا وقتی فایل لوگو اضافه شود (بدون متنِ دستی)
  return (
    <span
      className={`inline-flex items-center ${className}`}
      role="img"
      aria-label="وایب"
    >
      <svg viewBox="0 0 48 48" className={`${heightClass} w-auto`}>
        <rect width="48" height="48" rx="12" fill="#2f6bf5" />
        <path d="M18 0h12v18l-6-5-6 5V0Z" fill="#ffffff" />
      </svg>
    </span>
  );
}
