import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Estudio Roco & Asociados — Estudio jurídico contable especializado en impuestos · Jujuy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(
    /src: url\((https:\/\/[^)]+)\) format\('(opentype|truetype)'\)/,
  );
  if (!match) throw new Error(`font ${family} ${weight} not found`);
  const res = await fetch(match[1]);
  return res.arrayBuffer();
}

export default async function OG() {
  const text =
    "Estudio Roco & Asociados EST 2010 · ESTUDIO JURÍDICO CONTABLE · JUJUY estudioroco.com.ar";
  const [serifRegular, serifLight, mono] = await Promise.all([
    loadFont("Fraunces", 400, text),
    loadFont("Fraunces", 300, text),
    loadFont("JetBrains Mono", 400, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FAF8F4",
          color: "#0F0F0E",
          fontFamily: "Fraunces",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: 4,
            color: "#2a2926",
            textTransform: "uppercase",
          }}
        >
          <span>Estudio Roco & Asociados · EST 2010</span>
          <span>Jujuy · AR</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              fontSize: 168,
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: -3,
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            <span>Estudio&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#2D4A3E" }}>Roco</span>
            <span
              style={{
                fontStyle: "italic",
                color: "#2D4A3E",
                fontSize: 56,
                marginLeft: 16,
                alignSelf: "flex-end",
                paddingBottom: 18,
              }}
            >
              &amp; Asociados
            </span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#2a2926",
              maxWidth: 880,
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            Estudio jurídico contable de Jujuy, especializado en impuestos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: 4,
            color: "#2a2926",
            textTransform: "uppercase",
            borderTop: "1px solid rgba(15,15,14,0.18)",
            paddingTop: 24,
          }}
        >
          <span>estudioroco.com.ar</span>
          <span>Contadores · Auditoría · Jurídico</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: serifRegular, weight: 400, style: "normal" },
        { name: "Fraunces", data: serifLight, weight: 300, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
