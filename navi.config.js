import path from 'path';

export const renderPageToString = require.resolve('./src/renderPageToString');

/**
 * Get the file to write each URL to during the build
 */
export function getPagePathname({ url }) {
  if (url.pathname === '/rss') {
    return 'rss.xml';
  }
  if (url.pathname === '/') {
    return 'index.html';
  }
  // Github pages to automatically redirect 404 errors to 404.html
  if (url.pathname === '/404') {
    return '404.html';
  }
  return path.join(url.pathname.slice(1), 'index.html');
}
