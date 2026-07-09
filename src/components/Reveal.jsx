export default function Reveal({
  as = "div",
  children,
  className,
  delay: _delay = 0,
  variant: _variant = "default",
  style,
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
