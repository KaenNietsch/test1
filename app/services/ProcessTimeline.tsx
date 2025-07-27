
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      phase: "Analiz",
      title: "Detaylı İhtiyaç Analizi",
      description: "Müşteri ihtiyaçlarını detaylı bir şekilde analiz ediyor, mevcut sistem ve gereksinimlerini değerlendiriyoruz.",
      duration: "1-2 gün",
      deliverables: ["İhtiyaç analizi raporu", "Teknik değerlendirme", "Maliyet analizi"],
      icon: "ri-search-eye-line"
    },
    {
      phase: "Tasarım",
      title: "Mühendislik Tasarımı",
      description: "Deneyimli mühendis ekibimiz, ihtiyaçlarınıza özel şanzıman sistemlerini tasarlıyor ve optimize ediyor.",
      duration: "3-5 gün", 
      deliverables: ["Teknik çizimler", "3D modelleme", "Performans hesaplamaları"],
      icon: "ri-pencil-ruler-line"
    },
    {
      phase: "Üretim",
      title: "Hassas İmalat",
      description: "Modern CNC tezgahlarımız ve kalite kontrol sistemlerimizle en yüksek standartlarda üretim gerçekleştiriyoruz.",
      duration: "5-10 gün",
      deliverables: ["Hassas imalat", "Kalite kontrol", "Test ve onay"],
      icon: "ri-hammer-line"
    },
    {
      phase: "Teslimat",
      title: "Kurulum ve Destek",
      description: "Ürünün teslimi, kurulumu ve devreye alınması sürecinde tam destek sağlıyor, sürekli takip ediyoruz.",
      duration: "Devam eden",
      deliverables: ["Kurulum desteği", "Eğitim hizmeti", "Teknik destek"],
      icon: "ri-truck-line"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    // Auto-advance timeline
    const interval = setInterval(() => {
      if (isVisible) {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [isVisible, processSteps.length]);

  return (
    <div ref={timelineRef} id="process-timeline" className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(239,68,68,0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(239,68,68,0.1) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="font-serif italic text-red-500">İş</span>
            <span className="block font-sans text-white">Sürecimiz</span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto px-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Hassasiyet ve kalite odaklı çalışma yöntemimiz, optimum sonuçlar için tasarlanmıştır.
          </p>
        </div>

        {/* Timeline - Mobile First Design */}
        <div className="relative">
          {/* Mobile Timeline - Vertical Stack */}
          <div className="block lg:hidden space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 300 + 600}ms` }}
              >
                <div className={`p-6 sm:p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border transition-all duration-500 ${
                  activeStep === index
                    ? 'border-red-500/50 shadow-lg shadow-red-500/10'
                    : 'border-gray-700/30'
                }`}>
                  {/* Mobile Icon */}
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full mx-auto mb-6">
                    <i className={`${step.icon} text-lg sm:text-2xl text-white`} />
                  </div>

                  <div className="text-center">
                    <span className="text-red-500 text-xs sm:text-sm font-bold uppercase tracking-widest">{step.phase}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2 mb-4">{step.title}</h3>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="flex justify-center mb-6">
                      <div className="text-center">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Süre</span>
                        <div className="text-red-500 font-bold text-sm sm:text-base">{step.duration}</div>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider mb-3 block">Çıktılar</span>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center justify-center space-x-2 text-gray-300">
                            <div className="w-1 h-1 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline - Original Design */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-red-500/50 to-transparent" />

            {/* Timeline Steps */}
            <div className="space-y-32">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 300 + 600}ms` }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className={`p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border transition-all duration-500 ${
                      activeStep === index
                        ? 'border-red-500/50 shadow-lg shadow-red-500/10'
                        : 'border-gray-700/30'
                    }`}>
                      <div className="mb-4">
                        <span className="text-red-500 text-sm font-bold uppercase tracking-widest">{step.phase}</span>
                        <h3 className="text-3xl font-bold text-white mt-2">{step.title}</h3>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Süre</span>
                          <div className="text-red-500 font-bold">{step.duration}</div>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-3 block">Temel Çıktılar</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center space-x-2 text-gray-300">
                              <div className="w-1 h-1 bg-red-500 rounded-full" />
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center z-10 transition-all duration-500">
                    <i className={`${step.icon} text-2xl text-white transition-transform duration-300 ${
                      activeStep === index ? 'scale-110' : 'scale-100'
                    }`} />

                    {/* Pulse Animation */}
                    {activeStep === index && (
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30" />
                    )}
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 sm:mt-24 md:mt-32 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/contact">
            <button className="group px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm sm:text-base lg:text-lg tracking-wider hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 rounded-none whitespace-nowrap cursor-pointer">
              <span className="group-hover:tracking-widest transition-all duration-300">PROJENİZİ BAŞLATIN</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
