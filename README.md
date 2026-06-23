# وایب — لندینگ پیج (Wibe Landing)

لندینگ فارسی، RTL و موبایل‌فرست برای پلتفرم کشف لیست‌های منتخب **وایب**.
هدف صفحه: قلاب کردن سریع کاربر و هدایت او به اپ اصلی (`app.wibe.ir`) و دانلود اپلیکیشن.

## استک

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3**
- فونت **Vazirmatn** (از طریق `next/font/google`)
- بدون وابستگی به دیتابیس — همه‌ی داده‌ها استاتیک

## اجرا

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # بیلد پروداکشن (کاملاً استاتیک)
npm start
```

## ساختار

```
app/
  layout.tsx        # RTL، فونت، متادیتای SEO فارسی، OpenGraph
  page.tsx          # چیدمان بخش‌ها + JSON-LD
  globals.css       # دیزاین‌سیستم، کلاس‌های دکمه/چیپ/بج، تونالیته‌ها
components/
  Header.tsx        # هدر چسبان + منوی موبایل
  Hero.tsx          # هیرو با ترکیب بصری کارت‌ها
  MoodDiscovery.tsx # کشف بر اساس حال‌وهوا
  FeaturedLists.tsx # لیست‌های منتخب
  HowItWorks.tsx    # سه قدم
  Benefits.tsx      # چرا وایب (سکشن تیره)
  Curators.tsx      # کیوریتورها
  AppPreview.tsx    # ماک‌آپ موبایل (۳ صفحه)
  FinalCTA.tsx      # دعوت پایانی
  Footer.tsx
  MobileAppBar.tsx  # نوار شناور موبایل برای ورود به اپ
  ListCard.tsx / MoodCard.tsx / CuratorCard.tsx
  Logo.tsx / icons.tsx
data/
  landing.ts        # تنها منبع داده — heroCards, moodCards, featuredLists,
                    # categories, steps, benefits, curators, appFeatures
```

## دیزاین‌سیستم

- رنگ اصلی: سرمه‌ای (`navy`)
- رنگ تأکید: نارنجی گرم (`ember`)
- پس‌زمینه: کرم روشن (`cream` / `sand`)
- کارت‌ها: گوشه‌های متوسط، سایه‌ی نرم، تونالیته‌های رنگی برای ناحیه‌ی تصویر

## تصاویر

کارت‌های هیرو و لیست‌های منتخب فیلد `thumbnail` دارند و با `next/image` رندر می‌شوند؛
اگر `thumbnail` خالی باشد، گرادیان تونالیته + اموجی به‌عنوان fallback نمایش داده می‌شود.

- تصاویر دموی فعلی از Unsplash می‌آیند (سازنده‌ی `img()` در `data/landing.ts`).
- در `next.config.mjs` فعلاً `images.unoptimized = true` است تا بدون fetch سمت‌سرور
  مطمئن لود شوند. برای تصاویر واقعیِ خودتان می‌توانید این را بردارید و فقط
  `remotePatterns` (یا دامنه‌ی خودتان) را نگه دارید تا بهینه‌سازی نکست فعال شود.

## مهاجرت به API (نسخه‌ی بعد)

داده از کامپوننت‌ها جداست. کافی است در `data/landing.ts` به‌جای آرایه‌های ثابت،
توابعی برای `fetch` بگذاری؛ شکل داده (تایپ‌ها) حفظ می‌شود و کامپوننت‌ها تغییر نمی‌کنند:

```ts
export async function getFeaturedLists(): Promise<FeaturedList[]> {
  const res = await fetch(`${API}/landing/featured-lists`, { next: { revalidate: 600 } });
  return res.json();
}
```

## آنالیتیکس

CTAهای مهم با `data-analytics` علامت‌گذاری شده‌اند تا به‌راحتی به ابزار آنالیتیکس وصل شوند:
`hero_start_discovery_click`, `hero_view_lists_click`, `featured_list_click`,
`mood_card_click`, `download_app_click`, `create_list_click`, `curator_section_click`.

## لینک‌های اپ

در `data/landing.ts` مقادیر `APP_URL` و لینک استورها
(`BAZAAR_URL`, `MYKET_URL`, `SIBAPP_URL`, `PLAY_STORE_URL`) را به آدرس‌های
واقعی به‌روزرسانی کن (فعلاً همه به `app.wibe.ir` اشاره می‌کنند). بَج‌های استور
از آرایه‌ی `appStores` ساخته می‌شوند و در هیرو، بخش اپ و فوتر نمایش داده می‌شوند.
