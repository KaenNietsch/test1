
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number, size: number}>>([]);

  useEffect(() => {
    const particleData = Array.from({ length: 80 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: Math.random() * 3 + 1
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      suppressHydrationWarning={true}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20agricultural%20transmission%20and%20gearbox%20manufacturing%20facility%20with%20precision%20machinery%2C%20red%20and%20black%20industrial%20equipment%2C%20high-tech%20manufacturing%20environment%20with%20sophisticated%20gear%20systems%20and%20transmission%20components%2C%20clean%20modern%20factory%20with%20professional%20lighting&width=1920&height=1080&seq=ozaksa-hero-manufacturing&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Mouse Follow Glow */}
        <div 
          className="absolute w-full h-full opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.4) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-60">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 10}px)`,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          {/* Rotating Squares */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-500/40"
            style={{
              transform: `rotate(${45 + scrollY * 0.1}deg)`,
            }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-red-500/30 rounded-full"
            style={{
              transform: `rotate(${scrollY * -0.2}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
            }}
          />
          
          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  left: 0,
                  right: 0,
                  transform: `translateX(${Math.sin(Date.now() * 0.001 + i) * 20}px)`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-6xl w-full">
          <div 
            className="mb-8 transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * -0.3}px)`,
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span 
                className="block font-bold bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent animate-pulse"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease-in-out infinite',
                }}
              >
                ÖZAKSA
              </span>
              <span className="block text-red-500 font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                OTOMOTİV
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light leading-relaxed">
              Tarım Makinası <span className="text-red-500 font-semibold">Şanzıman</span> Sistemleri<br />
              <span className="text-red-500 font-semibold">1993</span>'ten beri <span className="text-red-500 font-semibold">Güvenilir</span> İmalat
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              <span className="text-red-500 text-sm uppercase tracking-widest">Topluma ve Çevreye Saygı</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            </div>
          </div>

          <div 
            className="flex flex-col items-center space-y-8"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25 cursor-pointer whitespace-nowrap"
              >
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">ÜRÜNLERİMİZİ KEŞFEDİN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link href="/contact">
                <button className="group relative px-8 py-4 border-2 border-red-500 text-red-500 font-bold text-lg tracking-wide overflow-hidden transition-all duration-500 hover:bg-red-500 hover:text-white cursor-pointer whitespace-nowrap">
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">İLETİŞİME GEÇİN</span>
                </button>
              </Link>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
              <div className="text-xs text-gray-400 uppercase tracking-widest animate-bounce">
                Aşağı Kaydırın
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
