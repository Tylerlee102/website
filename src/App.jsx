import { useEffect } from "react";
import {
  ArrowLeft,
  Code2,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Layers3,
} from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlassButton from "@/components/GlassButton";
import GlassChip from "@/components/GlassChip";
import Hero from "@/components/Hero";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import Reveal from "@/components/Reveal";
import SkillsSection from "@/components/SkillsSection";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  caseStudies,
  contactCards,
  repositories,
  site,
} from "@/data/portfolio";
import { getCurrentPage, linkProps, sitePath } from "@/lib/routes";

const pageTitles = {
  home: "Tyler Lee | Electrical / Computer Engineering",
  projects: "Projects | Tyler Lee",
  about: "About | Tyler Lee",
  contact: "Contact | Tyler Lee",
  mxfp4: "Native MXFP4 Gated DeltaNet Decode on FPGA | Tyler Lee",
  copper: "COPPER-LINE Prefetching Research Review | Tyler Lee",
};

const repoToneSequence = ["cyan", "mint", "violet", "rose", "amber"];

export default function App() {
  const currentPage = getCurrentPage();

  useEffect(() => {
    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  useEffect(() => {
    const resetPageScroll = () => {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetPageScroll();
    window.addEventListener("pageshow", resetPageScroll);

    return () => {
      window.removeEventListener("pageshow", resetPageScroll);
    };
  }, [currentPage]);

  return (
    <TooltipProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AmbientBackground />
      <Navbar currentPage={currentPage} />
      <main id="main">
        {currentPage === "projects" ? <ProjectsPage /> : null}
        {currentPage === "about" ? <AboutPage /> : null}
        {currentPage === "contact" ? <ContactPage /> : null}
        {currentPage === "mxfp4" ? <CaseStudyPage project={caseStudies[0]} /> : null}
        {currentPage === "copper" ? <CaseStudyPage project={caseStudies[1]} /> : null}
        {currentPage === "home" ? <HomePage /> : null}
      </main>
      <Footer />
    </TooltipProvider>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsShowcase />
      <RepositoryTrail />
      <SkillsSection />
      <RecruiterSnapshot />
      <ContactSection />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageIntro
        kicker="Selected projects"
        title="FPGA, architecture, and embedded systems work."
        body="The portfolio is organized around case studies first, then supporting repositories that show the broader technical direction."
      />
      <ProjectsShowcase detailed />
      <RepositoryTrail detailed />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="About"
        title="A hardware-focused engineering portfolio."
        body="Tyler Lee is building around FPGA/RTL, embedded systems, hardware engineering, robotics, and computer architecture research."
      />
      <SkillsSection compact />
      <RecruiterSnapshot />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Open to FPGA/RTL, embedded, hardware, robotics, and research opportunities."
        body="Use GitHub to review Tyler's repositories and reach the active project profile connected to this portfolio."
      />
      <ContactSection title="Start with GitHub and the project hub." />
    </>
  );
}

function PageIntro({ kicker, title, body, actions, children }) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <Reveal>
        <div className="page-intro-grid">
          <div className="page-intro-copy">
            <p className="section-kicker">{kicker}</p>
            <h1 id="page-title">{title}</h1>
            <p>{body}</p>
            {actions ? <div className="action-row">{actions}</div> : null}
          </div>
          {children ? <div className="page-intro-visual">{children}</div> : null}
        </div>
      </Reveal>
    </section>
  );
}

function ProjectsShowcase({ detailed = false }) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal>
        <div className="section-heading">
          <h2 id="projects-title">Research and digital systems work.</h2>
          <p>
            The detailed pages separate problem framing, tools, available materials,
            visible evidence, and current status.
          </p>
        </div>
      </Reveal>

      <BentoGrid className="project-bento">
        {caseStudies.map((project, index) => (
          <Reveal
            key={project.id}
            className={index === 0 || detailed ? "md:col-span-2" : "md:col-span-1"}
            delay={index * 0.06}
            variant="card"
          >
            <ProjectCard project={project} featured={index === 0 || detailed} />
          </Reveal>
        ))}
      </BentoGrid>
    </section>
  );
}

