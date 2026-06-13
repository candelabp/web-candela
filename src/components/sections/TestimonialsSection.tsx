import { TESTIMONIALS } from "../../data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface-container-low/30 relative">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-secondary font-mono text-xs font-bold uppercase tracking-widest block mb-1">
          RECOMENDACIONES
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-primary italic font-bold mb-10">
          Lo que opinan otros profesionales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-surface rounded-2xl border border-outline-variant/30 text-left flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs italic text-on-surface-variant font-sans leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-4">
                <img
                  className="w-9 h-9 rounded-full object-cover border border-outline-variant"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h5 className="text-xs font-bold text-primary font-sans block">{testimonial.name}</h5>
                  <span className="text-[10px] text-on-surface-variant block font-mono font-bold">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
