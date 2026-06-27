(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    document.documentElement.classList.add("motion-ready");
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("motion-ready");
  const selector = [
    ".section",
    ".page-hero",
    ".project-card",
    ".repo-card",
    ".case-row",
    ".case-main section",
    ".contact-card",
    ".skills-matrix article",
    ".focus-stack article",
    ".info-panel",
    ".cta-panel"
  ].join(",");

  document.querySelectorAll(selector).forEach((node) => node.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px 8% 0px", threshold: 0.01 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
})();
