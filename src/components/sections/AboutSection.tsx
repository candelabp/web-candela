import { AnimatePresence, motion } from "motion/react";
import { BookOpen, Compass } from "lucide-react";

interface AboutSectionProps {
  isBreathing: boolean;
  breathPhase: string;
  breathCounter: number;
  onToggleBreathing: () => void;
}

export default function AboutSection({
  isBreathing,
  breathPhase,
  breathCounter,
  onToggleBreathing,
}: AboutSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface-container-low/55 relative" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-2.5 bg-tertiary-fixed rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative w-full aspect-square bg-surface-container-highest rounded-3xl overflow-hidden shadow-2xl border-4 border-surface">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANrSHRsQkO1xiF8m8thtS2PSuTG66Op-IWxRKtq50UiWA6ELI6rG2O-sDisq99AmQm6ANRwnqLUMv5-m1kFNz80VpfpNwX42_xOYRkIZsyA4jW23Xa0SzRFZaxm08oX2191r0Z30k7BnjS_kdroA_2nH8L0SrC1XGwv9_ik6aZAWVKYsAVdAi43MBsE8tkUuHeqJooJRvc94wQEIseK4XbVxDvayxU1vAVcrmZSyM9EQhvNXioOtN8xqHBxkXkLSOj2Z4z4Q8Z_9w"
              alt="Ana's Workspace desk notebook coffee and computer"
            />
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-6">
          <h2 className="font-display text-3xl md:text-4xl text-primary italic font-bold">
            Sobre Mí
          </h2>
          <p className="font-sans text-base text-on-surface leading-relaxed">
Soy desarrolladora full stack y desde hace más de 3 años vengo creando soluciones digitales para distintos proyectos y clientes. Me gusta transformar ideas en aplicaciones funcionales, simples de usar y pensadas para resolver necesidades reales.

También disfruto estar en constante aprendizaje, probar nuevas tecnologías y darle un toque creativo a cada proyecto que desarrollo.          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {/* <div className="p-5 bg-surface rounded-2xl border border-outline-variant/30 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between mb-2">
                <Compass className="w-5 h-5 text-secondary" />
                <button
                  onClick={onToggleBreathing}
                  id="breathing-toggle-btn"
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary hover:text-on-secondary transition-colors"
                >
                  {isBreathing ? "Detener guía" : "Ejercitar"}
                </button>
              </div>
              <h4 className="font-sans font-bold text-sm text-primary mb-1">
                Para la Cordura
              </h4>
              <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                Yoga diario y caminatas por el bosque para despejar la lógica.
              </p>

              <AnimatePresence>
                {isBreathing ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 pt-3 border-t border-outline-variant/20 flex flex-col items-center gap-2 bg-background/50 rounded-xl p-2"
                  >
                    <motion.div
                      animate={{
                        scale: breathPhase === "Inhala" ? 1.4 : breathPhase === "Exhala" ? 0.9 : 1.4,
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border transition-colors ${
                        breathPhase === "Inhala"
                          ? "bg-secondary/15 text-secondary border-secondary/40"
                          : breathPhase === "Exhala"
                            ? "bg-primary/15 text-primary border-primary/40"
                            : "bg-tertiary-fixed text-tertiary border-tertiary-fixed-dim"
                      }`}
                    >
                      {breathCounter}s
                    </motion.div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                      {breathPhase}...
                    </span>
                  </motion.div>
                ) : (
                  <div className="text-[10px] text-tertiary font-bold mt-2 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Calma tu mente antes de programar
                  </div>
                )}
              </AnimatePresence>
            </div> */}

            <div className="p-5 bg-surface rounded-2xl border border-outline-variant/30 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="text-[10px] font-mono text-on-surface-variant font-bold bg-surface-container px-2 py-0.5 rounded">
                  En Curso
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm text-primary mb-1">
                Aprendizaje Activo
              </h4>
              <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                Actualmente explorando Arquitecturas e Ingenieria Cloud para llevar mis proyectos al siguiente nivel.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
