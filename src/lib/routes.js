export const pageByFile = {
  "": "home",
  "index.html": "home",
  "projects.html": "projects",
  "about.html": "about",
  "contact.html": "contact",
  "project-mxfp4.html": "mxfp4",
  "project-copper-line.html": "copper",
};

export function getCurrentPage() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const file = parts.at(-1) || "";
  if (file === "website") return "home";
  return pageByFile[file] || "home";
}

export function sitePath(href = "") {
  if (!href) return import.meta.env.BASE_URL;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
    return href;
  }
  return `${import.meta.env.BASE_URL}${href.replace(/^\/+/, "")}`;
}

export function isExternal(href = "") {
  return href.startsWith("http");
}

export function linkProps(href = "") {
  if (!isExternal(href)) return {};
  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
