import { Code2, MessagesSquare } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import Reveal from "@/components/Reveal";
import { contactCards } from "@/data/portfolio";

const contactTones = ["cyan", "violet", "rose"];

export default function ContactSection({ title = "Review the projects or reach Tyler through GitHub." }) {
  return (
    <section className="section contact-section" aria-labelledby="contact-title">
      <Reveal>
        <LiquidGlassPanel className="contact-panel" radius={34} beam strong>
          <div className="section-heading">
            <MessagesSquare aria-hidden="true" strokeWidth={1.7} />
            <h2 id="contact-title">{title}</h2>
            <p>
              The project pages are the fastest path into Tyler's current hardware and architecture work.
            </p>
          </div>
          <div className="contact-grid">
            {contactCards.map((card, index) => (
              <Reveal
                as="article"
                key={card.title}
                className={card.featured ? `contact-card contact-card-${contactTones[index]} is-featured` : `contact-card contact-card-${contactTones[index]}`}
                delay={index * 0.05}
                variant="card"
              >
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <GlassButton href={card.href} variant={card.featured ? "primary" : "secondary"} icon={card.featured ? Code2 : undefined}>
                  {card.label}
                </GlassButton>
              </Reveal>
            ))}
          </div>
        </LiquidGlassPanel>
      </Reveal>
    </section>
  );
}
