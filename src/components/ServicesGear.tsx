import React from 'react';

export const ServicesGear: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-neutral-950 border-t border-b border-neutral-900">
      <div className="py-16 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white mb-8 tracking-widest uppercase border-b border-zinc-800 pb-4">
          The Creative Arsenal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: Post-Production */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors">
            <h4 className="text-xs text-amber-500 font-mono tracking-widest mb-3">01. DIGITAL POST-PRODUCTION</h4>
            <p className="text-lg text-white font-semibold mb-2">CapCut, Twixtor & ElevenLabs</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Transforming raw footage into high-retention content. Specializing in frame interpolation, AI voice synthesis, and dynamic pacing to make even the roughest media speak volumes.
            </p>
          </div>

          {/* Box 2: Storytelling */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors">
            <h4 className="text-xs text-amber-500 font-mono tracking-widest mb-3">02. NARRATIVE & DIRECTION</h4>
            <p className="text-lg text-white font-semibold mb-2">Storytelling & Original Composition</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Beyond the visuals, it is about the script and the soul. From structuring historical documentaries to writing original Urdu ghazals, the story always dictates the medium.
            </p>
          </div>

          {/* Box 3: Short-Form Video */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors">
            <h4 className="text-xs text-amber-500 font-mono tracking-widest mb-3">03. SHORT-FORM VIDEO</h4>
            <p className="text-lg text-white font-semibold mb-2">High-Retention Micro-Content</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Engineering viral pacing for TikTok, Instagram Reels, and YouTube Shorts. Applying dynamic motion, frame interpolation, and rapid hooks to drive audience engagement across diverse niches, from gaming highlights to historical documentaries.
            </p>
          </div>

          {/* Box 4: Multi-Channel Strategy */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors">
            <h4 className="text-xs text-amber-500 font-mono tracking-widest mb-3">04. MULTI-CHANNEL STRATEGY</h4>
            <p className="text-lg text-white font-semibold mb-2">Audience Architecture</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Developing tailored content across distinct niches—from fitness conditioning to gaming and software tutorials—understanding the exact visual language required to capture diverse audiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
