import React from 'react';
import { View, Link, useCurrentRoute } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import Disqus from 'disqus-react';
import siteMetadata from '../siteMetadata';
import ArticleMeta from './ArticleMeta';
import Bio from './Bio';
import styles from './BlogPostLayout.module.css';

function BlogPostLayout({ blogRoot }) {
  const { title, data, url } = useCurrentRoute();
  const disqusConfig = {
    url: url.href,
    identifier: data.slug,
    title,
  };

  return (
    <View>
      {({ MDXComponent, readingTime }) => (
        <article className={styles.container}>
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
          <MDXProvider components={{
            a: props => {
              const newProps = { ...props };
              if (!props.rel && props.href.includes('http')) {
                // external link
                newProps.rel = 'nofollow noopener noreferrer';
                newProps.target = '_blank';
              }
              return <Link {...newProps} />;
            },
            wrapper: ({ children }) => (
              <div className={styles.content}>
                {children}
              </div>
            ),
          }}
          >
            <MDXComponent />
          </MDXProvider>
          <Disqus.DiscussionEmbed shortname="smddzcy" config={disqusConfig} />
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
      )
      }
    </View>
  );
}

export default BlogPostLayout;
