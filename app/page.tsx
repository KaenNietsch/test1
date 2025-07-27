'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Products />
      <About />
      <Footer />
    </div>
  );
}