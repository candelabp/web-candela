import { motion } from "motion/react";
import { X, CheckCircle, ExternalLink, Cpu } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-primary/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Background click listener */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        id="project-detail-modal"
        className="relative bg-surface p-6 md:p-8 rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/30 text-on-surface"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-modal-btn"
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-colors text-primary"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <span className="font-mono text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded-full inline-block font-bold mb-3">
          {project.category} • {project.year}
        </span>
        <h3 className="font-display font-medium text-3xl md:text-4xl text-primary italic mb-6">
          {project.title}
        </h3>

        {/* Hero Image / Metric Box */}
        <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/9] mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-surface p-4 rounded-2xl shadow-lg border border-outline-variant/20 flex flex-col items-center">
            <span className="text-2xl font-bold text-primary font-mono">{project.metric.value}</span>
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{project.metric.label}</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-2 text-secondary">
              <span className="font-bold text-sm uppercase tracking-wider">01. El Desafío</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              {project.details.challenge}
            </p>
          </div>

          <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <span className="font-bold text-sm uppercase tracking-wider">02. La Solución</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              {project.details.solution}
            </p>
          </div>
        </div>

        {/* Technical deep dive */}
        <div className="bg-surface-container p-6 rounded-2xl mb-6 border border-outline-variant/20">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Cpu className="w-5 h-5" />
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider">
              Arquitectura e Impacto Técnico
            </h4>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed font-sans mb-4">
            {project.details.techExplanation}
          </p>
          <div className="flex items-center gap-2 text-primary font-bold text-xs bg-primary/5 p-3 rounded-xl border border-primary/10">
            <CheckCircle className="w-4 h-4 flex-shrink-0 text-secondary" />
            <span className="font-sans leading-none">{project.details.impact}</span>
          </div>
        </div>

        {/* Tech Badges */}
        <h4 className="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider mb-3">
          Tecnologías Empleadas
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container-high text-primary rounded-full text-xs font-bold font-mono border border-outline-variant/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-outline-variant/20 flex justify-end">
          <button
            onClick={onClose}
            id="close-bottom-btn"
            className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Cerrar Detalles
          </button>
        </div>
      </motion.div>
    </div>
  );
}
