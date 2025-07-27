'use client';

import { useEffect, useRef, useState } from 'react';

export default function LocationMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="location-map"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-white">Konum</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Konya merkez konumumuzda modern tesisimizi ziyaret edebilirsiniz
          </p>
        </div>

        {/* Map Container */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Location Details */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-6">Adres Bilgileri</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tam Adres</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Fevzi Çakmak Mh. Elit Sanayi Sitesi<br />
                        10758. Sk. No:2/M<br />
                        Karatay, Konya, Türkiye
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-navigation-line text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Ulaşım</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Konya merkez konumumuza şehir içi ulaşım araçlarıyla kolayca ulaşabilirsiniz. 
                        Karatay ilçesinde yer alan tesisimiz ana yollara yakın konumdadır.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-car-line text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Otopark</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Ziyaretçilerimiz için geniş otopark alanımız mevcuttur. 
                        Tesisimize araç ile rahatça ulaşabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Directions Button */}
                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/dir//Fevzi+Çakmak+Mh.+Elit+Sanayi+Sitesi+10758.+Sk.+No:2/M+Karatay/Konya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-navigation-line mr-2" />
                    Yol Tarifi Al
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="lg:col-span-2">
                <div className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.8564!2d32.5204!3d37.8956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUzJzQ0LjIiTiAzMsKwMzEnMTUuNCJF!5e0!3m2!1str!2str!4v1640000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Actions */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Hızlı İletişim
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+903325015914"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-phone-line mr-2" />
                Hemen Ara
              </a>
              <a
                href="mailto:ozaksamakina@gmail.com"
                className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line mr-2" />
                E-posta Gönder
              </a>
              <button className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <i className="ri-calendar-line mr-2" />
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}