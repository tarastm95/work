
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть всі обов'язкові поля",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/tarasmazepa95@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast({
        title: "Дякуємо за звернення!",
        description: "Ми зв'яжемося з вами найближчим часом",
      });
    } catch (error) {
      toast({
        title: "Помилка",
        description: 'Не вдалося надіслати форму. Спробуйте ще раз пізніше.',
        variant: 'destructive'
      });
      return;
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contactTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {t('nameLabel')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('namePlaceholder')}
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    {t('emailLabel')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('emailPlaceholder')}
                    required
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    {t('messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={t('messagePlaceholder')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:from-blue-600 hover:to-purple-700 animate-fade-in"
                  style={{ animationDelay: '400ms' }}
                >
                  {t('sendButton')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contactInfo')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t('emailLabel')}</h4>
                      <p className="text-gray-300">{t('contactEmail')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t('phoneLabel')}</h4>
                      <p className="text-gray-300">{t('contactPhone')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t('address')}</h4>
                      <p className="text-gray-300">{t('contactAddress')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⏰</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Режим роботи</h4>
                      <p className="text-gray-300">{t('workingHours')}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
