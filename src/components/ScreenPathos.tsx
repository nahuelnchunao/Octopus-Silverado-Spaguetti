/**
 * @file ScreenPathos.tsx
 * @description Screen 1: The Hook (Pathos) - Academia de Esgrima Histórica de Chile (AEHCH).
 * Uses the authentic official aehch-logo.png bundled directly via Vite asset imports.
 */

import React, { useState, useEffect } from 'react';
import { Zap, Trophy, BicepsFlexed } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { ScreenPathosMobile } from './ScreenPathosMobile';
import aehchLogoImg from '../assets/aehch-logo.png';

interface ScreenPathosProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
}

interface MottoFrame {
  text: string;
  emoji: string;
  durationMs: number;
}

const MOTTO_FRAMES: MottoFrame[] = [
  {
    text: 'CITIUS, ALTIUS, FORTIUS',
    emoji: '⚔️',
    durationMs: 4000,
  },
  {
    text: 'MÁS RÁPIDO',
    emoji: '⚡',
    durationMs: 1200,
  },
  {
    text: 'MÁS ALTO',
    emoji: '🏆',
    durationMs: 1200,
  },
  {
    text: 'MÁS FUERTE',
    emoji: '💪',
    durationMs: 1200,
  },
];

export const ScreenPathos: React.FC<ScreenPathosProps> = ({
  content,
  onOpenTrialModal,
}) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    const currentDuration = MOTTO_FRAMES[currentFrameIndex].durationMs;

    const timer = setTimeout(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentFrameIndex((prev) => (prev + 1) % MOTTO_FRAMES.length);
        setFadeState('fade-in');
      }, 300);
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentFrameIndex]);

  return (
    <section
      id="screen-pathos"
      className="relative bg-zinc-950 text-zinc-100 overflow-hidden border-b border-zinc-900"
    >
      {/* 1. MOBILE VIEW */}
      <ScreenPathosMobile
        content={content}
        onOpenTrialModal={onOpenTrialModal}
        currentMotto={MOTTO_FRAMES[currentFrameIndex]}
        fadeState={fadeState}
      />

      {/* 2. DESKTOP VIEW */}
      <div className="hidden md:flex min-h-screen flex-col justify-between pt-24 lg:pt-28">
        {/* Background Layer with authentic official PNG emblem */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Ambient Warm Golden Rim Halo */}
          <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[900px] h-[700px] lg:h-[900px] bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Large authentic PNG Logo with center at 70% horizontal, 60% vertical */}
          <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[816px] h-[600px] lg:h-[816px] opacity-30 filter contrast-125 pointer-events-none select-none">
            <img
              src={aehchLogoImg}
              alt="Logo Oficial Academia de Esgrima Histórica de Chile"
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="eager"
              decoding="sync"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/80" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-8 pt-8 lg:pt-12 pb-12 flex flex-col items-center text-center my-auto">
          {/* Animated Motto Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 text-amber-400 text-xs lg:text-sm font-mono font-bold tracking-widest uppercase shadow-lg shadow-amber-500/10 backdrop-blur-md min-h-[34px]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span
              className={`flex items-center gap-1.5 transition-opacity duration-300 ${
                fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-sm select-none">{MOTTO_FRAMES[currentFrameIndex].emoji}</span>
              <span>{MOTTO_FRAMES[currentFrameIndex].text}</span>
            </span>
          </div>

          {/* Main H1 */}
          <h1
            id="hero-main-h1"
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-4xl mb-6 text-balance drop-shadow-xl"
          >
            AEHCH
          </h1>

          {/* Body Text */}
          <div className="max-w-3xl mx-auto space-y-4 text-zinc-300 font-body text-base lg:text-lg leading-relaxed text-balance">
            <p>
              La <strong className="text-zinc-100 font-semibold">Academia de Esgrima Histórica de Chile (AEHCH)</strong> fue fundada en septiembre de 2010 por esgrimistas con una extensa trayectoria en artes marciales históricas europeas.
            </p>
            <p>
              Estudiamos y revivimos las tradiciones marciales de Europa a través de sus fuentes primarias: <span className="text-amber-400 font-medium">tratados y manuales de combate</span> que datan desde el siglo XIV hasta principios del siglo XX.
            </p>
          </div>
        </div>

        {/* 3 Value Pillars Bar */}
        <div className="relative z-10 w-full bg-zinc-950/90 border-t border-zinc-900 py-6 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* 1. FUERTES */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="p-3 rounded-lg bg-zinc-950 border border-amber-500/30 text-amber-400 shrink-0">
                <BicepsFlexed className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Comunidad & Carácter
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  Nos unimos para formar personas{' '}
                  <span className="text-amber-400 font-black">FUERTES</span>
                </p>
              </div>
            </div>

            {/* 2. RÁPIDOS */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="p-3 rounded-lg bg-zinc-950 border border-amber-500/30 text-amber-400 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Técnica & Atletismo
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  Entrenamos para crear peleadores{' '}
                  <span className="text-amber-400 font-black">RÁPIDOS</span>
                </p>
              </div>
            </div>

            {/* 3. ALTO */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="p-3 rounded-lg bg-zinc-950 border border-amber-500/30 text-amber-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Competencia & Éxito
                </span>
                <p className="text-sm font-semibold text-zinc-200">
                  Competimos para llegar a lo más{' '}
                  <span className="text-amber-400 font-black">ALTO</span> del podio
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
