import { MouseEventHandler, PointerEvent, RefObject, useState } from "react";
import { MapPin, Sparkles, Terminal } from "lucide-react";
import imgProfile from "../../../assets/img-portf.jpg";

interface HeroSectionProps {
  heroRef: RefObject<HTMLDivElement>;
  mouseOffset: { x: number; y: number };
  onMouseMove: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
  onTechSelect: (tech: string) => void;
}

const TECH_BUTTONS = [
  { label: "React.js", search: "React", className: "bg-primary text-on-primary hover:bg-secondary" },
  {
    label: "Node.js",
    search: "Node",
    className: "bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary",
  },
  {
    label: "Python",
    search: "Python",
    className: "bg-tertiary-container text-on-tertiary-container hover:bg-secondary hover:text-on-secondary",
  },
  {
    label: "MySQL",
    search: "MySQL",
    className: "bg-outline-variant/40 text-primary hover:bg-primary hover:text-on-primary",
  },
  {
    label: "AWS Cloud",
    search: "AWS",
    className: "bg-outline-variant text-on-surface hover:bg-secondary hover:text-on-secondary",
  },
  {
    label: "TypeScript",
    search: "TypeScript",
    className: "bg-primary/10 text-primary hover:bg-primary hover:text-on-primary",

  },
  {
    label: "Java",
    search: "Java",
    className: "bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary",

  }
];

type HeroCardId = "profile" | "tech" | "location";

type CardOffset = {
  x: number;
  y: number;
};

type DragState = {
  card: HeroCardId;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
};

const INITIAL_CARD_OFFSETS: Record<HeroCardId, CardOffset> = {
  profile: { x: 0, y: 0 },
  tech: { x: 0, y: 0 },
  location: { x: 0, y: 0 },
};

