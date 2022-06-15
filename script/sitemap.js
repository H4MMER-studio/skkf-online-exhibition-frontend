const fs = require('fs');
const prettier = require('prettier');

const getDate = new Date().toISOString();
const SKKF_DOMAIN = 'https://2022skkfdoc.com';
const SKKF_DOMAIN2 = 'https://www.2022skkfdoc.com';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

// public/sitemap 내부의 모든 .gz 파일을 불러와 참조하도록 합니다.
(async () => {
  const sitemapIndex = `
          <sitemap>
            <loc>${SKKF_DOMAIN}/sitemap/sitemap-common.xml.gz</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>
          <sitemap>
            <loc>${SKKF_DOMAIN2}/sitemap/sitemap-common2.xml.gz</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync('../public/sitemap.xml', formattedSitemap, 'utf8');
})();
