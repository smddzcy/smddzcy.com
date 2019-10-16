import logo from './logo.png';
import ss1 from './screenshots/1.png';
import ss2 from './screenshots/2.png';
import video from './video.mp4';

export default {
  title: 'EasyKnock - Deal Portal',
  spoiler: 'An internal Excel-like dashboard for sales management.',
  url: 'https://www.easyknock.com/',
  type: 'Web application',
  tech: [
    'React', 'Redux', 'Webpack', 'Node.js', 'PostgreSQL',
  ],
  date: '2019-03-01',
  logo,
  screenshots: [ss2, ss1],
  video,
  getContent: () => import('./document.mdx'),
};
