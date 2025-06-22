import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice';
import { Menu, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isMobileMenuOpen } = useAppSelector(state => state.ui);
  const { services } = useAppSelector(state => state.services);
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    dispatch(closeMobileMenu());
  };

  const navigateToService = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
    setIsServicesOpen(false);
    dispatch(closeMobileMenu());
  };

  // Get translated service title
  const getServiceTitle = (serviceId: string) => {
    const titleMap = {
      '1': t('onlineStoreTitle'),
      '2': t('educationalPlatformTitle'),
      '3': t('landingPageTitle'),
      '4': t('corporateWebsiteTitle'),
      '5': t('portfolioSiteTitle'),
      '6': t('mediaPortalTitle')
    };
    return titleMap[serviceId] || services.find(s => s.id === serviceId)?.title || '';
  };

  // Get main services from Redux store
  const mainServices = services.filter(service => service.category === 'main');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ai lab
            </span>
            <span className="text-white ml-2">TEAM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('about')}
            </button>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-blue-400 transition-colors">
                {t('services')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50">
                  {mainServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigateToService(service.id)}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                    >
                      {getServiceTitle(service.id)}
                    </button>
                  ))}
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-blue-400 hover:bg-gray-700 transition-colors"
                  >
                    {t('allServices')}
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('calculator')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('faq')}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('testimonials')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {t('contacts')}
            </button>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('getConsultation')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              <div className="flex justify-center mb-4">
                <LanguageSelector />
              </div>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('about')}
              </button>
              
              {/* Mobile Services Menu */}
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-white font-medium mb-2">{t('services')}</div>
                {mainServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-1"
                  >
                    {getServiceTitle(service.id)}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-blue-400 hover:text-blue-300 transition-colors py-1"
                >
                  {t('allServices')}
                </button>
              </div>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('calculator')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('faq')}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('testimonials')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                {t('contacts')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4"
              >
                {t('getConsultation')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
