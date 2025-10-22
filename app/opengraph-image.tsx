import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "Manrope, sans-serif"
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.55em",
            fontSize: 16,
            color: "#2563eb",
            marginBottom: 30
          }}
        >
          Devign Verse
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.1,
            maxWidth: 780,
            fontWeight: 600
          }}
        >
          Supercharged digital launchpads for brands that move culture.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "#475569"
          }}
        >
          devignverse.com
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
