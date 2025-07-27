
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProductsHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const catalogPages = [
    {
      id: 1,
      title: "Ürün Kataloğu",
      subtitle: "ÖZAKSA Otomotiv 2024",
      content: "Tarım Makinesi Şanzıman Ürünleri",
      image: "https://readdy.ai/api/search-image?query=professional%20product%20catalog%20cover%20with%20%C3%96ZAKSA%20logo%2C%20red%20and%20black%20corporate%20design%2C%20agricultural%20machinery%20transmission%20catalog%20with%20modern%20typography%20and%20industrial%20background&width=400&height=600&seq=catalog-cover&orientation=portrait"
    },
    {
      id: 2,
      title: "Turbo Saman Şanzımanı",
      subtitle: "TSM Series",
      content: "Yüksek performanslı turbo saman makinesi şanzımanları. Güçlü yapısı ve dayanıklı malzemesi ile uzun ömürlü kullanım.",
      specs: ["Güç: 50-80 HP", "Vites: 3+1", "Materyal: Sertleştirilmiş Çelik", "Garanti: 2 Yıl"],
      image: "https://readdy.ai/api/search-image?query=high-performance%20turbo%20straw%20machine%20transmission%20gearbox%20with%20red%20industrial%20design%2C%20precision%20engineering%20components%20and%20technical%20specifications%20display&width=400&height=600&seq=turbo-straw-transmission&orientation=portrait"
    },
    {
      id: 3,
      title: "Saman Patoz Şanzımanı",
      subtitle: "SPM Series",
      content: "Saman patoz makineleri için özel olarak tasarlanmış dayanıklı şanzıman sistemleri.",
      specs: ["Güç: 40-70 HP", "Vites: 2+1", "Materyal: Dökme Demir", "Garanti: 3 Yıl"],
      image: "https://readdy.ai/api/search-image?query=heavy-duty%20straw%20crusher%20transmission%20gearbox%20with%20robust%20construction%2C%20red%20industrial%20components%20and%20agricultural%20machinery%20specifications&width=400&height=600&seq=straw-crusher-transmission&orientation=portrait"
    },
    {
      id: 4,
      title: "Ot Makinası Şanzımanı",
      subtitle: "OTM Series",
      content: "Ot biçme makineleri için optimize edilmiş, yüksek tork kapasiteli şanzıman çözümleri.",
      specs: ["Güç: 30-60 HP", "Vites: 2+1", "Materyal: Karbon Çelik", "Garanti: 2 Yıl"],
      image: "https://readdy.ai/api/search-image?query=precision%20grass%20cutting%20machine%20transmission%20with%20high%20torque%20capacity%2C%20red%20industrial%20design%20and%20technical%20engineering%20specifications&width=400&height=600&seq=grass-machine-transmission&orientation=portrait"
    },
    {
      id: 5,
      title: "Rotovatör Şanzımanı",
      subtitle: "RTM Series",
      content: "Rotovatör makineleri için geliştirilmiş, toprak işleme uygulamalarında maksimum performans.",
      specs: ["Güç: 45-75 HP", "Vites: 3+1", "Materyal: Alaşım Çelik", "Garanti: 3 Yıl"],
      image: "https://readdy.ai/api/search-image?query=rotary%20tiller%20transmission%20gearbox%20for%20soil%20cultivation%2C%20heavy-duty%20construction%20with%20red%20industrial%20design%20and%20agricultural%20specifications&width=400&height=600&seq=rotary-tiller-transmission&orientation=portrait"
    },
    {
      id: 6,
      title: "Teknik Özellikler",
      subtitle: "Technical Specifications",
      content: "Tüm ürünlerimiz ISO 9001 kalite standartlarında üretilmektedir.",
      specs: ["CNC İşleme", "Hassas Toleranslar", "Kalite Kontrolü", "Test Edilmiş"],
      image: "https://readdy.ai/api/search-image?query=technical%20specifications%20chart%20with%20engineering%20drawings%2C%20precision%20measurements%20and%20quality%20control%20standards%20for%20transmission%20gearboxes&width=400&height=600&seq=technical-specs&orientation=portrait"
    },
    {
      id: 7,
      title: "Yedek Parça & Servis",
      subtitle: "Service & Support",
      content: "7/24 teknik destek ve kapsamlı yedek parça hizmetimiz ile yanınızdayız.",
      specs: ["24/7 Destek", "Hızlı Teslimat", "Orijinal Parça", "Uzman Teknik Ekip"],
      image: "https://readdy.ai/api/search-image?query=professional%20service%20center%20with%20spare%20parts%20inventory%2C%20technical%20support%20team%20and%20customer%20service%20with%20red%20corporate%20branding&width=400&height=600&seq=service-support&orientation=portrait"
    },
    {
      id: 8,
      title: "İletişim",
      subtitle: "Contact Information",
      content: "Detaylı bilgi ve sipariş için bizimle iletişime geçin.",
      specs: ["Tel: +90 332 501 59 14", "Mobil: +90 543 287 72 82", "Email: ozaksamakina@gmail.com", "Adres: Konya"],
      image: "https://readdy.ai/api/search-image?query=modern%20contact%20information%20page%20with%20%C3%96ZAKSA%20branding%2C%20red%20corporate%20design%20and%20professional%20business%20communication%20elements&width=400&height=600&seq=contact-info&orientation=portrait"
    }
  ];

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

  const nextPage = () => {
    if (currentPage < catalogPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/api/download-catalog';
    link.download = 'ozaksa-urun-katalogu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const shareOptions = [
    { 
      name: 'WhatsApp', 
      icon: 'ri-whatsapp-line', 
      color: 'bg-green-500', 
      url: `https://wa.me/?text=ÖZAKSA Otomotiv Ürün Kataloğu - ${window.location.href}` 
    },
    { 
      name: 'Facebook', 
      icon: 'ri-facebook-line', 
      color: 'bg-blue-600', 
      url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}` 
    },
    { 
      name: 'Twitter', 
      icon: 'ri-twitter-line', 
      color: 'bg-blue-400', 
      url: `https://twitter.com/intent/tweet?url=${window.location.href}&text=ÖZAKSA Otomotiv Ürün Kataloğu` 
    },
    { 
      name: 'LinkedIn', 
      icon: 'ri-linkedin-line', 
      color: 'bg-blue-700', 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}` 
    },
    { 
      name: 'E-posta', 
      icon: 'ri-mail-line', 
      color: 'bg-gray-600', 
      url: `mailto:?subject=ÖZAKSA Otomotiv Ürün Kataloğu&body=${window.location.href}` 
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Bağlantı panoya kopyalandı!');
  };

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=modern%20agricultural%20machinery%20transmission%20manufacturing%20facility%20with%20red%20industrial%20equipment%2C%20precision%20engineering%20workspace%20and%20professional%20automotive%20production%20environment&width=1920&height=1080&seq=products-hero-bg&orientation=landscape')`,
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
                <span className="text-white">Ürünlerimiz</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Tarım makinaları için özel olarak tasarlanmış, yüksek kaliteli şanzıman çözümleri
              </p>
              
              {/* Product Categories */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <i className="ri-settings-line text-red-500 text-2xl mb-2" />
                  <h3 className="text-white font-semibold mb-1">Turbo Saman</h3>
                  <p className="text-gray-300 text-sm">Yüksek performans</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <i className="ri-hammer-line text-red-500 text-2xl mb-2" />
                  <h3 className="text-white font-semibold mb-1">Saman Patoz</h3>
                  <p className="text-gray-300 text-sm">Dayanıklı yapı</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <i className="ri-plant-line text-red-500 text-2xl mb-2" />
                  <h3 className="text-white font-semibold mb-1">Ot Makinası</h3>
                  <p className="text-gray-300 text-sm">Optimize edilmiş</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <i className="ri-tools-line text-red-500 text-2xl mb-2" />
                  <h3 className="text-white font-semibold mb-1">Rotovatör</h3>
                  <p className="text-gray-300 text-sm">Toprak işleme</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowCatalog(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap"
                >
                  <span className="group-hover:tracking-wider transition-all duration-300">KATALOG GÖRÜNTÜLE</span>
                </button>
                <Link href="/contact">
                  <button className="group px-8 py-4 border border-red-500 text-red-500 font-bold text-lg tracking-wide hover:bg-red-500 hover:text-white transition-all duration-500 cursor-pointer whitespace-nowrap">
                    <span className="group-hover:tracking-wider transition-all duration-300">TEKLİF AL</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="relative">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Öne Çıkan Ürünler</h3>
                  
                  <div className="space-y-6">
                    {[
                      { name: "Turbo Saman Şanzımanı", power: "50-80 HP", icon: "ri-settings-line" },
                      { name: "Saman Patoz Şanzımanı", power: "40-70 HP", icon: "ri-hammer-line" },
                      { name: "Ot Makinası Şanzımanı", power: "30-60 HP", icon: "ri-plant-line" },
                      { name: "Rotovatör Şanzımanı", power: "45-75 HP", icon: "ri-tools-line" }
                    ].map((product, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                          <i className={`${product.icon} text-white text-xl`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{product.name}</h4>
                          <p className="text-gray-300 text-sm">{product.power}</p>
                        </div>
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                          <i className="ri-arrow-right-line text-red-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Modal */}
      {showCatalog && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-[90vh] bg-gray-900 rounded-2xl border border-red-500/20 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">Ürün Kataloğu</h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">
                  {currentPage + 1} / {catalogPages.length}
                </span>
                <button
                  onClick={() => setShowCatalog(false)}
                  className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-close-line text-red-500" />
                </button>
              </div>
            </div>

            {/* Catalog Content */}
            <div className="flex h-[70vh]">
              {/* Main Page */}
              <div className="flex-1 p-8 overflow-y-auto">
                <div className={`transition-all duration-300 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="max-w-md mx-auto">
                    <img
                      src={catalogPages[currentPage].image}
                      alt={catalogPages[currentPage].title}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl mb-6"
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{catalogPages[currentPage].title}</h3>
                      <p className="text-red-500 font-semibold mb-4">{catalogPages[currentPage].subtitle}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">{catalogPages[currentPage].content}</p>
                      
                      {catalogPages[currentPage].specs && (
                        <div className="space-y-2">
                          {catalogPages[currentPage].specs.map((spec, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                              <span className="text-gray-300 text-sm">{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 bg-gray-800/50 border-l border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Sayfa Önizleme</h4>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {catalogPages.map((page, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                        currentPage === index
                          ? 'bg-red-500/20 border border-red-500/30 text-white'
                          : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded text-xs flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{page.title}</p>
                          <p className="text-xs opacity-75">{page.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Controls */}
            <div className="flex items-center justify-between p-6 border-t border-gray-800">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  currentPage === 0
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-red-500/20 hover:bg-red-500/30 text-red-500'
                }`}
              >
                <i className="ri-arrow-left-line" />
                <span>Önceki</span>
              </button>

              <div className="flex space-x-2">
                <button 
                  onClick={handleDownloadPDF}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-download-line mr-2" />
                  PDF İndir
                </button>
                <button 
                  onClick={handlePrint}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-printer-line mr-2" />
                  Yazdır
                </button>
                <button 
                  onClick={handleShare}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-share-line mr-2" />
                  Paylaş
                </button>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === catalogPages.length - 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  currentPage === catalogPages.length - 1
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-red-500/20 hover:bg-red-500/30 text-red-500'
                }`}
              >
                <span>Sonraki</span>
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-red-500/20 p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Paylaş</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-red-500" />
              </button>
            </div>
            
            <div className="space-y-3 mb-6">
              {shareOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-lg ${option.color} hover:opacity-90 transition-all duration-300 cursor-pointer`}
                >
                  <i className={`${option.icon} text-white text-xl`} />
                  <span className="text-white font-medium">{option.name}</span>
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-file-copy-line text-gray-300" />
                <span className="text-gray-300">Bağlantıyı Kopyala</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
