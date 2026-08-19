/**
 * @file Footer.tsx
 * @description The unassuming 4th section (Colophon / Utility Footer).
 * Styled with subtle diagonal dark gray gradients across containers and Spanish copy.
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronDown, 
  Building
} from 'lucide-react';
import { SiteContentConfig } from '../types';

interface FooterProps {
  content: SiteContentConfig;
  onOpenTrialModal: () => void;
  onOpenInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <footer
      id="main-site-colophon-footer"
      className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 font-sans text-xs"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Header Note */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-amber-500" />
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {content.gymMeta.brandName} • DIRECTORIO Y ANEXO LEGAL
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Left (Address & Contact) / Right (Compact FAQs) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Facility Logistics (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-xs font-bold text-zinc-200 uppercase tracking-wider block">
              Sedes de la Academia & Contacto
            </span>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{content.gymMeta.facilityAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{content.gymMeta.operatingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{content.gymMeta.contactPhone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{content.gymMeta.contactEmail}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 text-[11px] text-zinc-400 space-y-2">
              <p>{content.utilityFooter.liabilityDisclaimer}</p>
            </div>
          </div>

          {/* Col 2: Compact FAQs (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <span className="font-display text-xs font-bold text-zinc-200 uppercase tracking-wider block">
              Preguntas Frecuentes (FAQ)
            </span>

            <div className="space-y-2.5">
              {content.utilityFooter.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className="border border-zinc-700/80 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-zinc-950 overflow-hidden transition-colors shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-3 px-4 flex items-center justify-between gap-3 text-left text-xs font-medium text-zinc-200 hover:text-amber-400 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-1 text-[11px] text-zinc-400 leading-relaxed border-t border-zinc-800/60 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>{content.utilityFooter.legalNotice}</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">Inscripciones y planes coordinados directamente en la sede.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
