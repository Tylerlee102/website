import { Cpu, FileText, Radio, ShieldCheck } from "lucide-react";
import GlassChip from "@/components/GlassChip";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import { caseStudies } from "@/data/portfolio";
import { sitePath } from "@/lib/routes";

const signals = [
  { label: "FPGA / RTL", value: "Datapaths, HLS, RTL review, cosimulation", icon: Cpu, tone: "cyan" },
  { label: "Embedded", value: "Processor pipelines and hardware controls", icon: Radio, tone: "mint" },
  { label: "Architecture", value: "Prefetching, provenance, replay capsules", icon: ShieldCheck, tone: "violet" },
  { label: "Research", value: "Hardware reports and technical writeups", icon: FileText, tone: "rose" },
];

const pipeline = [
  { label: "FPGA", tone: "cyan" },
  { label: "RTL", tone: "cyan" },
  { label: "HLS", tone: "violet" },
  { label: "ARCH", tone: "rose" },
];

export default function HeroDashboard() {
  const primary = caseStudies[0];

  return (
    <div className="hero-dashboard" aria-label="Engineering dashboard preview">
      <div className="dashboard-backlight">
        <LiquidGlassPanel className="dashboard-device" radius={24} strong>
          <div className="dashboard-topline">
            <span>Engineering signal console</span>
            <strong>Portfolio</strong>
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
        <span>Public artifacts</span>
        <strong>PDFs, diagrams, source repositories</strong>
      </LiquidGlassPanel>

      <LiquidGlassPanel className="floating-mini-card mini-card-b" radius={22}>
        <span>Evidence posture</span>
        <strong>Draft status kept visible</strong>
      </LiquidGlassPanel>
    </div>
  );
}
