
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Star, Clock, Users, Zap } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { services } = useAppSelector(state => state.services);
  const { t } = useLanguage();
  
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">{t('serviceNotFound')}</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getServiceTitle = (serviceId: string) => {
    const titles = {
      '1': t('onlineStoreTitle'),
      '2': t('educationalPlatformTitle'),
      '3': t('landingPageTitle'),
      '4': t('corporateWebsiteTitle'),
      '5': t('portfolioSiteTitle'),
      '6': t('mediaPortalTitle'),
      '11': t('aiChatAgentTitle'),
      '12': t('recommendationAgentTitle'),
      '13': t('analyticsAgentTitle'),
      '14': t('contentGeneratorTitle'),
      '15': t('virtualAssistantTitle'),
      '16': t('monitoringAgentTitle')
    };
    return titles[serviceId] || service.title;
  };

  const getServiceDescription = (serviceId: string) => {
    const descriptions = {
      '1': t('onlineStoreDescription'),
      '2': t('educationalPlatformDescription'),
      '3': t('landingPageDescription'),
      '4': t('corporateWebsiteDescription'),
      '5': t('portfolioSiteDescription'),
      '6': t('mediaPortalDescription'),
      '11': t('aiChatAgentDescription'),
      '12': t('recommendationAgentDescription'),
      '13': t('analyticsAgentDescription'),
      '14': t('contentGeneratorDescription'),
      '15': t('virtualAssistantDescription'),
      '16': t('monitoringAgentDescription')
    };
    return descriptions[serviceId] || service.description;
  };

  const getServiceFeatures = (serviceId: string) => {
    const features = {
      '1': [
        t('feature1_1'),
        t('feature1_2'),
        t('feature1_3'),
        t('feature1_4'),
        t('feature1_5'),
        t('feature1_6')
      ],
      '2': [
        t('feature2_1'),
        t('feature2_2'),
        t('feature2_3'),
        t('feature2_4'),
        t('feature2_5'),
        t('feature2_6')
      ],
      '3': [
        t('feature3_1'),
        t('feature3_2'),
        t('feature3_3'),
        t('feature3_4'),
        t('feature3_5'),
        t('feature3_6')
      ],
      '4': [
        t('feature4_1'),
        t('feature4_2'),
        t('feature4_3'),
        t('feature4_4'),
        t('feature4_5'),
        t('feature4_6')
      ],
      '5': [
        t('feature5_1'),
        t('feature5_2'),
        t('feature5_3'),
        t('feature5_4'),
        t('feature5_5'),
        t('feature5_6')
      ],
      '6': [
        t('feature6_1'),
        t('feature6_2'),
        t('feature6_3'),
        t('feature6_4'),
        t('feature6_5'),
        t('feature6_6')
      ],
      '11': [
        t('feature11_1'),
        t('feature11_2'),
        t('feature11_3'),
        t('feature11_4'),
        t('feature11_5'),
        t('feature11_6')
      ],
      '12': [
        t('feature12_1'),
        t('feature12_2'),
        t('feature12_3'),
        t('feature12_4'),
        t('feature12_5'),
        t('feature12_6')
      ],
      '13': [
        t('feature13_1'),
        t('feature13_2'),
        t('feature13_3'),
        t('feature13_4'),
        t('feature13_5'),
        t('feature13_6')
      ],
      '14': [
        t('feature14_1'),
        t('feature14_2'),
        t('feature14_3'),
        t('feature14_4'),
        t('feature14_5'),
        t('feature14_6')
      ],
      '15': [
        t('feature15_1'),
        t('feature15_2'),
        t('feature15_3'),
        t('feature15_4'),
        t('feature15_5'),
        t('feature15_6')
      ],
      '16': [
        t('feature16_1'),
        t('feature16_2'),
        t('feature16_3'),
        t('feature16_4'),
        t('feature16_5'),
        t('feature16_6')
      ]
    };
    return features[serviceId] || [];
  };

  const getServiceStats = (serviceId: string) => {
    const stats = {
      '1': { projects: '150+', conversion: '12%', avgTime: t('days25') },
      '2': { projects: '45+', conversion: '89%', avgTime: t('days35') },
      '3': { projects: '300+', conversion: '28%', avgTime: t('days7') },
      '4': { projects: '200+', conversion: '15%', avgTime: t('days14') },
      '5': { projects: '120+', conversion: '22%', avgTime: t('days10') },
      '6': { projects: '80+', conversion: '18%', avgTime: t('days30') },
      '11': { projects: '60+', conversion: '90%', avgTime: t('days25') },
      '12': { projects: '40+', conversion: '85%', avgTime: t('days30') },
      '13': { projects: '30+', conversion: '88%', avgTime: t('days35') },
      '14': { projects: '75+', conversion: '92%', avgTime: t('days25') },
      '15': { projects: '50+', conversion: '80%', avgTime: t('days30') },
      '16': { projects: '90+', conversion: '95%', avgTime: t('days14') }
    };
    return stats[serviceId] || { projects: '50+', conversion: '20%', avgTime: t('days14') };
  };

  const features = getServiceFeatures(service.id);
  const stats = getServiceStats(service.id);
  const serviceTitle = getServiceTitle(service.id);
  const serviceDescription = getServiceDescription(service.id);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {t('backButton')}
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {serviceDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 line-through text-2xl">
                  {service.originalPrice.toLocaleString()} ₴
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold">
                  -50%
                </span>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {service.discountPrice.toLocaleString()} ₴
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('orderNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('resultsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-blue-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.projects}</div>
              <div className="text-gray-300">{t('completedProjects')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.conversion}</div>
              <div className="text-gray-300">{t('averageConversion')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-green-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.avgTime}</div>
              <div className="text-gray-300">{t('averageDevelopmentTime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              {t('whatIsIncluded')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      {(service.id === '1' || service.id === '2' || service.id === '3' || service.id === '4' || service.id === '5' || service.id === '6' || service.id === '11' || service.id === '12' || service.id === '13' || service.id === '14' || service.id === '15' || service.id === '16') && (
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {service.id === '1' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('wpBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'wpBenefit1',
                        'wpBenefit2',
                        'wpBenefit3',
                        'wpBenefit4',
                        'wpBenefit5',
                        'wpBenefit6',
                        'wpBenefit7'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('wpOfferTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'wpOffer1',
                        'wpOffer2',
                        'wpOffer3',
                        'wpOffer4',
                        'wpOffer5',
                        'wpOffer6',
                        'wpOffer7',
                        'wpOffer8',
                        'wpOffer9',
                        'wpOffer10'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-8 text-center">
                      {t('wpConclusion')}
                    </p>
                  </div>
                </>
              )}

              {service.id === '2' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('eduBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'eduBenefit1',
                        'eduBenefit2',
                        'eduBenefit3',
                        'eduBenefit4',
                        'eduBenefit5',
                        'eduBenefit6',
                        'eduBenefit7',
                        'eduBenefit8'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('eduServiceTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'eduService1',
                        'eduService2',
                        'eduService3',
                        'eduService4',
                        'eduService5',
                        'eduService6',
                        'eduService7',
                        'eduService8',
                        'eduService9',
                        'eduService10',
                        'eduService11',
                        'eduService12'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-8 text-center">
                      {t('eduConclusion')}
                    </p>
                  </div>
                </>
              )}

              {service.id === '3' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('lpBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'lpBenefit1',
                        'lpBenefit2',
                        'lpBenefit3',
                        'lpBenefit4',
                        'lpBenefit5',
                        'lpBenefit6',
                        'lpBenefit7',
                        'lpBenefit8'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('lpServiceTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'lpService1',
                        'lpService2',
                        'lpService3',
                        'lpService4',
                        'lpService5',
                        'lpService6',
                        'lpService7',
                        'lpService8',
                        'lpService9',
                        'lpService10'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  <p className="text-gray-300 mt-8 text-center">
                    {t('lpConclusion')}
                  </p>
                </div>
              </>
              )}

              {service.id === '4' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('cwBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'cwBenefit1',
                        'cwBenefit2',
                        'cwBenefit3',
                        'cwBenefit4',
                        'cwBenefit5',
                        'cwBenefit6',
                        'cwBenefit7'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('cwServiceTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'cwService1',
                        'cwService2',
                        'cwService3',
                        'cwService4',
                        'cwService5',
                        'cwService6',
                        'cwService7',
                        'cwService8',
                        'cwService9',
                        'cwService10'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-8 text-center">
                      {t('cwConclusion')}
                    </p>
                  </div>
                </>
              )}

              {service.id === '5' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('pfBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'pfBenefit1',
                        'pfBenefit2',
                        'pfBenefit3',
                        'pfBenefit4',
                        'pfBenefit5',
                        'pfBenefit6',
                        'pfBenefit7'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('pfServiceTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'pfService1',
                        'pfService2',
                        'pfService3',
                        'pfService4',
                        'pfService5',
                        'pfService6',
                        'pfService7',
                        'pfService8',
                        'pfService9',
                        'pfService10'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-8 text-center">
                      {t('pfConclusion')}
                    </p>
                  </div>
                </>
              )}

              {service.id === '6' && (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                      {t('mpBenefitsTitle')}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'mpBenefit1',
                        'mpBenefit2',
                        'mpBenefit3',
                        'mpBenefit4',
                        'mpBenefit5',
                        'mpBenefit6',
                        'mpBenefit7',
                        'mpBenefit8',
                        'mpBenefit9'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      {t('mpServiceTitle')}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'mpService1',
                        'mpService2',
                        'mpService3',
                        'mpService4',
                        'mpService5',
                        'mpService6',
                        'mpService7',
                        'mpService8',
                        'mpService9',
                        'mpService10',
                        'mpService11',
                        'mpService12'
                      ].map((key, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-400 mt-1" size={20} />
                          <span className="text-gray-300">{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-8 text-center">
                      {t('mpConclusion')}
                    </p>
                  </div>
                </>
              )}

              {service.id === '11' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('caBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'caBenefit1',
                      'caBenefit2',
                      'caBenefit3',
                      'caBenefit4',
                      'caBenefit5',
                      'caBenefit6'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.id === '12' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('raBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'raBenefit1',
                      'raBenefit2',
                      'raBenefit3',
                      'raBenefit4',
                      'raBenefit5',
                      'raBenefit6',
                      'raBenefit7'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.id === '13' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('aaBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'aaBenefit1',
                      'aaBenefit2',
                      'aaBenefit3',
                      'aaBenefit4',
                      'aaBenefit5',
                      'aaBenefit6'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.id === '14' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('cgBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'cgBenefit1',
                      'cgBenefit2',
                      'cgBenefit3',
                      'cgBenefit4',
                      'cgBenefit5',
                      'cgBenefit6'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.id === '15' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('vaBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'vaBenefit1',
                      'vaBenefit2',
                      'vaBenefit3',
                      'vaBenefit4',
                      'vaBenefit5',
                      'vaBenefit6'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.id === '16' && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    {t('maBenefitsTitle')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'maBenefit1',
                      'maBenefit2',
                      'maBenefit3',
                      'maBenefit4',
                      'maBenefit5',
                      'maBenefit6'
                    ].map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-400 mt-1" size={20} />
                        <span className="text-gray-300">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              {t('howItWorks')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: t('processStep1Title'), desc: t('processStep1Desc') },
                { step: '02', title: t('processStep2Title'), desc: t('processStep2Desc') },
                { step: '03', title: t('processStep3Title'), desc: t('processStep3Desc') },
                { step: '04', title: t('processStep4Title'), desc: t('processStep4Desc') }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              {t('clientReviews')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: t('reviewerName1'),
                  company: t('reviewerCompany1'),
                  text: t('reviewText1'),
                  rating: 5
                },
                {
                  name: t('reviewerName2'), 
                  company: t('reviewerCompany2'),
                  text: t('reviewText2'),
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('contactUsNow')}
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            {t('startProject')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
