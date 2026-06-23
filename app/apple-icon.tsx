import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// آیکن لمسی iOS — نشانِ آبیِ برند روی بک‌گراند هم‌رنگ
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2f6bf5",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: 46,
            height: 70,
            backgroundColor: "#ffffff",
            // شکلِ بوک‌مارک با بریدگیِ پایین
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 72%, 0 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
