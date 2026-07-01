const GRAIN_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
    <filter id="g">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="256" height="256" filter="url(#g)"/>
  </svg>`
);

export const GRAIN_URL = `url("data:image/svg+xml,${GRAIN_SVG}")`;

export function GrainOverlay({
  opacity = 0.3,
  blendMode = "overlay",
}: {
  opacity?: number;
  blendMode?: string;
}) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        backgroundImage: GRAIN_URL,
        backgroundSize: "256px",
        opacity,
        mixBlendMode: blendMode as any,
        zIndex: 1,
      }}
    />
  );
}
