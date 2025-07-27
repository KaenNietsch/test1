'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img 
                  src="https://www.ozaksa.com/images/logo/9912811960093-118-%C3%96ZAKSA-LOGO.png" 
                  alt="ÖZAKSA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">ÖZAKSA</span>
                <span className="text-red-500 text-sm font-medium">OTOMOTİV</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
              1993 yılından beri tarım makinaları şanzıman imalatında güvenilir çözümler sunuyoruz. 
              Topluma ve çevreye saygı ilkesiyle hareket eden şirketimiz, kaliteli üretim anlayışıyla hizmet vermektedir.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-youtube-fill text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
                  Foto Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-500 text-lg mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Fevzi Çakmak Mh. Elit Sanayi Sitesi<br />
                    10758. Sk. No:2/M<br />
                    Karatay, Konya, Türkiye
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-red-500 text-lg" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">+90 332 501 59 14</span>
                  <span className="text-gray-400 text-sm">+90 543 287 7282</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-red-500 text-lg" />
                <span className="text-gray-400 text-sm">ozaksamakina@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-red-500 text-lg" />
                <span className="text-gray-400 text-sm">Pzt-Cum: 08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Özaksa Otomotiv. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
              Kullanım Şartları
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm cursor-pointer">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}