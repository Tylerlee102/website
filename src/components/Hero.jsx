import { CircuitBoard, Code2 } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import HeroDashboard from "@/components/HeroDashboard";
import Reveal from "@/components/Reveal";
import { site } from "@/data/portfolio";

const proofPoints = [
  { value: "02", label: "case studies" },
  { value: "05", label: "public repositories" },
  { value: "Clear", label: "draft boundaries" },
];

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="section-kicker" variant="hero">
            Tyler Lee / Electrical &amp; computer engineering
          </Reveal>
          <Reveal as="h1" id="hero-title" delay={0.04} variant="hero">
            From research idea to reviewable hardware.
          </Reveal>
          <Reveal as="p" className="hero-statement" delay={0.08} variant="hero">
            FPGA datapaths, RTL, embedded systems, and computer architecture—documented
            with evidence, not inflated claims.
          </Reveal>
          <Reveal className="hero-proof-row" aria-label="Portfolio overview" delay={0.12} variant="hero">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="action-row" aria-label="Primary actions" delay={0.16} variant="hero">
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
