import { NoiseTexture } from "@/components/ui/noise-texture";

export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="grid-layer" />
      <div className="light-field light-field-a" />
      <div className="light-field light-field-b" />
      <NoiseTexture
        className="noise-layer"
        frequency={0.48}
        octaves={2}
        slope={0.1}
        noiseOpacity={0.12}
      />
    </div>
  );
}
