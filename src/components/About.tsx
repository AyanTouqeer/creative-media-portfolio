import React from 'react';
import { Camera, MapPin, Mail, Instagram, Youtube, Award, Terminal, CheckCircle2, Sliders } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-b border-neutral-900 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Creator Portrait & Meta Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group">
              <img
                src="/assets/aistudio/Event_4_29f4d020.jpg"
                alt="Ayan Tauqeer Live Event & Media Showcase"
                className="w-full aspect-[4/5] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Creator Overlay Information */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-neutral-950/90 backdrop-blur-md border-t border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xl text-white">AYAN TAUQEER</h3>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-[11px] font-semibold">
                    VISUAL CREATOR
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rawalpindi & Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Floating Technical Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 glass-panel p-4 rounded-xl shadow-2xl max-w-xs border border-neutral-700/80 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">SPECIALIZATION</span>
                <span className="text-xs font-semibold text-white">High-Speed Events & Urban Geometry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Biography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE VISUAL PERSPECTIVE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              BRIDGING ACTIVE DOCUMENTATION & ARTISTIC EXPRESSION.
            </h2>

            <div className="space-y-4 text-neutral-300 text-base leading-relaxed mb-8">
              <p className="text-lg text-white font-medium">
                I am <span className="text-amber-400 font-semibold">Ayan Tauqeer</span>, a visual creator and multimedia enthusiast based in Rawalpindi and Islamabad.
              </p>
              <p>
                My work bridges the gap between active documentation and artistic expression, focusing on the raw energy of live events, the striking geometry of urban architecture, and the quiet moods found in everyday spaces.
              </p>
              <p>
                Whether maneuvering amidst the roaring jet formations at the Uraan Pakistan Fest, capturing high-octane stage lighting at concert venues, or framing the quiet shadow play across urban capital structures, my camera serves as a precision lens for storytelling.
              </p>
            </div>

            {/* Pillars of Practice */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400 mb-2">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">Live Events</h4>
                <p className="text-neutral-400 text-xs">Aviation, concerts, festivals, high-speed energy.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400 mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">Urban Architecture</h4>
                <p className="text-neutral-400 text-xs">Monolithic geometry, shadow angles, facade study.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">Everyday Moods</h4>
                <p className="text-neutral-400 text-xs">Street candidness, dusk lighting, twin-city culture.</p>
              </div>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:collaborate@ayantauqeer.xyz"
                  className="flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>collaborate@ayantauqeer.xyz</span>
                </a>
                <a
                  href="https://instagram.com/m_ayantouqeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-amber-400" />
                  <span>@m_ayantouqeer</span>
                </a>
                <a
                  href="https://youtube.com/@ayan_touqeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>@ayan_touqeer</span>
                </a>
              </div>

              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider transition-all duration-200"
              >
                START A PROJECT
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
