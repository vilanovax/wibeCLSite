/**
 * Wibe landing — static curated dataset.
 *
 * نسخه‌ی اول لندینگ بدون دیتابیس کار می‌کند و همه‌ی داده‌ها اینجاست.
 * بعداً هر کدام از این خروجی‌ها را می‌توان با پاسخ یک API جایگزین کرد
 * بدون اینکه کامپوننت‌ها تغییر کنند (همان شکل داده حفظ می‌شود).
 *
 * مسیر مهاجرت آینده:
 *   export async function getFeaturedLists(): Promise<FeaturedList[]> {
 *     const res = await fetch(`${API}/landing/featured-lists`);
 *     return res.json();
 *   }
 */

export const APP_URL = "https://app.wibe.ir";

// لینک استورها — فعلاً به اپ اشاره می‌کنند؛ با آدرس واقعی جایگزین شوند.
export const BAZAAR_URL = "https://app.wibe.ir";
export const MYKET_URL = "https://app.wibe.ir";
export const SIBAPP_URL = "https://app.wibe.ir";
export const PLAY_STORE_URL = "https://app.wibe.ir";

export interface AppStore {
  id: string;
  name: string;
  tagline: string;
  href: string;
}

export const appStores: AppStore[] = [
  { id: "bazaar", name: "کافه‌بازار", tagline: "دریافت از", href: BAZAAR_URL },
  { id: "myket", name: "مایکت", tagline: "دریافت از", href: MYKET_URL },
  { id: "sibapp", name: "سیب‌اپ", tagline: "دریافت از", href: SIBAPP_URL },
  { id: "play", name: "گوگل‌پلی", tagline: "دریافت از", href: PLAY_STORE_URL },
];

export type Category =
  | "فیلم"
  | "سریال"
  | "کتاب"
  | "رستوران"
  | "کافه"
  | "سفر"
  | "پادکست"
  | "لایف‌استایل";

export interface CategoryChip {
  key: string;
  label: Category | string;
  emoji: string;
}

export interface FeaturedList {
  id: string;
  title: string;
  category: Category | string;
  description: string;
  saveCount: string;
  itemCount: string;
  /** تونالیته‌ی رنگی ناحیه‌ی تصویر کارت — هم fallback است هم هنگام لود تصویر */
  tone: "navy" | "ember" | "plum" | "forest" | "sand" | "ocean";
  emoji: string;
  /** تصویر کاور لیست؛ اگر خالی باشد گرادیان + اموجی نمایش داده می‌شود */
  thumbnail?: string;
}

export interface MoodCard {
  id: string;
  title: string;
  hint: string;
  emoji: string;
  tone: "navy" | "ember" | "plum" | "forest" | "sand" | "ocean";
}

