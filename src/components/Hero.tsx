import React from 'react';
import { HERO_BACKGROUND } from '../data/photos';
import { ArrowDown, Sparkles, MapPin, Play, Aperture } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHighlightClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHighlightClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950"
    >
      {/* Background Image with Dark Vignette & Cyber Grain */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND}
          alt="Ayan Tauqeer Photography Showcase Hero"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110 saturate-90 transition-transform duration-1000 ease-out"
        />
        {/* Layered Overlays for Dark Cyber Editorial Minimalist Vibe */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/60 to-neutral-950" />
        <div className="absolute inset-0 noise-bg opacity-30" />
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-neutral-800 flex justify-between">
          <div className="border-r border-neutral-800/50 w-1/4 h-full hidden md:block" />
          <div className="border-r border-neutral-800/50 w-1/4 h-full hidden sm:block" />
          <div className="border-r border-neutral-800/50 w-1/4 h-full hidden md:block" />
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 text-xs font-mono text-neutral-300 mb-6 backdrop-blur-md shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide">VISUAL CREATOR & MULTIMEDIA ENTHUSIAST</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" /> RAWALPINDI & ISLAMABAD
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 leading-none">
          AYAN TAUQEER
        </h1>

        {/* Subtitle / Tagline */}
        <p className="font-display text-lg sm:text-2xl font-medium text-neutral-300 tracking-wider mb-6 max-w-3xl uppercase">
          Creative Media & Photography Showcase
        </p>

        {/* Editorial Bio Teaser */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-10 text-balance">
          Bridging active documentation and artistic expression—capturing the raw energy of live events,
          striking urban architecture, and quiet moods across twin-city landscapes.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-100 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-2xl hover:shadow-amber-400/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Aperture className="w-4 h-4" />
            <span>EXPLORE WORK</span>
          </button>

          <button
            onClick={onHighlightClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-sm tracking-wide border border-neutral-700/80 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>EVENT HIGHLIGHTS</span>
          </button>
        </div>

        {/* Quantitative Badges / Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-neutral-800/80 w-full max-w-4xl">
          <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/40 backdrop-blur-sm">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">30+</span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Curated Captures
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/40 backdrop-blur-sm">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">Live</span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Event Highlights
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/40 backdrop-blur-sm">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">High-Retention</span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Media Post-Production
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/40 backdrop-blur-sm">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">Twin Cities</span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Location Hub
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#work"
          className="mt-12 text-neutral-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to portfolio gallery"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 group-hover:text-amber-400">
            SCROLL DOWN
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-neutral-400 group-hover:text-amber-400" />
        </a>
      </div>
    </section>
  );
};
