
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  title = "AI Lab | Створення сучасних сайтів для вашого бізнесу",
  description = "Професійна веб-студія AI Lab створює ефективні сайти: інтернет-магазини, освітні платформи, лендінги. Знижка 50% на всі послуги!",
  keywords = "створення сайтів, веб-розробка, інтернет-магазин, лендінг, дизайн, Україна, веб-студія",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://gravity-team.ua/",
  type = "website",
  author = "AI Lab"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
