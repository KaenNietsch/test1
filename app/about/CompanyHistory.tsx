'use client';

import { useEffect, useRef, useState } from 'react';

export default function CompanyHistory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const milestones = [
    {
      year: "1993",
      title: "Kuruluş",
      description: "ÖZAKSA, 'Topluma ve çevreye saygı' ilkesiyle tarım makinesi şanzıman imalatı pazarına yeni bir soluk olarak katıldı.",
      icon: "ri-building-line"
    },
    {
      year: "1998",
      title: "İlk Büyük Proje",
      description: "Konya ve çevre illerdeki tarım makinesi üreticileriyle stratejik ortaklıklar kuruldu.",
      icon: "ri-handshake-line"
    },
    {
      year: "2005",
      title: "Teknoloji Yatırımı",
      description: "Modern CNC tezgahlar ve kalite kontrol sistemleri ile üretim kapasitesi artırıldı.",
      icon: "ri-settings-line"
    },
    {
      year: "2010",
      title: "Kalite Sertifikaları",
      description: "ISO 9001 ve CE belgelerini alarak uluslararası standartlarda üretim başladı.",
      icon: "ri-award-line"
    },
    {
      year: "2015",
      title: "Ar-Ge Merkezi",
      description: "Şirket bünyesinde Ar-Ge departmanı kurularak yenilikçi ürün geliştirme süreçleri başladı.",
      icon: "ri-lightbulb-line"
    },
    {
      year: "2020",
      title: "Dijital Dönüşüm",
      description: "Endüstri 4.0 teknolojileri ile akıllı üretim sistemlerine geçiş yapıldı.",
      icon: "ri-robot-line"
    },
    {
      year: "2024",
      title: "Sürdürülebilir Gelecek",
      description: "Çevre dostu üretim süreçleri ve sürdürülebilir kalkınma hedefleriyle geleceğe odaklandık.",
      icon: "ri-leaf-line"
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
      id="company-history"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(60deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(120deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Şirket</span>
            <span className="text-red-500 ml-4">Tarihçesi</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            30 yılı aşkın deneyimimizle tarım makinaları sektöründe attığımız önemli adımlar
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-600 opacity-20" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className={`bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                        <i className={`${milestone.icon} text-white text-lg`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        <p className="text-red-500 font-semibold">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-red-600 to-red-500 rounded-full border-4 border-black shadow-lg" />
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Mission */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <i className="ri-rocket-line text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              ÖZAKSA olarak, 'Topluma ve çevreye saygı' ilkesiyle tarım makinesi şanzıman imalatı pazarına 
              yeni bir soluk getirmek ve çiftçilerimize en kaliteli çözümler sunmak temel misyonumuz. 
              Sürdürülebilir tarımı destekleyerek ülke ekonomisine katkı sağlamayı hedefliyoruz.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <i className="ri-eye-line text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tarım makinaları şanzıman sektöründe teknolojik yeniliklerin öncüsü olarak, 
              sürdürülebilir tarımı destekleyen yüksek kaliteli ürünler üretmeyi hedefliyoruz. 
              Ulusal ve uluslararası pazarlarda güvenilir marka olmak vizyonumuzun temelidir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}