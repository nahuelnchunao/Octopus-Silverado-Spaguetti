/**
 * @file types.ts
 * @description Core TypeScript interfaces for the streamlined 3-Screen Martial Arts Gym landing page.
 * Pure meat architecture (Pathos -> Logos -> Ethos) + Unassuming Utility Colophon/Footer.
 */

export interface CopyDirective {
  label: string; // e.g. "[HERO H1: HOOK]"
  guidance: string; // Strategy & target word count
  currentValue: string; // The active placeholder copy
  suggestedWordCount?: string;
  conversionRole?: string;
}

export interface GraphicSpec {
  id: string;
  name: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '9:16';
  recommendedResolution: string;
  subjectRecommendation: string;
  lightingAndMood: string;
  framingNotes: string;
  placeholderImageUrl?: string;
}

export interface DisciplineSpec {
  id: string;
  badge: string; // e.g. "DISCIPLINE 01"
  name: string; // e.g. "[PRIMARY COMBAT SYSTEM]"
  summary: string;
  focusHighlights: string[];
  graphicSpec: GraphicSpec;
  technicalDetails: {
    curriculumOverview: string;
    weeklyFrequency: string;
    gearRequired: string;
    progressionBenchmark: string;
  };
}

export interface FacilityPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface AuthorityProof {
  id: string;
  statNumber: string;
  statLabel: string;
  proofBadge: string;
  description: string;
  highlightIcon: string;
  customImageUrl?: string;
  imageSpec?: GraphicSpec;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContentConfig {
  gymMeta: {
    brandName: string;
    brandSlogan: string;
    contactPhone: string;
    contactEmail: string;
    facilityAddress: string;
    operatingHours: string;
  };
  navigation: {
    logoPlaceholder: string;
    primaryCtaText: string;
    primaryCtaSubtext: string;
  };
  screen1Pathos: {
    sectionTag: string;
    heroBadge: CopyDirective;
    heroH1: CopyDirective;
    heroSubhead: CopyDirective;
    primaryCta: CopyDirective;
    heroGraphic: GraphicSpec;
    hookMetrics: { label: string; value: string; desc: string }[];
  };
  screen2Logos: {
    sectionTag: string;
    sectionH2: CopyDirective;
    sectionSubhead: CopyDirective;
    disciplines: DisciplineSpec[];
    facilityPillars: FacilityPillar[];
  };
  screen3Ethos: {
    sectionTag: string;
    sectionH2: CopyDirective;
    sectionSubhead: CopyDirective;
    authorityProofs: AuthorityProof[];
    dealSummary: {
      headline: string;
      subline: string;
      terms: string[];
      glowingCtaText: string;
      glowingCtaSubtext: string;
    };
  };
  utilityFooter: {
    legalNotice: string;
    liabilityDisclaimer: string;
    faqs: FAQItem[];
  };
}
