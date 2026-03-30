import { useEffect, useRef, useState } from "react";

interface HoverableTitleDividerProps {
  title: string;
  className?: string;
  isExternalHovering?: boolean;
}

export default function HoverableTitleDivider({ title, className = "", isExternalHovering = false }: HoverableTitleDividerProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [titleWidth, setTitleWidth] = useState(64); // Default to 4rem (16 * 4)

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, []);

  const shouldExpand = isHovering || isExternalHovering;

  const handleMouseEnter = () => {
    if (titleRef.current && dividerRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-fit"
    >
      <div
        ref={dividerRef}
        className="h-0.5 bg-primary mb-6 transition-all duration-500"
        style={{ width: shouldExpand ? `${titleWidth}px` : "4rem" }}
      />
      <h2
        ref={titleRef}
        className={`heading-display text-4xl md:text-5xl text-foreground mb-12 inline-block ${className}`}
      >
        {title}
      </h2>
    </div>
  );
}
