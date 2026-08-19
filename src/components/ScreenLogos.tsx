/**
 * @file ScreenLogos.tsx
 * @description Screen 2: The Deal & The System (Logos).
 * Styled with subtle diagonal dark gray gradients across disciplines and value pillars (Style 1 with gradient).
 */

import React, { useState } from 'react';
import { 
  Swords, 
  Tag, 
  Shield, 
  Users, 
  Layers, 
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { SiteContentConfig, DisciplineSpec } from '../types';
import { CurriculumModal } from './CurriculumModal';
import { ScreenLogosMobile } from './ScreenLogosMobile';

interface ScreenLogosProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
}

export const ScreenLogos: React.FC<ScreenLogosProps> = ({
  content,
  onOpenTrialModal,
}) => {
  const data = content.screen2Logos;
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineSpec | null>(null);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Swords':
        return <Swords className="w-5 h-5 text-amber-400" />;
      case 'Tag':
        return <Tag className="w-5 h-5 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section
      id="screen-logos"
      className="relative bg-zinc-950 text-zinc-100 border-b border-zinc-900 overflow-hidden"
    >
      {/* 1. DEDICATED MOBILE VIEW (< 768px) */}
      <ScreenLogosMobile
        content={content}
        onOpenTrialModal={onOpenTrialModal}
        onOpenCurriculumModal={(disp) => setSelectedDiscipline(disp)}
      />

      {/* 2. DESKTOP / TABLET VIEW (>= 768px) */}
      <div className="hidden md:flex relative min-h-[92vh] lg:min-h-screen items-center justify-center py-16 px-6 lg:px-8">
        {/* Subtle Grid Ambient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-br from-zinc-800/90 via-zinc-900/90 to-zinc-950 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-md">
              <span>{data.sectionTag || 'PANTALLA 02 // EL ESTÁNDAR'}</span>
            </div>
            <h2
              id="logos-main-h2"
              className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-100 leading-tight mb-3"
            >
              {data.sectionH2.currentValue}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
              {data.sectionSubhead.currentValue}
            </p>
          </div>

          {/* 1. THE 3 DISCIPLINES (Diagonal Gradient Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {data.disciplines.map((disp) => (
              <div
                key={disp.id}
                className="group relative bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 hover:from-zinc-800 hover:via-zinc-850 hover:to-zinc-900 border border-zinc-700/80 hover:border-amber-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-wider uppercase mb-3">
                    {disp.badge}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                    {disp.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {disp.summary}
                  </p>

                  {/* Key Focus Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-zinc-300">
                    {disp.focusHighlights.map((focus, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 1-Click Away Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedDiscipline(disp)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 hover:from-amber-500/20 hover:to-amber-500/10 border border-zinc-700 hover:border-amber-500/50 text-xs font-mono text-zinc-300 hover:text-amber-400 transition-colors cursor-pointer shadow-sm"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ver Plan Técnico y Detalles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* 2. THE 4 VALUE PILLARS (Diagonal Gradient Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-zinc-800/80">
            {data.facilityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/70 to-zinc-950 border border-zinc-700/80 shadow-md flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 text-amber-400 shrink-0 mt-0.5 shadow-inner">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide text-zinc-100">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 1-Click Technical Details Modal */}
      <CurriculumModal
        discipline={selectedDiscipline}
        isOpen={Boolean(selectedDiscipline)}
        onClose={() => setSelectedDiscipline(null)}
        onClaimFreeClass={() => {
          setSelectedDiscipline(null);
          onOpenTrialModal();
        }}
      />
    </section>
  );
};
