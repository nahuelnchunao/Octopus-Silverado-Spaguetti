/**
 * @file GraphicPlaceholder.tsx
 * @description Renders visual graphic asset placeholders with explicit photography,
 * lighting, and aspect ratio guidelines for the creative director or marketing manager.
 */

import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Info, Eye, Sliders } from 'lucide-react';
import { GraphicSpec } from '../types';

interface GraphicPlaceholderProps {
  spec: GraphicSpec;
  className?: string;
  showBlueprintOverlay?: boolean;
  priority?: boolean;
}

export const GraphicPlaceholder: React.FC<GraphicPlaceholderProps> = ({
  spec,
  className = '',
  showBlueprintOverlay = false,
}) => {
  const [viewMode, setViewMode] = useState<'preview' | 'blueprint'>('preview');
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);

  const activeImage = customUrl.trim() || spec.placeholderImageUrl;

  const aspectClassMap = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]',
    '21:9': 'aspect-[21/9]',
  };

  const aspectClass = aspectClassMap[spec.aspectRatio] || 'aspect-[16/9]';

  return (
    <div
      id={`graphic-container-${spec.id}`}
      className={`relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 ${aspectClass} ${className}`}
    >
      {/* Background Image / Rendered Layer */}
      {viewMode === 'preview' && activeImage ? (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={activeImage}
            alt={spec.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Subtle Dark Gradient Overlay for optimal text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
        </div>
      ) : (
        /* Blueprint Wireframe Display */
        <div className="absolute inset-0 p-6 flex flex-col justify-between bg-zinc-900/95 bg-tech-grid border-2 border-dashed border-amber-500/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded">
                GRAPHIC ASSET SPEC // {spec.aspectRatio}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {spec.recommendedResolution}
              </span>
            </div>
            <Camera className="w-5 h-5 text-amber-400/80" />
          </div>

          <div className="space-y-2.5 my-auto">
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Creative Subject Directive:
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/80 p-2.5 rounded border border-zinc-800">
              {spec.subjectRecommendation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1">
              <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/80">
                <span className="text-amber-400/90 font-medium block">Lighting & Mood:</span>
                {spec.lightingAndMood}
              </div>
              <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/80">
                <span className="text-amber-400/90 font-medium block">Framing & Safe Zone:</span>
                {spec.framingNotes}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 font-mono text-center">
            [Drop final WebP/AVIF file into WordPress media library or /assets/ folder]
          </div>
        </div>
      )}

      {/* Hover & Manager Quick Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-zinc-700/80 shadow-lg text-xs">
        <button
          type="button"
          onClick={() => setViewMode(viewMode === 'preview' ? 'blueprint' : 'preview')}
          className="flex items-center gap-1 text-zinc-300 hover:text-amber-400 px-1.5 py-0.5 transition-colors"
          title="Toggle between Live Photo Preview and Art Direction Blueprint"
        >
          {viewMode === 'preview' ? (
            <>
              <Sliders className="w-3.5 h-3.5" />
              <span>Specs</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </>
          )}
        </button>

        <span className="text-zinc-600">|</span>

        <button
          type="button"
          onClick={() => setIsEditingUrl(!isEditingUrl)}
          className="flex items-center gap-1 text-zinc-300 hover:text-amber-400 px-1.5 py-0.5 transition-colors"
          title="Test with your own image URL"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>URL</span>
        </button>
      </div>

      {/* URL Input Dropdown */}
      {isEditingUrl && (
        <div className="absolute top-12 right-3 z-30 w-72 bg-zinc-950 border border-amber-500/50 p-3 rounded-lg shadow-2xl space-y-2">
          <div className="text-xs font-semibold text-zinc-200">Test Custom Graphic URL:</div>
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="https://your-domain.com/photo.webp"
            className="w-full text-xs bg-zinc-900 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-200 focus:outline-none focus:border-amber-400"
          />
          <div className="flex justify-between items-center text-[10px] text-zinc-400">
            <span>Aspect Ratio Target: {spec.aspectRatio}</span>
            <button
              type="button"
              onClick={() => setIsEditingUrl(false)}
              className="text-amber-400 hover:underline font-medium"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Persistent Blueprint Tag on bottom left */}
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800/80 text-[11px] text-zinc-400">
        <Info className="w-3 h-3 text-amber-400" />
        <span className="font-mono">{spec.aspectRatio}</span>
        <span className="text-zinc-600">•</span>
        <span className="truncate max-w-[200px]">{spec.name}</span>
      </div>
    </div>
  );
};
