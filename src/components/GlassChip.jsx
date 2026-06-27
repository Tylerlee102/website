import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function GlassChip({ children, className, tone = "cyan" }) {
  return (
    <Badge
      variant="outline"
      className={cn("glass-chip", `glass-chip-${tone}`, className)}
    >
      {children}
    </Badge>
  );
}
