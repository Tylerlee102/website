import { LiquidGlass } from "@liquidglass/react";
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
  ...props
}) {
  return (
    <Component
      className={cn(
        "liquid-panel relative overflow-hidden",
        strong && "liquid-panel-strong",
        className,
      )}
      style={{ "--panel-radius": `${radius}px` }}
      {...props}
    >
      <LiquidGlass
        borderRadius={radius}
        blur={0.36}
        contrast={1.14}
        brightness={1}
        saturation={1.12}
        shadowIntensity={0.24}
        displacementScale={1.12}
        elasticity={0.46}
        zIndex={1}
        className="liquid-filter"
      >
        <div className={cn("liquid-content", innerClassName)}>{children}</div>
      </LiquidGlass>
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
