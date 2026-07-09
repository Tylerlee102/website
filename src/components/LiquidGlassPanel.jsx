import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

export default function LiquidGlassPanel({
  as: Component = "div",
  children,
  className,
  innerClassName,
  radius = 28,
  beam = false,
  strong = false,
  style,
  ...props
}) {
  return (
    <Component
      className={cn(
        "liquid-panel relative overflow-hidden",
        strong && "liquid-panel-strong",
        className,
      )}
      style={{ "--panel-radius": `${radius}px`, ...style }}
      {...props}
    >
      <div className={cn("liquid-content", innerClassName)}>{children}</div>
      {beam ? (
        <BorderBeam
          size={96}
          duration={9}
          borderWidth={1}
          colorFrom="#64d2ff"
          colorTo="#bf5af2"
        />
      ) : null}
    </Component>
  );
}
