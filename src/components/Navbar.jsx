import { Code2, Menu } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import LiquidGlassPanel from "@/components/LiquidGlassPanel";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { linkProps, sitePath } from "@/lib/routes";

export default function Navbar({ currentPage }) {
  return (
    <header className="site-header">
      <LiquidGlassPanel as="nav" className="nav-shell" radius={20} aria-label="Primary navigation">
        <a className="brand-lockup" href={sitePath("index.html")} aria-label="Tyler Lee home">
          <span>{site.name}</span>
          <small>{site.shortRole}</small>
        </a>

        <div className="nav-links" aria-label="Primary links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={sitePath(item.href)}
              className={cn(item.page === currentPage && "is-active")}
              aria-current={item.page === currentPage ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild size="icon-lg" variant="ghost" className="icon-glass-button">
                <a aria-label="Open Tyler Lee on GitHub" href={site.github} {...linkProps(site.github)}>
                  <Code2 aria-hidden="true" strokeWidth={1.8} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>GitHub profile</TooltipContent>
          </Tooltip>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon-lg" variant="ghost" className="mobile-menu-trigger" aria-label="Open navigation">
                <Menu aria-hidden="true" strokeWidth={1.8} />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet" side="right">
              <SheetHeader>
                <SheetTitle>Tyler Lee</SheetTitle>
                <SheetDescription>{site.shortRole}</SheetDescription>
              </SheetHeader>
              <div className="mobile-nav-list">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={sitePath(item.href)}
                      className={cn(item.page === currentPage && "is-active")}
                      aria-current={item.page === currentPage ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <GlassButton href={site.github} variant="secondary" icon={Code2}>
                GitHub
              </GlassButton>
            </SheetContent>
          </Sheet>
        </div>
      </LiquidGlassPanel>
    </header>
  );
}
