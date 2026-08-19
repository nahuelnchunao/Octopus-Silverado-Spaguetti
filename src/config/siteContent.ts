/**
 * @file siteContent.ts
 * @description Streamlined copy, graphics specs, and metadata configuration.
 * 
 * LEAN 3-SCREEN ARCHITECTURE ("PURE MEAT, NO FAT"):
 * - SCREEN 1 (PATHOS): Attention hook — "Sharpen your spirit. Discover real speed and power."
 * - SCREEN 2 (LOGOS): The Deal — 3 core disciplines, fitness & nutrition coaches, on-site medics, private premises.
 * - SCREEN 3 (ETHOS): Hard Proof — #10 ranked fighter instructor, oldest club, most podium winners. Free 1st class (pay on site).
 * - SECTION 4 (COLOPHON/FOOTER): Unassuming utility area with address, legal details, and FAQs.
 */

import { SiteContentConfig } from '../types';

export const initialSiteContent: SiteContentConfig = {
  gymMeta: {
    brandName: '[GYM BRAND NAME / E.G. "TITAN COMBAT CLUB"]',
    brandSlogan: '[OFFICIAL SLOGAN / E.G. "PURITY IN DISCIPLINE. SOVEREIGNTY IN COMBAT."]',
    contactPhone: '+1 (555) 019-2834',
    contactEmail: 'admissions@[yourgymdomain].com',
    facilityAddress: '[ACADEMY ADDRESS / E.G. "450 VICTORIA WAY, DISTRICT 4"]',
    operatingHours: 'MON-FRI: 06:00 - 21:30 | SAT: 08:00 - 18:00 | SUN: 09:00 - 14:00',
  },

  navigation: {
    logoPlaceholder: '[TYPOGRAPHY LOGO: GYM BRANDMARK]',
    primaryCtaText: 'FREE FIRST CLASS',
    primaryCtaSubtext: 'Zero Fee • Pay On-Site If You Join',
  },

  // =========================================================================
  // SCREEN 1: THE HOOK (PATHOS)
  // "Oh, you're gonna make me faster, you say? You will sharpen my spirit?"
  // =========================================================================
  screen1Pathos: {
    sectionTag: 'SCREEN 01 // THE HOOK',
    heroBadge: {
      label: '[HERO PROMISE BADGE]',
      guidance: 'Ultra-direct claim of physical and spiritual conditioning (4-7 words).',
      currentValue: 'EXPLOSIVE SPEED • UNBREAKABLE FOCUS • REFINED SPIRIT',
      suggestedWordCount: '4-7 words',
      conversionRole: 'Attention Grabber',
    },
    heroH1: {
      label: '[HERO H1: THE ATTENTION HOOK]',
      guidance: 'Challenge the visitor directly. Speak to speed, spirit, and raw capability.',
      currentValue: 'WE WILL MAKE YOU FASTER. WE WILL SHARPEN YOUR SPIRIT.',
      suggestedWordCount: '8-12 words',
      conversionRole: 'High-Impact Above-the-Fold Hook',
    },
    heroSubhead: {
      label: '[HERO SUBHEAD]',
      guidance: 'Punchy bridge clarifying that this is authentic, disciplined training for those who refuse to stay ordinary.',
      currentValue: 'No gimmicks. No commercial fitness theatre. Step onto our mats to forge genuine combat speed, relentless mental clarity, and physical sovereignty.',
      suggestedWordCount: '18-24 words',
      conversionRole: 'Clarity & Identity Alignment',
    },
    primaryCta: {
      label: '[HERO PRIMARY CTA]',
      guidance: 'Zero-friction trial booking invitation.',
      currentValue: 'CLAIM YOUR FREE FIRST CLASS',
      suggestedWordCount: '4-6 words',
      conversionRole: 'Instant Frictionless Booking',
    },
    heroGraphic: {
      id: 'hero-cinematic-visual',
      name: 'Hero Silhouette / Athletic Graphic',
      aspectRatio: '16:9',
      recommendedResolution: '1920 x 1080 px',
      subjectRecommendation: 'Dramatic, high-contrast silhouette or focused athlete in movement. Dynamic lighting highlighting speed and concentration.',
      lightingAndMood: 'Deep matte blacks with warm golden/amber rim light. Intense focus.',
      framingNotes: 'Framed cleanly to keep typography razor-sharp and legible.',
      placeholderImageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1920&q=80',
    },
    hookMetrics: [
      {
        label: 'REACTION SPEED',
        value: '+38%',
        desc: 'Faster kinetic reflexes and decision-making under pressure.',
      },
      {
        label: 'MENTAL GRIT',
        value: '100%',
        desc: 'Zero-distraction focus forged in authentic sparring rounds.',
      },
      {
        label: 'FUNCTIONAL POWER',
        value: 'REAL',
        desc: 'Combat-tested biomechanics that translate outside the gym.',
      },
    ],
  },

  // =========================================================================
  // SCREEN 2: THE DEAL (LOGOS)
  // =========================================================================
  screen2Logos: {
    sectionTag: 'SCREEN 02 // EL ESTÁNDAR MÁS ALTO',
    sectionH2: {
      label: '[SCREEN 2 H2: EL ESTÁNDAR]',
      guidance: 'Present the complete, uncompromised training ecosystem in one clear statement.',
      currentValue: 'La academia de esgrima histórica de estandar más alto de chile',
      suggestedWordCount: '8-12 words',
      conversionRole: 'Rational Value Presentation',
    },
    sectionSubhead: {
      label: '[SCREEN 2 SUBHEAD]',
      guidance: 'Reassure them that everything needed for full physical evolution is housed under one roof.',
      currentValue: 'Queremos ser el mejor club posible para la mayor cantidad de personas posibles',
      suggestedWordCount: '12-16 words',
      conversionRole: 'Holistic Ecosystem Proof',
    },
    disciplines: [
      {
        id: 'discipline-01',
        badge: 'NIVEL INICIAL & AVANZADO',
        name: 'Clases de esgrima pensadas para principiantes y expertos',
        summary: 'Metodología pedagógica progresiva desde los primeros pasos biomecánicos hasta el perfeccionamiento técnico de nivel avanzado.',
        focusHighlights: ['Bases Técnicas y Desplazamientos', 'Guardias y Control del Arma', 'Sparring Gradual y Seguro'],
        graphicSpec: {
          id: 'graphic-disp-01',
          name: 'Discipline 01 Visual',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'Athlete executing precise technique in authentic training gear.',
          lightingAndMood: 'Matte dark background with high-contrast amber rim lighting.',
          framingNotes: 'Medium close-up focusing on form and intent.',
          placeholderImageUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1000&q=80',
        },
        technicalDetails: {
          curriculumOverview: 'Bloques de aprendizaje estructurados según tratados históricos europeos, adaptados tanto para quienes nunca han empuñado una espada como para practicantes experimentados.',
          weeklyFrequency: 'Clases formativas y técnicas regulares con soporte continuo.',
          gearRequired: 'Ropa deportiva estándar para tu primera clase de prueba. Todo el equipo de seguridad e indumentaria es facilitado por el club.',
          progressionBenchmark: 'Evaluación y progresión guiada por instructores certificados.',
        },
      },
      {
        id: 'discipline-02',
        badge: 'ALTO RENDIMIENTO',
        name: 'Entrenamientos competitivos para deportistas de alto rendimiento',
        summary: 'Preparación técnica, táctica y física de alta exigencia diseñada para atletas que compiten en torneos nacionales e internacionales de HEMA.',
        focusHighlights: ['Táctica de Combate en Torneo', 'Velocidad de Reacción y Presión', 'Análisis y Acondicionamiento Específico'],
        graphicSpec: {
          id: 'graphic-disp-02',
          name: 'Discipline 02 Visual',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'High-focus grapple or close-range positional grip work.',
          lightingAndMood: 'Dramatic directional studio lighting.',
          framingNotes: 'Dynamic low angle demonstrating balance and control.',
          placeholderImageUrl: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?auto=format&fit=crop&w=1000&q=80',
        },
        technicalDetails: {
          curriculumOverview: 'Ciclos de entrenamiento de alta intensidad enfocados en toma de decisiones bajo fatiga, timing de precisión y resolución competitiva.',
          weeklyFrequency: 'Módulos de combate competitivo, open mat y laboratorios tácticos.',
          gearRequired: 'Indumentaria reglamentaria FIE/HEMA completa para combate con armas de acero.',
          progressionBenchmark: 'Rankings internos y preparación para podios competitivos oficiales.',
        },
      },
      {
        id: 'discipline-03',
        badge: 'SOPORTE INTEGRAL',
        name: 'Apoyo integral para nuestros integrantes',
        summary: 'Acompañamiento cercano en preparación física, nutrición deportiva, asesoría técnica y un ambiente de camaradería incondicional.',
        focusHighlights: ['Preparación Física Marcial', 'Guía de Nutrición y Rendimiento', 'Comunidad y Respaldo Continuo'],
        graphicSpec: {
          id: 'graphic-disp-03',
          name: 'Discipline 03 Visual',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'Athlete working with kettlebells, trap bar, or explosive athletic drills.',
          lightingAndMood: 'Industrial aesthetic, textured dark concrete.',
          framingNotes: 'Wide framing capturing dedicated conditioning zone.',
          placeholderImageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
        },
        technicalDetails: {
          curriculumOverview: 'Plan integral que abarca salud articular, longevidad atlética, nutrición orientada a la competencia y soporte mutuo de equipo.',
          weeklyFrequency: 'Horarios flexibles de entrenamiento y seguimiento constante.',
          gearRequired: 'Ganas de superarse y actitud de colaboración con la comunidad.',
          progressionBenchmark: 'Crecimiento integral tanto en el aspecto marcial como personal y atlético.',
        },
      },
    ],
    facilityPillars: [
      {
        id: 'pillar-armas',
        title: '4 armas distintas para aprender',
        tagline: 'Versatilidad Marcial Histórica',
        description: 'Domina espada larga, espada ropera, sable militar y espada y broquel con fuentes primarias y rigor técnico.',
        iconName: 'Swords',
      },
      {
        id: 'pillar-precio',
        title: 'El mejor precio por clase de santiago',
        tagline: 'Accesibilidad y Valor Real',
        description: 'Planes accesibles y transparentes para que entrenes al más alto nivel sin barreras económicas innecesarias.',
        iconName: 'Tag',
      },
      {
        id: 'pillar-privado',
        title: 'Entrenamientos en recinto privado',
        tagline: 'Infraestructura Exclusiva',
        description: 'Instalaciones privadas dedicadas, seguras y equipadas para el entrenamiento marcial de primer nivel.',
        iconName: 'Shield',
      },
      {
        id: 'pillar-comunidad',
        title: 'Comunidad unida de deportistas',
        tagline: 'Hermandad y Respeto',
        description: 'Un colectivo de deportistas y esgrimistas comprometidos con el crecimiento colectivo y el apoyo mutuo.',
        iconName: 'Users',
      },
    ],
  },

  // =========================================================================
  // SCREEN 3: HARD PROOF & THE GLOWING YELLOW CTA (ETHOS)
  // =========================================================================
  screen3Ethos: {
    sectionTag: 'SCREEN 03 // AUTORIDAD & TRAYECTORIA',
    sectionH2: {
      label: '[SCREEN 3 H2: HARD PROOF]',
      guidance: 'State the undisputable authority, podium track record, and national prestige.',
      currentValue: 'La academia de esgrima historica más grande de chile',
      suggestedWordCount: '7-10 words',
      conversionRole: 'Ultimate Skepticism Crusher',
    },
    sectionSubhead: {
      label: '[SCREEN 3 SUBHEAD]',
      guidance: 'Reinforce that they are learning directly from nationally ranked competitors in the most winning club.',
      currentValue: 'Multiples sedes, instructores de calidad, reconocidos a nivel global',
      suggestedWordCount: '8-12 words',
      conversionRole: 'Pedigree Confirmation',
    },
    authorityProofs: [
      {
        id: 'proof-fighter-pedigree',
        statNumber: 'TOP 100',
        statLabel: 'Instructores rankeados en el top 100 global',
        proofBadge: 'PRESTIGIO INTERNACIONAL',
        description: 'Cuerpo docente activo en el circuito internacional HEMA con clasificaciones oficiales y experiencia competitiva de primer nivel.',
        highlightIcon: 'Trophy',
        customImageUrl: '',
        imageSpec: {
          id: 'img-ranked-fighter',
          name: 'Head Instructor / Top 10 Fighter Image',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px (Square / Badge)',
          subjectRecommendation: 'Head instructor portrait in competition uniform, active tournament photo, or federation ranking certificate.',
          lightingAndMood: 'Dramatic contrast, athletic focus, gold/dark background accents.',
          framingNotes: 'Centered athlete or federation emblem with high contrast.',
          placeholderImageUrl: '',
        },
      },
      {
        id: 'proof-oldest-club',
        statNumber: '2DA',
        statLabel: 'La segunda academia de esgrima historica más antigua de chile',
        proofBadge: 'TRAYECTORIA HISTÓRICA',
        description: 'Fundada en 2010, con más de una década formando esgrimistas y liderando la difusión del arte marcial en el país.',
        highlightIcon: 'Award',
        customImageUrl: '',
        imageSpec: {
          id: 'img-oldest-club',
          name: 'Historic Club Heritage / Foundation Crest',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px (Square / Badge)',
          subjectRecommendation: 'Academy founding banner, historic team photo, official federation charter, or academy championship crest.',
          lightingAndMood: 'Classic, vintage or sleek monochrome with gold highlight.',
          framingNotes: 'High-contrast emblem or archive team victory photo.',
          placeholderImageUrl: '',
        },
      },
      {
        id: 'proof-podium-winners',
        statNumber: '#1',
        statLabel: 'Club con mayor número de medallistas activos',
        proofBadge: 'RÉCORD COMPETITIVO',
        description: 'Líderes indiscutidos en el medallero nacional con el mayor registro de atletas en los podios de torneos oficiales.',
        highlightIcon: 'Medal',
        customImageUrl: '',
        imageSpec: {
          id: 'img-podium-winners',
          name: 'Championship Podium & Medal Archive Image',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px (Square / Badge)',
          subjectRecommendation: 'Team on competition medal podium, tournament trophy display, or gold medal showcase.',
          lightingAndMood: 'Triumphant, sharp lighting, tournament stadium atmosphere.',
          framingNotes: 'Podium stage or medal arrangement with clear focal point.',
          placeholderImageUrl: '',
        },
      },
    ],
    dealSummary: {
      headline: 'TEST OUR MATS WITH ZERO FINANCIAL RISK',
      subline: 'We do not sell complicated membership packages online. Your first class is 100% free. If you choose to join us, all payments are handled securely on-site.',
      terms: [
        '100% Free First Class — Zero Payment Needed Today',
        'No Credit Card Required Online',
        'Direct Training with Senior Coaching Staff',
        'Payments Handled Exclusively On-Site If You Join',
      ],
      glowingCtaText: 'CLAIM YOUR FREE FIRST CLASS NOW',
      glowingCtaSubtext: '⚡ Instant Confirmation • Lock In Your Free Session',
    },
  },

  // =========================================================================
  // SECTION 4: UNASSUMING UTILITY ANNEX (FOOTER / COLOPHON)
  // Legal things, address, operating hours, and compact FAQs
  // =========================================================================
  utilityFooter: {
    legalNotice: '© 2026 Modern Combat Athletics Academy. Registered Sports & Martial Arts Association. All rights reserved.',
    liabilityDisclaimer: 'Notice: Combat sports training involves physical exertion. All participants are supervised by certified instructors and on-site medical staff. Free trial sessions are subject to facility capacity.',
    faqs: [
      {
        id: 'faq-01',
        question: 'Do I need prior experience or high fitness for the free first class?',
        answer: 'None whatsoever. Every newcomer is guided through a controlled, non-injurious introductory onboarding session scaled precisely to your current physical baseline.',
      },
      {
        id: 'faq-02',
        question: 'What do I need to bring for my free session?',
        answer: 'Just standard athletic workout clothes (t-shirt/shorts) and a water bottle. All required technical equipment and sanitized gear are provided on premises free of charge.',
      },
      {
        id: 'faq-03',
        question: 'How do membership payments work after the free class?',
        answer: 'We do not lock you into confusing online billing tiers. If you decide to continue training after your free session, we complete membership enrollment and receive payments directly on-site at the front desk.',
      },
      {
        id: 'faq-04',
        question: 'Is there heavy sparring in the introductory classes?',
        answer: 'Strictly no. Beginner classes focus 100% on technique, balance, mitt drills, and controlled movements. Full contact sparring is reserved exclusively for advanced competition athletes under medical supervision.',
      },
    ],
  },
};
