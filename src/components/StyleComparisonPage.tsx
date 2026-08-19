/**
 * @file StyleComparisonPage.tsx
 * @description Dedicated comparison page showing the exact "Private Facility Premises" component
 * replicated across 4 columns in each row to compare:
 * 1. Current (Solid with Borders)
 * 2. "Clean" (Canva / Magazine / Editorial Flat Collage style)
 * 3. "Modern" (Early-2000s Apple Keynote / Frutiger Aero Gloss)
 * 
 * In all 3 rows, the left 2 cards show the base treatment and the right 2 cards show the diagonal gradient.
 */

import React, { useState } from 'react';
import { 
  Building2, 
  ArrowLeft
} from 'lucide-react';
import { SiteContentConfig } from '../types';

interface StyleComparisonPageProps {
  content: SiteContentConfig;
  onBackToMain: () => void;
}

export const StyleComparisonPage: React.FC<StyleComparisonPageProps> = ({
  content,
  onBackToMain,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'current' | 'clean' | 'modern'>('all');
  
  // Find or fallback to the "Private Facility Premises" pillar
  const samplePillar = content.screen2Logos.facilityPillars.find(
    (p) => p.title.toLowerCase().includes('facility') || p.iconName === 'Shield'
  ) || {
    id: 'pillar-facility',
    iconName: 'Shield',
    title: 'Private Facility Premises',
    description: '10,000 sq ft climate-controlled training grounds, custom spring-loaded tatami, heavy bag racks, and recovery lounges.',
  };

  // Replicate the exact same item 4 times across the 4-column row
  const fourItems = [0, 1, 2, 3].map((index) => ({
    ...samplePillar,
    uniqueKey: `pillar-sample-${index}`,
    isRightSide: index >= 2,
  }));

  // Icon mapping helper tailored to each aesthetic
  const getPillarIcon = (variant: 'current' | 'clean' | 'modern', hasGradient: boolean) => {
    const rawIcon = <Building2 className="w-5 h-5" />;

    if (variant === 'current') {
      return (
        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
          hasGradient 
            ? 'bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 text-amber-400' 
            : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
        }`}>
          {rawIcon}
        </div>
      );
    }

    if (variant === 'clean') {
      // Canva / Flat Editorial style: sharp square badge, flat matte block
      return (
        <div className={`w-8 h-8 rounded-sm flex items-center justify-center font-bold shrink-0 mt-0.5 ${
          hasGradient 
            ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-zinc-950 shadow-sm' 
            : 'bg-amber-400 text-zinc-950'
        }`}>
          {rawIcon}
        </div>
      );
    }

    // Modern (Frutiger Aero / Early 2000s Apple glossy bubble badge with extra glass transparency)
    return (
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-b from-amber-300/80 via-amber-500/70 to-amber-600/60 backdrop-blur-md text-zinc-950 p-2 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-amber-500/20 overflow-hidden border border-amber-200/60">
        {/* Top curved gloss bubble highlight */}
        <div className="absolute top-0 inset-x-0 h-[48%] bg-gradient-to-b from-white/80 via-white/40 to-transparent rounded-t-xl pointer-events-none" />
        <div className="relative z-10 drop-shadow-sm">
          {rawIcon}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-zinc-950 border-b border-zinc-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <button
            type="button"
            onClick={onBackToMain}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-700 transition-colors cursor-pointer text-xs font-mono font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </button>

          {/* Quick Style Switcher */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All 3 Styles
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('current')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                activeTab === 'current'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              1. Current
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('clean')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                activeTab === 'clean'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              2. Clean (Flat / Editorial)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('modern')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                activeTab === 'modern'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              3. Modern (Glass / Aero)
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Just the divs in pure isolation */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* =========================================================================
            STYLE 1: CURRENT (SOLID COLOR WITH BORDERS)
            - Left 2: Solid dark with borders
            - Right 2: Diagonal gradient (light-to-dark zinc) with borders
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'current') && (
          <section id="style-option-current" className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fourItems.map((item) => (
                <div
                  key={item.uniqueKey}
                  className={`p-4 rounded-xl flex items-start gap-3 border transition-all ${
                    item.isRightSide
                      ? 'bg-gradient-to-br from-zinc-800/90 via-zinc-900/60 to-zinc-950 border-zinc-700/80 shadow-md'
                      : 'bg-zinc-900/40 border-zinc-800/80'
                  }`}
                >
                  {getPillarIcon('current', item.isRightSide)}
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wide text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            STYLE 2: "CLEAN" (CANVA / EDITORIAL MAGAZINE FLAT COLOR COLLAGE)
            - Sharp/subtle corners (rounded-sm)
            - Zero outer borders
            - Left 2: Flat solid matte zinc-900
            - Right 2: Canva / Editorial diagonal gradient (light zinc-800 to deep zinc-950, no borders)
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'clean') && (
          <section id="style-option-clean" className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {fourItems.map((item) => (
                <div
                  key={item.uniqueKey}
                  className={`p-4 rounded-sm flex items-start gap-3 border-none transition-colors ${
                    item.isRightSide
                      ? 'bg-gradient-to-br from-zinc-800 via-zinc-850 to-zinc-950 shadow-sm'
                      : 'bg-zinc-900 hover:bg-zinc-850'
                  }`}
                >
                  {getPillarIcon('clean', item.isRightSide)}
                  <div>
                    <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            STYLE 3: "MODERN" (EARLY 2000s APPLE KEYNOTE / FRUTIGER AERO GLOSS)
            - Enhanced High-Transparency Frosted Glass (backdrop-blur-xl, semi-transparent fills)
            - Aqua-glass specular highlights across the top curve
            - Left 2: Semi-transparent glass bubble
            - Right 2: Diagonal glossy light-to-dark glass sheen gradient (from-amber-400/20 & white/25 to dark glass)
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'modern') && (
          <section id="style-option-modern" className="space-y-3">
            {/* Ambient background aura behind cards to showcase transparency */}
            <div className="relative">
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-64 h-32 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-64 h-32 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {fourItems.map((item) => (
                  <div
                    key={item.uniqueKey}
                    className={`relative p-4 rounded-2xl backdrop-blur-xl flex items-start gap-3 overflow-hidden group transition-all duration-300 ${
                      item.isRightSide
                        ? 'bg-gradient-to-br from-white/20 via-zinc-800/40 to-zinc-950/60 border border-amber-300/40 shadow-xl shadow-amber-500/10 hover:border-amber-300/80'
                        : 'bg-zinc-900/30 border border-white/15 hover:border-amber-400/50 shadow-lg shadow-black/50'
                    }`}
                  >
                    {/* Skeuomorphic / Aero Specular Glass Reflection (Top Half) */}
                    <div className="absolute top-0 inset-x-0 h-[48%] bg-gradient-to-b from-white/35 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />
                    
                    {/* Subtle edge reflection light */}
                    <div className={`absolute bottom-0 inset-x-0 h-[1px] pointer-events-none ${
                      item.isRightSide
                        ? 'bg-gradient-to-r from-transparent via-amber-300/50 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-amber-400/30 to-transparent'
                    }`} />

                    {/* Icon with Gloss */}
                    <div className="relative z-10 shrink-0">
                      {getPillarIcon('modern', item.isRightSide)}
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-display text-sm font-bold uppercase tracking-wide text-zinc-100 group-hover:text-amber-300 transition-colors drop-shadow-sm">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-200 mt-1 leading-snug drop-shadow-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

    </div>
  );
};
