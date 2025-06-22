
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  
  const partners = [
    { name: 'Bitkub', logo: '🟦' },
    { name: 'Binance', logo: '🟨' },
    { name: 'Coinbase', logo: '🔵' },
    { name: 'Ethereum', logo: '⚫' },
    { name: 'Bitcoin', logo: '🟠' },
    { name: 'Solana', logo: '🟣' },
    { name: 'Polygon', logo: '🟪' },
    { name: 'Avalanche', logo: '🔴' },
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('partnersSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer flex flex-col items-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <p className="text-gray-300 text-sm font-medium text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            {t('partnersQuote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
