/**
 * @file ScreenPathos.tsx
 * @description Screen 1: The Hook (Pathos) - Academia de Esgrima Histórica de Chile (AEHCH).
 * 
 * Vision implemented:
 * - The official black & gold AEHCH logo sits centered in the background.
 * - Foreground: "Academia de Esgrima Histórica de Chile" in large, bold white typography.
 * - Animated Mottos: "CITIUS, ALTIUS, FORTIUS" that smoothly fades and transitions into "Más rápido, más alto, más fuerte".
 * - Body: Official AEHCH founding text (Sept 2010) and primary sources martial ethos.
 * - Black bar divider that cuts across the base of the logo and houses the 3 customized value divs:
 *   1. "Nos unimos para formar personas FUERTES"
 *   2. "Entrenamos para crear peleadores RAPIDOS"
 *   3. "Competimos para llegar a lo más ALTO del podio"
 */

import React, { useState, useEffect } from 'react';
import { Zap, Trophy, BicepsFlexed } from 'lucide-react';
import { SiteContentConfig } from '../types';
import { ScreenPathosMobile } from './ScreenPathosMobile';

interface ScreenPathosProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
}

// Animation 4 frames with deeply meaningful martial/brotherhood emojis and specific display durations
interface MottoFrame {
  text: string;
  emoji: string;
  durationMs: number;
}

const MOTTO_FRAMES: MottoFrame[] = [
  {
    // Institutional Motto: Brotherhood & collective victory
    text: 'CITIUS, ALTIUS, FORTIUS',
    emoji: '⚔️',
    durationMs: 4000, // Twice as long
  },
  {
    // Más Rápido: Lightning speed
    text: 'MÁS RÁPIDO',
    emoji: '⚡',
    durationMs: 1200, // Half as long
  },
  {
    // Más Alto: Victory above all / highest standing
    text: 'MÁS ALTO',
    emoji: '🏆',
    durationMs: 1200, // Half as long
  },
  {
    // Más Fuerte: Muscular strength, power and fortitude
    text: 'MÁS FUERTE',
    emoji: '💪',
    durationMs: 1200, // Half as long
  },
];

export const ScreenPathos: React.FC<ScreenPathosProps> = ({
  content,
  onOpenTrialModal,
}) => {
  // 4-frame animation cycle for motto with frame-specific durations
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    const currentDuration = MOTTO_FRAMES[currentFrameIndex].durationMs;

    const timer = setTimeout(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentFrameIndex((prev) => (prev + 1) % MOTTO_FRAMES.length);
        setFadeState('fade-in');
      }, 300); // 300ms fade transition
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentFrameIndex]);

  return (
    <section
      id="screen-pathos"
      className="relative bg-zinc-950 text-zinc-100 overflow-hidden border-b border-zinc-900"
    >
      {/* =========================================================================
          1. MOBILE TAILORED VIEW (< md: breakpoint, fits 100dvh perfectly)
         ========================================================================= */}
      <ScreenPathosMobile
        content={content}
        onOpenTrialModal={onOpenTrialModal}
        currentMotto={MOTTO_FRAMES[currentFrameIndex]}
        fadeState={fadeState}
      />

      {/* =========================================================================
          2. DESKTOP VIEW (>= md: breakpoint, unchanged single screen desktop layout)
         ========================================================================= */}
      <div className="hidden md:flex min-h-screen flex-col justify-between pt-24 lg:pt-28">
        {/* Background Layer with offset emblem */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Ambient Warm Golden Rim Halo */}
          <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[900px] h-[700px] lg:h-[900px] bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Large Logo with center at 70% horizontal, 60% vertical */}
          <div className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[816px] h-[600px] lg:h-[816px] opacity-30 filter contrast-125 pointer-events-none select-none">
            <img
              src="/aehch-logo.png"
              alt="Logo Academia de Esgrima Histórica de Chile"
              className="w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
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
              La academia de esgrima historica de chile, <strong className="text-amber-400 font-semibold">AEHCH</strong>, nace en septiembre del año 2010 como un nuevo proyecto para la práctica de las Artes Marciales Históricas Europeas, o <strong className="text-zinc-100 font-semibold">HEMA</strong>, en Chile. Fundada por miembros con anterior experiencia en HEMA, como también en otras artes marciales, deportes de contacto y disciplinas deportivas.
            </p>
            <p className="text-zinc-400 text-sm lg:text-base">
              Nuestro énfasis se centra en desarrollar los aspectos marciales y competitivos de HEMA, estudiando las fuentes primarias para que nos orienten a perfeccionar la efectividad de nuestra esgrima y así poner a prueba nuestras habilidades.
            </p>
          </div>
        </div>

        {/* Black Bar with 3 Value Divs */}
        <div className="relative z-20 w-full bg-zinc-950 border-t border-zinc-800/90 py-6 lg:py-8 px-6 lg:px-8 shadow-2xl shadow-black">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
            
            {/* Div 1: FUERTES */}
            <div
              id="pillar-fuertes"
              className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-4 hover:border-amber-500/50 hover:bg-zinc-900 transition-all duration-200 group shadow-md"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <BicepsFlexed className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  // Comunidad & Carácter
                </div>
                <h3 className="font-display text-base font-bold uppercase text-zinc-200 leading-snug mt-0.5">
                  Nos unimos para formar personas <span className="text-amber-400 font-extrabold underline decoration-amber-500/60 underline-offset-4">FUERTES</span>
                </h3>
              </div>
            </div>

            {/* Div 2: RAPIDOS */}
            <div
              id="pillar-rapidos"
              className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-4 hover:border-amber-500/50 hover:bg-zinc-900 transition-all duration-200 group shadow-md"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  // Técnica & Atletismo
                </div>
                <h3 className="font-display text-base font-bold uppercase text-zinc-200 leading-snug mt-0.5">
                  Entrenamos para crear peleadores <span className="text-amber-400 font-extrabold underline decoration-amber-500/60 underline-offset-4">RAPIDOS</span>
                </h3>
              </div>
            </div>

            {/* Div 3: ALTO */}
            <div
              id="pillar-alto"
              className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-4 hover:border-amber-500/50 hover:bg-zinc-900 transition-all duration-200 group shadow-md"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  // Competencia & Éxito
                </div>
                <h3 className="font-display text-base font-bold uppercase text-zinc-200 leading-snug mt-0.5">
                  Competimos para llegar a lo más <span className="text-amber-400 font-extrabold underline decoration-amber-500/60 underline-offset-4">ALTO</span> del podio
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
