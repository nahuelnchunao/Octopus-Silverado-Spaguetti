/**
 * @file CopyAnnotationBadge.tsx
 * @description Renders visual copywriting and marketing annotations for managers and developers.
 * Explains psychological goal, word count targets, and persuasion function.
 */

import React from 'react';
import { Target, HelpCircle } from 'lucide-react';
import { CopyDirective } from '../types';

interface CopyAnnotationBadgeProps {
  directive: CopyDirective;
  className?: string;
  inline?: boolean;
}

export const CopyAnnotationBadge: React.FC<CopyAnnotationBadgeProps> = ({
  directive,
  className = '',
  inline = false,
}) => {
  return (
    <div
      className={`group relative select-none ${
        inline ? 'inline-flex align-middle mx-1' : 'block mb-1.5'
      } ${className}`}
    >
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors cursor-help">
        <Target className="w-3 h-3 text-amber-400 shrink-0" />
        <span className="truncate max-w-[280px]">{directive.label}</span>
        {directive.suggestedWordCount && (
          <span className="text-[10px] text-zinc-400 bg-zinc-900/80 px-1 py-0.2 rounded border border-zinc-800">
            {directive.suggestedWordCount}
          </span>
        )}
      </div>

      {/* Hover Tooltip with Detailed Copywriting Strategy */}
      <div className="absolute left-0 top-full mt-1.5 z-50 hidden group-hover:block w-80 p-3 bg-zinc-950/95 backdrop-blur-md rounded-lg border border-amber-500/40 shadow-2xl text-left text-xs space-y-2 pointer-events-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800">
          <span className="font-bold text-amber-400 font-mono text-[11px]">
            {directive.conversionRole || 'CRO Copy Directive'}
          </span>
          <span className="text-[10px] text-zinc-400">Target: {directive.suggestedWordCount || 'Optimized'}</span>
        </div>
        <p className="text-zinc-300 text-[12px] leading-relaxed">
          {directive.guidance}
        </p>
        <div className="text-[10px] text-zinc-500 pt-1 border-t border-zinc-900 flex items-center gap-1">
          <HelpCircle className="w-3 h-3 text-zinc-400" />
          <span>Edit via /src/config/siteContent.ts or live inspector</span>
        </div>
      </div>
    </div>
  );
};
