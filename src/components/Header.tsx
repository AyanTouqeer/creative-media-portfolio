import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight, Instagram, Youtube, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'work', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'My Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Creative Arsenal', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-3 shadow-2xl border-b border-neutral-800/60'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-white group-hover:border-neutral-400 group-hover:bg-neutral-800 transition-all">
              <Camera className="w-5 h-5 text-neutral-200 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white tracking-wider group-hover:text-amber-400 transition-colors">
                AYAN TAUQEER
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                RAWALPINDI / ISLAMABAD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Quick Links */}
            <div className="flex items-center gap-2 border-r border-neutral-800 pr-3">
              <a
                href="https://instagram.com/m_ayantouqeer"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @m_ayantouqeer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@ayan_touqeer"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube @ayan_touqeer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-amber-400 text-neutral-950 font-semibold text-xs transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire / Booking</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200"
              aria-label="Inquire"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/m_ayantouqeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span>@m_ayantouqeer</span>
              </a>
              <a
                href="https://youtube.com/@ayan_touqeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>@ayan_touqeer</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-4 py-2 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs"
            >
              Collaborate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
