import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GlassCard from './GlassCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: t('portfolioItem1Title'),
      description: t('portfolioItem1Description'),
      detailedDescription: t('portfolioItem1DetailedDescription'),
      image: "/lovable-uploads/2496db32-a5e7-4955-ad7f-500900c9bcc5.png",
      category: t('portfolioItem1Category'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Адаптивний дизайн", "Портфоліо галерея", "Контактні форми", "SEO оптимізація"]
    },
    {
      id: 2,
      title: t('portfolioItem2Title'),
      description: t('portfolioItem2Description'),
      detailedDescription: t('portfolioItem2DetailedDescription'),
      image: "/lovable-uploads/607c9971-f4a1-4f2f-82b0-b611b0faf7b2.png",
      category: t('portfolioItem2Category'),
      technologies: ["Next.js", "SCSS", "GSAP", "Three.js"],
      features: ["3D анімації", "Інтерактивний дизайн", "Оптимізація швидкості", "Кросплатформність"]
    },
    {
      id: 3,
      title: t('portfolioItem3Title'),
      description: t('portfolioItem3Description'),
      detailedDescription: t('portfolioItem3DetailedDescription'),
      image: "/lovable-uploads/c4c14285-bfef-4e61-848f-a7e1297bb56f.png",
      category: t('portfolioItem3Category'),
      technologies: ["Vue.js", "Nuxt.js", "Bootstrap", "Chart.js"],
      features: ["Корпоративний стиль", "Інтеграція з CRM", "Аналітичні дашборди", "Багатомовність"]
    },
    {
      id: 4,
      title: t('portfolioItem4Title'),
      description: t('portfolioItem4Description'),
      detailedDescription: t('portfolioItem4DetailedDescription'),
      image: "/lovable-uploads/39359310-1c4d-4aae-8b69-81aee3328135.png",
      category: t('portfolioItem4Category'),
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Система оплати", "Панель управління", "Файловий менеджер", "Система відгуків"]
    },
    {
      id: 5,
      title: t('portfolioItem5Title'),
      description: t('portfolioItem5Description'),
      detailedDescription: t('portfolioItem5DetailedDescription'),
      image: "/lovable-uploads/3ab700fd-82e7-4646-a541-fb9855743760.png",
      category: t('portfolioItem5Category'),
      technologies: ["Gatsby", "GraphQL", "Styled Components", "Contentful"],
      features: ["Headless CMS", "Статична генерація", "Швидке завантаження", "Блог система"]
    },
    {
      id: 6,
      title: t('portfolioItem6Title'),
      description: t('portfolioItem6Description'),
      detailedDescription: t('portfolioItem6DetailedDescription'),
      image: "/lovable-uploads/ee8c936c-b732-44ca-a3cf-47e7c541f53a.png",
      category: t('portfolioItem6Category'),
      technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
      features: ["Геолокація", "Push сповіщення", "Онлайн оплата", "Відстеження замовлень"]
    },
    {
      id: 7,
      title: t('portfolioItem7Title'),
      description: t('portfolioItem7Description'),
      detailedDescription: t('portfolioItem7DetailedDescription'),
      image: "/lovable-uploads/085c7a7a-fcf8-40ab-b781-c2afb6ff2c29.png",
      category: t('portfolioItem7Category'),
      technologies: ["Angular", "TypeScript", "Socket.io", "PostgreSQL"],
      features: ["Реального часу співпраця", "Відеоконференції", "Управління задачами", "Інтеграції"]
    },
    {
      id: 8,
      title: t('portfolioItem8Title'),
      description: t('portfolioItem8Description'),
      detailedDescription: t('portfolioItem8DetailedDescription'),
      image: "/lovable-uploads/a23c6d2d-994c-4e49-a84b-63a316543b08.png",
      category: t('portfolioItem8Category'),
      technologies: ["React", "Three.js", "GSAP", "WebGL"],
      features: ["3D візуалізація", "Темна тема", "Smooth скролінг", "Інтерактивні елементи"]
    },
    {
      id: 9,
      title: t('portfolioItem9Title'),
      description: t('portfolioItem9Description'),
      detailedDescription: t('portfolioItem9DetailedDescription'),
      image: "/lovable-uploads/baeefd68-e7ce-4abd-bab6-459b1f32b7da.png",
      category: t('portfolioItem9Category'),
      technologies: ["React", "D3.js", "Express.js", "Redis"],
      features: ["Аналітика", "A/B тестування", "Email маркетинг", "Автоматизація"]
    },
    {
      id: 10,
      title: t('portfolioItem10Title'),
      description: t('portfolioItem10Description'),
      detailedDescription: t('portfolioItem10DetailedDescription'),
      image: "/lovable-uploads/9cc3bb96-222d-4e76-9482-a2a4fbe0b436.png",
      category: t('portfolioItem10Category'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Градієнтний дизайн", "Анімації", "Адаптивність", "SEO оптимізація"]
    },
    {
      id: 11,
      title: t('portfolioItem11Title'),
      description: t('portfolioItem11Description'),
      detailedDescription: t('portfolioItem11DetailedDescription'),
      image: "/lovable-uploads/52830e93-dab8-48e7-ac91-c8b3e52e9485.png",
      category: t('portfolioItem11Category'),
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      features: ["Безпека даних", "Відгуки користувачів", "Статистика використання", "Багатоплатформність"]
    },
    {
      id: 12,
      title: t('portfolioItem12Title'),
      description: t('portfolioItem12Description'),
      detailedDescription: t('portfolioItem12DetailedDescription'),
      image: "/lovable-uploads/7ed81f30-c1dd-48ba-954a-92cbf1601dc6.png",
      category: t('portfolioItem12Category'),
      technologies: ["React", "Node.js", "GraphQL", "Stripe"],
      features: ["Фінансові операції", "Порівняння продуктів", "Система рейтингів", "Безпечні платежі"]
    },
    {
      id: 13,
      title: t('portfolioItem13Title'),
      description: t('portfolioItem13Description'),
      detailedDescription: t('portfolioItem13DetailedDescription'),
      image: "/lovable-uploads/4281fff1-4a39-4c04-a6b0-727549f915e4.png",
      category: t('portfolioItem13Category'),
      technologies: ["React", "Web3.js", "Three.js", "IPFS"],
      features: ["Блокчейн інтеграція", "NFT галерея", "3D елементи", "Крипто платежі"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden font-inter" ref={ref}>
      {/* Enhanced background decoration with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-neon-green/5 to-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header with animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent">
            {t('portfolioTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {t('portfolioSubtitle')}
          </p>
        </div>

        {/* Enhanced Portfolio Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <GlassCard className="group overflow-hidden hover:shadow-2xl hover:shadow-neon-blue/20 transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <GlassCard className="px-3 py-1">
                      <span className="text-neon-blue text-sm font-medium">
                        {item.category}
                      </span>
                    </GlassCard>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed font-light">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => openModal(item)}
                      className="text-neon-blue hover:text-neon-purple transition-colors font-medium group-hover:animate-shimmer"
                    >
                      {t('detailsButton')} →
                    </button>
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center group-hover:animate-glow">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action with glassmorphism */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1000ms' }}>
          <GlassCard gradient className="p-8 border-neon-blue/30 hover:border-neon-purple/50">
            <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {t('portfolioCTA')}
            </h3>
            <p className="text-gray-300 mb-6 font-light">
              {t('portfolioCTAText')}
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-full hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 animate-glow font-semibold"
            >
              {t('startProject')}
            </button>
          </GlassCard>
        </div>
      </div>

      {/* Enhanced Modal with glassmorphism */}
      <Dialog open={!!selectedItem} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-6xl max-h-[90vh] bg-gray-900/90 backdrop-blur-md border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedItem && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image with zoom controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={zoomOut}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ZoomOut className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-white text-sm">{Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={zoomIn}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
                
                <div className="overflow-auto max-h-96 border border-gray-700 rounded-lg">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">{t('projectDescription')}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedItem.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">{t('technologies')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">{t('keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {selectedItem.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    {t('orderSimilarProject')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
