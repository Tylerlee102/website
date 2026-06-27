import { motion, useReducedMotion } from "motion/react";

const revealPresets = {
  default: { y: 18, scale: 0.992, duration: 0.58 },
  hero: { y: 16, scale: 0.988, duration: 0.62 },
  card: { y: 26, scale: 0.975, duration: 0.52 },
  panel: { y: 24, scale: 0.982, duration: 0.6 },
};

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  variant = "default",
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
      viewport={{ once: true, amount: 0.18 }}
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
