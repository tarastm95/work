import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GlassCard from './GlassCard';

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('heroSlide1Title'),
      subtitle: t('heroSlide1Subtitle'),
      highlight: t('heroSlide1Highlight'),
      bgGradient: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: t('heroSlide2Title'),
      subtitle: t('heroSlide2Subtitle'),
      highlight: t('heroSlide2Highlight'),
      bgGradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      title: t('heroSlide3Title'),
      subtitle: t('heroSlide3Subtitle'),
      highlight: t('heroSlide3Highlight'),
      bgGradient: "from-indigo-600 via-blue-600 to-cyan-600"
    },
    {
      title: t('heroSlide4Title'),
      subtitle: t('heroSlide4Subtitle'),
      highlight: t('heroSlide4Highlight'),
      bgGradient: "from-green-600 via-teal-600 to-cyan-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden font-poppins animate-fade-in">
      {/* Enhanced Background with mesh gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} transition-all duration-1000`}>
        {/* Animated Background Elements with more variety */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Promotion Badge with glassmorphism */}
          <div className="mb-8 animate-fade-in-down">
            <GlassCard className="inline-block px-8 py-3 animate-glow">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-lg font-bold">
                ✨ {slides[currentSlide].highlight}
              </span>
            </GlassCard>
          </div>

          {/* Animated Title with typing effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          <p
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 leading-relaxed max-w-4xl mx-auto overflow-hidden whitespace-nowrap border-r-2 border-gray-100 animate-typing font-light"
            style={{ animationDelay: '0.2s' }}
          >
            {slides[currentSlide].subtitle}
          </p>
          
          {/* Enhanced CTA buttons with unified glassmorphism style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <GlassCard hover className="inline-block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden text-white text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold hover:text-neon-blue"
              >
                <span className="relative z-10">{t('orderNow')}</span>
              </button>
            </GlassCard>
            
            <GlassCard hover className="inline-block">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white text-lg px-10 py-4 rounded-full hover:text-neon-blue transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                {t('viewWork')} →
              </button>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation arrows with glassmorphism */}
      <GlassCard className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2">
        <button 
          onClick={prevSlide}
          className="text-white p-3 rounded-full transition-all duration-300 hover:text-neon-blue"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </GlassCard>
      
      <GlassCard className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2">
        <button 
          onClick={nextSlide}
          className="text-white p-3 rounded-full transition-all duration-300 hover:text-neon-blue"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </GlassCard>

      {/* Enhanced Dots indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-12 shadow-lg shadow-white/30' 
                : 'bg-white/50 hover:bg-white/70 w-3'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <GlassCard className="p-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default HeroSlider;
