/**
 * @file TrialBookingModal.tsx
 * @description Frictionless Free First Class reservation modal in Spanish.
 * Styled with subtle diagonal dark gray gradients.
 */

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, User, Mail, Phone, Flame, Lock, ArrowRight } from 'lucide-react';
import { SiteContentConfig } from '../types';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContentConfig;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDiscipline: 'Clases Formativas (Principiantes & Avanzados)',
    experienceLevel: 'Principiante (Sin experiencia previa)',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="trial-booking-modal-portal"
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center p-4">
        <div
          id="trial-booking-modal-box"
          className="relative bg-gradient-to-br from-zinc-800/95 via-zinc-900/95 to-zinc-950 border border-zinc-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 space-y-6 overflow-hidden"
        >
          {/* Top Yellow Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RESERVA DE CLASE DE PRUEBA 100% GRATIS</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100 uppercase tracking-wide">
                Reserva Tu Sesión de Prueba
              </h3>
              <p className="text-xs text-zinc-400">
                Sin costo hoy • Sin tarjeta de crédito • Todo el equipo de seguridad incluido
              </p>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 flex items-center justify-center transition-colors border border-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  Nombre Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Marcelo Morales"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-zinc-900/90 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs shadow-inner"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcelo@correo.cl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/90 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs shadow-inner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    Teléfono / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900/90 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs shadow-inner"
                  />
                </div>
              </div>

              {/* Discipline Interest */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  Disciplina de Interés:
                </label>
                <select
                  value={formData.preferredDiscipline}
                  onChange={(e) => setFormData({ ...formData, preferredDiscipline: e.target.value })}
                  className="w-full bg-zinc-900/90 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs shadow-inner"
                >
                  <option value="Clases Formativas (Principiantes & Avanzados)">Clases Formativas (Principiantes & Avanzados)</option>
                  <option value="Entrenamiento Competitivo de Alto Rendimiento">Entrenamiento Competitivo de Alto Rendimiento</option>
                  <option value="Acondicionamiento y Soporte Integral">Acondicionamiento y Soporte Integral</option>
                  <option value="Recomendación del Instructor según mi perfil">Recomendación del Instructor según mi perfil</option>
                </select>
              </div>

              {/* On-Site Payment Assurance Note */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/15 via-amber-500/10 to-transparent border border-amber-500/30 text-[11px] text-amber-300 flex items-start gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Entrena sin riesgo:</strong> Tu clase de prueba es 100% gratuita. Si decides unirte formalmente tras la clase, los planes se gestionan de forma directa y transparente en la academia con descuento para estudiantes.
                </span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-display font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONFIRMAR MI CLASE DE PRUEBA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Confirmation Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/20 to-transparent border border-amber-500 text-amber-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-xl font-bold uppercase text-zinc-100">
                  ¡Cupo de Prueba Solicitado!
                </h4>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Hemos recibido tu solicitud para <span className="text-zinc-200 font-semibold">{formData.fullName}</span>. Te contactaremos vía WhatsApp/correo con la confirmación de fecha y ubicación de tu sede.
                </p>
              </div>

              <div className="p-3.5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl text-left text-xs text-zinc-300 space-y-1 max-w-sm mx-auto">
                <div className="font-mono text-[10px] text-amber-400 uppercase font-bold mb-1">
                  Qué recordar para tu clase:
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span>✓</span> Ropa deportiva cómoda y calzado deportivo
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span>✓</span> Botella de agua
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span>✓</span> Todo el equipo de seguridad te lo prestamos en el club
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Volver a la Página Principal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
