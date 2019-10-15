import logo from './logo.png';
import ss1 from './screenshots/1.PNG';
import ss2 from './screenshots/2.PNG';
import ss3 from './screenshots/3.PNG';
import ss4 from './screenshots/4.PNG';
import ss5 from './screenshots/5.PNG';
import ss6 from './screenshots/6.PNG';
import video from './video.mp4';

export default {
  title: 'Lisa',
  spoiler: 'An AI application that picks the best photo to share on Instagram.',
  url: 'https://asklisa.ai/',
  type: 'Cross-platform mobile app',
  tech: [
    'React', 'React Native', 'Node.js', 'MongoDB', 'Scala', 'Hadoop', 'Spark', 'HBase',
  ],
  date: '2019-02-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5, ss6],
  video,
  getContent: () => import('./document.mdx'),
};
