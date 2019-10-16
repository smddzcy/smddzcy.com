import logo from './logo.png';
import ss1 from './screenshots/1.png';
import ss2 from './screenshots/2.png';
import ss3 from './screenshots/3.png';
import ss4 from './screenshots/4.png';
import ss5 from './screenshots/5.png';

export default {
  title: 'AdaptableBlotter',
  spoiler: 'An HTML5 library that integrates with vendor datagrids and provides additional functionality through a unified API.',
  url: 'http://www.adaptabletools.com/',
  appUrl: 'https://demo.adaptableblotter.com/',
  type: 'Web application, npm library',
  tech: [
    'React', 'Angular', 'Rollup', 'Lerna',
  ],
  date: '2019-01-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5],
  getContent: () => import('./document.mdx'),
};
