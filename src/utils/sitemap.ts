
interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    ${lastmod ? `    <lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `    <changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `    <priority>${priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

export const defaultSitemapUrls: SitemapUrl[] = [
  {
    url: 'https://gravity-team.ua/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: 'https://gravity-team.ua/service/ecommerce',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gravity-team.ua/service/educational',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gravity-team.ua/service/landing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gravity-team.ua/service/corporate',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gravity-team.ua/service/portfolio',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gravity-team.ua/service/media',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  }
];

// Функція для завантаження sitemap
export const downloadSitemap = () => {
  const sitemap = generateSitemap(defaultSitemapUrls);
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
