/**
 * @file App.tsx
 * @description Root Application Container.
 * Supports the full 3-Screen Main Landing Page + the standalone Style Comparison Page for client review.
 */

import React, { useState } from 'react';
import { initialSiteContent } from './config/siteContent';
import { SiteContentConfig } from './types';

// Component Modules
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { ScreenPathos } from './components/ScreenPathos';
import { ScreenLogos } from './components/ScreenLogos';
import { ScreenEthos } from './components/ScreenEthos';
import { Footer } from './components/Footer';
import { TrialBookingModal } from './components/TrialBookingModal';
import { ManagerInspectorDrawer } from './components/ManagerInspectorDrawer';
import { StyleComparisonPage } from './components/StyleComparisonPage';

export default function App() {
  const [content, setContent] = useState<SiteContentConfig>(initialSiteContent);

  // Active View ('main' | 'style-comparison')
  const [currentView, setCurrentView] = useState<'main' | 'style-comparison'>('main');

  // UI Interactive States
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [trialModalOpen, setTrialModalOpen] = useState<boolean>(false);
  const [inspectorOpen, setInspectorOpen] = useState<boolean>(false);
  const [blueprintMode, setBlueprintMode] = useState<boolean>(false);

  // Handler to update proof images (for local preview / WordPress integration)
  const handleUpdateProofImage = (proofId: string, imageUrl: string) => {
    setContent((prev) => ({
      ...prev,
      screen3Ethos: {
        ...prev.screen3Ethos,
        authorityProofs: prev.screen3Ethos.authorityProofs.map((proof) =>
          proof.id === proofId ? { ...proof, customImageUrl: imageUrl } : proof
        ),
      },
    }));
  };

  // If user navigated to the Style Comparison Lab page:
  if (currentView === 'style-comparison') {
    return (
      <StyleComparisonPage
        content={content}
        onBackToMain={() => setCurrentView('main')}
      />
    );
  }

  // Primary 3-Screen Landing Page View
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 relative">
      
      {/* 1. TOP FIXED FULL-WIDTH HEADER */}
      <Header
        content={content}
        onOpenSidebar={() => setSidebarOpen(true)}
        onOpenTrialModal={() => setTrialModalOpen(true)}
        onOpenStyleComparison={() => setCurrentView('style-comparison')}
      />

      {/* 2. FLOATING OFF-CANVAS SIDEBAR */}
      <SidebarDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        content={content}
        onOpenTrialModal={() => setTrialModalOpen(true)}
        onOpenInspector={() => setInspectorOpen(true)}
        onOpenStyleComparison={() => setCurrentView('style-comparison')}
      />

      {/* =========================================================================
          MAIN LANDING PAGE: 3 SCREENS (ARISTOTELIAN PERSUASION TRIAD)
         ========================================================================= */}
      <main id="main-content-flow" className="relative">
        
        {/* SCREEN 1: PATHOS (THE EMOTIONAL HOOK & IDENTITY TRANSFORMATION) */}
        <ScreenPathos
          content={content}
          onOpenTrialModal={() => setTrialModalOpen(true)}
        />

        {/* SCREEN 2: LOGOS (THE LOGICAL SYSTEM & CURRICULUM ARCHITECTURE) */}
        <ScreenLogos
          content={content}
          onOpenTrialModal={() => setTrialModalOpen(true)}
        />

        {/* SCREEN 3: ETHOS (VALIDATION, COACH PEDIGREE, MEMBER PROOF & PRICING) */}
        <ScreenEthos
          content={content}
          onOpenTrialModal={() => setTrialModalOpen(true)}
          onUpdateProofImage={handleUpdateProofImage}
        />

      </main>

      {/* 3. SITE FOOTER */}
      <Footer
        content={content}
        onOpenTrialModal={() => setTrialModalOpen(true)}
        onOpenInspector={() => setInspectorOpen(true)}
      />

      {/* 4. INTERACTIVE 3-DAY TRIAL BOOKING MODAL */}
      <TrialBookingModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        content={content}
      />

      {/* 5. CONTENT & EXPORT DRAWER */}
      <ManagerInspectorDrawer
        isOpen={inspectorOpen}
        onClose={() => setInspectorOpen(false)}
        content={content}
        onUpdateContent={setContent}
        blueprintMode={blueprintMode}
        onToggleBlueprintMode={() => setBlueprintMode(!blueprintMode)}
      />

    </div>
  );
}
