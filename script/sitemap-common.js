const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

// 오늘 날짜 가져오기 & 도메인 설정
const getDate = new Date().toISOString();
const SKKF_DOMAIN = 'https://2022skkfdoc.com';
const SKKF_DOMAIN2 = 'https://www.2022skkfdoc.com';

//
const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  // 포함할 페이지와 제외할 페이지 등록
  const pages = await globby([
    // include
    '../src/pages/**/*.tsx',
    '../src/pages/*.tsx',
    // exclude
    '!../src/pages/_app.tsx',
    '!../src/pages/_document.tsx',
    '!../src/pages/404.tsx',
    '!../src/pages/archive/**/*.tsx',
    //include
    '../src/pages/archive/index.tsx',
    // (...중간 생략)
    // '!../pages/**/[t_id]/*.tsx',
    // '!../pages/**/[t_id]/**/*.tsx',
  ]);

  const newPages = [
    ...pages,
    '../src/pages/archive/origin-of-coordinate.tsx',
    '../src/pages/archive/celebration.tsx',
    '../src/pages/archive/thanks-to.tsx',
  ];

  // 파일 경로를 도메인 형태로 변경
  // ../pages/category/index.tsx -> https://wwww.codeit.kr/category
  // ../pages/community/threads -> https://wwww.codeit.kr/community/threads
  const pagesSitemap = `
    ${newPages
      .map((page) => {
        const path = page
          .replace('../src/pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${SKKF_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const pagesSitemap2 = `
    ${newPages
      .map((page) => {
        const path = page
          .replace('../src/pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${SKKF_DOMAIN2}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const generatedSitemap2 = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap2}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);
  const formattedSitemap2 = formatted(generatedSitemap2);

  fs.writeFileSync(
    '../public/sitemap/sitemap-common.xml',
    formattedSitemap,
    'utf8'
  );

  fs.writeFileSync(
    '../public/sitemap/sitemap-common2.xml',
    formattedSitemap2,
    'utf8'
  );
})();
