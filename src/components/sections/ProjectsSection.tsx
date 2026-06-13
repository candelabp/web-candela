import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { PROJECT_CATEGORIES } from "../../constants/projects";
import { Project } from "../../types";

interface ProjectsSectionProps {
  projects: Project[];
  projectFilter: string;
  searchQuery: string;
  onFilterChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  onProjectSelect: (project: Project) => void;
  onResetFilters: () => void;
}

export default function ProjectsSection({
  projects,
  projectFilter,
  searchQuery,
  onFilterChange,
  onSearchChange,
  onProjectSelect,
  onResetFilters,
}: ProjectsSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12" id="projects">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-secondary font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              CASOS DE ESTUDIO
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary italic font-bold">
              Proyectos destacados
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-xs font-sans text-sm italic leading-relaxed">
            Una selección  de mis trabajos mas representativos. 
          </p>
        </header>

        <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                  projectFilter === cat
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface text-on-surface-variant hover:border-outline hover:text-primary border border-outline-variant/35"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar tecnología o tag..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              className="w-full sm:w-56 px-3 py-1.5 text-xs bg-surface border border-outline-variant/50 rounded-full focus:outline-none focus:border-secondary transition-colors pl-8 text-on-surface"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/70 text-xs font-mono">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary font-bold text-[10px] hover:text-secondary"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="group bg-surface-container rounded-[2rem] overflow-hidden flex flex-col border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative cursor-pointer" onClick={() => onProjectSelect(project)}>
                  <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <button className="px-6 py-2.5 bg-surface text-primary rounded-full font-sans font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-all shadow-md">
                      Ver Detalles Case-Study
                    </button>
                  </div>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[11px] font-bold text-on-surface-variant/70 tracking-wide mb-0.5 block font-sans">
                          {project.category} • {project.year}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-primary font-bold italic group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="bg-primary/5 px-3 py-1.5 rounded-xl text-center flex flex-col items-center border border-primary/5 min-w-[70px]">
                        <span className="block text-base font-bold text-primary font-mono select-none">
                          {project.metric.value}
                        </span>
                        <span className="text-[8px] text-on-surface-variant font-bold uppercase tracking-wider">
                          {project.metric.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-6 text-xs sm:text-sm font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={(event) => {
                            event.stopPropagation();
                            onSearchChange(tag);
                          }}
                          className="px-2 py-0.5 bg-surface-variant text-on-surface-variant text-[10px] font-bold font-mono rounded-full hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onProjectSelect(project)}
                      id={`btn-open-proj-${project.id}`}
                      className="p-1.5 rounded-full bg-surface hover:bg-secondary hover:text-on-secondary text-primary transition-all shadow-sm border border-outline-variant/20 flex items-center justify-center"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
            <span className="text-3xl block mb-2">🍃</span>
            <h4 className="font-sans font-bold text-primary text-base">No se encontraron proyectos</h4>
            <p className="text-xs text-on-surface-variant mt-1 max-w-sm mx-auto">
              Prueba seleccionando "Todos" o limpiando el cuadro de búsqueda para ver el catálogo completo de Ana.
            </p>
            <button
              onClick={onResetFilters}
              className="mt-4 px-4 py-2 bg-primary text-on-primary text-xs font-bold rounded-full font-sans"
            >
              Ver todo
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