export interface HeroCard {
  id: string;
  title: string;
  category: string;
  saveCount: string;
  emoji: string;
  tone: "navy" | "ember" | "plum" | "forest" | "sand" | "ocean";
  thumbnail?: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export interface Benefit {
  id: string;
  title: string;
  emoji: string;
}

export interface Curator {
  id: string;
  name: string;
  specialty: string;
  lists: string;
  followers: string;
  emoji: string;
  tone: "navy" | "ember" | "plum" | "forest" | "sand" | "ocean";
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
}

/* ----------------------------------------------------------------- */

/**
 * سازنده‌ی آدرس تصویر (فعلاً Unsplash برای دموی نسخه‌ی اول).
 * بعداً با آمدن API، فیلد thumbnail مستقیماً از سرور می‌آید و این حذف می‌شود.
 */
const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=70&auto=format&fit=crop`;

export const categories: CategoryChip[] = [
  { key: "movie", label: "فیلم", emoji: "🎬" },
  { key: "series", label: "سریال", emoji: "📺" },
  { key: "book", label: "کتاب", emoji: "📚" },
  { key: "restaurant", label: "رستوران", emoji: "🍽️" },
  { key: "cafe", label: "کافه", emoji: "☕" },
  { key: "travel", label: "سفر", emoji: "🧭" },
  { key: "podcast", label: "پادکست", emoji: "🎧" },
  { key: "lifestyle", label: "لایف‌استایل", emoji: "✨" },
];

export const heroCards: HeroCard[] = [
  {
    id: "h1",
    title: "فیلم‌هایی که دوبار باید دید",
    category: "فیلم",
    saveCount: "۲.۴K",
    emoji: "🎬",
    tone: "navy",
    thumbnail: img("1485846234645-a62644f84728"),
  },
  {
    id: "h2",
    title: "رستوران‌هایی برای قرار اول",
    category: "رستوران",
    saveCount: "۹۵۰",
    emoji: "🍽️",
    tone: "ember",
    thumbnail: img("1517248135467-4c7edcad34c4"),
  },
  {
    id: "h3",
    title: "مینی‌سریال‌های گیرا",
    category: "سریال",
    saveCount: "۱.۱K",
    emoji: "📺",
    tone: "plum",
    thumbnail: img("1536440136628-849c177e76a1"),
  },
  {
    id: "h4",
    title: "کتاب‌هایی که ارزش یک عمر دارند",
    category: "کتاب",
    saveCount: "۱.۲K",
    emoji: "📚",
    tone: "forest",
    thumbnail: img("1481627834876-b7833e8f5570"),
  },
  {
    id: "h5",
    title: "وقتی بی‌حوصله‌ای چی ببینی؟",
    category: "حال‌وهوا",
    saveCount: "۳.۱K",
    emoji: "🌙",
    tone: "ocean",
    thumbnail: img("1524985069026-dd778a71c7b4"),
  },
];

export const moodCards: MoodCard[] = [
  { id: "m1", title: "امشب چی ببینم؟", hint: "یک انتخاب مطمئن برای امشب", emoji: "🌙", tone: "navy" },
  { id: "m2", title: "وقتی بی‌حوصله‌ای", hint: "چیزی سبک و دلچسب", emoji: "🛋️", tone: "ember" },
  { id: "m3", title: "برای آخر هفته", hint: "وقت برای یک تجربه‌ی کامل", emoji: "🌤️", tone: "ocean" },
  { id: "m4", title: "برای یک قرار خوب", hint: "جای درست، حسِ درست", emoji: "💞", tone: "plum" },
  { id: "m5", title: "وقتی ذهنت درگیره", hint: "چیزی آرام و عمیق", emoji: "🧠", tone: "forest" },
  { id: "m6", title: "برای دیدن با خانواده", hint: "همه دور هم", emoji: "🍿", tone: "sand" },
  { id: "m7", title: "چیزی کوتاه و خوب", hint: "وقت کم، کیفیت بالا", emoji: "⏱️", tone: "ember" },
  { id: "m8", title: "حال خوب و انرژی‌بخش", hint: "برای روزهایی که انرژی می‌خوای", emoji: "⚡", tone: "navy" },
];

export const featuredLists: FeaturedList[] = [
  {
    id: "f1",
    title: "فیلم‌هایی که دوبار باید دید",
    category: "فیلم",
    description: "فیلم‌هایی با جزئیات پنهان، پایان‌های چندلایه و تجربه‌ای که بار دوم بهتر می‌شود.",
    saveCount: "۲.۴K",
    itemCount: "۳۵ آیتم",
    tone: "navy",
    emoji: "🎬",
    thumbnail: img("1524985069026-dd778a71c7b4"),
  },
  {
    id: "f2",
    title: "سریال‌های گیرا و جذاب",
    category: "سریال",
    description: "سریال‌هایی که از قسمت اول گیرت می‌اندازند و رهایت نمی‌کنند.",
    saveCount: "۱.۸K",
    itemCount: "۲۸ آیتم",
    tone: "plum",
    emoji: "📺",
    thumbnail: img("1536440136628-849c177e76a1"),
  },
  {
    id: "f3",
    title: "رستوران‌هایی برای قرار اول",
    category: "رستوران",
    description: "جاهایی با فضای خوب، نور مناسب و حس راحت برای شروع یک گفت‌وگوی خوب.",
    saveCount: "۹۵۰",
    itemCount: "۱۸ آیتم",
    tone: "ember",
    emoji: "🍽️",
    thumbnail: img("1517248135467-4c7edcad34c4"),
  },
  {
    id: "f4",
    title: "کتاب‌هایی که ارزش یک عمر خواندن دارند",
    category: "کتاب",
    description: "کتاب‌هایی که فقط خوانده نمی‌شوند؛ روی نگاه آدم به زندگی اثر می‌گذارند.",
    saveCount: "۱.۲K",
    itemCount: "۴۰ آیتم",
    tone: "forest",
    emoji: "📚",
    thumbnail: img("1481627834876-b7833e8f5570"),
  },
  {
    id: "f5",
    title: "کمدی تلخ",
    category: "فیلم",
    description: "فیلم‌هایی که هم می‌خندانی‌ات، هم کمی ساکتت می‌کنند.",
    saveCount: "۸۷۰",
    itemCount: "۲۲ آیتم",
    tone: "sand",
    emoji: "🎭",
    thumbnail: img("1485846234645-a62644f84728"),
  },
  {
    id: "f6",
    title: "مینی‌سریال‌های عالی",
    category: "سریال",
    description: "برای وقتی که یک داستان کامل و خوب می‌خواهی، بدون تعهد چند فصل طولانی.",
    saveCount: "۱.۱K",
    itemCount: "۲۵ آیتم",
    tone: "ocean",
    emoji: "📺",
    thumbnail: img("1574267432553-4b4628081c31"),
  },
];

export const steps: Step[] = [
  {
    id: "s1",
    title: "کشف کن",
    description: "از بین لیست‌های منتخب، چیزی که به حال و نیازت می‌خورد پیدا کن.",
    emoji: "🧭",
  },
  {
    id: "s2",
    title: "ذخیره کن",
    description: "لیست‌ها و آیتم‌های خوب را ذخیره کن تا بعداً راحت برگردی.",
    emoji: "🔖",
  },
  {
    id: "s3",
    title: "دنبال کن",
    description: "لیست‌ها و کیوریتورهای خوش‌سلیقه را دنبال کن و پیشنهادهای بهتری بگیر.",
    emoji: "➕",
  },
];

export const benefits: Benefit[] = [
  { id: "b1", title: "کشف بر اساس حس، نه فقط دسته‌بندی", emoji: "💫" },
  { id: "b2", title: "لیست‌های منتخب به‌جای محتوای پراکنده", emoji: "🎯" },
  { id: "b3", title: "ذخیره‌سازی برای بعد", emoji: "🔖" },
  { id: "b4", title: "دنبال کردن آدم‌های خوش‌سلیقه", emoji: "👥" },
  { id: "b5", title: "پیشنهاد آیتم توسط کاربران", emoji: "💡" },
  { id: "b6", title: "ساخت لیست‌های عمومی توسط کاربران", emoji: "✏️" },
  { id: "b7", title: "از فیلم و سریال تا کافه، کتاب، سفر و تجربه‌های روزمره", emoji: "🌍" },
];

export const curators: Curator[] = [
  {
    id: "c1",
    name: "فیلم‌باز شبانه",
    specialty: "فیلم‌های عمیق و پایان‌باز",
    lists: "۱۲ لیست",
    followers: "۳.۲K دنبال‌کننده",
    emoji: "🎬",
    tone: "navy",
  },
  {
    id: "c2",
    name: "کافه‌گرد تهران",
    specialty: "کافه‌های دنج با فضای خوب",
    lists: "۹ لیست",
    followers: "۲.۱K دنبال‌کننده",
    emoji: "☕",
    tone: "ember",
  },
  {
    id: "c3",
    name: "کتاب‌خوان آرام",
    specialty: "کتاب‌هایی که می‌مانند",
    lists: "۱۵ لیست",
    followers: "۴.۰K دنبال‌کننده",
    emoji: "📚",
    tone: "forest",
  },
  {
    id: "c4",
    name: "سریال‌بین حرفه‌ای",
    specialty: "سریال‌های گیرا و کم‌حاشیه",
    lists: "۱۱ لیست",
    followers: "۲.۸K دنبال‌کننده",
    emoji: "📺",
    tone: "plum",
  },
];

export const appFeatures: AppFeature[] = [
  {
    id: "a1",
    title: "اکسپلور",
    description: "لیست‌ها را بر اساس حال، دسته و سلیقه‌ات کشف کن.",
  },
  {
    id: "a2",
    title: "جزئیات لیست",
    description: "آیتم‌ها را ببین، توضیح‌ها را بخوان و هرکدام را جدا ذخیره کن.",
  },
  {
    id: "a3",
    title: "ذخیره‌شده‌ها",
    description: "هرچه پسندیدی یک‌جا، همیشه دمِ دست برای برگشتن.",
  },
];

/* --------------- آینده‌ی API: امضای توابع پیشنهادی ---------------- */
// export const getLandingData = async () => ({
//   categories, heroCards, moodCards, featuredLists,
//   steps, benefits, curators, appFeatures,
// });
