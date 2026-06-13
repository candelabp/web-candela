import { FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, Mail } from "lucide-react";

import ProposalBuilder from "../ProposalBuilder";

export interface SentMessage {
  name: string;
  msg: string;
  date: string;
}

interface ContactSectionProps {
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  formSubmitted: boolean;
  sentMessages: SentMessage[];
  madridTime: string;
  availabilityMessage: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  onResetForm: () => void;
}

export default function ContactSection({
  contactName,
  contactEmail,
  contactMessage,
  formSubmitted,
  sentMessages,
  madridTime,
  availabilityMessage,
  onNameChange,
  onEmailChange,
  onMessageChange,
  onSubmit,
  onResetForm,
}: ContactSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ProposalBuilder />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 text-on-surface flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl text-primary italic font-bold mb-4">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                  Hagamos realidad algo excepcional. Estoy abierta a nuevas oportunidades, consultorías y colaboraciones creativas. Consúltame o mándame un mensaje directo abajo.
                </p>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      className="space-y-4"
                      id="contact-form"
                    >
                      <div>
                        <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1 font-sans">
                          Tu Nombre
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(event) => onNameChange(event.target.value)}
                          placeholder="Ej. Roberto Díaz"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/40 focus:border-secondary focus:outline-none transition-colors text-xs font-sans text-on-surface"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1 font-sans">
                          Email de Contacto
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(event) => onEmailChange(event.target.value)}
                          placeholder="Ej. roberto@empresa.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/40 focus:border-secondary focus:outline-none transition-colors text-xs font-sans text-on-surface"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1 font-sans">
                          Cuéntame tu idea
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={contactMessage}
                          onChange={(event) => onMessageChange(event.target.value)}
                          placeholder="Cuéntame brevemente el alcance de la propuesta y tecnología requerida..."
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/40 focus:border-secondary focus:outline-none transition-colors text-xs font-sans text-on-surface resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        id="submit-contact"
                        className="w-full py-3 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs rounded-full font-sans tracking-wide transition-all uppercase flex items-center justify-center gap-2 mt-4 active:scale-95"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Enviar mensaje rápido
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-primary/5 p-6 rounded-2xl border border-primary/20 text-center flex flex-col items-center py-10"
                    >
                      <span className="text-3xl block mb-2">📬</span>
                      <h4 className="font-sans font-bold text-primary text-base">¡Mensaje simulado con éxito!</h4>
                      <p className="text-xs text-on-surface-variant max-w-xs mt-1 leading-relaxed">
                        Gracias, <strong>{contactName}</strong>. He recibido tu mensaje en el almacenamiento del portafolio. He habilitado una bandeja local abajo por si gustas revisar su registro.
                      </p>
                      <button
                        onClick={onResetForm}
                        className="mt-6 px-4 py-2 border border-outline hover:border-primary text-[11px] font-bold rounded-full font-sans text-primary hover:bg-primary/5 transition-colors"
                      >
                        Mandar otro mensaje
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {sentMessages.length > 0 && (
                <div className="mt-6 pt-4 border-t border-outline-variant/20">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-sans mb-2 block">
                    Mensajes locales registrados ({sentMessages.length})
                  </span>
                  <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                    {sentMessages.map((msg, index) => (
                      <div key={`${msg.name}-${index}`} className="bg-surface p-2.5 rounded-xl border border-outline-variant/20 text-[11px] font-sans">
                        <div className="flex justify-between font-bold text-primary mb-1">
                          <span>Para Ana de: {msg.name}</span>
                          <span className="text-[9px] text-on-surface-variant font-mono">{msg.date}</span>
                        </div>
                        <p className="text-on-surface-variant leading-relaxed italic">"{msg.msg}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-surface/50 border border-outline-variant/25 rounded-2xl p-4 mt-6">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <Clock className="w-4 h-4 flex-shrink-0 animate-pulse text-secondary" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                    Estado y Hora Local en Madrid, ES
                  </span>
                </div>
                <div className="text-lg font-bold font-mono text-primary mb-1">
                  {madridTime || "--:--:--"}
                </div>
                <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                  {availabilityMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
