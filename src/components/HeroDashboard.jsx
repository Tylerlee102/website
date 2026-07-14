import { useEffect, useRef } from "react";
import { Binary, FileCheck2 } from "lucide-react";
import GlassChip from "@/components/GlassChip";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import { caseStudies } from "@/data/portfolio";
import { sitePath } from "@/lib/routes";

const signals = [
  { label: "Datapath", value: "Native E2M1 elements with shared E8M0 scales", icon: Binary, tone: "cyan" },
  { label: "Evidence", value: "Golden references, HLS reports, and RTL cosimulation", icon: FileCheck2, tone: "mint" },
];

const pipeline = [
  { label: "MXFP4", tone: "cyan" },
  { label: "Persistent state", tone: "mint" },
  { label: "HLS → RTL", tone: "violet" },
];

export default function HeroDashboard() {
  const primary = caseStudies[0];
  const dashboardRef = useRef(null);

  useEffect(() => {
    const dashboard = dashboardRef.current;
    if (!dashboard) return undefined;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const device = dashboard.querySelector(".dashboard-device");
    const cardA = dashboard.querySelector(".mini-card-a");
    const cardB = dashboard.querySelector(".mini-card-b");
    const glint = dashboard.querySelector(".dashboard-liquid-glint");

    if (!device || !cardA || !cardB || !glint) return undefined;

    let frame = 0;
    let releaseTimer = 0;
    let compositorActive = false;
    let lastMotionAt = 0;
    let bounds = dashboard.getBoundingClientRect();

    const setCompositorHint = (active) => {
      if (compositorActive === active) return;
      compositorActive = active;
      device.style.willChange = active ? "transform" : "";
      cardA.style.willChange = active ? "transform" : "";
      cardB.style.willChange = active ? "transform" : "";
      glint.style.willChange = active ? "transform, opacity" : "";
    };

    const renderMotion = (x = 0, y = 0, active = false) => {
      device.style.transform = `perspective(1200px) translate3d(${x * 1.5}px, ${y * 1.5}px, 0) rotateX(${-y * 1.6}deg) rotateY(${x * 1.9}deg)`;
      cardA.style.transform = `translate3d(${x * 5}px, ${y * 4}px, 0)`;
      cardB.style.transform = `translate3d(${-x * 4}px, ${-y * 3}px, 0)`;
      glint.style.transform = `translate3d(${x * 82}px, ${y * 58}px, 0) scale(${active ? 1 : 0.94})`;
      glint.style.opacity = active ? "0.3" : "0.14";
    };

    const queueMotion = (x, y, active) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => renderMotion(x, y, active));
    };

    const updateBounds = () => {
      bounds = dashboard.getBoundingClientRect();
    };

    const releaseCompositorWhenIdle = () => {
      releaseTimer = 0;
      const remaining = 260 - (window.performance.now() - lastMotionAt);

      if (remaining > 0) {
        releaseTimer = window.setTimeout(releaseCompositorWhenIdle, remaining);
        return;
      }

      setCompositorHint(false);
    };

    const scheduleCompositorRelease = () => {
      if (releaseTimer) return;
      releaseTimer = window.setTimeout(releaseCompositorWhenIdle, 260);
    };

    const handlePointerMove = (event) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));

      lastMotionAt = window.performance.now();
      setCompositorHint(true);
      queueMotion(x, y, true);
      scheduleCompositorRelease();
    };

    const resetMotion = () => {
      queueMotion(0, 0, false);
      window.clearTimeout(releaseTimer);
      lastMotionAt = window.performance.now();
      releaseTimer = window.setTimeout(releaseCompositorWhenIdle, 240);
    };

    dashboard.addEventListener("pointerenter", updateBounds);
    dashboard.addEventListener("pointermove", handlePointerMove, { passive: true });
    dashboard.addEventListener("pointerleave", resetMotion);
    finePointer.addEventListener("change", resetMotion);
    reducedMotion.addEventListener("change", resetMotion);

    return () => {
      dashboard.removeEventListener("pointerenter", updateBounds);
      dashboard.removeEventListener("pointermove", handlePointerMove);
      dashboard.removeEventListener("pointerleave", resetMotion);
      finePointer.removeEventListener("change", resetMotion);
      reducedMotion.removeEventListener("change", resetMotion);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(releaseTimer);
    };
  }, []);

  return (
    <div ref={dashboardRef} className="hero-dashboard" aria-label="Featured FPGA case study preview">
      <div className="dashboard-backlight">
        <span className="dashboard-liquid-glint" aria-hidden="true" />
        <LiquidGlassPanel className="dashboard-device" radius={24} strong>
          <div className="dashboard-topline">
            <span>Featured case study</span>
            <strong>FPGA / HLS</strong>
          </div>

          <a className="dashboard-artifact" href={sitePath(primary.page)} aria-label={`Open ${primary.shortTitle}`}>
            <img
              src={sitePath(primary.image.src)}
              width={primary.image.width}
              height={primary.image.height}
              alt={primary.image.alt}
              loading="eager"
              decoding="async"
            />
          </a>

          <div className="dashboard-pipeline" aria-label="Technical focus pipeline">
            {pipeline.map((item) => (
              <GlassChip key={item.label} tone={item.tone}>{item.label}</GlassChip>
            ))}
          </div>

          <div className="dashboard-signals">
            {signals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className={`dashboard-signal-${signal.tone}`}>
                  <Icon aria-hidden="true" strokeWidth={1.7} />
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </div>
              );
            })}
          </div>
        </LiquidGlassPanel>
      </div>

      <LiquidGlassPanel className="floating-mini-card mini-card-a" radius={22}>
        <span>Materials</span>
        <strong>Draft PDF, datapath, and source</strong>
      </LiquidGlassPanel>

      <LiquidGlassPanel className="floating-mini-card mini-card-b" radius={22}>
        <span>Status</span>
        <strong>Research prototype / limits stated</strong>
      </LiquidGlassPanel>
    </div>
  );
}
