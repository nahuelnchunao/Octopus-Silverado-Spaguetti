/**
 * @file TrialBookingModal.tsx
 * @description Frictionless Free First Class reservation modal.
 * 100% Free • No online payment or credit card required • Payments handled on-site if they join.
 */

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, User, Mail, Phone, Flame, Lock, ArrowRight } from 'lucide-react';
import { SiteContentConfig } from '../types';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContentConfig;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDiscipline: 'Discipline 01 (Primary Combat Art)',
    experienceLevel: 'Complete Beginner (Zero Experience)',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="trial-booking-modal-portal"
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center p-4">
        <div
          id="trial-booking-modal-box"
          className="relative bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 space-y-6 overflow-hidden"
        >
          {/* Top Yellow Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% FREE FIRST CLASS RESERVATION</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100 uppercase tracking-wide">
                Reserve Your Free Session
              </h3>
              <p className="text-xs text-zinc-400">
                Zero Fees • No Credit Card Required • Payments Received On-Site
              </p>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 flex items-center justify-center transition-colors border border-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs"
                  />
                </div>
              </div>

              {/* Discipline Interest */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  Preferred Discipline to Try:
                </label>
                <select
                  value={formData.preferredDiscipline}
                  onChange={(e) => setFormData({ ...formData, preferredDiscipline: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 text-xs"
                >
                  <option value="Discipline 01 (Primary Combat Art)">Discipline 01 (Primary Combat Art)</option>
                  <option value="Discipline 02 (Close-Range & Control)">Discipline 02 (Close-Range & Control)</option>
                  <option value="Discipline 03 (Combat Conditioning)">Discipline 03 (Combat Conditioning)</option>
                  <option value="All Disciplines (Coach Recommendation)">All Disciplines (Coach Recommendation)</option>
                </select>
              </div>

              {/* On-Site Payment Assurance Note */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 flex items-start gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Online Charges:</strong> Your first session is 100% free. If you love the training and choose to join our academy, all ongoing memberships are completed securely in-person at our reception desk.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="modal-confirm-free-class-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/20 cursor-pointer"
              >
                <span>Confirm Free First Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-zinc-100">
                Free Class Reserved!
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                We have registered your free session for <strong>{formData.fullName}</strong>. Our admissions team will SMS you the confirmation and locker details at <strong>{formData.phone}</strong>.
              </p>
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-[11px] text-zinc-400">
                Facility Address: {content.gymMeta.facilityAddress}
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-display font-bold text-xs uppercase tracking-wider"
              >
                Return to Academy Overview
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
