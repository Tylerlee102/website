export const site = {
  name: "Tyler Lee",
  shortRole: "Electrical / Computer Engineering",
  role:
    "Electrical / Computer Engineering portfolio focused on FPGA, RTL, embedded systems, robotics, and computer architecture research.",
  description:
    "Hardware-focused engineering portfolio with FPGA/HLS, embedded systems, and computer architecture research projects.",
  github: "https://github.com/Tylerlee102",
  websiteRepo: "https://github.com/Tylerlee102/website",
};

export const navItems = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Projects", href: "projects.html", page: "projects" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

export const focusAreas = [
  "FPGA / RTL",
  "Embedded systems",
  "Hardware engineering",
  "Robotics",
  "Architecture research",
];

export const caseStudies = [
  {
    id: "mxfp4",
    page: "project-mxfp4.html",
    category: "FPGA / HLS",
    eyebrow: "FPGA / HLS case study",
    status: "Draft research prototype",
    title: "Native MXFP4 Gated DeltaNet decode on FPGA",
    shortTitle: "MXFP4 Gated DeltaNet FPGA",
    summary:
      "FPGA-oriented research prototype for a Gated DeltaNet decode layer using persistent on-chip state and native MXFP4 arithmetic.",
    oneLine:
      "Persistent-state FPGA decode datapath using compact MXFP4 arithmetic.",
    image: {
      src: "assets/img/mxfp4-gdn-datapath.png",
      alt: "MXFP4 Gated DeltaNet FPGA datapath diagram.",
      width: 720,
      height: 940,
    },
    primaryLink: {
      label: "Read draft PDF",
      href: "assets/docs/mxfp4-gdn-draft.pdf",
    },
    sourceLink: {
      label: "Open source/support repo",
      href: "https://github.com/Tylerlee102/FPT26_paper_project_share",
    },
    tech: ["Vitis HLS", "C++", "Vivado", "RTL cosimulation", "MXFP4"],
    problem:
      "Linear-attention decode can reduce attention-cache growth, but it still has to read, update, and preserve recurrent state every token. This project asks whether an FPGA datapath can handle that update path with compact MXFP4 arithmetic while keeping the state resident on chip.",
    overview:
      "The project studies a low-precision FPGA datapath for decode-time Gated DeltaNet work. The design keeps recurrent state close to the compute fabric and uses native E2M1 elements with shared E8M0 block scales instead of widening the inner multiply first.",
    work: [
      "Native MXFP4 datapath notes for E2M1 elements and E8M0 block scales.",
      "Persistent-state kernel structure for a Gated DeltaNet decode layer.",
      "Deterministic reference checks and paper-style reporting around the prototype.",
      "Project diagrams and a support repository with golden references, HLS source, reports, and scripts.",
    ],
    evidence: [
      {
        label: "Target",
        value:
          "Alveo U55C appears in the draft and support repository as the FPGA target.",
      },
      {
        label: "Flow",
        value:
          "Golden references, HLS sources, Vitis/Vivado scripts, and paper artifact generation live in the source/support repo.",
      },
      {
        label: "Verification scope",
        value:
          "Deterministic synthetic vectors, unit tests, HLS reports, and RTL-cosimulation evidence are represented in the linked materials.",
      },
    ],
    statusDetail:
      "Draft research prototype. Synthetic checks and checked-in reports support the current writeup. Realistic Qwen activation capture is still needed before making model-quality or perplexity claims.",
    sidebarFacts: [
      {
        label: "Tools / stack",
        value: "Vitis HLS, C++, Vivado, RTL cosimulation, MXFP4 E2M1/E8M0",
      },
      {
        label: "Available materials",
        value: "Draft PDF, datapath image, and source/support repository",
      },
      {
        label: "Technical area",
        value: "FPGA acceleration, low-precision arithmetic, hardware dataflow",
      },
    ],
  },
  {
    id: "copper",
    page: "project-copper-line.html",
    category: "Computer architecture",
    eyebrow: "Computer architecture case study",
    status: "Draft research review",
    title: "COPPER-LINE committed pointer-provenance prefetching",
    shortTitle: "COPPER-LINE prefetching",
    summary:
      "Architecture review for a proof-gated data-memory-dependent prefetching mechanism, framed around pointer provenance and safety.",
    oneLine:
      "Architecture review around safer pointer-driven prefetch authority.",
    image: {
      src: "assets/img/copper-review.jpg",
      alt: "COPPER-LINE architecture review preview.",
      width: 1200,
      height: 808,
    },
    primaryLink: {
      label: "Read review PDF",
      href: "assets/docs/copper-research-draft-review.pdf",
    },
    sourceLink: {
      label: "Open artifact repo",
      href: "https://github.com/Tylerlee102/novel-arm",
    },
    secondaryLink: {
      label: "Open preview image",
      href: "assets/img/copper-review.jpg",
    },
    tech: [
      "ARM / AArch64",
      "Prefetching",
      "RTL discussion",
      "Security",
    ],
    problem:
      "Data-memory-dependent prefetchers can treat memory contents as future addresses. That can be useful for pointer-heavy workloads, but it also raises safety questions when ordinary data happens to look like an address. The review explores an authority model based on committed pointer provenance.",
    overview:
      "COPPER-LINE is framed as a computer architecture and hardware security review. It studies how a prefetcher should decide whether memory contents are allowed to drive future memory requests.",
    work: [
      "Mechanism overview for committed pointer-provenance gating.",
      "ARM/AArch64 framing and gem5-style evaluation context.",
      "RTL and assertion discussion around proof lifetime and invalidation.",
      "Prior-art and security positioning for data-memory-dependent prefetching.",
    ],
    evidence: [
      {
        label: "Artifact package",
        value:
          "The linked repository includes reproduction scripts, paper draft materials, a reproduction guide, and reproducibility notes.",
      },
      {
        label: "Architecture materials",
        value:
          "The review covers provenance gating, translation checks, proof lifetime, and RTL/assertion discussion.",
      },
      {
        label: "Evaluation context",
        value:
          "The linked materials frame simulation, RTL/Vivado evidence, and workload notes as research artifacts rather than product claims.",
      },
    ],
    statusDetail:
      "Draft review in PDF form. The portfolio presents it as a research review, not as a peer-reviewed publication or production hardware integration.",
    sidebarFacts: [
      {
        label: "Tools / stack",
        value:
          "ARM/AArch64 framing, gem5 context, SystemVerilog/SVA discussion, Vivado RTL evidence",
      },
      {
        label: "Available materials",
        value: "Review PDF, preview image, and public artifact repository",
      },
      {
        label: "Technical area",
        value:
          "Prefetching, pointer provenance, architecture review, hardware security",
      },
    ],
  },
];

