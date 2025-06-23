
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "створення сайтів, веб-розробка, інтернет-магазин, лендінг, дизайн, Україна, веб-студія",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://gravity-team.ua/",
  type = "website",
  author = "AI Lab"
}) => {
  const { t, language } = useLanguage();
  const pageTitle = title || t('seoTitle');
  const pageDescription = description || t('seoDescription');

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
