'use client';

import ProductsHero from './ProductsHero';
import ProductCategories from './ProductCategories';
import ProductCatalog from './ProductCatalog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

//EK
import dynamic from 'next/dynamic';

const ProductCategories = dynamic(() => import('./ProductCategories'), { ssr: false });
const ProductsHero = dynamic(() => import('./ProductsHero'), { ssr: false });
const ProductCatalog = dynamic(() => import('./ProductCatalog'), { ssr: false });
//EK

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
