
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  const categories = [
    {
      name: "Şanzıman Sistemleri",
      icon: "ri-settings-line",
      products: [
        {
          name: "Turbo Saman Makinası Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=modern%20turbo%20straw%20machine%20gearbox%20transmission%20system%20with%20red%20and%20black%20industrial%20design%2C%20precision%20agricultural%20machinery%20component%20with%20sophisticated%20engineering%20and%20metallic%20finish&width=400&height=300&seq=turbo-saman-sanziman&orientation=landscape",
          specs: ["Yüksek Tork", "Dayanıklı Yapı", "Optimize Performans", "Uzun Ömür"],
          price: "Fiyat için arayın"
        },
        {
          name: "Saman Patoz Makinası Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=straw%20compactor%20machine%20transmission%20gearbox%20with%20professional%20red%20and%20black%20design%2C%20heavy-duty%20agricultural%20equipment%20component%20with%20robust%20engineering%20and%20industrial%20appearance&width=400&height=300&seq=saman-patoz-sanziman&orientation=landscape",
          specs: ["Ağır Hizmet", "Güçlü Yapı", "Verimli Çalışma", "Bakım Kolaylığı"],
          price: "Fiyat için arayın"
        },
        {
          name: "Ot Makinası Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=grass%20cutting%20machine%20transmission%20gearbox%20with%20modern%20red%20and%20black%20industrial%20design%2C%20precision%20engineered%20agricultural%20machinery%20component%20with%20sleek%20metallic%20finish&width=400&height=300&seq=ot-makinasi-sanziman&orientation=landscape",
          specs: ["Hassas Çalışma", "Düşük Gürültü", "Kolay Montaj", "Güvenilir Performans"],
          price: "Fiyat için arayın"
        }
      ]
    },
    {
      name: "Tarım Makinası Şanzımanları",
      icon: "ri-hammer-line",
      products: [
        {
          name: "Taş Toplama Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=stone%20collection%20machine%20transmission%20gearbox%20with%20heavy-duty%20red%20and%20black%20design%2C%20robust%20agricultural%20equipment%20component%20with%20industrial%20strength%20and%20professional%20appearance&width=400&height=300&seq=tas-toplama-sanziman&orientation=landscape",
          specs: ["Ağır Hizmet Tipi", "Darbe Dayanımı", "Güçlü Yapı", "Uzun Ömür"],
          price: "Fiyat için arayın"
        },
        {
          name: "Yer Fıstığı Patoz Makinası Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=peanut%20compactor%20machine%20transmission%20gearbox%20with%20sophisticated%20red%20and%20black%20engineering%20design%2C%20precision%20agricultural%20machinery%20component%20with%20modern%20industrial%20finish&width=400&height=300&seq=yer-fistigi-sanziman&orientation=landscape",
          specs: ["Özel Tasarım", "Yüksek Verim", "Kolay Bakım", "Dayanıklı Malzeme"],
          price: "Fiyat için arayın"
        },
        {
          name: "Rotovatör Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=rotavator%20transmission%20gearbox%20with%20professional%20red%20and%20black%20industrial%20design%2C%20heavy-duty%20agricultural%20machinery%20component%20with%20robust%20engineering%20and%20metallic%20appearance&width=400&height=300&seq=rotovator-sanziman&orientation=landscape",
          specs: ["Güçlü Tork", "Dayanıklı Yapı", "Optimize Verim", "Kolay Entegrasyon"],
          price: "Fiyat için arayın"
        }
      ]
    },
    {
      name: "Özel Uygulamalar",
      icon: "ri-tools-line",
      products: [
        {
          name: "Toprak Burgu Makinası Şanzımanı",
          image: "https://readdy.ai/api/search-image?query=soil%20auger%20machine%20transmission%20gearbox%20with%20modern%20red%20and%20black%20industrial%20design%2C%20precision%20engineered%20agricultural%20drilling%20equipment%20component%20with%20sophisticated%20metallic%20finish&width=400&height=300&seq=toprak-burgu-sanziman&orientation=landscape",
          specs: ["Hassas Çalışma", "Güçlü Tork", "Kolay Kullanım", "Bakım Kolaylığı"],
          price: "Fiyat için arayın"
        },
        {
          name: "Özel Tasarım Şanzıman",
          image: "https://readdy.ai/api/search-image?query=custom%20designed%20transmission%20gearbox%20with%20professional%20red%20and%20black%20engineering%2C%20specialized%20agricultural%20machinery%20component%20with%20modern%20industrial%20design%20and%20precision%20manufacturing&width=400&height=300&seq=ozel-tasarim-sanziman&orientation=landscape",
          specs: ["Müşteri Odaklı", "Özel Çözüm", "Mühendislik Desteği", "Kalite Garantisi"],
          price: "Fiyat için arayın"
        },
        {
          name: "Endüstriyel Şanzıman",
          image: "https://readdy.ai/api/search-image?query=industrial%20transmission%20gearbox%20with%20heavy-duty%20red%20and%20black%20design%2C%20professional%20machinery%20component%20with%20robust%20engineering%20and%20sophisticated%20metallic%20finish&width=400&height=300&seq=endustriyel-sanziman&orientation=landscape",
          specs: ["Endüstriyel Kalite", "Yüksek Performans", "Uzun Ömür", "Güvenilir Çalışma"],
          price: "Fiyat için arayın"
        }
      ]
    }
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowProductModal(true);
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
    <>
      <section 
        ref={sectionRef} 
        id="products" 
        className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%)`,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 0 25px, 25px -25px, -25px 0px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="text-white">Ürün</span>
              <span className="text-red-500 ml-4">Kategorileri</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Tarım makinaları için özel tasarlanmış şanzıman sistemleri ve bileşenleri
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${activeCategory === index ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <i className={`${category.icon} text-lg`} />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeCategory].products.map((product, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 overflow-hidden transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150 + 800}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-red-500 font-bold">{product.price}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleProductClick(product)}
                        className="flex items-center space-x-2 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg transition-colors duration-300 cursor-pointer"
                      >
                        <span className="text-sm">Detaylar</span>
                        <i className="ri-arrow-right-line" />
                      </button>
                      <Link href="/contact">
                        <button className="flex items-center space-x-2 px-3 py-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300 cursor-pointer">
                          <span className="text-sm">Teklif Al</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/products">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 cursor-pointer whitespace-nowrap">
                <span className="group-hover:tracking-wider transition-all duration-300">TÜM ÜRÜNLERİ GÖRÜNTÜLE</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-red-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
              <button
                onClick={() => setShowProductModal(false)}
                className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-red-500" />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Teknik Özellikler</h3>
                {selectedProduct.specs.map((spec: string, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mt-8">
                <Link href="/contact" className="flex-1">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer">
                    Teklif Al
                  </button>
                </Link>
                <button
                  onClick={() => setShowProductModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
