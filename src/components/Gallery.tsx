import React, { useState, useMemo } from 'react';
import { PhotoItem, PhotoCategory } from '../types';
import { Filter, Eye, Camera, MapPin, Grid, Layers, Search, Sparkles } from 'lucide-react';

interface GalleryProps {
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ photos, onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState<'masonry' | 'grid'>('masonry');

  const categories: { key: PhotoCategory; label: string; count: number }[] = useMemo(() => {
    return [
      { key: 'all', label: 'All Works', count: photos.length },
      { key: 'events', label: 'Live Events', count: photos.filter((p) => p.category === 'events').length },
      { key: 'architecture', label: 'Architecture', count: photos.filter((p) => p.category === 'architecture').length },
      { key: 'casual', label: 'Casual & Moods', count: photos.filter((p) => p.category === 'casual').length },
    ];
  }, [photos]);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [photos, activeCategory, searchQuery]);

  return (
    <section id="work" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-900">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>THE PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              MY WORK
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              A curated collection of live event highlights, architectural geometry, and candid everyday moods from Rawalpindi & Islamabad.
            </p>
          </div>

          {/* Search Input & Layout Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tags, location, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 w-48 sm:w-64 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Layout Toggle */}
            <div className="hidden sm:flex items-center bg-neutral-900 p-1 rounded-full border border-neutral-800">
              <button
                onClick={() => setLayoutMode('masonry')}
                className={`p-1.5 rounded-full text-xs transition-all ${
                  layoutMode === 'masonry' ? 'bg-neutral-800 text-amber-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
                title="Masonry View"
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-full text-xs transition-all ${
                  layoutMode === 'grid' ? 'bg-neutral-800 text-amber-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
                title="Uniform Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-100 text-neutral-950 font-bold shadow-lg'
                    : 'bg-neutral-900/90 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-neutral-950 text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Display */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-display font-semibold text-white">No Captures Match Criteria</h3>
            <p className="text-neutral-400 text-xs mt-1">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-neutral-800 text-white text-xs hover:bg-neutral-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              layoutMode === 'masonry'
                ? 'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            }
          >
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer shadow-lg hover:shadow-2xl hover:border-neutral-600 transition-all duration-300 transform hover:-translate-y-1 break-inside-avoid"
              >
                {/* Photo Image */}
                <div className={layoutMode === 'grid' ? 'aspect-[4/3] overflow-hidden' : 'relative overflow-hidden'}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Category Pill Badge (Always Visible Top Left) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 border border-neutral-800 text-[10px] font-mono text-neutral-300 backdrop-blur-md">
                    {photo.category === 'events' ? 'LIVE EVENT' : photo.category === 'architecture' ? 'ARCHITECTURE' : 'CASUAL & MOOD'}
                  </span>
                </div>

                {/* Featured Star Badge */}
                {photo.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 rounded-md bg-amber-400 text-neutral-950 text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 fill-neutral-950" /> FEATURED
                    </span>
                  </div>
                )}

                {/* Hover Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {photo.location}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">{photo.specs.format}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1 leading-snug">
                    {photo.title}
                  </h3>

                  <p className="text-neutral-300 text-xs line-clamp-2 mb-3">
                    {photo.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {photo.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono bg-neutral-900/90 text-neutral-400 px-1.5 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-white font-bold group-hover:text-amber-400">
                      <span>View</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
