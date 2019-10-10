import logo from './logo.png';
import ss1 from './screenshots/1.png';
import video from './video.mp4';

export default {
  title: 'Pisano Web Widget',
  spoiler: 'A customizable web widget that Pisano users can put into their websites for feedback collection.',
  url: 'https://www.pisano.co/',
  type: 'Web application',
  tech: [
    'React', 'Redux', 'Webpack',
  ],
  date: '2018-06-01',
  logo,
  screenshots: [ss1],
  video,
  getContent: () => import('./document.mdx'),
};
