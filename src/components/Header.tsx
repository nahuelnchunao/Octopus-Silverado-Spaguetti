/**
 * @file Header.tsx
 * @description Fixed sticky header with responsive layout and Spanish CTA button.
 * Uses diagonal gradient styling for badges and buttons.
 */

import React from 'react';
import { Menu, ArrowRight, Palette } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { AEHCH_LOGO_BASE64 } from '../assets/aehchLogoBase64';

interface HeaderProps {
  content: SiteContentConfig;
  onOpenSidebar: () => void;
  onOpenTrialModal: () => void;
  onOpenStyleComparison?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  onOpenSidebar,
  onOpenTrialModal,
  onOpenStyleComparison,
}) => {
  return (
    <header
      id="main-fixed-header"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        
        {/* BRAND LOGO & TITLE */}
        <div id="header-logo-container" className="flex items-center gap-3">
          <a
            href="#screen-pathos"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            title="Ir al inicio"
          >
            {/* Athletic Brand Glyph with authentic AEHCH PNG Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-amber-500/40 p-0.5 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 group-hover:scale-105 transition-transform shrink-0 shadow-md overflow-hidden flex items-center justify-center">
              <img
                src={AEHCH_LOGO_BASE64}
                alt="AEHCH"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Typography Brand & Subhead */}
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-black tracking-wider uppercase text-zinc-100 group-hover:text-amber-400 transition-colors leading-tight">
                AEHCH
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-tight text-zinc-400 leading-none truncate max-w-[170px] sm:max-w-xs">
                Academia de Esgrima Histórica de Chile
              </span>
            </div>
          </a>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Style Comparison Toggle Button (Desktop & Tablet) */}
          {onOpenStyleComparison && (
            <button
              type="button"
              id="header-style-comparison-btn"
              onClick={onOpenStyleComparison}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 hover:from-amber-500/20 hover:to-amber-500/10 border border-zinc-700/80 hover:border-amber-500/40 text-zinc-300 hover:text-amber-400 text-xs font-mono font-medium transition-all shadow-sm cursor-pointer"
              title="Comparador de Estilos"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Estilos</span>
            </button>
          )}

          {/* Primary Frictionless CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-60 group-hover:opacity-100 blur-sm transition-opacity pointer-events-none" />
            <button
              type="button"
              id="header-claim-cta-btn"
              onClick={onOpenTrialModal}
              className="relative flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 transform active:scale-98 shadow-lg cursor-pointer"
            >
              <span>{content.navigation.primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-950 shrink-0" />
            </button>
          </div>

          {/* Hamburger Quick Access Menu */}
          <button
            type="button"
            id="header-sidebar-toggle-btn"
            onClick={onOpenSidebar}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-700/80 flex items-center justify-center transition-colors cursor-pointer shadow-md"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="w-5 h-5" />
          </button>

        </div>

      </div>
    </header>
  );
};
