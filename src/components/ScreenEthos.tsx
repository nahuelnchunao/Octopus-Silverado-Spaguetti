/**
 * @file ScreenEthos.tsx
 * @description Screen 3: Hard Proof & The Glowing Yellow CTA (Ethos).
 * Clean, bold presentation of national authority and free trial offer with dedicated mobile and desktop views.
 */

import React from 'react';
import { Trophy, Award, Medal, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { ScreenEthosMobile } from './ScreenEthosMobile';

interface ScreenEthosProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
  onUpdateProofImage?: (proofId: string, imageUrl: string) => void;
}

export const ScreenEthos: React.FC<ScreenEthosProps> = ({
  content,
  onOpenTrialModal,
}) => {
  const data = content.screen3Ethos;

  const getProofIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-amber-400" />;
      case 'Award':
        return <Award className="w-7 h-7 text-amber-400" />;
      case 'Medal':
      default:
        return <Medal className="w-7 h-7 text-amber-400" />;
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

      {/* 2. DESKTOP / TABLET VIEW (>= 768px) */}
      <div className="hidden md:flex relative min-h-[92vh] lg:min-h-screen items-center justify-center py-16 px-6 lg:px-8">
        {/* Background Ambience / Subtle Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col justify-center items-center">
          
          {/* Section Title (Hard Proof) */}
          <div className="text-center max-w-3xl mx-auto mb-12">
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

          {/* 1. THE 3 HARD PROOF METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {data.authorityProofs.map((proof) => (
              <div
                key={proof.id}
                className="p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 transition-all flex flex-col items-center text-center shadow-xl group relative"
              >
                {/* Icon / Emblem container */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-5 shadow-inner group-hover:border-amber-500/40 group-hover:scale-105 transition-all">
                  {getProofIcon(proof.highlightIcon)}
                </div>

                {/* Number Highlight */}
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-amber-400 tracking-tight mb-2">
                  {proof.statNumber}
                </div>

                {/* Label */}
                <h3 className="font-display text-base font-bold text-zinc-100 uppercase mb-2">
                  {proof.statLabel}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {proof.description}
                </p>
              </div>
            ))}
          </div>

          {/* 2. THE OFFER & THE GLOWING YELLOW BUTTON */}
          <div className="w-full max-w-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
            
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

            {/* =========================================================================
                THE GLOWING YELLOW BUTTON
               ========================================================================= */}
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
