import { Cpu, FileCode2, Layers3, PenTool } from "lucide-react";
import GlassChip from "@/components/GlassChip";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import Reveal from "@/components/Reveal";
import { skillGroups, skillTags } from "@/data/portfolio";

const icons = [Cpu, Layers3, PenTool, FileCode2];

export default function SkillsSection({ compact = false }) {
  return (
    <section className={compact ? "section skills-section section-compact" : "section skills-section"} aria-labelledby="skills-title">
      <Reveal>
        <div className="section-heading">
          <h2 id="skills-title">Technical areas Tyler is building around.</h2>
          <p>
            The strongest portfolio materials sit where hardware design, architecture reasoning,
            and disciplined technical writing meet.
          </p>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((skill, index) => {
          const Icon = icons[index] || Cpu;
          return (
            <Reveal key={skill.title} delay={index * 0.04} variant="card">
              <LiquidGlassPanel as="article" className="skill-card" radius={24}>
                <Icon aria-hidden="true" strokeWidth={1.7} />
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
              </LiquidGlassPanel>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="tag-cloud-wrap">
        <div className="chip-wrap large" aria-label="Skills and tools">
          {skillTags.map((tag) => (
            <GlassChip key={tag}>{tag}</GlassChip>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
