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
          background: "linear-gradient(135deg, #0a0b14, #111b38)",
          color: "#f5f7ff",
          fontFamily: "Manrope, sans-serif"
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.6em",
            fontSize: 16,
            color: "rgba(190,230,255,0.9)",
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
          Innovating digital experiences with glassmorphism and cinematic motion.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "rgba(206,233,255,0.8)"
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
