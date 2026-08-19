/**
 * @file ProofImageUploadModal.tsx
 * @description Clean, intuitive image attachment modal for the Authority Proof cards.
 * Enables direct image upload or image URL attachment with clean previews.
 */

import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Link2, Check } from 'lucide-react';
import { AuthorityProof } from '../types';

interface ProofImageUploadModalProps {
  proof: AuthorityProof | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveImage: (proofId: string, imageUrl: string) => void;
}

export const ProofImageUploadModal: React.FC<ProofImageUploadModalProps> = ({
  proof,
  isOpen,
  onClose,
  onSaveImage,
}) => {
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  if (!isOpen || !proof) return null;

  const currentActiveUrl = previewUrl || proof.customImageUrl || '';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      setImageUrlInput(objectUrl);
    }
  };

  const handleSave = () => {
    const finalUrl = imageUrlInput.trim() || previewUrl;
    onSaveImage(proof.id, finalUrl);
    onClose();
  };

  const handleClearImage = () => {
    setImageUrlInput('');
    setPreviewUrl('');
    onSaveImage(proof.id, '');
    onClose();
  };

  return (
    <div
      id="proof-image-upload-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-zinc-100 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Attach Image / Photo</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-zinc-100">
              {proof.statLabel} ({proof.statNumber})
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current / Preview Image Display */}
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center justify-center text-center">
          {currentActiveUrl ? (
            <div className="relative group w-32 h-32 rounded-xl overflow-hidden border-2 border-amber-500/60 shadow-lg mb-2">
              <img
                src={currentActiveUrl}
                alt={proof.statLabel}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/60 flex flex-col items-center justify-center text-zinc-500 mb-2">
              <ImageIcon className="w-8 h-8 mb-1 text-zinc-600" />
              <span className="text-xs text-zinc-400">No Image Attached</span>
            </div>
          )}

          <p className="text-xs text-zinc-400 max-w-sm">
            {proof.imageSpec?.subjectRecommendation || 'Upload a photo from your computer or paste an image link.'}
          </p>
        </div>

        {/* Input Methods: File Upload OR Direct URL */}
        <div className="space-y-3">
          {/* Method 1: Local File Upload */}
          <div>
            <label className="text-xs text-zinc-300 block mb-1 font-medium">
              Upload from Device
            </label>
            <label className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 text-xs text-zinc-200 cursor-pointer transition-colors">
              <Upload className="w-4 h-4 text-amber-400" />
              <span>Choose Image File (JPG, PNG, WebP)</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Method 2: Direct URL */}
          <div>
            <label className="text-xs text-zinc-300 block mb-1 font-medium">
              Or Paste an Image URL
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Link2 className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  placeholder="https://example.com/fighter-photo.jpg"
                  value={imageUrlInput}
                  onChange={(e) => {
                    setImageUrlInput(e.target.value);
                    setPreviewUrl(e.target.value);
                  }}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-800">
          {proof.customImageUrl ? (
            <button
              type="button"
              onClick={handleClearImage}
              className="text-xs text-rose-400 hover:underline cursor-pointer"
            >
              Remove Image (Restore Icon)
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Image</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
