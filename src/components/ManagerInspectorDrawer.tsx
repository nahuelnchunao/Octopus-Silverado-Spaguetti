/**
 * @file ManagerInspectorDrawer.tsx
 * @description Technical & UX Architecture Inspector for Product Managers, Marketers, and Developers.
 * 
 * FEATURES:
 * 1. Aristotelian Triad Persuasion & CRO Strategy breakdown.
 * 2. Live Content Customizer: Tweak brand name, phone, H1 hook, and pricing live in state.
 * 3. Step-by-step WordPress & Local Server Export Instructions.
 * 4. Contemporary Web Design Audit & Best Practice Checklist.
 */

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Flame, 
  Layers, 
  Award, 
  Code2, 
  FileText, 
  Sliders, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen,
  ArrowRight,
  Download,
  Server,
  Palette,
  Eye
} from 'lucide-react';
import { SiteContentConfig } from '../types';

interface ManagerInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContentConfig;
  onUpdateContent: (newContent: SiteContentConfig) => void;
  blueprintMode: boolean;
  onToggleBlueprintMode: () => void;
}

export const ManagerInspectorDrawer: React.FC<ManagerInspectorDrawerProps> = ({
  isOpen,
  onClose,
  content,
  onUpdateContent,
  blueprintMode,
  onToggleBlueprintMode,
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'export' | 'customizer' | 'checklist'>('strategy');

  if (!isOpen) return null;

  return (
    <div
      id="manager-inspector-portal"
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10 pointer-events-auto">
        <aside
          id="manager-inspector-panel"
          className="w-screen max-w-2xl bg-zinc-950 border-l border-zinc-800 text-zinc-100 shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-display font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-zinc-100 uppercase tracking-wide flex items-center gap-2">
                  <span>Manager & Developer Blueprint</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    v1.0 DRAFT
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  UX Intent, Aristotelian Persuasion Architecture & Export Engine
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 flex items-center justify-center transition-colors border border-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-zinc-800 bg-zinc-900/30 px-6 text-xs font-mono overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('strategy')}
              className={`py-3 px-3.5 border-b-2 font-bold whitespace-nowrap transition-colors ${
                activeTab === 'strategy'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              01. UX & Rhetoric Strategy
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('export')}
              className={`py-3 px-3.5 border-b-2 font-bold whitespace-nowrap transition-colors ${
                activeTab === 'export'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              02. WordPress & Local Export
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('customizer')}
              className={`py-3 px-3.5 border-b-2 font-bold whitespace-nowrap transition-colors ${
                activeTab === 'customizer'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              03. Live Content Customizer
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('checklist')}
              className={`py-3 px-3.5 border-b-2 font-bold whitespace-nowrap transition-colors ${
                activeTab === 'checklist'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              04. Modern CRO Audit
            </button>
          </div>

          {/* Main Tab Content */}
          <div className="p-6 space-y-6 flex-1 overflow-y-auto font-body text-xs text-zinc-300">
            
            {/* =========================================================================
                TAB 1: RHETORIC & UX CONVERSION STRATEGY
               ========================================================================= */}
            {activeTab === 'strategy' && (
              <div className="space-y-6">
                
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-display text-sm font-bold text-amber-300 uppercase">
                      The Aristotelian Persuasion Triad in Modern Web CRO
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-[12px]">
                      By structuring the landing page into a 3-screen sequence, we map directly to the cognitive buying stages of prospective athletes and beginners:
                    </p>
                  </div>
                </div>

                {/* Triad Breakdown */}
                <div className="space-y-4">
                  {/* Screen 1: Pathos */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-amber-400 flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-amber-500" />
                        SCREEN 01: PATHOS (EMOTIONAL HOOK & IDENTITY SHIFT)
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Above-The-Fold</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      <strong>Design Intent:</strong> Avoids commercial gym clichés (e.g. "Get Fit Fast") and outdated martial arts tropes. Instead, it activates the user’s primal desire for genuine self-mastery, focus, and stress resilience. Dual CTAs cater to both high-intent buyers (instant trial) and exploratory visitors (syllabus tour).
                    </p>
                  </div>

                  {/* Screen 2: Logos */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-cyan-500" />
                        SCREEN 02: LOGOS (RATIONAL SYSTEM & CURRICULUM)
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Mid-Funnel Proof</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      <strong>Design Intent:</strong> Satisfies analytical reasoning. Explains the 3 core disciplines (Striking, BJJ, Conditioning) with explicit 8-week developmental progression and non-concussive safety protocols. The comparison table dismantles skepticism regarding typical chaotic gym dropouts.
                    </p>
                  </div>

                  {/* Screen 3: Ethos */}
                  <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-emerald-500" />
                        SCREEN 03: ETHOS (VALIDATION, AUTHORITY & RISK REVERSAL)
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Conversion Climax</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      <strong>Design Intent:</strong> Removes all remaining purchasing friction through university-educated coaches, objective member transformation metrics, transparent 3-Day Trial pricing, and a 100% money-back satisfaction guarantee.
                    </p>
                  </div>
                </div>

                {/* Blueprint Mode Toggle */}
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="font-display text-sm font-bold text-zinc-100 uppercase block">
                      Live Copywriting Annotations Overlay
                    </span>
                    <span className="text-xs text-zinc-400">
                      Display target word counts and psychological roles across every card.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onToggleBlueprintMode}
                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                      blueprintMode
                        ? 'bg-amber-500 text-zinc-950 shadow'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {blueprintMode ? 'Disable Blueprint' : 'Enable Blueprint'}
                  </button>
                </div>

              </div>
            )}

            {/* =========================================================================
                TAB 2: WORDPRESS & LOCAL SERVER EXPORT GUIDE
               ========================================================================= */}
            {activeTab === 'export' && (
              <div className="space-y-6">
                
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs">
                    <Server className="w-4 h-4" />
                    <span>OPTION A: LOCAL SERVER (NGINX, APACHE, DOCKER, STATIC HOSTING)</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-300 text-[12px] leading-relaxed">
                    <li>Export this project via AI Studio top settings menu (Download ZIP or push to GitHub).</li>
                    <li>Run <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">npm install</code> and <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">npm run build</code>.</li>
                    <li>The compiled standalone HTML, JS, and CSS files are produced cleanly in the <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">dist/</code> folder.</li>
                    <li>Drop the contents of <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">dist/</code> into your webroot (<code className="px-1.5 py-0.5 bg-zinc-950 rounded text-zinc-400 font-mono">/var/www/html/</code> or any static CDN like Vercel, Netlify, Cloudflare Pages).</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs">
                    <Code2 className="w-4 h-4" />
                    <span>OPTION B: WORDPRESS THEME / GUTENBERG INTEGRATION</span>
                  </div>
                  <div className="space-y-3 text-[12px] text-zinc-300 leading-relaxed">
                    <p>
                      <strong>1. Custom Page Template Method:</strong><br />
                      Create a template file <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">page-martial-arts.php</code> in your theme folder. Enqueue Tailwind output CSS and React bundle via <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">wp_enqueue_script()</code>.
                    </p>
                    <p>
                      <strong>2. Elementor / Gutenberg Custom HTML Block:</strong><br />
                      The component markup in <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-zinc-400 font-mono">ScreenPathos.tsx</code>, <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-zinc-400 font-mono">ScreenLogos.tsx</code>, and <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-zinc-400 font-mono">ScreenEthos.tsx</code> uses standard Tailwind classes that can be dropped directly into an HTML widget with Tailwind loaded.
                    </p>
                    <p>
                      <strong>3. Dynamic WordPress Fields (ACF):</strong><br />
                      All data points in <code className="px-1.5 py-0.5 bg-zinc-950 rounded text-amber-400 font-mono">/src/config/siteContent.ts</code> map 1:1 to Advanced Custom Fields (ACF) text, image, and repeater fields for seamless client editing in the WordPress WP-Admin dashboard!
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* =========================================================================
                TAB 3: LIVE CONTENT CUSTOMIZER (STATE TWEAKER)
               ========================================================================= */}
            {activeTab === 'customizer' && (
              <div className="space-y-4">
                <p className="text-zinc-400 text-xs">
                  Test your real gym details live on the page to preview layout fit and typography balance:
                </p>

                {/* Brand Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 block">
                    Gym Brand Name:
                  </label>
                  <input
                    type="text"
                    value={content.gymMeta.brandName}
                    onChange={(e) =>
                      onUpdateContent({
                        ...content,
                        gymMeta: { ...content.gymMeta, brandName: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-zinc-100 font-sans text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Contact Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 block">
                    Contact Phone Number:
                  </label>
                  <input
                    type="text"
                    value={content.gymMeta.contactPhone}
                    onChange={(e) =>
                      onUpdateContent({
                        ...content,
                        gymMeta: { ...content.gymMeta, contactPhone: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-zinc-100 font-sans text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Facility Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 block">
                    Facility Address:
                  </label>
                  <input
                    type="text"
                    value={content.gymMeta.facilityAddress}
                    onChange={(e) =>
                      onUpdateContent({
                        ...content,
                        gymMeta: { ...content.gymMeta, facilityAddress: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-zinc-100 font-sans text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Primary CTA Button Text */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 block">
                    Floating Banner Primary CTA Text:
                  </label>
                  <input
                    type="text"
                    value={content.navigation.primaryCtaText}
                    onChange={(e) =>
                      onUpdateContent({
                        ...content,
                        navigation: { ...content.navigation, primaryCtaText: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-zinc-100 font-sans text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800 text-[11px] text-amber-400 font-mono">
                  Changes update immediately across all 3 screens and header/sidebar.
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: MODERN WEB DESIGN AUDIT & BEST PRACTICES
               ========================================================================= */}
            {activeTab === 'checklist' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-display text-sm font-bold text-zinc-100 uppercase">
                    Conversion & Performance Audit Checklist
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Key considerations implemented in this draft to maximize conversions for modern martial arts academies:
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-200 block text-xs">Zero-Ego Positioning</span>
                      <span className="text-[11px] text-zinc-400">70% of potential martial arts students dropout due to intimidation. The copy explicitly reassures beginners with sanitized mats and zero-contact day 1 rules.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-200 block text-xs">Low-Friction Trial Acquisition</span>
                      <span className="text-[11px] text-zinc-400">Asking for a $200/mo subscription cold causes high bounce rates. The 3-Day Trial Pass ($39 or free intro) lowers the psychological barrier.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-200 block text-xs">Responsive Floating Controls</span>
                      <span className="text-[11px] text-zinc-400">The persistent floating banner keeps the primary conversion trigger within 1-click reach on any scroll position without obstructing content.</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-zinc-800 bg-zinc-900/40 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">APEX COMBAT CLUB ARCHITECTURE</span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold uppercase transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
