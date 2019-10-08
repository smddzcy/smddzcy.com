import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-navi';
import Carousel from './Carousel';
import siteMetadata from '../siteMetadata';
import { formatDateWithoutDay } from '../utils/formats';
import Bio from './Bio';
import MDX from './MDX';
import styles from './ProjectPage.module.css';

function ProjectsPage({ blogRoot, MDXComponent, data }) {
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
  }, [selectedImageIdx]);

  useEffect(() => {
    if (selectedImageIdx != null) {
      document.querySelector('html').style.overflow = 'hidden';
    }
    return () => {
      document.querySelector('html').style.overflow = null;
    };
  }, [selectedImageIdx == null]);

  const stopPropagation = useCallback(e => e.stopPropagation(), []);

  const isWindowTight = windowWidth < 769;
  return (
    <div className={styles.ProjectPage}>
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
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={project.url || '#'}
          >{project.title}
          </a>
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
        <div
          className={styles.Carousel}
          style={{
            width: isWindowTight ? '95%' : '40.5%',
            marginRight: isWindowTight ? 'auto' : '7.5rem',
            marginLeft: isWindowTight ? 'auto' : '0',
            marginBottom: isWindowTight ? '2.5rem' : '0',
          }}
        >
          <Carousel>
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
          style={{
            width: isWindowTight ? '100%' : '40.5%',
          }}
          muted
        >
          <source src={project.video} type="video/mp4" />
        </video>
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

export default ProjectsPage;
