'use client';

import ProductsHero from './ProductsHero';
import ProductCategories from './ProductCategories';
import ProductCatalog from './ProductCatalog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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