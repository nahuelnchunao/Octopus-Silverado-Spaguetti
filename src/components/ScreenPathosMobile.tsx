import React, { useState, useEffect } from 'react';
import { Zap, Trophy, BicepsFlexed } from 'lucide-react';
import { SiteContentConfig } from '../types';

interface ScreenPathosMobileProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
  currentMotto: {
    text: string;
    emoji: string;
  };
  fadeState: 'fade-in' | 'fade-out';
}

interface BannerPillar {
  id: string;
  category: string;
  preText: string;
  highlight: string;
  postText?: string;
  icon: React.ReactNode;
}

const PILLARS: BannerPillar[] = [
  {
    id: 'fuertes',
    category: '// Comunidad & Carácter',
    preText: 'Nos unimos para formar personas',
    highlight: 'FUERTES',
    icon: <BicepsFlexed className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 'rapidos',
    category: '// Técnica & Atletismo',
    preText: 'Entrenamos para crear peleadores',
    highlight: 'RÁPIDOS',
    icon: <Zap className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 'alto',
    category: '// Competencia & Éxito',
    preText: 'Competimos para llegar a lo más',
    highlight: 'ALTO',
    postText: 'del podio',
    icon: <Trophy className="w-6 h-6 text-amber-400" />,
  },
];

/**
 * ScreenPathosMobile - Tailored specifically for mobile screens (< 768px).
 * Fits entirely within a single mobile viewport (100dvh) without forced overflow scrolling,
 * with background glowing brand emblem at 60% down / 70% right,
 * a generous 1.6x tall horizontal banner that auto-scrolls through desktop pillars,
 * and a full-height touch bar overlay over the indicator dots to force advance to the next slide.
 */
export const ScreenPathosMobile: React.FC<ScreenPathosMobileProps> = ({
  currentMotto,
  fadeState,
}) => {
  // Active pillar index for auto-scrolling horizontal banner
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [pillarFade, setPillarFade] = useState<'fade-in' | 'fade-out'>('fade-in');

  const goToNextSlide = () => {
    setPillarFade('fade-out');
    setTimeout(() => {
      setActivePillarIndex((prev) => (prev + 1) % PILLARS.length);
      setPillarFade('fade-in');
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3800); // 3.8s per pillar auto cycle

    return () => clearInterval(interval);
  }, []);

  const currentPillar = PILLARS[activePillarIndex];

  return (
    <div
      id="screen-pathos-mobile-view"
      className="md:hidden relative h-[100dvh] flex flex-col justify-between pt-18 pb-3 px-4 bg-zinc-950 text-zinc-100 overflow-hidden select-none"
    >
      {/* Background Ambience & Soft Emblem */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm Golden Halo positioned at 70% right, 60% down */}
        <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-b from-amber-500/20 via-yellow-600/10 to-transparent rounded-full blur-3xl" />
        
        {/* Logo 1.5x size (420px) positioned 70% right, 60% down */}
        <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-25 filter contrast-125">
          <img
            src="/aehch-logo.png"
            alt=""
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
      </div>

      {/* TOP/CENTER HERO SECTION */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-1 my-auto">
        
        {/* 1. Animated Motto Pill */}
        <div className="mb-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-amber-500/50 text-amber-400 text-[11px] font-mono font-bold tracking-widest uppercase shadow-md shadow-amber-500/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span
            className={`flex items-center gap-1.5 transition-opacity duration-300 ${
              fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-xs">{currentMotto.emoji}</span>
            <span>{currentMotto.text}</span>
          </span>
        </div>

        {/* 2. Main Title */}
        <h1 className="font-display text-4xl xs:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-3.5 drop-shadow-md">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            AEHCH
          </span>
        </h1>

        {/* 3. Concise Martial Hook */}
        <p className="text-zinc-300 font-body text-xs leading-relaxed max-w-[340px] text-balance">
          La academia de esgrima historica de chile, <strong className="text-amber-400 font-semibold">AEHCH</strong>, nace en septiembre del año 2010 como un nuevo proyecto para la práctica de <strong className="text-zinc-100 font-semibold">HEMA</strong> en Chile, estudiando tratados históricos con máxima efectividad.
        </p>
      </div>

      {/* =========================================================================
          BOTTOM AUTOMATIC HORIZONTAL BANNER (1.6x taller, auto-scrolling with long tap bar)
         ========================================================================= */}
      <div className="relative z-20 w-full pt-2 pb-1 border-t border-zinc-800/90 bg-zinc-950/95 backdrop-blur-md">
        
        {/* Banner Card Container - 1.6x taller (py-4 min-h-[76px]) */}
        <div
          id="mobile-auto-scrolling-pillar-banner"
          className="w-full px-4 py-4 min-h-[76px] rounded-xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center gap-3.5 relative overflow-hidden"
        >
          {/* Active Pillar Icon */}
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 shadow-sm">
            {currentPillar.icon}
          </div>

          {/* Active Pillar Text with smooth cross-fade animation */}
          <div
            className={`flex-1 min-w-0 text-left transition-all duration-300 transform ${
              pillarFade === 'fade-in'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-2'
            }`}
          >
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none mb-1">
              {currentPillar.category}
            </div>
            <h3 className="font-display text-xs xs:text-sm font-bold uppercase text-zinc-200 leading-snug">
              {currentPillar.preText}{' '}
              <span className="text-amber-400 font-extrabold underline decoration-amber-500/60 underline-offset-2">
                {currentPillar.highlight}
              </span>
              {currentPillar.postText ? ` ${currentPillar.postText}` : ''}
            </h3>
          </div>

          {/* Position Indicator Dots with Full-Height Transparent Tap Bar */}
          <div className="relative flex flex-col items-center justify-center gap-1.5 shrink-0 pl-2 pr-1 py-1">
            {/* The 3 indicator dots (visual representation) */}
            {PILLARS.map((p, idx) => (
              <span
                key={p.id}
                className={`w-2 rounded-full transition-all duration-300 ${
                  idx === activePillarIndex
                    ? 'h-3 bg-amber-400'
                    : 'h-2 bg-zinc-700'
                }`}
              />
            ))}

            {/* Long transparent button bar occupying the entire touch target area to force next slide */}
            <button
              type="button"
              id="mobile-pillar-next-slide-touch-bar"
              onClick={goToNextSlide}
              className="absolute -inset-2 z-10 w-full min-w-[44px] h-full min-h-[48px] bg-transparent active:bg-amber-500/10 rounded-lg cursor-pointer focus:outline-none"
              aria-label="Avanzar al siguiente pilar"
              title="Tocar para ver siguiente pilar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
