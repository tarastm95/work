
import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import JoinTeam from '../components/JoinTeam';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingElements from '../components/FloatingElements';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <SEO />
      <ScrollProgress />
      <FloatingElements />
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <Portfolio />
        <Calculator />
        <Testimonials />
        <FAQ />
        <JoinTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
