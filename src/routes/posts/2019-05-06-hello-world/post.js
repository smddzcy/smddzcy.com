export default {
  title: 'Hello Again, World',
  tags: ['blog'],
  spoiler: 'My first post on my new blog.',
  getContent: () => import('./document.mdx'),
};
