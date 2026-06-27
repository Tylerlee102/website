import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { linkProps, sitePath } from "@/lib/routes";

export default function GlassButton({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className,
  label,
  ...props
}) {
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} /> : null}
      <span>{children}</span>
      {href ? <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} /> : null}
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        className={cn("glass-button", `glass-button-${variant}`, className)}
        size="lg"
      >
        <a aria-label={label} href={sitePath(href)} {...linkProps(href)} {...props}>
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button
      className={cn("glass-button", `glass-button-${variant}`, className)}
      size="lg"
      {...props}
    >
      {content}
    </Button>
  );
}
