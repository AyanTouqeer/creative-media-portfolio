import React, { useState } from 'react';
import { PhotoItem } from '../types';
import { ChevronLeft, ChevronRight, Eye, Camera, MapPin, Sparkles } from 'lucide-react';

interface FeaturedCarouselProps {
  items: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ items, onSelectPhoto }) => {
  const featuredEventItems = items.filter((item) => item.category === 'events' && item.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (featuredEventItems.length === 0) return null;

  const currentItem = featuredEventItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredEventItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredEventItems.length) % featuredEventItems.length);
  };

  return (
    <section className="py-16 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-900">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIMARY HIGHLIGHT REEL</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              LIVE EVENT COVERAGE
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-xs font-mono text-neutral-400">
              {String(currentIndex + 1).padStart(2, '0')} / {String(featuredEventItems.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white transition-all focus:outline-none"
                aria-label="Previous highlight"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-white transition-all focus:outline-none"
                aria-label="Next highlight"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[500px]">
            {/* Image Container */}
            <div className="lg:col-span-8 relative overflow-hidden bg-neutral-950 flex items-center justify-center">
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900/90" />

              {/* Quick Lightbox Action Overlay */}
              <button
                onClick={() => onSelectPhoto(currentItem)}
                className="absolute top-4 right-4 px-4 py-2 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 text-xs font-medium text-white backdrop-blur-md flex items-center gap-2 transition-all shadow-lg"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>View Full-Res</span>
              </button>
            </div>

            {/* Content Details Box */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider">
                    {currentItem.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">· {currentItem.date}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 leading-snug">
                  {currentItem.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {currentItem.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-6 bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-800/80">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{currentItem.location}</span>
                </div>
              </div>

              {/* EXIF Specifications */}
              <div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>SHOT METADATA & ATMOSPHERE</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-neutral-950/80 p-3 rounded-lg border border-neutral-800 mb-6">
                  <div>
                    <span className="text-neutral-400 text-[10px] block">FORMAT</span>
                    <span className="text-neutral-200">{currentItem.specs.format}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 text-[10px] block">MOOD</span>
                    <span className="text-neutral-200">{currentItem.specs.mood}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 text-[10px] block">LIGHTING</span>
                    <span className="text-neutral-200">{currentItem.specs.lighting}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 text-[10px] block">QUALITY</span>
                    <span className="text-neutral-200">{currentItem.specs.resolution}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPhoto(currentItem)}
                  className="w-full py-3 rounded-xl bg-neutral-100 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Eye className="w-4 h-4" />
                  <span>INSPECT HIGH-RES EXPOSURE</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {featuredEventItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
