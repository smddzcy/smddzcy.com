import React from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import ItemsCarousel from 'react-items-carousel';
import ArticleMeta from './ArticleMeta';
import SocialShare from './SocialShare';
import siteMetadata from '../siteMetadata';
import { camelCase } from 'change-case';
import { DiscussionEmbed } from 'disqus-react';
import Bio from './Bio';
import MDX from './MDX';
import styles from './ProjectPage.module.css';

function ProjectsPage({ blogRoot, MDXComponent, data }) {
  const { project, previousProject, nextProject } = data;
  const [activeItemIndex, changeActiveItem] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { url } = useCurrentRoute();
  const postUrl = `https://smddzcy.com${url.href}`;
  const disqusConfig = {
    url: postUrl,
    identifier: project.slug,
    title: project.title,
  };

  if (selectedImage) {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowX = "visible";
    document.body.style.overflowY = "visible";
  }

  return (
  <div className={styles.ProjectPage}>
    {selectedImage && (
      <div className={styles.ImageDialog}>
        <label onClick={() => setSelectedImage(null)} className={styles.close}>✕</label>
        <img className={styles.image} width={375} src={selectedImage} />
      </div>
    )}
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a rel="nofollow noopener noreferrer" target="_blank" href={project.url}>{project.title}</a>
      </h1>
      <ArticleMeta
        blogRoot={blogRoot}
        meta={{ date: project.date, tags: project.tags }}
      />
      {project.contributors && (
        <div className={styles.ProjectContributors}>
          <label className={styles.contTitle}>Contributors: </label>
          <ul className={styles.conts}>
            {project.contributors.map(cont => (
              <li key={cont.name}>
                <a href={`https://twitter.com/${cont.twitter}`} rel="nofollow noopener noreferrer" target="_blank">{cont.name}</a>
              </li>
            ))}
          </ul>
          </div>
      )}
    </header>
    <MDX MDXComponent={MDXComponent}/>
    {project.sc_shoots && (
      <div className={styles.CarouselContainer}>
        <ItemsCarousel
          // Placeholder configurations
          // enablePlaceholder
          // numberOfPlaceholderItems={5}
          // minimumPlaceholderTime={1000}
          // placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

          // Carousel configurations
          numberOfCards={3}
          gutter={1}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={false}

          // Active item configurations
          requestToChangeActive={changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}

          // Chevron configurations
          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={true}
        >
          {project.sc_shoots.map((ss, i) => <img onClick={() => setSelectedImage(ss)} key={i} src={ss} alt={ss} />)}
        </ItemsCarousel>
      </div>
    )}
    {project.video && (
      <div className={styles.ProjectVideoContainer}>
        <video width="228.891" height="404.359" controls>
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
    )}
    <SocialShare url={postUrl} title={project.title} hashtags={project.tags.map(tag => camelCase(tag))} />
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
            <Link className={styles.next}href={`/projects/${nextProject.slug}`}>
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
