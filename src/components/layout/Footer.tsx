import { ArrowRight, ArrowUpRight } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/candela-puerta-42491517a/",
  },
  {
    label: "GitHub",
    href: "https://github.com/candelabp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface py-16 border-t border-outline-variant/20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div className="max-w-md">
            <h2 className="font-display text-4xl text-primary italic font-bold mb-4">
              ¿Construimos algo juntos?
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Siempre estoy abierta a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres conectar, no dudes en contactarme.
            </p>

            <a
              href="mailto:candelabpuerta@gmail.com"
              id="footer-email-link"
              className="inline-flex items-center gap-4 mt-6 group"
            >
              <span className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform shadow">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="font-display text-2xl text-primary border-b-2 border-transparent group-hover:border-secondary transition-all font-bold italic">
                candelabpuerta@gmail.com
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest">
              Encontrame En
            </span>
            <div className="flex flex-col gap-2 font-sans text-sm">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface-variant hover:text-secondary font-bold transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-on-surface-variant opacity-70">
            © 2026 Candela Puerta. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-[11px] font-bold text-primary font-sans">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
