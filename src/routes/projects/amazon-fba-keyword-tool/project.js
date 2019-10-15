import logo from './logo.png';
import ss1 from './screenshots/1.png';

export default {
  title: 'Amazon FBA Keyword Tool',
  spoiler: 'A tool that lets Amazon sellers get real-time keyword search volumes, competition, and more.',
  url: 'https://sellerseo.com/',
  appUrl: 'https://chrome.google.com/webstore/detail/amazon-fba-keyword-tool-f/baklepnkcjnppafialjealpggafpmcol',
  type: 'Chrome extension',
  tech: [
    'React', 'Node.js',
  ],
  date: '2018-10-01',
  logo,
  screenshots: [ss1],
  youtubeEmbed: '<iframe width="100%" height="360" src="https://www.youtube.com/embed/5aV4QLf380E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  getContent: () => import('./document.mdx'),
};
