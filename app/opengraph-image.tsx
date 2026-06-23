import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "وایب — راه ساده برای کشف چیزهای خوب";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#2f6bf5"/><path d="M18 0h12v18l-6-5-6 5V0Z" fill="#ffffff"/></svg>`;

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), "assets/Vazirmatn-Bold.ttf")),
    readFile(join(process.cwd(), "assets/Vazirmatn-Regular.ttf")),
  ]);

  const iconData = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString(
    "base64"
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf8f4",
          fontFamily: "Vazirmatn",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            backgroundColor: "#2f6bf5",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconData} width={128} height={128} alt="" />
          <div style={{ fontSize: 132, fontWeight: 700, color: "#16294c" }}>
            وایب
          </div>
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 50,
            fontWeight: 700,
            color: "#1f55e6",
          }}
        >
          راه ساده برای کشف چیزهای خوب
        </div>
        <div style={{ marginTop: 20, fontSize: 32, color: "#4e618a" }}>
          فیلم · سریال · کافه · کتاب · سفر · پادکست
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 30,
            fontWeight: 700,
            color: "#2f6bf5",
          }}
        >
          wibe.ir
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Vazirmatn", data: bold, weight: 700, style: "normal" },
        { name: "Vazirmatn", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}
