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

  return (
    <div className="hero-dashboard" aria-label="Featured FPGA case study preview">
      <div className="dashboard-backlight">
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
