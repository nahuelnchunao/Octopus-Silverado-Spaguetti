/**
 * @file ScreenEthos.tsx
 * @description Screen 3: Hard Proof & High-Authority Evidence (Ethos).
 * Styled with subtle diagonal dark gray gradients across proof cards and offer card (Style 1 with gradient).
 */

import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { SiteContentConfig } from '../types';
import { ScreenEthosMobile } from './ScreenEthosMobile';

interface ScreenEthosProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
}

export const ScreenEthos: React.FC<ScreenEthosProps> = ({
  content,
  onOpenTrialModal,
}) => {
  const data = content.screen3Ethos;

  const getProofIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-amber-400" />;
      case 'Award':
        return <Award className="w-8 h-8 text-amber-400" />;
      case 'Medal':
      default:
        return <Medal className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section
      id="screen-ethos"
      className="relative bg-zinc-950 text-zinc-100 border-b border-zinc-900 overflow-hidden"
    >
      {/* 1. DEDICATED MOBILE VIEW (< 768px) */}
      <ScreenEthosMobile
        content={content}
        onOpenTrialModal={onOpenTrialModal}
      />

      {/* 2. DESKTOP VIEW (>= 768px) */}
      <div className="hidden md:flex relative min-h-[92vh] lg:min-h-screen items-center justify-center py-16 px-6 lg:px-8">
        
        {/* Ambient background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-md">
              <span>{data.sectionTag || 'PANTALLA 03 // AUTORIDAD'}</span>
            </div>
            <h2
              id="ethos-main-h2"
              className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-100 leading-tight mb-3"
            >
              {data.sectionH2.currentValue}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
              {data.sectionSubhead.currentValue}
            </p>
          </div>

          {/* 1. THE 3 AUTHORITY PROOF CARDS (Diagonal Gradient Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
            {data.authorityProofs.map((proof) => (
              <div
                key={proof.id}
                className="relative bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 border border-zinc-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl overflow-hidden group hover:border-amber-500/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      {proof.proofBadge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 text-amber-400 shadow-inner">
                      {getProofIcon(proof.highlightIcon)}
                    </div>
                  </div>

                  {/* Big Impact Stat Number */}
                  <div className="font-display text-4xl sm:text-5xl font-black text-zinc-100 tracking-tight mb-2">
                    {proof.statNumber}
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold uppercase text-zinc-100 mb-3 leading-snug">
                    {proof.statLabel}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {proof.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>AEHCH • OFICIAL</span>
                  <span className="text-amber-400/80 font-bold">100% VERIFICADO</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2. THE OFFER & THE GLOWING YELLOW BUTTON (Diagonal Gradient Box) */}
          <div className="w-full max-w-2xl bg-gradient-to-br from-zinc-800/95 via-zinc-900/90 to-zinc-950 border border-zinc-700/80 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
            
            {/* Subtle Ambient Glow inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/10 blur-2xl pointer-events-none" />

            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-100 mb-2">
              {data.dealSummary.headline}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 mb-6 max-w-lg mx-auto leading-relaxed">
              {data.dealSummary.subline}
            </p>

            {/* Value Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left mb-8 max-w-lg mx-auto">
              {data.dealSummary.terms.map((term, tIdx) => (
                <div key={tIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{term}</span>
                </div>
              ))}
            </div>

            {/* THE GLOWING YELLOW BUTTON */}
            <div className="relative inline-block w-full max-w-md">
              {/* Pulsing Aura Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-75 blur-md animate-pulse pointer-events-none" />

              <button
                type="button"
                id="ethos-glowing-yellow-cta"
                onClick={onOpenTrialModal}
                className="relative w-full flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-display font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all duration-200 transform hover:scale-102 active:scale-98 shadow-2xl cursor-pointer"
              >
                <span>{data.dealSummary.glowingCtaText}</span>
                <ArrowRight className="w-5 h-5 text-zinc-950" />
              </button>
            </div>

            <div className="mt-4 text-[11px] font-mono text-zinc-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{data.dealSummary.glowingCtaSubtext}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
