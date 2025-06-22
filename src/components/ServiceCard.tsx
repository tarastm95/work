
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Service } from '../store/slices/servicesSlice';

interface ServiceCardProps {
  service: Service;
  isLarge?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isLarge = true }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleViewDetails = () => {
    navigate(`/service/${service.id}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get translated title and description based on service ID
  const getServiceTitle = (serviceId: string) => {
    const titleMap = {
      '1': t('onlineStoreTitle'),
      '2': t('educationalPlatformTitle'),
      '3': t('landingPageTitle'),
      '4': t('corporateWebsiteTitle'),
      '5': t('portfolioSiteTitle'),
      '6': t('mediaPortalTitle'),
      '7': t('logoDesignTitle'),
      '8': t('printDesignTitle'),
      '9': t('bannerDesignTitle'),
      '10': t('redesignTitle')
    };
    return titleMap[serviceId] || service.title;
  };

  const getServiceDescription = (serviceId: string) => {
    const descriptionMap = {
      '1': t('onlineStoreDescription'),
      '2': t('educationalPlatformDescription'),
      '3': t('landingPageDescription'),
      '4': t('corporateWebsiteDescription'),
      '5': t('portfolioSiteDescription'),
      '6': t('mediaPortalDescription'),
      '7': t('logoDesignDescription'),
      '8': t('printDesignDescription'),
      '9': t('bannerDesignDescription'),
      '10': t('redesignDescription')
    };
    return descriptionMap[serviceId] || service.description;
  };

  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group ${isLarge ? 'h-full' : ''}`}>
      <h3 className={`font-bold text-white mb-4 group-hover:text-blue-400 transition-colors ${isLarge ? 'text-2xl' : 'text-xl'}`}>
        {getServiceTitle(service.id)}
      </h3>
      <p className={`text-gray-300 mb-6 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
        {getServiceDescription(service.id)}
      </p>
      
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-gray-500 line-through text-lg">
            {service.originalPrice.toLocaleString()} ₴
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -50%
          </span>
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {service.discountPrice.toLocaleString()} ₴
        </div>
      </div>
      
      <div className="space-y-3">
        <button 
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 font-medium"
        >
          {t('detailsButton')}
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
        >
          {t('orderNow')}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
