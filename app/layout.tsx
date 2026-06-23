import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazir",
});

const SITE_URL = "https://wibe.ir";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "وایب | کشف فیلم، سریال، کافه، کتاب و تجربه‌های خوب",
    template: "%s | وایب",
  },
  description:
    "وایب یک پلتفرم فارسی برای کشف و ذخیره لیست‌های منتخب فیلم، سریال، رستوران، کتاب، سفر و تجربه‌های روزمره است.",
  applicationName: "وایب",
  generator: "Next.js",
  keywords: [
    "وایب",
    "wibe",
    "لیست فیلم",
    "لیست سریال",
    "معرفی فیلم",
    "معرفی سریال",
    "کافه",
    "رستوران",
    "کتاب",
    "سفر",
    "پادکست",
    "کشف محتوا",
    "لیست منتخب",
    "کیوریتور",
    "اپلیکیشن وایب",
  ],
  authors: [{ name: "Wibe", url: SITE_URL }],
  creator: "Wibe",
  publisher: "Wibe",
  category: "lifestyle",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: {
    canonical: "/",
    languages: { "fa-IR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "وایب",
    title: "وایب | راه ساده‌تر برای کشف چیزهای خوب",
    description:
      "فیلم، سریال، کافه، کتاب و تجربه‌های خوب را از طریق لیست‌های منتخب پیدا کن، ذخیره کن و بعداً برگرد.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "وایب | راه ساده‌تر برای کشف چیزهای خوب",
    description:
      "کشف و ذخیره‌ی لیست‌های منتخب فیلم، سریال، کافه، کتاب و تجربه‌های خوب.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // برای فعال‌سازی، کد تأیید سرچ‌کنسول/تحلیل‌گرها را اینجا بگذارید:
  // verification: { google: "...", other: { "yandex-verification": "..." } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1729" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        {/* اتصال زودهنگام به CDN تصاویر برای کاهش تأخیر بارگذاری */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
