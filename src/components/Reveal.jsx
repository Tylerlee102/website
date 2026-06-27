import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.62,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
