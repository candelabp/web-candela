import { Brush, Cloud, Database } from "lucide-react";

import { SKILL_CATEGORIES } from "../../data";

const ICONS = [
  <Brush className="w-5 h-5 text-on-secondary-container" />,
  <Database className="w-5 h-5 text-on-secondary-container" />,
  <Cloud className="w-5 h-5 text-on-secondary-container" />,
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-primary text-on-primary" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl italic font-bold max-w-lg leading-tight">
            Skills Tecnológico
          </h2>
          <p className="text-on-primary-container font-sans text-base max-w-sm leading-relaxed opacity-90">
            Estructuras de software sólidas, modulares y de alto rendimiento construidas con herramientas modernas que escalan al ritmo del negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="p-6 md:p-8 bg-on-primary-fixed-variant/15 rounded-[2rem] border border-primary-fixed-dim/20 flex flex-col justify-between hover:bg-on-primary-fixed-variant/20 hover:scale-[1.02] transition-all duration-300 shadow"
            >
              <div>
                <div className="w-12 h-12 bg-secondary-container/95 text-on-secondary-container rounded-2xl flex items-center justify-center mb-6 shadow-md border border-secondary/10">
                  {ICONS[idx]}
                </div>

                <h4 className="font-display text-2xl mb-2 italic font-bold text-primary-fixed">
                  {cat.name}
                </h4>
                <p className="text-xs text-on-primary-container/85 leading-relaxed mb-6 font-sans">
                  {cat.description}
                </p>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs font-sans opacity-95">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 animate-pulse"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-primary-fixed-dim/15 flex justify-end">
                <span className="text-[9px] font-mono font-bold text-secondary-fixed">
                  {cat.skills.length} Habilidades Clave
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