function RepositoryTrail({ detailed = false }) {
  return (
    <section className="section repo-section" aria-labelledby="repo-title">
      <Reveal>
        <div className="section-heading">
          <h2 id="repo-title">Related technical work on GitHub.</h2>
          <p>
            These repositories add useful context without turning every repo into a full case study.
          </p>
        </div>
      </Reveal>

      <BentoGrid className={detailed ? "repo-bento repo-bento-detailed" : "repo-bento"}>
        {repositories.map((repo, index) => (
          <Reveal
            key={repo.title}
            className={index === 0 || (detailed && index === 3) ? "md:col-span-2" : undefined}
            delay={index * 0.045}
            variant="card"
          >
            <BentoGridItem
              className={`repo-bento-item repo-bento-${repoToneSequence[index] || "cyan"}`}
              title={repo.title}
              description={repo.summary}
              icon={<Layers3 aria-hidden="true" strokeWidth={1.7} className="size-5" />}
              header={
                <div className="repo-header">
                  <GlassChip tone={repoToneSequence[index] || "cyan"}>{repo.type}</GlassChip>
                  <a href={repo.href} aria-label={`Open ${repo.title}`} {...linkProps(repo.href)}>
                    <ExternalLink aria-hidden="true" strokeWidth={1.8} />
                  </a>
                </div>
              }
            />
          </Reveal>
        ))}
      </BentoGrid>
    </section>
  );
}

function CaseStudyPage({ project }) {
  return (
    <article className="case-page">
      <PageIntro
        kicker={project.eyebrow}
        title={project.title}
        body={project.summary}
        actions={
          <>
            <GlassButton href={project.primaryLink.href} icon={FileText}>
              {project.primaryLink.label}
            </GlassButton>
            <GlassButton href={project.sourceLink.href} variant="secondary" icon={Code2}>
              Repository
            </GlassButton>
            {project.secondaryLink ? (
              <GlassButton href={project.secondaryLink.href} variant="secondary" icon={ImageIcon}>
                Preview
              </GlassButton>
            ) : null}
          </>
        }
      >
        <LiquidGlassPanel className="case-visual-card" radius={30} beam>
          <img
            src={sitePath(project.image.src)}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            decoding="async"
          />
        </LiquidGlassPanel>
      </PageIntro>

      <section className="section case-detail-section" aria-labelledby="case-detail-title">
        <div className="case-layout">
          <Reveal className="case-main-wrap">
            <LiquidGlassPanel as="section" className="case-main-panel" radius={30}>
              <div className="case-heading-row">
                <a className="back-link" href={sitePath("projects.html")}>
                  <ArrowLeft aria-hidden="true" strokeWidth={1.8} />
                  Projects
                </a>
                <GlassChip>{project.status}</GlassChip>
              </div>
              <h2 id="case-detail-title">What to review.</h2>
              <Tabs defaultValue="overview" className="case-tabs">
                <TabsList className="case-tabs-list">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="evidence">Evidence</TabsTrigger>
                  <TabsTrigger value="status">Status</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="case-tab-content">
                  <h3>What it is</h3>
                  <p>{project.overview}</p>
                  <Separator className="case-separator" />
                  <h3>Problem / goal</h3>
                  <p>{project.problem}</p>
                </TabsContent>
                <TabsContent value="work" className="case-tab-content">
                  <h3>What Tyler built or documented</h3>
                  <ul className="detail-list">
                    {project.work.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="evidence" className="case-tab-content">
                  <h3>Visible evidence</h3>
                  <dl className="evidence-list">
                    {project.evidence.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
                <TabsContent value="status" className="case-tab-content">
                  <h3>Project status</h3>
                  <p>{project.statusDetail}</p>
                </TabsContent>
              </Tabs>
            </LiquidGlassPanel>
          </Reveal>

          <Reveal className="case-sidebar-wrap" delay={0.08}>
            <LiquidGlassPanel as="aside" className="case-sidebar" radius={28} aria-label="Project summary">
              <img
                src={sitePath(project.image.src)}
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                loading="lazy"
                decoding="async"
              />
              <dl>
                {project.sidebarFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="chip-wrap">
                {project.tech.map((tech) => (
                  <GlassChip key={tech} tone="slate">
                    {tech}
                  </GlassChip>
                ))}
              </div>
            </LiquidGlassPanel>
          </Reveal>
        </div>
      </section>

      <ContactSection title="Continue from the source materials." />
    </article>
  );
}
