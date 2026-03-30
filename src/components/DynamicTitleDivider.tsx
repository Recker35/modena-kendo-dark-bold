import { useRef, useEffect, useState } from "react";

interface DynamicTitleDividerProps {
  title: string;
  className?: string;
}

export default function DynamicTitleDivider({ title, className = "" }: DynamicTitleDividerProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [dividerWidth, setDividerWidth] = useState(64);

  useEffect(() => {
    const updateDividerWidth = () => {
      if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        setDividerWidth(titleWidth);
      }
    };

    updateDividerWidth();
    window.addEventListener("resize", updateDividerWidth);
    return () => window.removeEventListener("resize", updateDividerWidth);
  }, []);

  return (
    <div>
      <div
        ref={dividerRef}
        className="red-divider-dynamic mb-6"
        style={{ width: `${dividerWidth}px` }}
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
