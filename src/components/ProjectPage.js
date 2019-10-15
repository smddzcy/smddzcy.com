import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-navi';
import Helmet from 'react-helmet';
import Carousel from './Carousel';
import siteMetadata from '../siteMetadata';
import { formatDateWithoutDay } from '../utils/formats';
import Bio from './Bio';
import MDX from './MDX';
import styles from './ProjectPage.module.css';

function ProjectPage({ blogRoot, MDXComponent, data }) {
  const { project, previousProject, nextProject } = data;
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function onKeyDown(evt) {
      evt = evt || window.event;
      if (selectedImageIdx != null) {
        if (evt.keyCode === 27) { // escape
          setSelectedImageIdx(null);
        } else if (evt.keyCode === 37) { // arrow left
          setSelectedImageIdx(Math.max(0, selectedImageIdx - 1));
        } else if (evt.keyCode === 39) { // arrow right
          setSelectedImageIdx(Math.min(project.screenshots.length - 1, selectedImageIdx + 1));
        }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImageIdx, project.screenshots.length]);

  useEffect(() => {
    if (selectedImageIdx != null) {
      document.querySelector('html').style.overflow = 'hidden';
    }
    return () => {
      document.querySelector('html').style.overflow = null;
    };
  }, [selectedImageIdx]);

  const stopPropagation = useCallback(e => e.stopPropagation(), []);
  const postUrl = `https://smddzcy.com/projects/${project.slug}`;

  const isWindowTight = windowWidth < 769;
  return (
    <div className={styles.ProjectPage}>
      <Helmet>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.spoiler} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:site_name" content="smddzcy" />
        <meta property="article:tag" content="Freelance" key="Freelance" />
        <meta property="article:tag" content="App Development" key="App Development" />
        {project.tech.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <meta property="article:section" content="Projects" />
        <meta property="article:published_time" content={new Date(project.date).toISOString()} />
        <meta property="article:modified_time" content={new Date(project.date).toISOString()} />
        <meta property="og:updated_time" content={new Date(project.date).toISOString()} />
        <meta property="og:image" content="https://smddzcy.com/post.png" />
        <meta property="og:image:secure_url" content="https://smddzcy.com/post.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={project.spoiler} />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:image" content="https://smddzcy.com/post.png" />
        <meta name="twitter:site" content="@smddzcy" />
        <meta name="twitter:creator" content="@smddzcy" />
        <meta name="twitter:url" content={postUrl} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@id': 'https://smddzcy.com/', name: 'Projects' } },
            { '@type': 'ListItem', position: 2, item: { '@id': postUrl, name: project.title } }],
        })}
        </script>
      </Helmet>
      {selectedImageIdx != null && (
      <div
        className={styles.ImageDialog}
        id="imageDialog"
        onClick={() => setSelectedImageIdx(null)}
      >
        <span
          onClick={() => setSelectedImageIdx(null)}
          className={styles.close}
          style={{
            top: isWindowTight ? 10 : 50,
            right: isWindowTight ? 25 : 100,
          }}
        >✕
        </span>
        <div className={styles.ImageDialogImgWrapper}>
          <img
            className={styles.image}
            width={375}
            src={project.screenshots[selectedImageIdx]}
            alt={project.title}
            onClick={stopPropagation}
          />
        </div>
      </div>
      )}
      <header className={styles.header}>
        <h1 className={styles.title}>
          {project.url ? (
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href={project.url || '#'}
            >{project.title}
            </a>
          ) : project.title}

        </h1>
        {project.url && (
        <h2>
          <span>Project Page</span>:&nbsp;
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={project.url}
          >{project.url}
          </a>
        </h2>
        )}
        {project.appUrl && (
          <h2>
            <span>App URL</span>:&nbsp;
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href={project.appUrl}
            >{project.appUrl}
            </a>
          </h2>
        )}
        <h2>
          <span>Date</span>: <time dateTime={project.date.toUTCString()}>{formatDateWithoutDay(project.date)}</time>
          {/* TODO: add project end date */}
        </h2>
        <h2>
          <span>Type</span>: {project.type}
        </h2>
        <h2>
          <span>Tech Stack</span>: {project.tech.join(', ')}
        </h2>
      </header>
      <div className={styles.line} />
      <MDX MDXComponent={MDXComponent} className={styles.ProjectPageLayout} />
      <div className={styles.MediaContainer}>
        <div className={styles.Carousel}>
          <Carousel key={project.title}>
            {project.screenshots.map((ss, idx) => (
              <img
                key={idx}
                className={styles.CarouselImage}
                onClick={() => setSelectedImageIdx(idx)}
                src={ss}
                alt={ss}
                draggable={false}
              />
            ))}
          </Carousel>
        </div>
        {project.video && (
        <video
          className={styles.CarouselVideo}
          controls
          muted
          autoPlay={false}
          key={project.title}
        >
          <source src={project.video} type="video/mp4" />
        </video>
        )}
        {project.youtubeEmbed && (
          <div className={styles.CarouselVideo} dangerouslySetInnerHTML={{ __html: project.youtubeEmbed }} />
        )}
      </div>

      <div className={styles.contactUs}>
        Contact me at <a href="mailto:samedduzcay@gmail.com">samedduzcay@gmail.com</a> for any requests.
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
            previousProject
            && (
            <Link className={styles.previous} href={`/projects/${previousProject.slug}`}>
              ← {previousProject.title}
            </Link>
            )
          }
          {
            nextProject
            && (
            <Link className={styles.next} href={`/projects/${nextProject.slug}`}>
              {nextProject.title} →
            </Link>
            )
          }
        </section>
      </footer>
    </div>
  );
}

export default ProjectPage;
