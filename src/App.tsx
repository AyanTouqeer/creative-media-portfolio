import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { ServicesGear } from './components/ServicesGear';
import { Contact } from './components/Contact';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { PHOTOS_DATA } from './data/photos';
import { PhotoItem } from './types';
import { Mail } from 'lucide-react';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Header Bar */}
      <Header onOpenContact={() => handleOpenContactWithService()} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('work')}
          onHighlightClick={() => scrollToSection('highlights')}
        />

        {/* Primary Event Highlights Carousel */}
        <div id="highlights">
          <FeaturedCarousel
            items={PHOTOS_DATA}
            onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          />
        </div>

        {/* Portfolio Gallery */}
        <Gallery
          photos={PHOTOS_DATA}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        />

        {/* About & Bio Section */}
        <About onOpenContact={() => handleOpenContactWithService()} />

        {/* The Creative Arsenal Section (Replaces Services & Gear) */}
        <ServicesGear />

        {/* Contact Form & Links */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        allPhotos={PHOTOS_DATA}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        onInquire={(title) => handleOpenContactWithService(title)}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Inquiry Button (Mobile / Quick Access) */}
      <button
        onClick={() => handleOpenContactWithService()}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center gap-2 group"
        aria-label="Quick Contact Inquiry"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden group-hover:inline text-xs font-mono tracking-wider font-extrabold pr-1">
          INQUIRE NOW
        </span>
      </button>
    </div>
  );
}
