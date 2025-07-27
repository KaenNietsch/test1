'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const products = [
    'Turbo Saman Makinası Şanzımanı',
    'Saman Patoz Makinası Şanzımanı',
    'Ot Makinası Şanzımanı',
    'Taş Toplama Şanzımanı',
    'Yer Fıstığı Patoz Makinası Şanzımanı',
    'Rotovatör Şanzımanı',
    'Toprak Burgu Makinası Şanzımanı',
    'Özel Tasarım Şanzıman',
    'Genel Bilgi'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        product: formData.product,
        message: formData.message
      }).toString();

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact-form"
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              İletişim <span className="text-red-500">Bilgileri</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Şanzıman ihtiyaçlarınız için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmak için hazır.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                    <p className="text-gray-300 mb-1">+90 332 501 59 14</p>
                    <p className="text-gray-300">+90 543 287 7282</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                    <p className="text-gray-300">ozaksamakina@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                    <p className="text-gray-300">
                      Fevzi Çakmak Mh. Elit Sanayi Sitesi<br />
                      10758. Sk. No:2/M<br />
                      Karatay, Konya, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-300">Pazartesi - Cuma: 08:00 - 17:00</p>
                    <p className="text-gray-300">Acil Durum: 24/7 Destek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Teklif Talep Formu
              </h3>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      placeholder="Şirket adınızı girin"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-2">
                    İlgilendiğiniz Ürün *
                  </label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm appearance-none pr-8"
                    >
                      <option value="">Ürün seçiniz</option>
                      {products.map((product, index) => (
                        <option key={index} value={product}>{product}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none text-sm"
                    placeholder="Mesajınızı yazın (maksimum 500 karakter)"
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold tracking-wide rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2" />
                      Gönderiliyor...
                    </span>
                  ) : (
                    'MESAJ GÖNDER'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm text-center">
                    <i className="ri-check-line mr-2" />
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                    <i className="ri-error-warning-line mr-2" />
                    Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}