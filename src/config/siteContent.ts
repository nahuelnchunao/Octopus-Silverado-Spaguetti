/**
 * @file siteContent.ts
 * @description Configuración de contenido oficial de la Academia de Esgrima Histórica de Chile (AEHCH).
 * Totalmente en español, consistente entre versión de escritorio y móvil.
 */

import { SiteContentConfig } from '../types';

export const initialSiteContent: SiteContentConfig = {
  gymMeta: {
    brandName: 'Academia de Esgrima Histórica de Chile (AEHCH)',
    brandSlogan: 'Citius, Altius, Fortius • Más Rápido, Más Alto, Más Fuerte',
    contactPhone: '+56 9 8412 9031',
    contactEmail: 'contacto@aehch.cl',
    facilityAddress: 'Santiago, Chile • Sedes de Entrenamiento Central y Oriente',
    operatingHours: 'LUN-VIE: 18:00 - 22:00 | SÁB: 10:00 - 15:00',
  },

  navigation: {
    logoPlaceholder: 'AEHCH',
    primaryCtaText: 'CLASE DE PRUEBA',
    primaryCtaSubtext: '100% Gratis • Sin Compromiso',
  },

  // =========================================================================
  // SCREEN 1: THE HOOK (PATHOS)
  // =========================================================================
  screen1Pathos: {
    sectionTag: 'PANTALLA 01 // EL INICIO',
    heroBadge: {
      label: '[INSIGNIA DEL HÉROE]',
      guidance: 'Afirmación directa del condicionamiento técnico y espiritual.',
      currentValue: 'VELOCIDAD EXPLOSIVA • FOCO TOTAL • ESPÍRITU MARCIAL',
      suggestedWordCount: '4-7 palabras',
      conversionRole: 'Captador de Atención',
    },
    heroH1: {
      label: '[H1 PRINCIPAL]',
      guidance: 'Llamado directo al esgrimista.',
      currentValue: 'TE HAREMOS MÁS RÁPIDO. FORJAREMOS TU CARÁCTER.',
      suggestedWordCount: '8-12 palabras',
      conversionRole: 'Gancho de Alto Impacto',
    },
    heroSubhead: {
      label: '[SUBTÍTULO HERO]',
      guidance: 'Presentación de la academia y su disciplina marcial histórica.',
      currentValue: 'Sin modas pasajeras. Estudia las verdaderas fuentes de combate europeo con instructores rankeados y una comunidad dedicada.',
      suggestedWordCount: '18-24 palabras',
      conversionRole: 'Alineación de Identidad',
    },
    primaryCta: {
      label: '[BOTÓN CTA PRINCIPAL]',
      guidance: 'Invitación sin fricción a clase de prueba.',
      currentValue: 'SOLICITA TU CLASE DE PRUEBA',
      suggestedWordCount: '4-6 palabras',
      conversionRole: 'Reserva Directa',
    },
    heroGraphic: {
      id: 'hero-cinematic-visual',
      name: 'Gráfico Hero Esgrima Histórica',
      aspectRatio: '16:9',
      recommendedResolution: '1920 x 1080 px',
      subjectRecommendation: 'Silueta de esgrimista en postura de guardia con espada larga.',
      lightingAndMood: 'Fondos oscuros de grafito con iluminación ámbar cálida.',
      framingNotes: 'Composición limpia con tipografía de alto contraste.',
      placeholderImageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1920&q=80',
    },
    hookMetrics: [
      {
        label: 'VELOCIDAD DE REACCIÓN',
        value: '+38%',
        desc: 'Reflejos cinéticos rápidos y toma de decisiones tácticas bajo presión.',
      },
      {
        label: 'FORTALEZA MENTAL',
        value: '100%',
        desc: 'Concentración absoluta forjada en asaltos y combate libre con armas históricas.',
      },
      {
        label: 'POTENCIA FUNCIONAL',
        value: 'REAL',
        desc: 'Biomecánica marcial aplicada que desarrolla atletismo y longevidad.',
      },
    ],
  },

  // =========================================================================
  // SCREEN 2: THE DEAL (LOGOS)
  // =========================================================================
  screen2Logos: {
    sectionTag: 'PANTALLA 02 // EL ESTÁNDAR MÁS ALTO',
    sectionH2: {
      label: '[H2 SCREEN 2: EL ESTÁNDAR]',
      guidance: 'Afirmación de excelencia técnica.',
      currentValue: 'La academia de esgrima histórica de estándar más alto de Chile',
      suggestedWordCount: '8-12 palabras',
      conversionRole: 'Presentación de Valor Racional',
    },
    sectionSubhead: {
      label: '[SUBTÍTULO SCREEN 2]',
      guidance: 'Enfoque de accesibilidad y excelencia.',
      currentValue: 'Queremos ser el mejor club posible para la mayor cantidad de personas posibles',
      suggestedWordCount: '12-16 palabras',
      conversionRole: 'Validación del Ecosistema Integral',
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
          name: 'Visual Disciplina 01',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'Atleta ejecutando técnica con espada larga en indumentaria oficial.',
          lightingAndMood: 'Fondo oscuro grafito con contraste dorado.',
          framingNotes: 'Plano medio enfocado en la precisión técnica.',
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
          name: 'Visual Disciplina 02',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'Combate dinámico a distancia media con equipamiento completo.',
          lightingAndMood: 'Iluminación deportiva direccional de alto contraste.',
          framingNotes: 'Ángulo dinámico que muestra equilibrio y control.',
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
          name: 'Visual Disciplina 03',
          aspectRatio: '4:3',
          recommendedResolution: '1000 x 750 px',
          subjectRecommendation: 'Atleta realizando ejercicios de acondicionamiento físico funcional.',
          lightingAndMood: 'Estética sobria con tonos oscuros y cálidos.',
          framingNotes: 'Encuadre amplio en zona de acondicionamiento.',
          placeholderImageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
        },
        technicalDetails: {
          curriculumOverview: 'Plan integral que abarca salud articular, longevidad atlética, nutrición orientada a la práctica marcial y soporte de equipo.',
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
        description: 'Domina espada larga, espada ropera, sable militar y espada con broquel con fuentes primarias y rigor técnico.',
        iconName: 'Swords',
      },
      {
        id: 'pillar-precio',
        title: 'El mejor precio por clase de Santiago',
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
    sectionTag: 'PANTALLA 03 // AUTORIDAD & TRAYECTORIA',
    sectionH2: {
      label: '[H2 SCREEN 3: AUTORIDAD]',
      guidance: 'Autoridad indiscutida y trayectoria de podios.',
      currentValue: 'La academia de esgrima histórica más grande de Chile',
      suggestedWordCount: '7-10 palabras',
      conversionRole: 'Prueba de Liderazgo',
    },
    sectionSubhead: {
      label: '[SUBTÍTULO SCREEN 3]',
      guidance: 'Reconocimiento y prestigio del cuerpo de instructores.',
      currentValue: 'Múltiples sedes, instructores de calidad, reconocidos a nivel global',
      suggestedWordCount: '8-12 palabras',
      conversionRole: 'Confirmación de Trayectoria',
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
          name: 'Instructor Rankeado',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px',
          subjectRecommendation: 'Retrato de instructor con indumentaria de competencia.',
          lightingAndMood: 'Contraste dramático, enfoque atlético.',
          framingNotes: 'Centrado con alto contraste.',
          placeholderImageUrl: '',
        },
      },
      {
        id: 'proof-oldest-club',
        statNumber: '2DA',
        statLabel: 'La segunda academia de esgrima histórica más antigua de Chile',
        proofBadge: 'TRAYECTORIA HISTÓRICA',
        description: 'Fundada en septiembre de 2010, con más de una década formando esgrimistas y liderando la difusión del arte marcial en el país.',
        highlightIcon: 'Award',
        customImageUrl: '',
        imageSpec: {
          id: 'img-oldest-club',
          name: 'Emblema Histórico de Fundación',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px',
          subjectRecommendation: 'Estandarte de la academia o foto de equipo.',
          lightingAndMood: 'Monocromo sobrio con toque dorado.',
          framingNotes: 'Emblema nítido de alto contraste.',
          placeholderImageUrl: '',
        },
      },
      {
        id: 'proof-podium-winners',
        statNumber: '#1',
        statLabel: 'Club con mayor número de medallistas activos',
        proofBadge: 'RÉCORD COMPETITIVO',
        description: 'Líderes en el medallero nacional con el mayor registro de atletas en los podios de torneos oficiales de esgrima histórica.',
        highlightIcon: 'Medal',
        customImageUrl: '',
        imageSpec: {
          id: 'img-podium-winners',
          name: 'Medallistas y Podios',
          aspectRatio: '1:1',
          recommendedResolution: '600 x 600 px',
          subjectRecommendation: 'Equipo en podio de torneo.',
          lightingAndMood: 'Ambiente de victoria con iluminación nítida.',
          framingNotes: 'Podio con foco claro.',
          placeholderImageUrl: '',
        },
      },
    ],
    dealSummary: {
      headline: 'Entrena esgrima con nosotros, con total seguridad.',
      subline: 'No vendemos planes complicados, ofrecemos clases de prueba, y los estudiantes tienen descuento.',
      terms: [
        'Clase de prueba disponible para nuevos alumnos',
        'Descuento preferencial para estudiantes',
        'Sin contratos forzosos ni planes complicados',
        'Equipamiento de seguridad y supervisión experta',
      ],
      glowingCtaText: 'SOLICITA TU CLASE DE PRUEBA',
      glowingCtaSubtext: '⚡ Confirmación Rápida • Entrena con Seguridad',
    },
  },

  // =========================================================================
  // SECTION 4: UNASSUMING UTILITY ANNEX (FOOTER / COLOPHON)
  // =========================================================================
  utilityFooter: {
    legalNotice: '© 2026 Academia de Esgrima Histórica de Chile (AEHCH). Todos los derechos reservados.',
    liabilityDisclaimer: 'Nota: La práctica de esgrima histórica se realiza bajo supervisión de instructores certificados y con protocolos estrictos de seguridad. Las clases de prueba están sujetas a cupos disponibles.',
    faqs: [
      {
        id: 'faq-01',
        question: '¿Necesito experiencia previa o condición física especial para la clase de prueba?',
        answer: 'Para nada. Cada nuevo integrante es guiado a través de una sesión introductoria controlada y progresiva, adaptada exactamente a tu nivel inicial.',
      },
      {
        id: 'faq-02',
        question: '¿Qué necesito llevar para mi primera clase?',
        answer: 'Solo ropa deportiva cómoda (pantalón largo deportivo o buzo, polera, zapatillas) y una botella de agua. Todo el equipamiento de seguridad y armas de práctica es provisto por la academia.',
      },
      {
        id: 'faq-03',
        question: '¿Cómo funcionan los pagos y planes de membresía?',
        answer: 'No te amarramos a planes complicados por internet. Si decides integrarte tras tu clase de prueba, los detalles y pagos se gestionan directamente de forma transparente y con descuento para estudiantes.',
      },
      {
        id: 'faq-04',
        question: '¿Hay combate con fuerza o peligro en las clases iniciales?',
        answer: 'No. Las clases formativas se enfocan 100% en la técnica biomecánica, desplazamientos, control del arma y ejercicios de timing controlados. El combate libre de alta intensidad está reservado para niveles avanzados con indumentaria completa.',
      },
    ],
  },
};
