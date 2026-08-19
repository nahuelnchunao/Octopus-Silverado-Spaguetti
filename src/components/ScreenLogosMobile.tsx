import React, { useState, useEffect } from 'react';
import { 
  Swords, 
  Tag, 
  Shield, 
  Users, 
  SlidersHorizontal,
  ChevronRight,
  GraduationCap,
  Trophy,
  HeartHandshake
} from 'lucide-react';
import { SiteContentConfig, DisciplineSpec } from '../types';

interface ScreenLogosMobileProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
  onOpenCurriculumModal: (disp: DisciplineSpec) => void;
}

const DISCIPLINE_ICONS = [
  <GraduationCap className="w-5 h-5 text-amber-400" />,
  <Trophy className="w-5 h-5 text-amber-400" />,
  <HeartHandshake className="w-5 h-5 text-amber-400" />,
];

export const ScreenLogosMobile: React.FC<ScreenLogosMobileProps> = ({
  content,
  onOpenTrialModal,
  onOpenCurriculumModal,
}) => {
  const data = content.screen2Logos;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabFade, setTabFade] = useState<'fade-in' | 'fade-out'>('fade-in');

  // Auto-cycle tabs slowly if user doesn't interact, but allow manual selection
  useEffect(() => {
    const timer = setInterval(() => {
      setTabFade('fade-out');
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % data.disciplines.length);
        setTabFade('fade-in');
      }, 200);
    }, 5500);

    return () => clearInterval(timer);
  }, [data.disciplines.length]);

  const switchTab = (idx: number) => {
    if (idx === activeTab) return;
    setTabFade('fade-out');
    setTimeout(() => {
      setActiveTab(idx);
      setTabFade('fade-in');
    }, 180);
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Swords':
        return <Swords className="w-4 h-4 text-amber-400" />;
      case 'Tag':
        return <Tag className="w-4 h-4 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-amber-400" />;
      case 'Users':
        return <Users className="w-4 h-4 text-amber-400" />;
      default:
        return <Swords className="w-4 h-4 text-amber-400" />;
    }
  };

  const activeDiscipline = data.disciplines[activeTab] || data.disciplines[0];

  return (
    <div
      id="screen-logos-mobile-view"
      className="md:hidden relative min-h-[100dvh] flex flex-col justify-between pt-16 pb-4 px-4 bg-zinc-950 text-zinc-100 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-md mx-auto w-full">
        
        {/* HEADER */}
        <div className="text-center pt-2 pb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-widest uppercase mb-2">
            <span>{data.sectionTag || 'SCREEN 02 // EL ESTÁNDAR'}</span>
          </div>
          
          <h2
            id="logos-main-h2-mobile"
            className="font-display text-xl xs:text-2xl font-black uppercase tracking-tight text-white leading-tight mb-2 text-balance"
          >
            {data.sectionH2.currentValue}
          </h2>

          <p className="text-xs text-zinc-400 leading-snug px-1 text-balance">
            {data.sectionSubhead.currentValue}
          </p>
        </div>

        {/* 3 DISCIPLINE TABS SELECTOR (Segmented Tab Bar) */}
        <div className="my-2">
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-inner">
            {data.disciplines.map((disp, idx) => (
              <button
                key={disp.id}
                type="button"
                onClick={() => switchTab(idx)}
                className={`py-2 px-1.5 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-sm'
                    : 'bg-transparent text-zinc-400 hover:text-zinc-200 border border-transparent'
                }`}
              >
                <div className="mb-0.5">{DISCIPLINE_ICONS[idx] || <Swords className="w-4 h-4" />}</div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider line-clamp-1">
                  {idx === 0 ? 'Clases' : idx === 1 ? 'Competición' : 'Soporte'}
                </span>
              </button>
            ))}
          </div>

          {/* ACTIVE DISCIPLINE CARD */}
          <div
            className={`mt-2.5 p-4 rounded-xl bg-zinc-900/95 border border-zinc-800/90 shadow-xl transition-all duration-200 ${
              tabFade === 'fade-in'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-1'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-block px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono font-bold tracking-wider uppercase">
                {activeDiscipline.badge || `OPCIÓN 0${activeTab + 1}`}
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                {activeTab + 1} / {data.disciplines.length}
              </span>
            </div>

            <h3 className="font-display text-sm xs:text-base font-bold uppercase tracking-tight text-white leading-snug mb-2">
              {activeDiscipline.name}
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              {activeDiscipline.summary}
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {activeDiscipline.focusHighlights.map((focus, fIdx) => (
                <span
                  key={fIdx}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 text-[10px] text-zinc-300 font-mono"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  {focus}
                </span>
              ))}
            </div>

            {/* Full Curriculum Button */}
            <button
              type="button"
              onClick={() => onOpenCurriculumModal(activeDiscipline)}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-950 hover:bg-amber-500/10 border border-zinc-800 hover:border-amber-500/40 text-xs font-mono text-amber-400 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Ver Plan Técnico y Detalles</span>
              <ChevronRight className="w-3.5 h-3.5 ml-auto" />
            </button>
          </div>
        </div>

        {/* 4 VALUE PILLARS (2x2 Compact Grid on Mobile) */}
        <div className="mt-3 pt-2.5 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 gap-2">
            {data.facilityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2"
              >
                <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0 text-amber-400">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-[11px] font-bold uppercase tracking-tight text-zinc-100 leading-tight line-clamp-2">
                    {pillar.title}
                  </h4>
                  <p className="text-[9px] text-zinc-400 mt-0.5 leading-snug line-clamp-2">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
