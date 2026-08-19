/**
 * @file CurriculumModal.tsx
 * @description Technical details modal for specific curriculum benchmarks,
 * gear specs, and training frequencies in Spanish with diagonal dark gray gradients.
 */

import React from 'react';
import { X, Shield, Clock, Dumbbell, Award, ArrowRight } from 'lucide-react';
import { DisciplineSpec } from '../types';

interface CurriculumModalProps {
  discipline: DisciplineSpec | null;
  isOpen: boolean;
  onClose: () => void;
  onClaimFreeClass: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  discipline,
  isOpen,
  onClose,
  onClaimFreeClass,
}) => {
  if (!isOpen || !discipline) return null;

  return (
    <div
      id="curriculum-tech-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-zinc-800/95 via-zinc-900/95 to-zinc-950 border border-zinc-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
          <Shield className="w-4 h-4" />
          <span>{discipline.badge} • ESPECIFICACIONES TÉCNICAS</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-100 mb-2">
          {discipline.name}
        </h3>

        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
          {discipline.summary}
        </p>

        {/* Technical Grid (Diagonal Gradient Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 border border-zinc-700/80 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>FRECUENCIA DE ENTRENAMIENTO</span>
            </div>
            <p className="text-xs text-zinc-300">
              {discipline.technicalDetails.weeklyFrequency}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 border border-zinc-700/80 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>EQUIPAMIENTO & VESTIMENTA</span>
            </div>
            <p className="text-xs text-zinc-300">
              {discipline.technicalDetails.gearRequired}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 border border-zinc-700/80 shadow-md sm:col-span-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>PROGRESIÓN & ESTÁNDAR TÉCNICO</span>
            </div>
            <p className="text-xs text-zinc-300">
              {discipline.technicalDetails.progressionBenchmark}
            </p>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800">
          <div className="text-[11px] font-mono text-zinc-400 text-center sm:text-left">
            Clase de Prueba 100% Gratis • Pagos Transparentes en Sede
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
            >
              Volver
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onClaimFreeClass();
              }}
              className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Pedir Clase Gratis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
