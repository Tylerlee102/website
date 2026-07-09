import { ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import GlassButton from "@/components/GlassButton";
import GlassChip from "@/components/GlassChip";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import { sitePath } from "@/lib/routes";

const techTone = (tech) => {
  if (/arm|rv32|embedded|pipeline/i.test(tech)) return "mint";
  if (/security|architecture|prefetch|review/i.test(tech)) return "violet";
  if (/rtl|cosimulation|vivado|vitis|fpga|hls|mxfp/i.test(tech)) return "cyan";
  return "slate";
};

export default function ProjectCard({ project, featured = false }) {
  return (
    <LiquidGlassPanel
      as="article"
      className={
        featured
          ? `project-card project-card-${project.id} project-card-featured`
          : `project-card project-card-${project.id}`
      }
      radius={24}
      strong={featured}
    >
      <a
        className="project-media"
        href={sitePath(project.page)}
        aria-label={`Open ${project.shortTitle}`}
      >
        <img
          src={sitePath(project.image.src)}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="project-body">
        <div className="project-meta">
          <Badge variant="outline" className="status-badge">
            {project.status}
          </Badge>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="chip-wrap" aria-label={`${project.shortTitle} technologies`}>
          {project.tech.slice(0, 4).map((tech) => (
            <GlassChip key={tech} tone={techTone(tech)}>
              {tech}
            </GlassChip>
          ))}
        </div>
        <div className="project-actions">
          <GlassButton href={project.page} icon={FileText}>
            Case study
          </GlassButton>
          <GlassButton href={project.sourceLink.href} variant="secondary" icon={ExternalLink}>
            Repository
          </GlassButton>
          <Dialog>
            <DialogTrigger asChild>
              <button className="preview-button" type="button">
                <ImageIcon aria-hidden="true" strokeWidth={1.8} />
                <span>Preview</span>
              </button>
            </DialogTrigger>
            <DialogContent className="preview-dialog">
              <DialogHeader>
                <DialogTitle>{project.shortTitle}</DialogTitle>
                <DialogDescription>{project.oneLine}</DialogDescription>
              </DialogHeader>
              <img
                src={sitePath(project.image.src)}
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
              />
            </DialogContent>
          </Dialog>
        </div>
        <p className="project-caveat">{project.statusDetail}</p>
      </div>
    </LiquidGlassPanel>
  );
}
