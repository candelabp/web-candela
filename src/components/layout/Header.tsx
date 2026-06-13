import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS } from "../../constants/navigation";

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (id: string) => void;
}

export default function Header({
  activeSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
}: HeaderProps) {
  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full w-[94%] max-w-4xl px-4 md:px-6 py-2.5 bg-surface/80 backdrop-blur-md z-50 flex items-center justify-between shadow-sm border border-outline-variant/30 transition-all duration-300">
        <button
          onClick={() => onNavigate("home")}
          id="nav-logo"
          className="font-display text-2xl text-primary italic font-bold tracking-tight hover:scale-105 transition-transform cursor-pointer"
        >
          CP.
        </button>

        <nav className="hidden md:flex gap-5 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              id={`nav-link-${item.id}`}
              className={`font-sans tracking-wide text-xs cursor-pointer font-bold transition-all ${
                activeSection === item.id
                  ? "text-secondary border-b-2 border-secondary pb-0.5"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="mailto:candebpuerta@gmail.com"
            id="nav-cta-contact"
            className="ml-4 px-5 py-2 bg-primary text-on-primary rounded-full text-xs font-bold font-sans hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Contacto
          </a>
        </nav>

        <button
          onClick={onToggleMobileMenu}
          id="mobile-nav-toggle"
          className="md:hidden p-1 text-primary hover:bg-surface-container rounded-full transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-drawer"
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-surface rounded-3xl p-6 shadow-2xl border border-outline-variant/40 z-50 md:hidden flex flex-col gap-4 text-center"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="py-2.5 font-sans font-bold text-sm text-primary border-b border-outline-variant/10"
              >
                {item.label}
              </button>
            ))}

            <a
              href="mailto:candebpuerta@gmail.com"
              className="py-3 mt-2 bg-primary text-on-primary rounded-full font-bold text-sm transition-transform active:scale-95"
            >
              Iniciar Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