export const repositories = [
  {
    type: "FPGA/HLS support",
    title: "FPT26 paper project share",
    summary:
      "Support repository for the MXFP4 Gated DeltaNet FPGA accelerator, including golden references, HLS source, reports, and scripts.",
    href: "https://github.com/Tylerlee102/FPT26_paper_project_share",
  },
  {
    type: "SystemVerilog prototype",
    title: "PipeSense-ARM",
    summary:
      "ARM-like educational embedded pipeline with a small hardware observer/controller for adaptive behavior experiments.",
    href: "https://github.com/Tylerlee102/PipeSense-ARM",
  },
  {
    type: "RV32I replay scaffold",
    title: "ReplayCapsule-RV",
    summary:
      "Event-stream hardware modules and scripts for deterministic replay capsules around embedded RV32I failures.",
    href: "https://github.com/Tylerlee102/ASP-DAC",
  },
  {
    type: "COPPER artifact package",
    title: "novel-arm",
    summary:
      "Reviewer-facing artifact package for COPPER, with reproduction scripts, paper draft materials, and reproducibility notes.",
    href: "https://github.com/Tylerlee102/novel-arm",
  },
  {
    type: "Portfolio source",
    title: "Website",
    summary:
      "GitHub Pages portfolio source with project pages, assets, and a Pages workflow for deployment.",
    href: "https://github.com/Tylerlee102/website",
  },
];

export const skillGroups = [
  {
    title: "Digital design",
    body:
      "FPGA/HLS flow, RTL review, datapath structure, synthesis reports, and cosimulation.",
  },
  {
    title: "Embedded architecture",
    body:
      "Processor pipelines, RV32I scaffolds, firmware-facing test paths, and hardware controls.",
  },
  {
    title: "Research communication",
    body:
      "Paper-style drafts, architecture reviews, status notes, and reproducibility boundaries.",
  },
  {
    title: "Target roles",
    body:
      "FPGA/RTL, embedded systems, hardware engineering, robotics, and research internships.",
  },
];

export const skillTags = [
  "SystemVerilog",
  "Vitis HLS",
  "C++",
  "Python",
  "Vivado",
  "RTL cosimulation",
  "RV32I",
  "ARM / AArch64 framing",
  "FPGA datapaths",
  "Technical writing",
  "Architecture review",
  "Embedded pipelines",
];

export const contactCards = [
  {
    title: "GitHub",
    body: "Review repositories, project source, and the portfolio site source.",
    href: site.github,
    label: "Open GitHub profile",
    featured: true,
  },
  {
    title: "Project hub",
    body:
      "Start with the project index for FPGA/HLS, architecture, and embedded processor work.",
    href: "projects.html",
    label: "View projects",
  },
  {
    title: "Source repository",
    body: "Review the portfolio source and GitHub Pages deployment workflow.",
    href: site.websiteRepo,
    label: "Open website repo",
  },
];

export const reviewNotes = [
  {
    label: "Primary profile",
    value: "github.com/Tylerlee102",
    href: site.github,
  },
  {
    label: "Portfolio emphasis",
    value:
      "FPGA/RTL, embedded systems, hardware engineering, robotics, and architecture research.",
  },
  {
    label: "Details not listed",
    value:
      "Email, LinkedIn, education, and resume links are intentionally omitted until verified content is added.",
  },
];
