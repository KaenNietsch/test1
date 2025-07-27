'use client';

import { useEffect, useRef, useState } from 'react';

export default function QualityStandards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const standards = [
    {
      title: "ISO 9001",
      description: "Kalite Yönetim Sistemi sertifikası ile uluslararası standartlarda üretim",
      icon: "ri-award-line",
      color: "from-red-600 to-red-500"
    },
    {
      title: "CE Belgesi",
      description: "Avrupa Birliği standartlarına uygunluk belgesi",
      icon: "ri-shield-check-line",
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "TSE Standartları",
      description: "Türk Standartları Enstitüsü kalite güvencesi",
      icon: "ri-verified-badge-line",
      color: "from-green-600 to-green-500"
    },
    {
      title: "Kalite Güvencesi",
      description: "Üretimden teslimata kadar 100% kalite kontrolü",
      icon: "ri-star-line",
      color: "from-yellow-600 to-yellow-500"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Hammadde Kontrolü",
      description: "Gelen tüm hammaddelerin kalite spesifikasyonlarına uygunluğu kontrol edilir",
      icon: "ri-search-line"
    },
    {
      step: "02",
      title: "Üretim Süreci",
      description: "Modern CNC tezgahlarla hassas işleme ve sürekli kalite takibi",
      icon: "ri-settings-line"
    },
    {
      step: "03",
      title: "Kalite Kontrol",
      description: "Ürünlerin teknik spesifikasyonlara uygunluğu detaylı olarak test edilir",
      icon: "ri-microscope-line"
    },
    {
      step: "04",
      title: "Final Testi",
      description: "Sevkiyat öncesi son kalite kontrolü ve performans testleri",
      icon: "ri-checkbox-circle-line"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="quality-standards"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(30deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(150deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Kalite</span>
            <span className="text-red-500 ml-4">Standartları</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Uluslararası kalite standartlarında üretim yaparak müşterilerimize güvenilir çözümler sunuyoruz
          </p>
        </div>

        {/* Standards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {standards.map((standard, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <i className={`${standard.icon} text-2xl text-white`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-red-500 transition-colors duration-300">
                {standard.title}
              </h3>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                {standard.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Quality Process */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Kalite Sürecimiz</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processes.map((process, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${process.icon} text-red-500 text-2xl`} />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-3">{process.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                  
                  {/* Connector Line */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl">
              <div className="text-3xl font-bold text-red-500 mb-2">99.8%</div>
              <div className="text-gray-300 text-sm">Kalite Oranı</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Test Edilen Ürün</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Kalite Kontrolü</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl">
              <div className="text-3xl font-bold text-red-500 mb-2">5 Yıl</div>
              <div className="text-gray-300 text-sm">Garanti Süresi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}