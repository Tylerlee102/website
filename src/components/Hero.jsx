import { CircuitBoard, Code2 } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import GlassChip from "@/components/GlassChip";
import HeroDashboard from "@/components/HeroDashboard";
import Reveal from "@/components/Reveal";
import { focusAreas, site } from "@/data/portfolio";

const focusTone = {
  "FPGA / RTL": "cyan",
  "Embedded systems": "mint",
  "Hardware engineering": "cyan",
  Robotics: "mint",
  "Architecture research": "violet",
};

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="section-kicker" variant="hero">
            Hardware-focused engineering portfolio
          </Reveal>
          <Reveal as="h1" id="hero-title" delay={0.04} variant="hero">
            Tyler Lee
          </Reveal>
          <Reveal as="p" className="hero-statement" delay={0.08} variant="hero">
            {site.role}
          </Reveal>
          <Reveal className="focus-chip-row" aria-label="Technical focus areas" delay={0.12} variant="hero">
            {focusAreas.map((area) => (
              <GlassChip key={area} tone={focusTone[area] || "cyan"}>{area}</GlassChip>
            ))}
          </Reveal>
          <Reveal as="p" className="hero-lede" delay={0.16} variant="hero">
            I turn research ideas into reviewable hardware artifacts: diagrams, HLS and RTL
            prototypes, synthesis evidence, and clear technical notes.
          </Reveal>
          <Reveal className="action-row" aria-label="Primary actions" delay={0.2} variant="hero">
            <GlassButton href="projects.html" icon={CircuitBoard}>
              View projects
            </GlassButton>
            <GlassButton href={site.github} variant="secondary" icon={Code2}>
              GitHub
            </GlassButton>
          </Reveal>
        </div>

        <Reveal variant="hero">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
