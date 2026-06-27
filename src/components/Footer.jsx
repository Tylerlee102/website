import { Code2 } from "lucide-react";
import { navItems, site } from "@/data/portfolio";
import { linkProps, sitePath } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Copyright 2026 Tyler Lee.</p>
      <nav aria-label="Footer navigation">
        {navItems.slice(1).map((item) => (
          <a key={item.href} href={sitePath(item.href)}>
            {item.label}
          </a>
        ))}
        <a href={site.github} {...linkProps(site.github)}>
          <Code2 aria-hidden="true" strokeWidth={1.8} />
          <span>GitHub</span>
        </a>
      </nav>
    </footer>
  );
}
