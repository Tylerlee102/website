import { lazy, Suspense } from "react";
import { useReducedMotion } from "motion/react";
import { NoiseTexture } from "@/components/ui/noise-texture";

const Aurora = lazy(() => import("@/components/Aurora"));

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient-background" aria-hidden="true">
      {!reduceMotion ? (
        <div className="aurora-layer">
          <Suspense fallback={null}>
            <Aurora
              colorStops={["#05070d", "#0a84ff", "#64d2ff", "#bf5af2"]}
              amplitude={0.32}
              blend={0.48}
              speed={0.22}
            />
          </Suspense>
        </div>
      ) : null}
      <div className="grid-layer" />
      <div className="light-field light-field-a" />
      <div className="light-field light-field-b" />
      <NoiseTexture
        className="noise-layer"
        frequency={0.58}
        octaves={4}
        slope={0.1}
        noiseOpacity={0.16}
      />
    </div>
  );
}
