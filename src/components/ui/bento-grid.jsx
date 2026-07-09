import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "row-span-1 flex flex-col justify-between gap-4 p-4 transition",
        className
      )}>
      {header}
      <div className="bento-copy">
        {icon}
        <div className="bento-title">
          {title}
        </div>
        <div className="bento-description">
          {description}
        </div>
      </div>
    </div>
  );
};
