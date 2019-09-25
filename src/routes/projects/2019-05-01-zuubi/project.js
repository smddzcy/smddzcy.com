import dummy_app_ss from './dummy_app_ss.jpeg';
import dumym_video from './dummy_video.mp4';

export default {
    title: 'Zuubi',
    slogan: 'Book, Park & Charge Anywhere',
    url: 'https://www.zuubi.uk/',
    video: dumym_video,
    sc_shoots: [dummy_app_ss, dummy_app_ss],
    tags: ['javascript', 'react', 'react-native', 'expo', 'ios'],
    spoiler: 'Yaraktan kurekten bi uygulama iste aq.',
    getContent: () => import('./document.mdx'),
};