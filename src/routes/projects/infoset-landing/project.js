import logo from './logo.png';
import ss1 from './screenshots/1.png';
import ss2 from './screenshots/2.png';
import ss3 from './screenshots/3.png';
import ss4 from './screenshots/4.png';
import ss5 from './screenshots/5.png';
import ss6 from './screenshots/6.png';
import ss7 from './screenshots/7.png';

export default {
  title: 'Infoset',
  spoiler: 'A cloud application providing advanced communication and marketing solutions to businesses.',
  url: 'https://infoset.app/',
  type: 'Web application, landing page',
  tech: [
    'C#', 'MariaDB', 'HTML5', 'SCSS', 'JavaScript', 'Webpack',
  ],
  date: '2019-09-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5, ss6, ss7],
  getContent: () => import('./document.mdx'),
};
