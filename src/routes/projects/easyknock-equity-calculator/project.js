import logo from './logo.png';
import ss1 from './screenshots/1.png';
import ss2 from './screenshots/2.png';
import ss3 from './screenshots/3.png';
import ss4 from './screenshots/4.png';
import ss5 from './screenshots/5.png';
import ss6 from './screenshots/6.png';
import video from './video.mp4';

export default {
  title: 'EasyKnock - Equity Calculator',
  spoiler: 'An interactive form to collect pre-sales user information.',
  url: 'https://www.easyknock.com/',
  appUrl: 'https://qualify.easyknock.com/',
  type: 'Web application',
  tech: ['React', 'Redux', 'Webpack'],
  date: '2018-09-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5, ss6],
  video,
  getContent: () => import('./document.mdx'),
};
