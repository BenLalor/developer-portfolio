import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b100e",
          color: "#efe7d6",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4b056" }}>
          Ben Lalor
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
            Energy-code specialist and full-stack builder.
          </div>
          <div style={{ fontSize: 28, color: "#9aa396" }}>Title 24 / BEM · Denver / Arvada, CO</div>
        </div>
      </div>
    ),
    size,
  );
}
