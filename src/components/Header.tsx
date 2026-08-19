/**
 * @file Header.tsx
 * @description Fixed full-width top navigation bar with AEHCH branding and quick switcher to Style Comparison Lab.
 */

import React from 'react';
import { Menu, Palette, Mail } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { AehchLogo } from './AehchLogo';

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
            {/* Athletic Brand Glyph with AEHCH Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-amber-500/40 p-0.5 bg-zinc-900 group-hover:scale-105 transition-transform shrink-0 shadow-md overflow-hidden">
              <img
                src="/aehch-logo.png"
                alt="AEHCH"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
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
        <div id="header-actions-container" className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Style Lab Switcher Button */}
          {onOpenStyleComparison && (
            <button
              type="button"
              id="header-style-lab-button"
              onClick={onOpenStyleComparison}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-amber-400 hover:text-amber-300 border border-amber-500/30 hover:border-amber-500 text-xs font-mono font-medium transition-all cursor-pointer"
              title="Compare 3 Graphic Styles for Client"
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Graphic Styles Lab</span>
            </button>
          )}

          {/* PRIMARY CONVERSION CTA */}
          <button
            type="button"
            id="header-primary-cta-button"
            onClick={onOpenTrialModal}
            className="relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-zinc-950 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 transform hover:scale-102 active:scale-98 shadow-lg shadow-amber-500/25 cursor-pointer"
          >
            <Mail className="w-4 h-4 stroke-[2.2] text-zinc-950 shrink-0" />
            <span>CONTÁCTANOS</span>
          </button>

          {/* SIDEBAR TRIGGER BUTTON */}
          <button
            type="button"
            id="open-offcanvas-sidebar-btn"
            onClick={onOpenSidebar}
            className="flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-amber-400 border border-zinc-700/80 hover:border-amber-500/40 transition-all duration-200 shadow-md group cursor-pointer"
            title="Open Academy Directory & Navigation Menu"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

        </div>

      </div>
    </header>
  );
};
