'use client';

import GalleryHero from './GalleryHero';
import ProductionGallery from './ProductionGallery';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <GalleryHero />
      <ProductionGallery />
      <Footer />
    </div>
  );
}