import { APP_URL } from "@/data/landing";

const SITE_URL = "https://wibe.ir";

/**
 * داده‌ی ساختاریافته (JSON-LD) برای نتایج غنیِ گوگل:
 * Organization + WebSite + SoftwareApplication (اپ وایب).
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "وایب",
        alternateName: "Wibe",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description:
          "پلتفرم فارسی کشف و ذخیره لیست‌های منتخب فیلم، سریال، کافه، کتاب، سفر و تجربه‌های روزمره.",
        sameAs: [
          "https://instagram.com/wibe",
          "https://t.me/wibe",
          "https://twitter.com/wibe",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "وایب",
        inLanguage: "fa-IR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "وایب",
        operatingSystem: "Android, iOS, Web",
        applicationCategory: "LifestyleApplication",
        url: APP_URL,
        inLanguage: "fa-IR",
        description:
          "با وایب لیست‌های منتخب فیلم، سریال، کافه، کتاب و تجربه‌های خوب را کشف، ذخیره و دنبال کن.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "IRR",
        },
      },
    ],
  };

  // escape کردن < برای جلوگیری از خروج احتمالی از تگ <script> (سخت‌سازیِ XSS)
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
