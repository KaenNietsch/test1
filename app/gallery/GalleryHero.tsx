
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function GalleryHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    const particleData = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4
    }));
    setParticles(particleData);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-black to-red-900/20 overflow-hidden"
      suppressHydrationWarning={true}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20automotive%20transmission%20gearbox%20manufacturing%20workshop%20with%20red%20industrial%20machinery%20and%20professional%20equipment%2C%20sophisticated%20engineering%20facility%20with%20precision%20tools%20and%20metalworking%20stations%2C%20clean%20industrial%20environment%20with%20professional%20lighting%20and%20organized%20workspace%2C%20high-tech%20production%20line%20with%20advanced%20manufacturing%20technology&width=1920&height=1080&seq=gallery-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-full opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.4) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-1/4 left-1/6 w-20 h-20 md:w-32 md:h-32 border-2 border-red-500/40"
            style={{
              transform: `rotate(${scrollY * 0.3}deg)`,
            }}
          />
          <div 
            className="absolute top-2/3 right-1/4 w-16 h-16 md:w-24 md:h-24 border-2 border-red-500/30 rounded-full"
            style={{
              transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
            }}
          />
          <div 
            className="absolute top-1/2 left-3/4 w-12 h-12 md:w-20 md:h-20 bg-red-500/20 rounded-full blur-xl"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.005) * 30}px)`,
            }}
          />
        </div>

        {/* Industrial Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
        <div className="text-center max-w-6xl">
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #ef4444 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transform: `translateY(${scrollY * -0.3}px)`,
            }}
          >
            <span className="block font-serif italic">Üretim</span>
            <span className="block font-sans">Galerisi</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 font-light tracking-wide leading-relaxed px-4"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.001),
            }}
          >
            Modern üretim tesisimiz ve hassas imalat süreçlerimizi keşfedin.<br className="hidden sm:block" />
            <span className="text-red-500 font-serif italic">Kaliteli işçilik ve teknoloji bir arada.</span>
          </p>

          <div 
            className="flex flex-col items-center space-y-6"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center items-center">
              <button 
                onClick={() => scrollToSection('production-gallery')}
                className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-base sm:text-lg tracking-wider hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 rounded-none whitespace-nowrap cursor-pointer"
              >
                <span className="group-hover:tracking-widest transition-all duration-300">GALERİYİ GÖRÜNTÜLE</span>
              </button>
              
              <Link href="/contact">
                <button className="group px-6 sm:px-8 py-3 border border-red-500 text-red-500 font-bold text-base sm:text-lg tracking-wider hover:bg-red-500 hover:text-white transition-all duration-500 rounded-none whitespace-nowrap cursor-pointer">
                  <span className="group-hover:tracking-widest transition-all duration-300">İLETİŞİM</span>
                </button>
              </Link>
            </div>
            
            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
            
            <div className="text-xs text-gray-500 uppercase tracking-widest animate-bounce">
              30 Yıllık Deneyim
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
