import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Embers Kitchen · Limassol";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#0f0d0b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 6,
            color: "#6f6a62",
            textTransform: "uppercase",
          }}
        >
          <span>έμπερς · Embers Kitchen</span>
          <span>Limassol · Cyprus</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 168, lineHeight: 1.0, letterSpacing: -6, fontWeight: 500 }}>
            έμπερς
          </div>
          <div style={{ fontSize: 36, fontStyle: "italic", color: "#0f0d0b" }}>
            Forged in Flame. Rooted in Tradition.
          </div>
          <div style={{ fontSize: 18, color: "#6f6a62", letterSpacing: 4 }}>
            Open-Fire Teppanyaki & Greek Grill · Gladstonos 94
          </div>
        </div>
      </div>
    ),
    size,
  );
}
