import logo from './logo.png';
import ss1 from './screenshots/1.PNG';
import ss2 from './screenshots/2.PNG';
import ss3 from './screenshots/3.PNG';
import ss4 from './screenshots/4.PNG';
import ss5 from './screenshots/5.PNG';
import ss6 from './screenshots/6.PNG';
import ss7 from './screenshots/7.PNG';
import ss8 from './screenshots/8.PNG';
import ss9 from './screenshots/9.PNG';
import ss10 from './screenshots/10.PNG';
import ss11 from './screenshots/11.PNG';
import ss12 from './screenshots/12.PNG';
import ss13 from './screenshots/13.PNG';
import video from './video.mp4';

export default {
  title: 'Bartme',
  spoiler: 'A book barter platform in Turkey. Trade books with other people using a virtual currency.',
  url: 'https://www.bartme.co/',
  appUrl: 'https://apps.apple.com/tr/app/bartme-book-barter-platform/id1475653790',
  type: 'Cross-platform mobile app',
  tech: [
    'React', 'React Native', 'Expo', 'Node.js', 'MongoDB', 'AWS',
  ],
  date: '2019-08-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5, ss6, ss7, ss8, ss9, ss10, ss11, ss12, ss13],
  video,
  getContent: () => import('./document.mdx'),
};
