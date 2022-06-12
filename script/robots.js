const fs = require('fs');

const generatedSitemap = `
User-agent: *
Disallow:

Sitemap: http://2022skkfdoc.com/sitemap.xml
Sitemap: http://www.2022skkfdoc.com/sitemap.xml
`;

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
