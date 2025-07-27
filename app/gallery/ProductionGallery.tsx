
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProductionGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    {
      name: "Üretim Süreci",
      icon: "ri-settings-line",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=modern%20CNC%20machining%20center%20with%20red%20industrial%20design%20processing%20automotive%20transmission%20gearbox%20components%2C%20precision%20metal%20cutting%20operation%20with%20sophisticated%20engineering%20machinery%20and%20professional%20workshop%20environment&width=600&height=400&seq=cnc-machining-process&orientation=landscape",
          title: "CNC Tezgah İşleme",
          description: "Modern CNC tezgahlarımızda hassas işleme"
        },
        {
          src: "https://readdy.ai/api/search-image?query=professional%20metalworking%20workshop%20with%20red%20industrial%20equipment%20and%20skilled%20technician%20operating%20precision%20machinery%20for%20transmission%20gearbox%20manufacturing%2C%20clean%20organized%20workspace%20with%20modern%20engineering%20tools&width=600&height=400&seq=metalworking-workshop&orientation=landscape",
          title: "Metal İşleme Atölyesi",
          description: "Uzman işçilerimiz tarafından hassas metal işleme"
        },
        {
          src: "https://readdy.ai/api/search-image?query=quality%20control%20inspection%20station%20with%20red%20industrial%20equipment%20and%20precision%20measuring%20instruments%20for%20automotive%20transmission%20components%2C%20professional%20quality%20assurance%20process%20with%20modern%20testing%20equipment&width=600&height=400&seq=quality-control-station&orientation=landscape",
          title: "Kalite Kontrol",
          description: "Titiz kalite kontrol süreçleri"
        },
        {
          src: "https://readdy.ai/api/search-image?query=transmission%20gearbox%20assembly%20line%20with%20red%20industrial%20machinery%20and%20skilled%20workers%20assembling%20automotive%20components%2C%20modern%20production%20facility%20with%20organized%20workflow%20and%20professional%20engineering%20environment&width=600&height=400&seq=assembly-line&orientation=landscape",
          title: "Montaj Hattı",
          description: "Profesyonel montaj ve test süreçleri"
        }
      ]
    },
    {
      name: "Ürün Galerisi",
      icon: "ri-hammer-line",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=finished%20turbo%20straw%20machine%20transmission%20gearbox%20with%20red%20and%20black%20industrial%20design%2C%20professional%20product%20photography%20with%20clean%20background%20showcasing%20precision%20engineering%20and%20metallic%20finish&width=600&height=400&seq=turbo-straw-transmission&orientation=landscape",
          title: "Turbo Saman Makinası Şanzımanı",
          description: "Yüksek performanslı turbo saman makinası şanzımanı"
        },
        {
          src: "https://readdy.ai/api/search-image?query=heavy%20duty%20straw%20compactor%20transmission%20gearbox%20with%20robust%20red%20and%20black%20design%2C%20professional%20product%20showcase%20with%20metallic%20finish%20and%20industrial%20engineering%20aesthetics&width=600&height=400&seq=straw-compactor-transmission&orientation=landscape",
          title: "Saman Patoz Şanzımanı",
          description: "Dayanıklı saman patoz makinası şanzımanı"
        },
        {
          src: "https://readdy.ai/api/search-image?query=precision%20grass%20cutting%20machine%20transmission%20gearbox%20with%20modern%20red%20and%20black%20industrial%20design%2C%20clean%20product%20photography%20highlighting%20sophisticated%20engineering%20and%20metallic%20components&width=600&height=400&seq=grass-cutting-transmission&orientation=landscape",
          title: "Ot Makinası Şanzımanı",
          description: "Hassas ot makinası şanzıman sistemi"
        },
        {
          src: "https://readdy.ai/api/search-image?query=rotavator%20transmission%20gearbox%20with%20professional%20red%20and%20black%20engineering%20design%2C%20industrial%20product%20photography%20showcasing%20heavy-duty%20construction%20and%20precision%20manufacturing&width=600&height=400&seq=rotavator-transmission&orientation=landscape",
          title: "Rotovatör Şanzımanı",
          description: "Güçlü rotovatör şanzıman sistemi"
        }
      ]
    },
    {
      name: "Tesis Görünümleri",
      icon: "ri-building-line",
      images: [
        {
          src: "https://readdy.ai/api/search-image?query=modern%20automotive%20manufacturing%20facility%20exterior%20with%20red%20industrial%20building%20design%2C%20professional%20corporate%20architecture%20with%20clean%20lines%20and%20sophisticated%20engineering%20complex%20appearance&width=600&height=400&seq=facility-exterior&orientation=landscape",
          title: "Tesis Dış Görünüm",
          description: "Modern üretim tesisimizin dış görünümü"
        },
        {
          src: "https://readdy.ai/api/search-image?query=spacious%20industrial%20production%20floor%20with%20red%20machinery%20and%20organized%20workspace%20layout%2C%20modern%20manufacturing%20facility%20with%20high%20ceilings%20and%20professional%20lighting%20systems&width=600&height=400&seq=production-floor&orientation=landscape",
          title: "Üretim Salonu",
          description: "Geniş ve organize edilmiş üretim alanı"
        },
        {
          src: "https://readdy.ai/api/search-image?query=professional%20office%20and%20meeting%20room%20with%20red%20corporate%20design%20elements%2C%20modern%20business%20environment%20with%20engineering%20drawings%20and%20technical%20documentation%20displays&width=600&height=400&seq=office-meeting-room&orientation=landscape",
          title: "Ofis ve Toplantı Salonu",
          description: "Modern ofis ve müşteri toplantı alanları"
        },
        {
          src: "https://readdy.ai/api/search-image?query=warehouse%20storage%20area%20with%20red%20industrial%20shelving%20and%20organized%20inventory%20of%20transmission%20gearbox%20components%2C%20professional%20parts%20management%20system%20with%20modern%20logistics%20equipment&width=600&height=400&seq=warehouse-storage&orientation=landscape",
          title: "Depo ve Sevkiyat",
          description: "Organize edilmiş depo ve sevkiyat alanı"
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div 
      ref={galleryRef} 
      id="production-gallery" 
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Üretim</span>
            <span className="text-red-500 ml-4">Galerisi</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Modern tesisimiz, ileri teknoloji ve uzman ekibimizle üretim süreçlerimizi keşfedin
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <i className={`${category.icon} text-lg`} />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories[activeCategory].images.map((image, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 overflow-hidden transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 800}ms` }}
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line text-white text-lg" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div id="facility-tour" className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tesisimizi Ziyaret Edin
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Modern üretim tesisimizi yerinde görme ve üretim süreçlerimizi yakından inceleme fırsatı. 
              Uzman ekibimizle tanışın ve kalite standartlarımızı keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">RANDEVU ALIN</span>
                </button>
              </Link>
              <Link href="/about">
                <button className="group px-8 py-4 border border-red-500 text-red-500 font-bold text-lg tracking-wide hover:bg-red-500 hover:text-white transition-all duration-500 cursor-pointer whitespace-nowrap">
                  <span className="group-hover:tracking-wider transition-all duration-300">HAKKIMIZDA</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-close-line text-xl" />
            </button>
            <img
              src={selectedImage}
              alt="Galeri görüntüsü"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
