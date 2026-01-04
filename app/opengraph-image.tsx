import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Borzi - Vet-Grade Health Insights in Your Pocket";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Brand colors
  const primary = "#d5992a";
  const background = "#18181c";
  const text = "#ffffff";

  return new ImageResponse(
    <div
      style={{
        background: background,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Abstract Background Element - Subtle Gradient */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          background: primary,
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          background: primary,
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Logo / Brand Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo Icon Mockup */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "24px",
              boxShadow: `0 0 30px ${primary}40`,
            }}
          >
            <div
              style={{
                fontSize: "36px",
                color: "#fff",
                fontWeight: 900,
                fontFamily: "sans-serif",
              }}
            >
              B
            </div>
          </div>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: text,
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
            }}
          >
            Borzi
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "36px",
            color: "#94a3b8", // slate-400
            fontFamily: "sans-serif",
            fontWeight: 500,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Vet-Grade Health Insights in Your Pocket
        </div>

        {/* Pill Badge */}
        <div
          style={{
            marginTop: "48px",
            padding: "12px 24px",
            background: `${primary}15`, // 15 = ~10% opacity
            border: `1px solid ${primary}40`, // 40 = ~25% opacity
            borderRadius: "9999px",
            fontSize: "20px",
            color: primary,
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Early Access
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
