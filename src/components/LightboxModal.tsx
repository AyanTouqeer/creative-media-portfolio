import React, { useEffect, useState } from 'react';
import { PhotoItem } from '../types';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Tag, Download, Share2, Check, Maximize2, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  photo: PhotoItem | null;
  allPhotos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  onInquire: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  allPhotos,
  onClose,
  onSelectPhoto,
  onInquire,
}) => {
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, allPhotos]);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    onSelectPhoto(allPhotos[nextIndex]);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    onSelectPhoto(allPhotos[prevIndex]);
    setIsZoomed(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/95 backdrop-blur-xl animate-fadeIn">
      {/* Top Bar Navigation inside Lightbox */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
            {currentIndex + 1} / {allPhotos.length}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
            AYAN TAUQEER SHOWCASE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            title="Copy Share Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            title="Toggle Fit / Zoom"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-amber-400 hover:text-neutral-950 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Lightbox Content Grid */}
      <div className="w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl relative flex flex-col lg:flex-row mt-12 mb-4">
        
        {/* Left: High-Res Image Display Area */}
        <div className="lg:w-7/12 relative min-h-[350px] sm:min-h-[480px] bg-neutral-950 flex items-center justify-center p-4">
          <img
            src={photo.src}
            alt={photo.title}
            className={`max-h-[75vh] w-auto object-contain transition-all duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-950/80 border border-neutral-800 text-white hover:bg-amber-400 hover:text-neutral-950 transition-all shadow-xl"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-950/80 border border-neutral-800 text-white hover:bg-amber-400 hover:text-neutral-950 transition-all shadow-xl"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Detailed Metadata & Specs Panel */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono text-amber-400 font-semibold uppercase">
                {photo.categoryLabel}
              </span>
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {photo.date}
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mb-3">
              {photo.title}
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4 bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-800">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{photo.location}</span>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {photo.description}
            </p>

            {/* Shot Metadata Specifications */}
            <div className="mb-6">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>SHOT METADATA & ATMOSPHERE</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                <div>
                  <span className="text-neutral-400 text-[10px] block">FORMAT</span>
                  <span className="text-white font-medium">{photo.specs.format}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] block">VISUAL MOOD</span>
                  <span className="text-white font-medium">{photo.specs.mood}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] block">LIGHTING</span>
                  <span className="text-white font-medium">{photo.specs.lighting}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] block">QUALITY</span>
                  <span className="text-white font-medium">{photo.specs.resolution}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-1.5 mb-6">
              <Tag className="w-3.5 h-3.5 text-neutral-400 mr-1" />
              {photo.tags.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono bg-neutral-950 text-neutral-400 px-2 py-1 rounded border border-neutral-800">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-neutral-800 space-y-2">
            <button
              onClick={() => {
                onClose();
                onInquire(`Media Licensing for: ${photo.title}`);
              }}
              className="w-full py-3 rounded-xl bg-neutral-100 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>INQUIRE MEDIA LICENSING</span>
            </button>
            <p className="text-center text-[10px] font-mono text-neutral-400">
              Press Esc or tap outside to close modal
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
