import { useState } from "react";
import { Check, Clipboard, Send, Clock, Sparkles } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const SERVICES: ServiceOption[] = [
  { id: "fullstack", name: "Desarrollo Full-Stack Completo", price: 4500, description: "Arquitectura robusta de punta a punta + interfaz pulida y responsiva." },
  { id: "frontend", name: "Rediseño & UI Interactiva", price: 2000, description: "Animaciones orgánicas, performance extrema y diseño premium." },
  { id: "backend", name: "API Backend e Integración IoT", price: 3000, description: "Base de datos escalables, indexación, sockets y microservicios." },
  { id: "consulting", name: "Auditoría de Rendimiento", price: 800, description: "Optimización de tiempos de carga, SEO técnico y seguridad." }
];

const TECH_OPTIONS = [
  { id: "react", name: "React / Next.js" },
  { id: "node", name: "Node.js / Express" },
  { id: "python", name: "Python / FastAPI" },
  { id: "postgres", name: "PostgreSQL / SQL" },
  { id: "aws", name: "AWS Cloud" },
  { id: "threejs", name: "Three.js / 3D" }
];

export default function ProposalBuilder() {
  const [selectedService, setSelectedService] = useState<string>("fullstack");
  const [selectedTechs, setSelectedTechs] = useState<string[]>(["react", "node"]);
  const [timeline, setTimeline] = useState<number>(3); // months
  const [clientName, setClientName] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const toggleTech = (id: string) => {
    if (selectedTechs.includes(id)) {
      setSelectedTechs(selectedTechs.filter(t => t !== id));
    } else {
      setSelectedTechs([...selectedTechs, id]);
    }
  };

  const getServiceData = () => SERVICES.find(s => s.id === selectedService) || SERVICES[0];
  const activeService = getServiceData();

  // Dynamic price scaling based on timeline: shorter timelines require rushing (more expensive), longer timelines standard rate
  const durationFactor = timeline <= 1 ? 1.3 : timeline >= 5 ? 0.9 : 1.0;
  const rawTotal = activeService.price + (selectedTechs.length * 200);
  const estimatedTotal = Math.round(rawTotal * durationFactor);

  const getEmailBody = () => {
    const techNames = selectedTechs.map(t => TECH_OPTIONS.find(to => to.id === t)?.name).filter(Boolean).join(", ");
    return `Hola Ana,

Me llamo ${clientName || "[Tu Nombre]"} y me gustaría hablar contigo sobre un proyecto.

He configurado una propuesta desde tu portafolio:
- Servicio seleccionado: ${activeService.name}
- Tecnologías requeridas: ${techNames || "Por definir"}
- Plazo estimado: En torno a ${timeline} ${timeline === 1 ? "mes" : "meses"}
- Presupuesto estimado de referencia: ~${estimatedTotal}€

¿Estarías disponible para una llamada breve de 15 minutos en los próximos días?

Un saludo afectuoso.`;
  };

  const mailToUrl = () => {
    const subject = encodeURIComponent("Propuesta de Proyecto - " + (clientName || "Colaboración"));
    const body = encodeURIComponent(getEmailBody());
    return `mailto:hola@anagarcia.dev?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-container rounded-[2rem] p-6 md:p-8 border border-outline-variant/30 text-on-surface shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-secondary w-5 h-5 flex-shrink-0 animate-pulse" />
        <span className="text-secondary font-mono text-[11px] font-bold uppercase tracking-widest">
          CONFIGURADOR INTERACTIVO
        </span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-primary italic mb-3">
        Planifica tu proyecto ideal
      </h3>
      <p className="text-sm text-on-surface-variant font-sans mb-6">
        Selecciona las necesidades de tu producto digital y genera un boceto inicial de propuesta presupuestaria instantáneo.
      </p>

      {/* Service selection */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 font-sans">
          Tipo de Solución
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                selectedService === s.id
                  ? "bg-primary border-primary text-on-primary shadow-lg"
                  : "bg-surface border-outline-variant/30 hover:border-outline text-on-surface"
              }`}
            >
              <div>
                <span className="font-sans font-bold text-sm block">{s.name}</span>
                <span className={`text-[11px] mt-1 font-sans block ${selectedService === s.id ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                  {s.description}
                </span>
              </div>
              <span className="font-mono text-xs font-bold mt-4 block text-secondary-fixed">
                Desde {s.price}€
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tech Stack checkboxes */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 font-sans">
          Ecosistema Tecnológico Principal
        </label>
        <div className="flex flex-wrap gap-2">
          {TECH_OPTIONS.map((to) => {
            const isSelected = selectedTechs.includes(to.id);
            return (
              <button
                key={to.id}
                onClick={() => toggleTech(to.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-sans flex items-center gap-1.5 transition-all duration-200 border ${
                  isSelected
                    ? "bg-secondary text-on-secondary border-secondary shadow-sm"
                    : "bg-surface border-outline-variant/30 text-on-surface-variant hover:border-outline"
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
                {to.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slider estimated timeline */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-sans">
            Plazo de Entrega Deseado
          </label>
          <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-md flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {timeline} {timeline === 1 ? "Mes" : "Meses"}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="6"
          value={timeline}
          onChange={(e) => setTimeline(Number(e.target.value))}
          className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-[10px] text-on-surface-variant mt-1 font-mono">
          <span>1 mes (Express)</span>
          <span>3 meses (Estándar)</span>
          <span>6 meses (Holgado)</span>
        </div>
      </div>

      {/* Personalizer text input */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 font-sans">
          Tu Nombre / Empresa
        </label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Ej. Estudio Creativo Alfa"
          className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/40 focus:border-secondary focus:outline-none transition-colors text-sm font-sans"
        />
      </div>

      {/* Total calculation panel */}
      <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono text-on-surface-variant uppercase">
            Inversión Estimada Referencia
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-bold text-primary font-mono">
              ~{estimatedTotal}€
            </span>
            <span className="text-xs text-on-surface-variant font-sans">EUR</span>
          </div>
        </div>
        <div className="text-[11px] text-on-surface-variant max-w-xs font-mono leading-relaxed">
          *Cálculo aproximado según velocidad y complejidad. Sujeto a cambios tras la primera sesión de requerimientos técnicos.
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={mailToUrl()}
          id="send-proposal-btn"
          className="flex-1 px-6 py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary rounded-full font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          <Send className="w-4 h-4" />
          Enviar Propuesta vía Email
        </a>
        <button
          onClick={copyToClipboard}
          id="copy-proposal-btn"
          className="px-6 py-3.5 bg-surface-container-high border border-outline-variant hover:border-outline text-primary rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 animate-bounce" />
              Copiado en Portapapeles
            </>
          ) : (
            <>
              <Clipboard className="w-4 h-4" />
              Copiar Resumen Propuesta
            </>
          )}
        </button>
      </div>
    </div>
  );
}
