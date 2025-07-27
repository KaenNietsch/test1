'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showContactModal, setShowContactModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'hero', label: 'Anasayfa', icon: 'ri-home-line', href: '/' },
    { id: 'services', label: 'Hizmetler', icon: 'ri-tools-line', href: '/services' },
    { id: 'products', label: 'Ürünlerimiz', icon: 'ri-settings-line', href: '/products' },
    { id: 'about', label: 'Hakkımızda', icon: 'ri-information-line', href: '/about' },
    { id: 'gallery', label: 'Foto Galeri', icon: 'ri-gallery-line', href: '/gallery' },
    { id: 'contact', label: 'İletişim', icon: 'ri-phone-line', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/services') {
      setActiveSection('services');
    } else if (pathname === '/products') {
      setActiveSection('products');
    } else if (pathname === '/about') {
      setActiveSection('about');
    } else if (pathname === '/gallery') {
      setActiveSection('gallery');
    } else if (pathname === '/contact') {
      setActiveSection('contact');
    } else if (pathname === '/') {
      setActiveSection('hero');
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-red-500/20 shadow-lg shadow-red-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://www.ozaksa.com/images/logo/9912811960093-118-%C3%96ZAKSA-LOGO.png" 
                  alt="ÖZAKSA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl">ÖZAKSA</span>
                <span className="text-red-500 text-xs md:text-sm font-medium">OTOMOTİV</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-red-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-red-500 hover:text-white transition-colors cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-red-500/20 text-red-500'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <i className={`${item.icon} text-lg`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setShowContactModal(true)}
          className="group w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer animate-pulse"
        >
          <i className="ri-phone-line text-white text-xl group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-red-500/20 p-6">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">İletişime Geçin</h3>
              <p className="text-gray-300 text-sm">Size nasıl yardımcı olabiliriz?</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+903325015914"
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-phone-line text-xl" />
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-sm opacity-90">+90 332 501 59 14</div>
                </div>
              </a>

              <a
                href="tel:+905432877282"
                className="flex items-center space-x-3 p-4 bg-gray-800 border border-red-500/20 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-phone-line text-xl text-red-500" />
                <div>
                  <div className="font-semibold">Mobil</div>
                  <div className="text-sm opacity-90">+90 543 287 7282</div>
                </div>
              </a>

              <a
                href="mailto:ozaksamakina@gmail.com"
                className="flex items-center space-x-3 p-4 bg-gray-800 border border-red-500/20 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line text-xl text-red-500" />
                <div>
                  <div className="font-semibold">E-posta</div>
                  <div className="text-sm opacity-90">ozaksamakina@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}