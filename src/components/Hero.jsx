import { CircuitBoard, Code2 } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import GlassChip from "@/components/GlassChip";
import HeroDashboard from "@/components/HeroDashboard";
import Reveal from "@/components/Reveal";
import { focusAreas, site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="section-kicker">Hardware-focused engineering portfolio</p>
          <h1 id="hero-title">Tyler Lee</h1>
          <p className="hero-statement">{site.role}</p>
          <div className="focus-chip-row" aria-label="Technical focus areas">
            {focusAreas.map((area) => (
              <GlassChip key={area}>{area}</GlassChip>
            ))}
          </div>
          <p className="hero-lede">
            Selected work spans low-precision FPGA/HLS datapaths, architecture research reviews,
            embedded processor prototypes, and hardware documentation.
          </p>
          <div className="action-row" aria-label="Primary actions">
            <GlassButton href="projects.html" icon={CircuitBoard}>
              View projects
            </GlassButton>
            <GlassButton href={site.github} variant="secondary" icon={Code2}>
              GitHub
            </GlassButton>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
