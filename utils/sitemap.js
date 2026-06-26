import { SITE_URL } from './site-config';
import { sectionData } from './section-data';

export function getSitemapUrls() {
  const urls = [{ loc: SITE_URL, changefreq: 'monthly', priority: '1.0' }];

  Object.keys(sectionData).forEach((section) => {
    urls.push({
      loc: `${SITE_URL}/sections/${section}`,
      changefreq: 'monthly',
      priority: '0.8',
    });

    sectionData[section].subsections.forEach((subsection) => {
      urls.push({
        loc: `${SITE_URL}/sections/${section}/${subsection.id}`,
        changefreq: 'monthly',
        priority: '0.7',
      });

      subsection.subSubsections?.forEach((subSubsection) => {
        urls.push({
          loc: `${SITE_URL}/sections/${section}/${subsection.id}/${subSubsection.id}`,
          changefreq: 'monthly',
          priority: '0.6',
        });
      });
    });
  });

  return urls;
}

export function generateSitemapXml() {
  const urls = getSitemapUrls();

  const urlEntries = urls
    .map(
      ({ loc, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
