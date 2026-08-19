/**
 * @file ScreenPathosMobile.tsx
 * @description Screen 1 Mobile view (< 768px).
 * Header position lowered to avoid colliding with top navigation bar and floating elements.
 * Styled with subtle diagonal dark gray gradient foreground elements.
 */

import React, { useState, useEffect } from 'react';
import { Zap, Trophy, BicepsFlexed } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { AEHCH_LOGO_BASE64 } from '../assets/aehchLogoBase64';

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

export const ScreenPathosMobile: React.FC<ScreenPathosMobileProps> = ({
  currentMotto,
  fadeState,
}) => {
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
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  const currentPillar = PILLARS[activePillarIndex];

  return (
    <div
      id="screen-pathos-mobile-view"
      className="md:hidden relative h-[100dvh] flex flex-col justify-between pt-24 pb-4 px-4 bg-zinc-950 text-zinc-100 overflow-hidden select-none"
    >
      {/* Background Ambience & Official PNG Logo */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm Golden Halo positioned at 70% right, 60% down */}
        <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-b from-amber-500/20 via-yellow-600/10 to-transparent rounded-full blur-3xl" />
        
        {/* Authentic PNG Logo (420px) positioned 70% right, 60% down */}
        <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-25 filter contrast-125">
          <img
            src={AEHCH_LOGO_BASE64}
            alt="AEHCH"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
      </div>

      {/* 1. TOP SECTION - Lowered with ample clearance from fixed header */}
      <div className="relative z-10 text-center pt-4 sm:pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950 border border-amber-500/40 text-amber-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-3 shadow-lg backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span
            className={`flex items-center gap-1.5 transition-opacity duration-300 ${
              fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>{currentMotto.emoji}</span>
            <span>{currentMotto.text}</span>
          </span>
        </div>

        <h1
          id="hero-main-h1-mobile"
          className="font-display text-4xl xs:text-5xl font-black uppercase tracking-tight text-white leading-none mb-1.5 drop-shadow-md"
        >
          AEHCH
        </h1>

        <p className="font-mono text-[10.5px] uppercase tracking-widest text-amber-400/90 font-semibold mb-3">
          Academia de Esgrima Histórica de Chile
        </p>

        <div className="text-[12px] leading-relaxed text-zinc-300 max-w-xs mx-auto space-y-1.5 px-2">
          <p>
            Fundada en <span className="text-zinc-100 font-semibold">septiembre de 2010</span> por esgrimistas con extensa trayectoria en artes marciales históricas.
          </p>
          <p className="text-zinc-400 text-[11px]">
            Estudiamos tratados y manuales de combate europeos desde el <span className="text-amber-400 font-medium">siglo XIV hasta el siglo XX</span>.
          </p>
        </div>
      </div>

      {/* 2. BOTTOM CAROUSEL / PILLAR BANNER with subtle diagonal gradient */}
      <div className="relative z-10 w-full mb-1">
        <div
          onClick={goToNextSlide}
          className="relative bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 border border-zinc-700/80 rounded-2xl p-4 shadow-xl cursor-pointer active:scale-99 transition-transform overflow-hidden min-h-[96px] flex flex-col justify-center"
        >
          <div
            className={`flex items-center gap-3.5 transition-opacity duration-200 ${
              pillarFade === 'fade-in' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 text-amber-400 shrink-0 shadow-inner">
              {currentPillar.icon}
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-0.5">
                {currentPillar.category}
              </span>
              <p className="text-xs xs:text-sm font-medium text-zinc-200 leading-snug">
                {currentPillar.preText}{' '}
                <span className="text-amber-400 font-black tracking-wide">
                  {currentPillar.highlight}
                </span>{' '}
                {currentPillar.postText || ''}
              </p>
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {PILLARS.map((p, idx) => (
              <div
                key={p.id}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === activePillarIndex
                    ? 'w-6 bg-amber-400'
                    : 'w-1.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
