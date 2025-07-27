
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { number: "1993", label: "Kuruluş Yılı", icon: "ri-calendar-line" },
    { number: "30+", label: "Yıl Deneyim", icon: "ri-award-line" },
    { number: "1000+", label: "Mutlu Müşteri", icon: "ri-user-smile-line" },
    { number: "24/7", label: "Teknik Destek", icon: "ri-customer-service-line" }
  ];

  const tabs = [
    {
      title: "Misyonumuz",
      icon: "ri-rocket-line",
      content: "ÖZAKSA olarak, 'Topluma ve çevreye saygı' ilkesiyle tarım makinesi şanzıman imalatı pazarına yeni bir soluk getirmek ve çiftçilerimize en kaliteli çözümler sunmak temel misyonumuz."
    },
    {
      title: "Vizyonumuz",
      icon: "ri-eye-line",
      content: "Tarım makinaları şanzıman sektöründe teknolojik yeniliklerin öncüsü olarak, sürdürülebilir tarımı destekleyen yüksek kaliteli ürünler üretmeyi hedefliyoruz."
    },
    {
      title: "Değerlerimiz",
      icon: "ri-heart-line",
      content: "Kalite, güvenilirlik, müşteri memnuniyeti ve çevreye saygı temel değerlerimizdir. 1993'ten beri bu ilkelerle hareket ediyor, sektörde fark yaratıyoruz."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      id="about" 
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Hakkımızda</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            1993 yılından beri tarım makinaları şanzıman imalatında güvenilir çözümler sunuyoruz
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${stat.icon} text-2xl text-white`} />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20transmission%20gearbox%20manufacturing%20facility%20with%20precision%20machinery%20and%20red%20industrial%20equipment%2C%20high-tech%20automotive%20production%20environment%20with%20sophisticated%20engineering%20workspace%20and%20professional%20lighting&width=600&height=400&seq=ozaksa-manufacturing-facility&orientation=landscape"
                alt="Özaksa Otomotiv İmalat Tesisi"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-black/20 rounded-lg" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Company Story */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Şirket Hikayemiz</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                ÖZAKSA olarak, 'Topluma ve çevreye saygı' ilkesiyle 1993 yılında tarım makinesi şanzıman imalatı pazarına yeni bir soluk olarak katılmıştır. 
                30 yılı aşkın deneyimimizle, tarım sektöründe güvenilir ve kaliteli çözümler sunmaya devam ediyoruz.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Konya merkezli şirketimiz, modern üretim tesisimiz ve uzman kadromuzla Türkiye'nin dört bir yanındaki tarım makinesi üreticilerine 
                ve çiftçilerine hizmet vermektedir. Kalite, güvenilirlik ve müşteri memnuniyeti temel değerlerimizdir.
              </p>
            </div>

            {/* Tabs */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <i className={`${tab.icon} text-sm`} />
                    <span className="text-sm font-medium">{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                <p className="text-gray-300 leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">HAKKIMIZDA</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="group px-6 py-3 border border-red-500 text-red-500 font-bold tracking-wide hover:bg-red-500 hover:text-white transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">İLETİŞİM</span>
                </button>
              </Link>
            </div>

            {/* Certificates */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Sertifikalar & Kalite</h4>
              <div className="flex flex-wrap gap-4">
                {['ISO 9001', 'CE Belgesi', 'TSE Standartları', 'Kalite Güvencesi'].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                    <i className="ri-award-line text-red-500 text-sm" />
                    <span className="text-red-500 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
