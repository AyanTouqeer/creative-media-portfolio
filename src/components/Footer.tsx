import React, { useState, useEffect } from 'react';
import { Camera, ArrowUp, Mail, Instagram, Youtube, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Pakistan Standard Time (UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Camera className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider block">
                  AYAN TAUQEER
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                  Creative Media Showcase
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs font-sans max-w-sm leading-relaxed">
              Active documentation & artistic photography across Rawalpindi and Islamabad. Live events, airshows, concerts, and architectural geometry.
            </p>

            {/* Islamabad Local Time Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>ISLAMABAD / PKT:</span>
              <span className="text-white font-bold">{time || '12:00 PM'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold text-white">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-sans text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors">Portfolio Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About & Bio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Commercial Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Booking</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold text-white">
              CONNECT & INQUIRE
            </span>
            <div className="space-y-2 font-sans text-xs">
              <a
                href="mailto:collaborate@ayantauqeer.xyz"
                className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>collaborate@ayantauqeer.xyz</span>
              </a>
              <a
                href="https://instagram.com/m_ayantouqeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-amber-400" />
                <span>Instagram: @m_ayantouqeer</span>
              </a>
              <a
                href="https://youtube.com/@ayan_touqeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube: @ayan_touqeer</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400 pt-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Rawalpindi & Islamabad, PK</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()} Ayan Tauqeer. All rights reserved. All media content protected under copyright.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all text-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
