import { motion, useReducedMotion } from "motion/react";

const revealPresets = {
  default: { y: 14, scale: 0.994, duration: 0.56 },
  hero: { y: 12, scale: 0.99, duration: 0.6 },
  card: { y: 18, scale: 0.982, duration: 0.5 },
  panel: { y: 16, scale: 0.986, duration: 0.58 },
};

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  variant = "default",
  style,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const preset = revealPresets[variant] || revealPresets.default;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: preset.y, scale: preset.scale }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      style={{
        transformOrigin: "50% 60%",
        willChange: reduceMotion ? undefined : "opacity, transform",
        ...style,
      }}
      transition={{
        duration: preset.duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
