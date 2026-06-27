import { Cpu, FileText, Radio, ShieldCheck } from "lucide-react";
import { Backlight } from "@/components/ui/backlight";
import GlassChip from "@/components/GlassChip";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import { caseStudies } from "@/data/portfolio";
import { sitePath } from "@/lib/routes";

const signals = [
  { label: "FPGA / RTL", value: "Datapaths, HLS, RTL review, cosimulation", icon: Cpu },
  { label: "Embedded", value: "Processor pipelines and hardware controls", icon: Radio },
  { label: "Architecture", value: "Prefetching, provenance, replay capsules", icon: ShieldCheck },
  { label: "Research", value: "Hardware reports and technical writeups", icon: FileText },
];

export default function HeroDashboard() {
  const primary = caseStudies[0];

  return (
    <div className="hero-dashboard" aria-label="Engineering dashboard preview">
      <Backlight blur={18} className="dashboard-backlight">
        <LiquidGlassPanel className="dashboard-device" radius={34} beam strong>
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
            {["FPGA", "RTL", "HLS", "ARCH"].map((item) => (
              <GlassChip key={item}>{item}</GlassChip>
            ))}
          </div>

          <div className="dashboard-signals">
            {signals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label}>
                  <Icon aria-hidden="true" strokeWidth={1.7} />
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </div>
              );
            })}
          </div>
        </LiquidGlassPanel>
      </Backlight>

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
