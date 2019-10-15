import React from 'react';
import { View, Link, useCurrentRoute } from 'react-navi';
import { DiscussionEmbed } from 'disqus-react';
import Helmet from 'react-helmet';
import { camelCase } from 'change-case';
import siteMetadata from '../siteMetadata';
import ArticleMeta from './ArticleMeta';
import SocialShare from './SocialShare';
import MDX from './MDX';
import Bio from './Bio';
import styles from './BlogPostLayout.module.css';

function BlogPostLayout({ blogRoot }) {
  const { title, data, url } = useCurrentRoute();
  const postUrl = `https://smddzcy.com${url.href}`;
  const disqusConfig = {
    url: postUrl,
    identifier: data.slug,
    title,
  };

  const imageUrl = 'https://smddzcy.com/post.png';

  return (
    <View>
      {({ MDXComponent, readingTime }) => (
        <article className={styles.container}>
          <Helmet>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={data.spoiler} />
            <meta property="og:url" content={postUrl} />
            <meta property="og:site_name" content="smddzcy" />
            {data.tags.map(tag => (
              <meta property="article:tag" content={tag} key={tag} />
            ))}
            <meta property="article:section" content="Blog" />
            <meta property="article:published_time" content={data.date.toISOString()} />
            <meta property="article:modified_time" content={data.date.toISOString()} />
            <meta property="og:updated_time" content={data.date.toISOString()} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:secure_url" content={imageUrl} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={data.spoiler} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:site" content="@smddzcy" />
            <meta name="twitter:creator" content="@smddzcy" />
            <meta name="twitter:url" content={postUrl} />
            <script type="application/ld+json">{JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, item: { '@id': 'https://smddzcy.com/', name: 'Blog' } },
                { '@type': 'ListItem', position: 2, item: { '@id': postUrl, name: title } }],
            })}
            </script>
          </Helmet>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <Link href={url.pathname}>{title}</Link>
            </h1>
            <ArticleMeta
              blogRoot={blogRoot}
              meta={data}
              readingTime={readingTime}
            />
          </header>
          <MDX MDXComponent={MDXComponent} />
          <SocialShare url={postUrl} title={title} hashtags={data.tags.map(tag => camelCase(tag))} />
          <div style={{ marginTop: '1rem' }}>
            <DiscussionEmbed shortname="smddzcy" config={disqusConfig} />
          </div>
          <footer className={styles.footer}>
            <h3 className={styles.title}>
              <Link href={blogRoot}>
                {siteMetadata.title}
              </Link>
            </h3>
            <Bio className={styles.bio} />
            <section className={styles.links}>
              {
                data.previousDetails
                && (
                <Link className={styles.previous} href={data.previousDetails.href}>
                  ← {data.previousDetails.title}
                </Link>
                )
              }
              {
                data.nextDetails
                && (
                <Link className={styles.next} href={data.nextDetails.href}>
                  {data.nextDetails.title} →
                </Link>
                )
              }
            </section>
          </footer>
        </article>
      )}
    </View>
  );
}

export default BlogPostLayout;
