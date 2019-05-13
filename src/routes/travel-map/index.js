import * as Navi from 'navi';

export default Navi.route({
  title: 'Travel Map',
  getView: () => import('./document.mdx'),
});
