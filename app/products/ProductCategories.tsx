
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    {
      id: 1,
      title: "Turbo Saman Makinası Şanzımanı",
      description: "Yüksek performanslı turbo saman makinaları için özel tasarlanmış şanzıman sistemleri",
      image: "https://readdy.ai/api/search-image?query=modern%20turbo%20straw%20machine%20gearbox%20transmission%20system%20with%20red%20and%20black%20industrial%20design%2C%20precision%20agricultural%20machinery%20component%20with%20sophisticated%20engineering%20and%20metallic%20finish&width=500&height=400&seq=turbo-saman-category&orientation=landscape",
      features: ["Yüksek Tork Kapasitesi", "Dayanıklı Yapı", "Optimize Performans", "Uzun Ömür Garantisi"],
      specs: "Güç: 50-200 HP",
      detailedSpecs: {
        power: "50-200 HP",
        torque: "1500-3000 Nm",
        gears: "3+1 Vites",
        material: "Sertleştirilmiş Çelik",
        warranty: "2 Yıl",
        weight: "85-120 kg"
      }
    },
    {
      id: 2,
      title: "Saman Patoz Makinası Şanzımanı",
      description: "Ağır hizmet koşullarında çalışan saman patoz makinaları için güçlü şanzıman çözümleri",
      image: "https://readdy.ai/api/search-image?query=heavy%20duty%20straw%20compactor%20machine%20transmission%20gearbox%20with%20robust%20red%20and%20black%20design%2C%20industrial%20agricultural%20equipment%20component%20with%20professional%20engineering&width=500&height=400&seq=saman-patoz-category&orientation=landscape",
      features: ["Ağır Hizmet Tipi", "Güçlü Yapı", "Verimli Çalışma", "Bakım Kolaylığı"],
      specs: "Güç: 75-300 HP",
      detailedSpecs: {
        power: "75-300 HP",
        torque: "2000-5000 Nm",
        gears: "2+1 Vites",
        material: "Dökme Demir",
        warranty: "3 Yıl",
        weight: "120-180 kg"
      }
    },
    {
      id: 3,
      title: "Ot Makinası Şanzımanı",
      description: "Hassas ot kesme işlemleri için özel tasarlanmış düşük gürültülü şanzıman sistemleri",
      image: "https://readdy.ai/api/search-image?query=precision%20grass%20cutting%20machine%20transmission%20gearbox%20with%20modern%20red%20and%20black%20industrial%20design%2C%20sophisticated%20agricultural%20machinery%20component%20with%20sleek%20finish&width=500&height=400&seq=ot-makinasi-category&orientation=landscape",
      features: ["Hassas Çalışma", "Düşük Gürültü", "Kolay Montaj", "Güvenilir Performans"],
      specs: "Güç: 25-150 HP",
      detailedSpecs: {
        power: "25-150 HP",
        torque: "800-2500 Nm",
        gears: "2+1 Vites",
        material: "Karbon Çelik",
        warranty: "2 Yıl",
        weight: "45-95 kg"
      }
    },
    {
      id: 4,
      title: "Taş Toplama Şanzımanı",
      description: "Zorlu arazi şartlarında taş toplama işlemleri için darbe dayanımlı şanzıman sistemleri",
      image: "https://readdy.ai/api/search-image?query=stone%20collection%20machine%20transmission%20gearbox%20with%20heavy-duty%20red%20and%20black%20design%2C%20robust%20agricultural%20equipment%20component%20with%20industrial%20strength&width=500&height=400&seq=tas-toplama-category&orientation=landscape",
      features: ["Darbe Dayanımı", "Ağır Hizmet", "Güçlü Yapı", "Ekstrem Şartlar"],
      specs: "Güç: 100-400 HP",
      detailedSpecs: {
        power: "100-400 HP",
        torque: "3000-7000 Nm",
        gears: "3+1 Vites",
        material: "Özel Alaşım",
        warranty: "3 Yıl",
        weight: "150-250 kg"
      }
    },
    {
      id: 5,
      title: "Rotovatör Şanzımanı",
      description: "Toprak işleme operasyonları için yüksek tork kapasiteli rotovatör şanzıman sistemleri",
      image: "https://readdy.ai/api/search-image?query=rotavator%20transmission%20gearbox%20with%20professional%20red%20and%20black%20engineering%20design%2C%20heavy-duty%20agricultural%20machinery%20component%20with%20modern%20industrial%20finish&width=500&height=400&seq=rotovator-category&orientation=landscape",
      features: ["Yüksek Tork", "Dayanıklı Yapı", "Optimize Verim", "Kolay Entegrasyon"],
      specs: "Güç: 50-250 HP",
      detailedSpecs: {
        power: "50-250 HP",
        torque: "1800-4500 Nm",
        gears: "3+1 Vites",
        material: "Alaşım Çelik",
        warranty: "3 Yıl",
        weight: "75-140 kg"
      }
    },
    {
      id: 6,
      title: "Toprak Burgu Şanzımanı",
      description: "Toprak delme işlemleri için hassas çalışma özellikli burgu şanzıman sistemleri",
      image: "https://readdy.ai/api/search-image?query=soil%20auger%20machine%20transmission%20gearbox%20with%20modern%20red%20and%20black%20industrial%20design%2C%20precision%20engineered%20agricultural%20drilling%20equipment%20component&width=500&height=400&seq=toprak-burgu-category&orientation=landscape",
      features: ["Hassas Çalışma", "Güçlü Tork", "Kolay Kullanım", "Bakım Kolaylığı"],
      specs: "Güç: 30-180 HP",
      detailedSpecs: {
        power: "30-180 HP",
        torque: "1200-3500 Nm",
        gears: "2+1 Vites",
        material: "Çelik Alaşım",
        warranty: "2 Yıl",
        weight: "55-110 kg"
      }
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

  const handleDetailsClick = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleQuoteClick = () => {
    // Link to contact page will be handled by Link component
  };

  return (
    <>
      <section 
        ref={sectionRef}
        id="product-categories"
        className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-white">Ürün</span>
              <span className="text-red-500 ml-4">Kategorileri</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Tarım makinaları için özel tasarlanmış şanzıman sistemleri ve bileşenleri
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 overflow-hidden transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Specs Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {category.specs}
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleDetailsClick(category)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer"
                    >
                      Detaylar
                    </button>
                    <Link href="/contact" className="flex-1">
                      <button className="w-full px-4 py-2 border border-red-500 text-red-500 text-sm font-medium rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer">
                        Teklif Al
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-red-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">{selectedProduct.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-red-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {selectedProduct.specs}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Ürün Özellikleri</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Özellikler</h4>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Teknik Özellikler</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.detailedSpecs).map(([key, value]) => (
                        <div key={key} className="p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-gray-400 text-sm mb-1">
                            {key === 'power' && 'Güç'}
                            {key === 'torque' && 'Tork'}
                            {key === 'gears' && 'Vites'}
                            {key === 'material' && 'Malzeme'}
                            {key === 'warranty' && 'Garanti'}
                            {key === 'weight' && 'Ağırlık'}
                          </div>
                          <div className="text-white font-medium">{String(value)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Link href="/contact" className="flex-1">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer">
                        Teklif Al
                      </button>
                    </Link>
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
