/**
 * @file SidebarDrawer.tsx
 * @description Floating off-canvas navigation sidebar drawer in Spanish.
 * Styled with subtle diagonal dark gray gradients across foreground cards.
 */

import React, { useEffect } from 'react';
import { 
  X, 
  Flame, 
  Layers, 
  Award, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Palette
} from 'lucide-react';
import { SiteContentConfig } from '../types';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
  onOpenInspector: () => void;
  onOpenStyleComparison?: () => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  content,
  onOpenTrialModal,
  onOpenStyleComparison,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="floating-sidebar-portal"
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Floating Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-auto">
        <aside
          id="floating-sidebar-panel"
          className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-zinc-100 shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-zinc-950 font-display font-bold flex items-center justify-center shadow-md">
                ⚡
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-zinc-100 uppercase tracking-wide">
                  Acceso Rápido AEHCH
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {content.gymMeta.brandName}
                </span>
              </div>
            </div>

            <button
              type="button"
              id="close-sidebar-btn"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="p-6 space-y-6 flex-1">
            
            {/* Free First Class Promo Card (Diagonal Gradient) */}
            <div className="bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 p-4 rounded-xl border border-zinc-700/80 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded uppercase">
                  SIN RIESGO FINANCIERO
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-display text-sm font-bold text-zinc-100 uppercase tracking-wide">
                Prueba Tu Primera Clase Gratis
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Sin costo hoy. Sin tarjeta de crédito en línea. Experimenta nuestro entrenamiento y decide unirte solo si te convence.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTrialModal();
                }}
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 font-display text-xs font-bold tracking-wider py-2.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-zinc-950" />
                <span>PEDIR CLASE DE PRUEBA</span>
              </button>
            </div>

            {/* Jump Anchors */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2">
                // Secciones del Sitio
              </div>

              <a
                href="#screen-pathos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-br from-zinc-900/40 to-transparent hover:from-zinc-800/80 hover:to-zinc-900/80 border border-zinc-800/60 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Flame className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      01. El Gancho (Velocidad & Espíritu)
                    </div>
                    <div className="text-[10px] text-zinc-400">Propuesta de valor marcial</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>

              <a
                href="#screen-logos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-br from-zinc-900/40 to-transparent hover:from-zinc-800/80 hover:to-zinc-900/80 border border-zinc-800/60 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      02. El Sistema (Disciplinas & Pilares)
                    </div>
                    <div className="text-[10px] text-zinc-400">3 niveles, armas y recintos</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>

              <a
                href="#screen-ethos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-br from-zinc-900/40 to-transparent hover:from-zinc-800/80 hover:to-zinc-900/80 border border-zinc-800/60 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      03. Autoridad (Trayectoria & Podios)
                    </div>
                    <div className="text-[10px] text-zinc-400">Instructores rankeados y oferta</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-900">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2">
                // Ubicación y Horarios
              </div>

              <div className="space-y-2 text-xs text-zinc-300 px-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-[11px]">{content.gymMeta.facilityAddress}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="text-[11px]">{content.gymMeta.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="text-[11px]">{content.gymMeta.contactPhone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="text-[11px]">{content.gymMeta.contactEmail}</span>
                </div>
              </div>
            </div>

            {/* Style Comparison Button */}
            {onOpenStyleComparison && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenStyleComparison();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 hover:from-amber-500/20 hover:to-amber-500/10 border border-zinc-700/80 hover:border-amber-500/40 text-xs font-mono text-zinc-300 hover:text-amber-400 transition-all cursor-pointer shadow-sm"
                >
                  <Palette className="w-4 h-4 text-amber-400" />
                  <span>Explorar Estilos Visuales</span>
                </button>
              </div>
            )}

          </div>

          {/* Footer of Drawer */}
          <div className="p-4 border-t border-zinc-900 bg-zinc-950/80 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
            <span>AEHCH • OFICIAL</span>
            <span>SANTIAGO, CHILE</span>
          </div>

        </aside>
      </div>
    </div>
  );
};
