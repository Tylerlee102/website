import { Code2, Radar, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassButton from "@/components/GlassButton";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import Reveal from "@/components/Reveal";
import { reviewNotes, site } from "@/data/portfolio";

export default function RecruiterSnapshot() {
  return (
    <section className="section snapshot-section" aria-labelledby="snapshot-title">
      <Reveal>
        <LiquidGlassPanel className="snapshot-panel" radius={32} beam>
          <div className="section-heading">
            <h2 id="snapshot-title">Recruiter scan, without inflated claims.</h2>
            <p>
              The site leads with hardware evidence, current project materials, and clear boundaries
              around draft work.
            </p>
          </div>
          <div className="snapshot-grid">
            <Reveal variant="card">
              <Card className="snapshot-card snapshot-card-cyan">
                <CardHeader>
                  <Radar aria-hidden="true" strokeWidth={1.7} />
                  <CardTitle>Technical signal</CardTitle>
                </CardHeader>
                <CardContent>
                  FPGA/RTL, embedded systems, hardware engineering, robotics, and architecture research.
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={0.05} variant="card">
              <Card className="snapshot-card snapshot-card-mint">
                <CardHeader>
                  <ScrollText aria-hidden="true" strokeWidth={1.7} />
                  <CardTitle>Review path</CardTitle>
                </CardHeader>
                <CardContent>
                  Case studies, linked PDFs, diagrams, public repositories, and status notes.
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={0.1} variant="card">
              <Card className="snapshot-card snapshot-card-violet">
                <CardHeader>
                  <Code2 aria-hidden="true" strokeWidth={1.7} />
                  <CardTitle>Primary profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <GlassButton href={site.github} variant="secondary" icon={Code2}>
                    GitHub
                  </GlassButton>
                </CardContent>
              </Card>
            </Reveal>
          </div>
          <dl className="review-notes">
            {reviewNotes.map((note, index) => (
              <Reveal as="div" key={note.label} delay={index * 0.04} variant="card">
                <dt>{note.label}</dt>
                <dd>
                  {note.href ? <a href={note.href}>{note.value}</a> : note.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </LiquidGlassPanel>
      </Reveal>
    </section>
  );
}
