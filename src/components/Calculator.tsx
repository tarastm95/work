import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calculator as CalculatorIcon, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

const Calculator: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  const [projectType, setProjectType] = useState('landing');
  const [complexity, setComplexity] = useState('simple');
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<string[]>([]);
  const [cost, setCost] = useState(0);

  const projectTypes = {
    landing: { name: t('landingPage'), base: 12000 },
    corporate: { name: t('corporateWebsite'), base: 25000 },
    store: { name: t('onlineStore'), base: 45000 },
    education: { name: t('educationalPlatform'), base: 55000 },
    portfolio: { name: t('portfolioSite'), base: 18000 },
    media: { name: t('mediaPortal'), base: 60000 }
  };

  const complexityMultipliers = {
    simple: { name: t('simple'), multiplier: 0.8 },
    medium: { name: t('medium'), multiplier: 1 },
    complex: { name: t('complex'), multiplier: 1.2 }
  };

  const availableFeatures = [
    { id: 'cms', name: t('cms'), price: 5000 },
    { id: 'seo', name: t('seo'), price: 3000 },
    { id: 'analytics', name: t('analytics'), price: 2000 },
    { id: 'multilingual', name: t('multilingual'), price: 8000 }
  ];

  const calculateCost = () => {
    let baseCost = projectTypes[projectType].base;
    baseCost *= complexityMultipliers[complexity].multiplier;
    baseCost += (pages - 1) * 1500;
    
    const featuresPrice = features.reduce((sum, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const totalCost = Math.min(baseCost + featuresPrice, 60000);
    setCost(Math.round(totalCost));
  };

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section id="calculator" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <CalculatorIcon className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl font-bold text-white">{t('calculator')}</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('calculatorSubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    {t('projectType')}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                  >
                    {Object.entries(projectTypes).map(([key, type]) => (
                      <option key={key} value={key}>{type.name}</option>
                    ))}
                  </select>
                </div>

                {/* Design Complexity */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    {t('designComplexity')}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(complexityMultipliers).map(([key, comp]) => (
                      <button
                        key={key}
                        onClick={() => setComplexity(key)}
                        className={`py-3 px-4 rounded-lg border transition-colors ${
                          complexity === key
                            ? 'bg-blue-600 border-blue-400 text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        {comp.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pages Count */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    {t('pages')}: {pages}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-1">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    {t('features')}
                  </label>
                  <div className="space-y-2">
                    {availableFeatures.map((feature) => (
                      <label key={feature.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={features.includes(feature.id)}
                          onChange={() => toggleFeature(feature.id)}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">{feature.name}</span>
                        <span className="text-blue-400">+{feature.price.toLocaleString()} грн</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Result */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-center">
                <DollarSign className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('estimatedCost')}
                </h3>
                {cost > 0 && (
                  <div className="text-4xl font-bold text-white mb-4">
                    {t('from')} {cost.toLocaleString()} грн
                  </div>
                )}
                <Button
                  onClick={calculateCost}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3"
                >
                  {t('calculate')}
                </Button>
                <p className="text-blue-100 text-sm mt-4">
                  {t('calculatorDisclaimer')}
                </p>
                <p className="text-blue-200 text-xs mt-2">
                  Максимальна вартість: 60,000 грн
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
