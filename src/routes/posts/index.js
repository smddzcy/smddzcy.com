import importAll from 'import-all.macro';
import * as Navi from 'navi';
import { join } from 'path';
import sortBy from 'lodash/sortBy';
import slugify from 'slugify';

// Get a list of all posts, that will not be loaded until the user
// requests them.
const postModules = importAll.deferred('./**/post.js');
const importPost = pathname => postModules[pathname]();
const postPathnames = Object.keys(postModules);
const datePattern = /^((\d{1,4})-(\d{1,4})-(\d{1,4}))[/-]/;

let postDetails = postPathnames.map(pathname => {
  const slug = slugify(
    pathname.replace(/post.jsx?$/, '').replace(/(\d)\/(\d)/, '$1-$2'),
  )
    .replace(/^[-.]+|[.-]+$/g, '')
    .replace(datePattern, '$1/');

  let date;
  const dateMatch = slug.match(datePattern);
  if (dateMatch) {
    date = new Date(dateMatch[2], parseInt(dateMatch[3], 10) - 1, dateMatch[4]);
  }

  return {
    slug,
    pathname,
    date,
  };
});

// Sort the pages by slug (which contain the dates)
postDetails = sortBy(postDetails, ['slug']).reverse();

// Create url-friendly slugs from post pathnames, and a `getPage()` function
// that can be used to load and return the post's Page object.
const posts = postDetails.map(({ slug, pathname, date }, i) => ({
  getPage: Navi.map(async () => {
    const { default: post } = await importPost(pathname);
    const { title, getContent, ...meta } = post;
    let previousSlug; let previousPost; let nextSlug; let
      nextPost;

    if (i !== 0) {
      const previousPostDetails = postDetails[i - 1];
      previousPost = (await importPost(previousPostDetails.pathname)).default;
      previousSlug = previousPostDetails.slug;
    }

    if (i + 1 < postDetails.length) {
      const nextPostDetails = postDetails[i + 1];
      nextPost = (await importPost(nextPostDetails.pathname)).default;
      nextSlug = nextPostDetails.slug;
    }

    return Navi.route({
      title,
      getData: (req, context) => ({
        date,
        pathname,
        slug,
        previousDetails: previousPost && {
          title: previousPost.title,
          href: join(context.blogRoot, 'posts', previousSlug),
        },
        nextDetails: nextPost && {
          title: nextPost.title,
          href: join(context.blogRoot, 'posts', nextSlug),
        },
        ...meta,
      }),
      getView: async () => {
        const { default: MDXComponent, ...other } = await getContent();
        return { MDXComponent, ...other };
      },
    });
  }),
  slug,
}));

export default posts;
