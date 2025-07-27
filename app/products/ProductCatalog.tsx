
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProductCatalog() {
  const catalogRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const catalogPages = [
    {
      title: "Genel Katalog",
      subtitle: "Özaksa Otomotiv Ürün Kataloğu 2024",
      image: "https://readdy.ai/api/search-image?query=professional%20product%20catalog%20cover%20design%20with%20red%20and%20black%20industrial%20theme%2C%20automotive%20transmission%20gearbox%20components%20showcase%20with%20modern%20typography%20and%20sophisticated%20layout&width=600&height=800&seq=catalog-cover&orientation=portrait",
      content: "Tarım makinaları şanzıman sistemleri ve bileşenlerimizin kapsamlı katalog sunumu"
    },
    {
      title: "Turbo Saman Makinası Şanzımanları",
      subtitle: "Yüksek Performans Serisi",
      image: "https://readdy.ai/api/search-image?query=detailed%20technical%20catalog%20page%20showing%20turbo%20straw%20machine%20transmission%20gearbox%20with%20specifications%2C%20dimensions%20and%20red%20industrial%20design%20elements&width=600&height=800&seq=turbo-saman-catalog&orientation=portrait",
      content: "50-200 HP güç aralığında turbo saman makinaları için özel tasarlanmış şanzıman sistemleri"
    },
    {
      title: "Saman Patoz Şanzımanları",
      subtitle: "Ağır Hizmet Serisi",
      image: "https://readdy.ai/api/search-image?query=professional%20catalog%20page%20featuring%20heavy%20duty%20straw%20compactor%20transmission%20gearbox%20with%20technical%20specifications%20and%20red%20industrial%20design%20theme&width=600&height=800&seq=saman-patoz-catalog&orientation=portrait",
      content: "75-300 HP güç kapasiteli, ağır hizmet koşullarında çalışan saman patoz şanzımanları"
    },
    {
      title: "Ot Makinası Şanzımanları",
      subtitle: "Hassas Çalışma Serisi",
      image: "https://readdy.ai/api/search-image?query=catalog%20page%20displaying%20precision%20grass%20cutting%20machine%20transmission%20gearbox%20with%20technical%20details%20and%20professional%20red%20industrial%20layout&width=600&height=800&seq=ot-makinasi-catalog&orientation=portrait",
      content: "25-150 HP güç aralığında hassas ot kesme işlemleri için düşük gürültülü şanzıman sistemleri"
    },
    {
      title: "Taş Toplama Şanzımanları",
      subtitle: "Ekstrem Dayanıklılık Serisi",
      image: "https://readdy.ai/api/search-image?query=technical%20catalog%20page%20showing%20stone%20collection%20machine%20transmission%20gearbox%20with%20durability%20specifications%20and%20red%20industrial%20design%20elements&width=600&height=800&seq=tas-toplama-catalog&orientation=portrait",
      content: "100-400 HP güç kapasiteli, zorlu arazi şartlarında taş toplama için darbe dayanımlı sistemler"
    },
    {
      title: "Rotovatör Şanzımanları",
      subtitle: "Yüksek Tork Serisi",
      image: "https://readdy.ai/api/search-image?query=catalog%20page%20featuring%20rotavator%20transmission%20gearbox%20with%20high%20torque%20specifications%20and%20professional%20red%20industrial%20theme%20layout&width=600&height=800&seq=rotovator-catalog&orientation=portrait",
      content: "50-250 HP güç aralığında toprak işleme operasyonları için yüksek tork kapasiteli sistemler"
    },
    {
      title: "Toprak Burgu Şanzımanları",
      subtitle: "Hassas Delme Serisi",
      image: "https://readdy.ai/api/search-image?query=detailed%20catalog%20page%20showing%20soil%20auger%20machine%20transmission%20gearbox%20with%20precision%20drilling%20specifications%20and%20red%20industrial%20design&width=600&height=800&seq=toprak-burgu-catalog&orientation=portrait",
      content: "30-180 HP güç kapasiteli, toprak delme işlemleri için hassas çalışma özellikli sistemler"
    },
    {
      title: "Teknik Özellikler",
      subtitle: "Detaylı Spesifikasyonlar",
      image: "https://readdy.ai/api/search-image?query=technical%20specifications%20catalog%20page%20with%20detailed%20engineering%20drawings%2C%20dimensions%20and%20performance%20charts%20in%20red%20industrial%20design%20theme&width=600&height=800&seq=technical-specs&orientation=portrait",
      content: "Tüm ürünlerimizin detaylı teknik özellikleri, boyutları ve performans değerleri"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (catalogRef.current) {
      observer.observe(catalogRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextPage = () => {
    if (currentPage < catalogPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
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
        ref={catalogRef}
        id="product-catalog"
        className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-white">Dijital</span>
              <span className="text-red-500 ml-4">Katalog</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Ürünlerimizi detaylı olarak inceleyebileceğiniz interaktif katalog deneyimi
            </p>
          </div>

          {/* Catalog Viewer */}
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-2xl">
              {/* Catalog Book */}
              <div className="relative">
                {/* Page Container */}
                <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-white rounded-lg shadow-2xl overflow-hidden">
                  {/* Page Content */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    <div className="w-full h-full flex">
                      {/* Left Page */}
                      <div className="w-1/2 h-full p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center items-center border-r border-gray-300">
                        <div className="text-center">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            {catalogPages[currentPage].title}
                          </h3>
                          <p className="text-lg text-red-600 font-medium mb-6">
                            {catalogPages[currentPage].subtitle}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {catalogPages[currentPage].content}
                          </p>
                        </div>
                      </div>

                      {/* Right Page */}
                      <div className="w-1/2 h-full relative">
                        <img
                          src={catalogPages[currentPage].image}
                          alt={catalogPages[currentPage].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Page Number */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {currentPage + 1} / {catalogPages.length}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    currentPage === 0 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25'
                  }`}
                >
                  <i className="ri-arrow-left-line text-xl" />
                </button>

                <button
                  onClick={nextPage}
                  disabled={currentPage === catalogPages.length - 1}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    currentPage === catalogPages.length - 1 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25'
                  }`}
                >
                  <i className="ri-arrow-right-line text-xl" />
                </button>
              </div>

              {/* Page Thumbnails */}
              <div className="mt-8 flex justify-center space-x-2 overflow-x-auto pb-4">
                {catalogPages.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-lg border-2 overflow-hidden transition-all duration-300 cursor-pointer ${
                      currentPage === index
                        ? 'border-red-500 shadow-lg shadow-red-500/25'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={page.image}
                      alt={`Sayfa ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Catalog Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDownloadPDF}
                  className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-download-line mr-2" />
                  <span className="group-hover:tracking-wider transition-all duration-300">PDF İNDİR</span>
                </button>
                <button 
                  onClick={handlePrint}
                  className="group px-6 py-3 border border-red-500 text-red-500 font-bold tracking-wide hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-printer-line mr-2" />
                  <span className="group-hover:tracking-wider transition-all duration-300">YAZDIR</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="group px-6 py-3 bg-gray-800 text-white font-bold tracking-wide hover:bg-gray-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-share-line mr-2" />
                  <span className="group-hover:tracking-wider transition-all duration-300">PAYLAŞ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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