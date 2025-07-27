
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=modern%20automotive%20manufacturing%20facility%20with%20skilled%20engineers%20and%20red%20industrial%20machinery%2C%20professional%20corporate%20environment%20with%20sophisticated%20engineering%20workspace%20and%20team%20collaboration&width=1920&height=1080&seq=about-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hakkımızda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              1993 yılından beri tarım makinaları şanzıman imalatında 'Topluma ve çevreye saygı' ilkesiyle 
              hizmet veren güvenilir çözüm ortağınız.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">1993</div>
                <div className="text-gray-300 text-sm">Kuruluş Yılı</div>
              </div>
              <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">30+</div>
                <div className="text-gray-300 text-sm">Yıl Deneyim</div>
              </div>
              <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Teknik Destek</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">VİZYONUMUZ</span>
                </button>
              </Link>
              <Link href="/about">
                <button className="group px-8 py-4 border border-red-500 text-red-500 font-bold text-lg tracking-wide hover:bg-red-500 hover:text-white transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">MİSYONUMUZ</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Company Values */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Temel Değerlerimiz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-award-line text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Kalite</h4>
                    <p className="text-gray-300 text-sm">Üretimden teslimata kadar her aşamada en yüksek kalite standartlarını uyguluyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Güvenilirlik</h4>
                    <p className="text-gray-300 text-sm">30 yıllık deneyimimizle müşterilerimize güvenilir çözümler sunuyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-line text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Müşteri Memnuniyeti</h4>
                    <p className="text-gray-300 text-sm">Müşteri ihtiyaçlarını anlayarak en uygun çözümleri geliştiriyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-leaf-line text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Çevreye Saygı</h4>
                    <p className="text-gray-300 text-sm">Sürdürülebilir üretim anlayışıyla çevre dostu çözümler sunuyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
