import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "وایب — کشف و ذخیره لیست‌های منتخب",
    short_name: "وایب",
    description:
      "وایب پلتفرم فارسی کشف و ذخیره لیست‌های منتخب فیلم، سریال، کافه، کتاب، سفر و تجربه‌های روزمره است.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#2f6bf5",
    lang: "fa",
    dir: "rtl",
    categories: ["lifestyle", "entertainment", "books"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
