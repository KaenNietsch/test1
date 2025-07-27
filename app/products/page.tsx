'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import dynamic from 'next/dynamic';

const ProductsHero = dynamic(() => import('./ProductsHero'), { ssr: false });
const ProductCategories = dynamic(() => import('./ProductCategories'), { ssr: false });
const ProductCatalog = dynamic(() => import('./ProductCatalog'), { ssr: false });

export default function ProductsPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <ProductsHero />
      <ProductCategories />
      <ProductCatalog />
      <Footer />
    </div>
  );
}
