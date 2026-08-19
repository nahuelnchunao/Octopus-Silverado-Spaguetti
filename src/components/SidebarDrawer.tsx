/**
 * @file SidebarDrawer.tsx
 * @description Floating off-canvas navigation sidebar drawer.
 * Provides instant jump anchors for Screens 1-3, Utility Footer, and the Style Comparison Lab.
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
  HelpCircle,
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
  onOpenInspector,
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
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-zinc-950 font-display font-bold flex items-center justify-center">
                ⚡
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-zinc-100 uppercase tracking-wide">
                  Academy Quick Access
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
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="p-6 space-y-6 flex-1">
            
            {/* Free First Class Promo Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 rounded-xl border border-amber-500/40 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded uppercase">
                  ZERO FINANCIAL RISK
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-display text-sm font-bold text-zinc-100 uppercase tracking-wide">
                Try Your First Class For Free
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero fees today. No credit card online. Experience our instruction and join only if you love it.
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
                <span>RESERVE FREE SPOT</span>
              </button>
            </div>

            {/* Jump Anchors */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2">
                // Viewport Anchors
              </div>

              <a
                href="#screen-pathos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Flame className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      01. The Hook (Speed & Spirit)
                    </div>
                    <div className="text-[10px] text-zinc-400">Above-the-fold value proposition</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>

              <a
                href="#screen-logos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      02. The Deal (3 Disciplines & Facility)
                    </div>
                    <div className="text-[10px] text-zinc-400">Coaches, Medics, Private Grounds</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>

              <a
                href="#screen-ethos"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      03. Hard Proof & Free Offer
                    </div>
                    <div className="text-[10px] text-zinc-400">#10 Ranked Fighter, Oldest Club, Podium Records</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>

              <a
                href="#main-site-colophon-footer"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase text-zinc-200 group-hover:text-amber-400">
                      04. Address, FAQs & Legal
                    </div>
                    <div className="text-[10px] text-zinc-400">Facility logistics & visitor questions</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
              </a>
            </div>

            {/* Special Client Graphic Styles Comparison Link */}
            {onOpenStyleComparison && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenStyleComparison();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-400 hover:text-amber-300 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Palette className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-display text-xs font-bold uppercase">
                        Graphic Styles Lab (3 Styles)
                      </div>
                      <div className="text-[10px] text-zinc-400">Compare Current, Clean & Modern Glass</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            )}

            {/* Facility Logistics */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs text-zinc-300">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                // Academy Information
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{content.gymMeta.facilityAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{content.gymMeta.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{content.gymMeta.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{content.gymMeta.contactEmail}</span>
              </div>
            </div>

          </div>

          {/* Bottom Drawer Footer */}
          <div className="p-6 border-t border-zinc-800 bg-zinc-900/30 flex items-center justify-between text-[11px] text-zinc-400">
            <span>{content.gymMeta.brandName} © 2026</span>
          </div>

        </aside>
      </div>
    </div>
  );
};
