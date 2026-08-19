import React from 'react';
import { Trophy, Award, Medal, CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { SiteContentConfig } from '../types';

interface ScreenEthosMobileProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
}

export const ScreenEthosMobile: React.FC<ScreenEthosMobileProps> = ({
  content,
  onOpenTrialModal,
}) => {
  const data = content.screen3Ethos;

  const getProofIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Medal':
      default:
        return <Medal className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div
      id="screen-ethos-mobile-view"
      className="md:hidden relative min-h-[100dvh] flex flex-col justify-between pt-16 pb-4 px-4 bg-zinc-950 text-zinc-100 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[240px] h-[240px] bg-yellow-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-md mx-auto w-full">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center pt-2 pb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-widest uppercase mb-2">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>{data.sectionTag || 'SCREEN 03 // AUTORIDAD'}</span>
          </div>

          <h2
            id="ethos-main-h2-mobile"
            className="font-display text-xl xs:text-2xl font-black uppercase tracking-tight text-white leading-tight mb-2 text-balance"
          >
            {data.sectionH2.currentValue}
          </h2>

          <p className="text-xs text-zinc-400 leading-snug px-1 text-balance">
            {data.sectionSubhead.currentValue}
          </p>
        </div>

        {/* 2. THE 3 AUTHORITY PROOF CARDS (Clean Horizontal Badges) */}
        <div className="space-y-2 my-2">
          {data.authorityProofs.map((proof, idx) => (
            <div
              key={proof.id}
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/90 shadow-md flex items-center gap-3 relative overflow-hidden"
            >
              {/* Left Stat Number + Icon Box */}
              <div className="w-13 h-13 rounded-xl bg-zinc-950 border border-amber-500/30 flex flex-col items-center justify-center shrink-0 shadow-inner px-1">
                <span className="font-display text-xs font-black text-amber-400 leading-none">
                  {proof.statNumber}
                </span>
                <div className="mt-1">
                  {getProofIcon(proof.highlightIcon)}
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[9px] font-mono font-bold text-amber-400/90 uppercase tracking-wider">
                    {proof.proofBadge || `LOGRO 0${idx + 1}`}
                  </span>
                </div>
                <h3 className="font-display text-xs font-bold uppercase text-zinc-100 leading-tight line-clamp-2">
                  {proof.statLabel}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 3. THE OFFER CARD & GLOWING YELLOW CTA */}
        <div className="mt-2 p-4 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 border border-amber-500/40 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle inside glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-amber-500/20 blur-xl pointer-events-none" />

          <h3 className="font-display text-sm xs:text-base font-extrabold uppercase text-white tracking-tight mb-1">
            {data.dealSummary.headline}
          </h3>

          <p className="text-[11px] text-zinc-300 mb-3 leading-snug">
            {data.dealSummary.subline}
          </p>

          {/* Compact 2-col Terms List */}
          <div className="grid grid-cols-2 gap-1.5 text-left mb-3.5 px-1">
            {data.dealSummary.terms.map((term, tIdx) => (
              <div key={tIdx} className="flex items-center gap-1.5 text-[10px] text-zinc-300">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="truncate">{term}</span>
              </div>
            ))}
          </div>

          {/* GLOWING YELLOW BUTTON (Full Mobile Touch Target) */}
          <div className="relative w-full">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-80 blur-sm animate-pulse pointer-events-none" />
            <button
              type="button"
              id="ethos-glowing-yellow-cta-mobile"
              onClick={onOpenTrialModal}
              className="relative w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 active:brightness-95 text-zinc-950 font-display font-black text-xs xs:text-sm uppercase tracking-wider shadow-xl cursor-pointer"
            >
              <span>{data.dealSummary.glowingCtaText}</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 shrink-0" />
            </button>
          </div>

          <div className="mt-2.5 text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{data.dealSummary.glowingCtaSubtext}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