export default function HeroSection({
  heroRef,
  mouseOffset,
  onMouseMove,
  onMouseLeave,
  onTechSelect,
}: HeroSectionProps) {
  const [cardOffsets, setCardOffsets] = useState(INITIAL_CARD_OFFSETS);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [activeCard, setActiveCard] = useState<HeroCardId | null>(null);

  const handleCardPointerDown = (
    card: HeroCardId,
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setActiveCard(card);
    setDragState({
      card,
      startX: event.clientX,
      startY: event.clientY,
      originX: cardOffsets[card].x,
      originY: cardOffsets[card].y,
    });
  };

  const handleCardPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState) return;

    const nextOffset = {
      x: dragState.originX + event.clientX - dragState.startX,
      y: dragState.originY + event.clientY - dragState.startY,
    };

    setCardOffsets((currentOffsets) => ({
      ...currentOffsets,
      [dragState.card]: nextOffset,
    }));
  };

  const handleCardPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragState(null);
  };

  const getCardTransform = (
    card: HeroCardId,
    parallaxX: number,
    parallaxY: number,
    rotation: number,
  ) => {
    const offset = cardOffsets[card];

    return `translateX(-50%) translate(${parallaxX + offset.x}px, ${parallaxY + offset.y}px) rotate(${rotation}deg)`;
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 text-center relative max-w-5xl mx-auto mb-16"
      id="home"
    >
      <div className="w-full flex flex-col items-center gap-4 mb-10 mt-6">
        <span className="flex items-center gap-2 text-secondary font-sans text-xs tracking-widest uppercase font-bold animate-pulse">
          <Sparkles className="w-4 h-4 fill-current" />
          Hola, soy Candela Puerta
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary max-w-4xl italic font-bold leading-[1.1] tracking-tight">
          Creando experiencias full-stack con un{" "}
          <span className="text-secondary not-italic text-shadow">toque creativo</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Desarrolladora full-stack. Busco transformar ideas complejas en productos funcionales y estéticos.
        </p>
      </div>

      <div className="relative w-full max-w-3xl h-[520px] sm:h-[560px] md:h-[450px] mt-2 md:mt-4 perspective-1000">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] max-w-[680px] h-[210px] md:h-[240px] bg-primary rounded-t-[32px] md:rounded-t-[40px] shadow-2xl flex flex-col items-center justify-center overflow-hidden border-t border-outline/30">
          <div className="opacity-15 flex gap-4 rotate-12 scale-125 select-none pointer-events-none">
            <span className="font-display text-lg text-on-primary whitespace-nowrap tracking-widest uppercase italic font-bold">
              CODE • CRAFT • QUALITY • DESIGN • LOGIC • INTERACTIVE • STACK
            </span>
          </div>
          <div className="absolute bottom-6 flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl text-on-primary italic font-bold opacity-90 transition-all hover:scale-110 cursor-default select-none">
              Hola! Bienvenidos a mi portafolio
            </span>
            <div className="w-12 h-1 bg-secondary rounded-full mt-2"></div>
          </div>
        </div>

        <div
          style={{
            transform: getCardTransform("profile", mouseOffset.x * -0.6, mouseOffset.y * -0.6, -6),
            zIndex: activeCard === "profile" ? 60 : undefined,
          }}
          onPointerDown={(event) => handleCardPointerDown("profile", event)}
          onPointerMove={handleCardPointerMove}
          onPointerUp={handleCardPointerEnd}
          onPointerCancel={handleCardPointerEnd}
          id="hero-profile-card"
          className="absolute top-0 md:top-12 left-1/2 md:left-[22%] -translate-x-1/2 w-40 sm:w-44 h-52 sm:h-56 bg-surface-container-low rounded-2xl shadow-xl border border-outline-variant/30 p-2 tilt-card z-40 md:z-20 cursor-grab active:cursor-grabbing touch-none select-none"
        >
          <div className="w-full h-4/5 rounded-xl bg-surface-container-highest overflow-hidden relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={imgProfile}
              alt="Candela Puerta Portrait"
              draggable={false}
            />
          </div>
          <div className="text-center pt-2 font-sans font-bold text-xs text-primary leading-tight">
            Candela Puerta
          </div>
        </div>

        <div
          style={{
            transform: getCardTransform("tech", mouseOffset.x * 0.4, mouseOffset.y * 0.4, 2),
            zIndex: activeCard === "tech" ? 60 : undefined,
          }}
          onPointerDown={(event) => handleCardPointerDown("tech", event)}
          onPointerMove={handleCardPointerMove}
          onPointerUp={handleCardPointerEnd}
          onPointerCancel={handleCardPointerEnd}
          id="hero-tech-card"
          className="absolute top-56 md:top-6 left-[28%] md:left-1/2 -translate-x-1/2 w-40 sm:w-52 h-56 sm:h-64 bg-surface-container-high rounded-2xl shadow-2xl border border-outline-variant/50 p-3 sm:p-4 tilt-card z-30 flex flex-col justify-between cursor-grab active:cursor-grabbing touch-none select-none"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
              <Terminal className="text-secondary w-4 h-4" />
              <span className="font-sans font-bold text-[11px] text-on-surface uppercase tracking-wide">
                Main Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {TECH_BUTTONS.map((tech) => (
                <button
                  key={tech.search}
                  onClick={() => onTechSelect(tech.search)}
                  onPointerDown={(event) => event.stopPropagation()}
                  className={`px-2 py-1 sm:px-2.5 rounded-full text-[9px] sm:text-[10px] font-bold font-mono hover:scale-105 transition-all ${tech.className}`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-[8px] sm:text-[9px] text-on-surface-variant italic font-mono border-t border-outline-variant/25 pt-2 flex items-center justify-between">
            <span>Ex-Lead @ DevStudio</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          </div>
        </div>

        <div
          style={{
            transform: getCardTransform("location", mouseOffset.x * 0.7, mouseOffset.y * -0.7, 6),
            zIndex: activeCard === "location" ? 60 : undefined,
          }}
          onPointerDown={(event) => handleCardPointerDown("location", event)}
          onPointerMove={handleCardPointerMove}
          onPointerUp={handleCardPointerEnd}
          onPointerCancel={handleCardPointerEnd}
          id="hero-location-card"
          className="absolute top-64 md:top-16 left-[76%] md:left-[78%] -translate-x-1/2 w-32 sm:w-44 h-40 sm:h-48 bg-surface-container-low rounded-2xl shadow-xl border border-outline-variant/30 p-2 tilt-card z-20 md:z-10 cursor-grab active:cursor-grabbing touch-none select-none"
        >
          <div className="w-full h-full rounded-xl bg-secondary-fixed/20 flex flex-col items-center justify-center gap-2 overflow-hidden relative">
            <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="relative">
              <span className="w-3 h-3 bg-secondary rounded-full absolute -top-1 -right-1 animate-ping"></span>
              <MapPin className="text-secondary w-10 h-10 filter drop-shadow" />
            </div>
            <span className="font-sans font-bold text-xs text-secondary tracking-wide mt-2">
              Argentina
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
