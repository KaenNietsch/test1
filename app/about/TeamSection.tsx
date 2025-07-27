
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const team = [
    {
      name: "Mehmet Özaksa",
      position: "Genel Müdür",
      image: "https://readdy.ai/api/search-image?query=professional%20middle-aged%20Turkish%20businessman%20in%20suit%20with%20confident%20expression%2C%20corporate%20executive%20portrait%20with%20red%20background%20elements%20and%20sophisticated%20lighting&width=300&height=300&seq=mehmet-ozaksa&orientation=squarish",
      description: "30 yıllık deneyimi ile şirketin vizyonunu yönlendiren liderimiz",
      specialties: ["Stratejik Planlama", "İş Geliştirme", "Liderlik"]
    },
    {
      name: "Ahmet Yılmaz",
      position: "Üretim Müdürü",
      image: "https://readdy.ai/api/search-image?query=experienced%20Turkish%20production%20manager%20in%20industrial%20setting%20with%20safety%20helmet%2C%20professional%20engineering%20portrait%20with%20red%20industrial%20background%20and%20technical%20expertise&width=300&height=300&seq=ahmet-yilmaz&orientation=squarish",
      description: "Üretim süreçlerinin optimize edilmesi ve kalite kontrolünden sorumlu",
      specialties: ["Üretim Yönetimi", "Kalite Kontrol", "Süreç Optimizasyonu"]
    },
    {
      name: "Fatma Kara",
      position: "Ar-Ge Müdürü",
      image: "https://readdy.ai/api/search-image?query=professional Turkish female engineer in modern laboratory with technical equipment, confident R&D manager portrait with red industrial elements and innovation focus&width=300&height=300&seq=fatma-kara&orientation=squarish",
      description: "Yenilikçi ürün geliştirme projelerinin lideri",
      specialties: ["Ürün Geliştirme", "Teknoloji", "İnovasyon"]
    },
    {
      name: "Mustafa Demir",
      position: "Kalite Müdürü",
      image: "https://readdy.ai/api/search-image?query=professional%20Turkish%20quality%20control%20manager%20in%20manufacturing%20facility%20with%20precision%20instruments%2C%20technical%20expert%20portrait%20with%20red%20industrial%20background&width=300&height=300&seq=mustafa-demir&orientation=squarish",
      description: "Kalite standartlarının belirlenmesi ve denetiminden sorumlu",
      specialties: ["Kalite Yönetimi", "İSO Standartları", "Denetim"]
    },
    {
      name: "Elif Özkan",
      position: "Satış Müdürü",
      image: "https://readdy.ai/api/search-image?query=professional%20Turkish%20female%20sales%20manager%20in%20business%20attire%20with%20confident%20smile%2C%20corporate%20sales%20executive%20portrait%20with%20red%20background%20and%20customer-focused%20approach&width=300&height=300&seq=elif-ozkan&orientation=squarish",
      description: "Müşteri ilişkileri ve satış stratejilerinin yöneticisi",
      specialties: ["Satış Yönetimi", "Müşteri İlişkileri", "Pazarlama"]
    },
    {
      name: "Hasan Aydın",
      position: "Teknik Müdür",
      image: "https://readdy.ai/api/search-image?query=experienced%20Turkish%20technical%20manager%20in%20engineering%20workspace%20with%20CAD%20systems%2C%20professional%20technical%20expert%20portrait%20with%20red%20industrial%20elements%20and%20precision%20focus&width=300&height=300&seq=hasan-aydin&orientation=squarish",
      description: "Teknik çözümler ve mühendislik desteğinin sorumlusu",
      specialties: ["Mühendislik", "Teknik Destek", "CAD Tasarım"]
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
      id="team-section"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
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
            <span className="text-white">Ekibimiz</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Deneyimli ve uzman kadromuzla kaliteli hizmet sunuyoruz
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-red-500 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/contact">
                  <button className="w-8 h-8 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                    <i className="ri-mail-line text-sm" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-8 h-8 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                    <i className="ri-phone-line text-sm" />
                  </button>
                </Link>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Toplam Çalışan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Mühendis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Teknik Personel</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Yönetici</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
