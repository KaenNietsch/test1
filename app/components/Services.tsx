
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Şanzıman İmalatı",
      description: "Tarım makinaları için özel tasarlanmış, dayanıklı ve verimli şanzıman sistemleri üretiyoruz.",
      icon: "ri-settings-line",
      features: ["Özel tasarım", "Yüksek dayanıklılık", "Verimli performans", "Kalite garantisi"],
      color: "red"
    },
    {
      title: "Teknik Servis",
      description: "Uzman teknisyen kadromuzla tüm şanzıman sistemleri için profesyonel bakım ve onarım hizmeti.",
      icon: "ri-tools-line",
      features: ["Uzman teknisyen", "Orijinal yedek parça", "Hızlı müdahale", "Garantili servis"],
      color: "red"
    },
    {
      title: "Yedek Parça",
      description: "Orijinal kalitede yedek parça tedariki. Hızlı teslimat ve uygun fiyat garantisi.",
      icon: "ri-hammer-line",
      features: ["Orijinal kalite", "Hızlı teslimat", "Geniş stok", "Uygun fiyat"],
      color: "red"
    },
    {
      title: "Özel Tasarım",
      description: "Müşteri ihtiyaçlarına özel şanzıman tasarımı ve üretimi. Proje bazlı çözümler.",
      icon: "ri-pencil-ruler-line",
      features: ["Özel çözümler", "Mühendislik desteği", "Proje yönetimi", "Kalite kontrolü"],
      color: "red"
    },
    {
      title: "Kalite Kontrol",
      description: "Üretim sürecinde titiz kalite kontrol. Tüm ürünler test edilerek teslim edilir.",
      icon: "ri-shield-check-line",
      features: ["Titiz test", "Kalite sertifikası", "Performans garantisi", "Uzun ömür"],
      color: "red"
    },
    {
      title: "Teknik Danışmanlık",
      description: "Şanzıman seçimi ve kullanımı konusunda uzman mühendis kadromuzdan danışmanlık.",
      icon: "ri-user-star-line",
      features: ["Uzman danışmanlık", "Doğru seçim", "Verimlilik analizi", "Maliyet optimizasyonu"],
      color: "red"
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
      id="services" 
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Hizmet</span>
            <span className="text-red-500 ml-4">Alanları</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Tarım makinası şanzıman sistemlerinde 30 yılı aşkın deneyimimizle kapsamlı hizmet sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 600}ms`,
                transform: hoveredService === index ? 'translateY(-10px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-white`} />
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/services">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap">
              <span className="group-hover:tracking-wider transition-all duration-300">TÜM HİZMETLERİMİZ</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
