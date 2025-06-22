
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const JoinTeam: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('joinTeamTitle')}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('joinTeamSubtitle')}
              </span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('joinTeamDescription')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-white font-bold mb-2">{t('developers')}</h3>
              <p className="text-gray-300 text-sm">
                React, Node.js, Python, TypeScript
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-white font-bold mb-2">{t('designers')}</h3>
              <p className="text-gray-300 text-sm">
                UI/UX, Figma, Adobe Creative Suite
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-white font-bold mb-2">{t('marketers')}</h3>
              <p className="text-gray-300 text-sm">
                Digital Marketing, SEO, SMM
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('whatWeOffer')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                {t('competitiveSalary')}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                {t('flexibleSchedule')}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                {t('interestingProjects')}
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                {t('careerGrowth')}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {t('sendResume')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {t('viewVacancies')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
