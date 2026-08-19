/**
 * @file Header.tsx
 * @description Fixed full-width top navigation bar with AEHCH branding and quick switcher to Style Comparison Lab.
 */

import React from 'react';
import { Menu, Palette, Mail } from 'lucide-react';
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
      className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-950 border-b border-zinc-800 shadow-xl shadow-black/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        
        {/* BRAND LOGO & TITLE */}
        <div id="header-logo-container" className="flex items-center gap-3">
          <a
            href="#screen-pathos"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            title="Return to Hero Screen"
          >
            {/* Athletic Brand Glyph with authentic AEHCH PNG Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-amber-500/40 p-0.5 bg-zinc-900 group-hover:scale-105 transition-transform shrink-0 shadow-md overflow-hidden flex items-center justify-center">
              <img
                src={AEHCH_LOGO_BASE64}
                alt="AEHCH"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Typography Logo / Brandmark */}
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg md:text-xl tracking-wider text-zinc-100 group-hover:text-amber-400 transition-colors uppercase leading-tight font-bold">
                AEHCH
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400 tracking-wider uppercase hidden sm:block">
                Academia de Esgrima Histórica de Chile
              </span>
            </div>
          </a>
        </div>

        {/* PRIMARY CTA + STYLE LAB + SIDEBAR TOGGLE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick link to Style Comparison Lab */}
          {onOpenStyleComparison && (
            <button
              type="button"
              id="header-style-comparison-btn"
              onClick={onOpenStyleComparison}
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-amber-400 text-xs font-mono transition-colors cursor-pointer"
              title="Compare Visual Card Styles"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Style Lab</span>
            </button>
          )}

          {/* Quick Access Free Trial CTA */}
          <button
            type="button"
            id="header-trial-cta-btn"
            onClick={onOpenTrialModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:scale-102 active:scale-98 shadow-lg shadow-amber-500/20 cursor-pointer shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
            <span className="hidden xs:inline">{content.screen3Ethos.dealSummary.glowingCtaText}</span>
            <span className="xs:hidden">Prueba Gratis</span>
          </button>

          {/* Sidebar Toggle Button */}
          <button
            type="button"
            id="header-sidebar-toggle-btn"
            onClick={onOpenSidebar}
            className="p-2 sm:p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Open navigation sidebar"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </header>
  );
};
