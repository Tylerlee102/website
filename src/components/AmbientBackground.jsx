import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { NoiseTexture } from "@/components/ui/noise-texture";

const Aurora = lazy(() => import("@/components/Aurora"));
const mobileAuroraQuery = "(max-width: 620px)";

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const [showAurora, setShowAurora] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setShowAurora(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia(mobileAuroraQuery);
    let idleId = 0;
    let timeoutId = 0;

    const cancelScheduledStart = () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      idleId = 0;
      timeoutId = 0;
    };

    const scheduleAurora = () => {
      cancelScheduledStart();
      setShowAurora(false);

      if (mediaQuery.matches) {
        return;
      }

      const startAurora = () => {
        setShowAurora(true);
      };

      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(startAurora, { timeout: 1400 });
      } else {
        timeoutId = window.setTimeout(startAurora, 700);
      }
    };

    scheduleAurora();
    mediaQuery.addEventListener("change", scheduleAurora);

    return () => {
      cancelScheduledStart();
      mediaQuery.removeEventListener("change", scheduleAurora);
    };
  }, [reduceMotion]);

  return (
    <div className="ambient-background" aria-hidden="true">
      {showAurora ? (
        <div className="aurora-layer">
          <Suspense fallback={null}>
            <Aurora
              colorStops={["#05070d", "#0a84ff", "#64d2ff", "#bf5af2"]}
              amplitude={0.28}
              blend={0.44}
              speed={0.18}
            />
          </Suspense>
        </div>
      ) : null}
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
