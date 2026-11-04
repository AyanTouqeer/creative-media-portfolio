export type PhotoCategory = 'all' | 'events' | 'architecture' | 'casual';

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotoCategory;
  categoryLabel: string;
  src: string;
  fallbackSrc?: string;
  featured?: boolean;
  heroHighlight?: boolean;
  location: string;
  date: string;
  description: string;
  specs: {
    format: string;
    mood: string;
    lighting: string;
    resolution: string;
  };
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}
