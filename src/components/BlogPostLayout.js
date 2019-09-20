import React from 'react';
import { View, Link, useCurrentRoute } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import { DiscussionEmbed } from 'disqus-react';
import Helmet from 'react-helmet';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faTwitter, faLinkedinIn, faRedditAlien, faWhatsapp, faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { camelCase } from 'change-case';
import siteMetadata from '../siteMetadata';
import ArticleMeta from './ArticleMeta';
import Bio from './Bio';
import styles from './BlogPostLayout.module.css';

function SocialShare(config) {
  return (
    <div className={styles.postSocial}>
      <FacebookShareButton {...config} className={[styles.socialButton, styles.facebook]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className={styles.faIconText}>Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton {...config} className={[styles.socialButton, styles.twitter]} via="smddzcy">
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className={styles.faIconText}>Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton {...config} className={[styles.socialButton, styles.linkedin]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
        <span className={styles.faIconText}>LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton {...config} className={[styles.socialButton, styles.reddit]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faRedditAlien} />
        </span>
        <span className={styles.faIconText}>Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton {...config} className={[styles.socialButton, styles.whatsapp]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        <span className={styles.faIconText}>WhatsApp</span>
      </WhatsappShareButton>
      <TelegramShareButton {...config} className={[styles.socialButton, styles.telegram]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faTelegram} />
        </span>
        <span className={styles.faIconText}>Telegram</span>
      </TelegramShareButton>
    </div>
  );
}

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
              <Link href={url.pathname}>{title}</Link>aaaaaaaaaaa
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
      )
      }
    </View>
  );
}

export default BlogPostLayout;
