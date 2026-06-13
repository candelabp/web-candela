import { MouseEvent, useRef, useState } from "react";

export function useHeroParallax() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (event: MouseEvent) => {
    if (!heroRef.current) return;

    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    setMouseOffset({
      x: (clientX - innerWidth / 2) / 35,
      y: (clientY - innerHeight / 2) / 35,
    });
  };

  const handleHeroMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return {
    heroRef,
    mouseOffset,
    handleHeroMouseMove,
    handleHeroMouseLeave,
  };
}
