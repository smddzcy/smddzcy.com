import React from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import Carousel from './Carousel';
import ArticleMeta from './ArticleMeta';
import siteMetadata from '../siteMetadata';
import { formatDateWithoutDay } from '../utils/formats';
import Bio from './Bio';
import MDX from './MDX';
import styles from './ProjectPage.module.css';

// import SocialShare from './SocialShare';
// import { camelCase } from 'change-case';
// import { DiscussionEmbed } from 'disqus-react';

function ProjectsPage({ blogRoot, MDXComponent, data }) {
  const { project, previousProject, nextProject } = data;
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  //disqus
  // const { url } = useCurrentRoute();
  // const postUrl = `https://smddzcy.com${url.href}`;
  // const disqusConfig = {
    //   url: postUrl,
    //   identifier: project.slug,
    //   title: project.title,
    // };
    
    React.useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    if (selectedImage) {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowX = "visible";
      document.body.style.overflowY = "visible";
    }
    
    console.log(windowWidth)
    
  const isWindowTight = windowWidth < 769;
  return (
  <div className={styles.ProjectPage}>
    {selectedImage && (
      <div className={styles.ImageDialog}>
        <label onClick={() => setSelectedImage(null)} className={styles.close}
          style={{
            top: isWindowTight ? 10 : 50,
            right: isWindowTight ? 25 : 100,
          }}
        >✕</label>
        <img className={styles.image} width={375} src={selectedImage} />
      </div>
    )}
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a rel="nofollow noopener noreferrer" target="_blank" href={project.url}>{project.title}</a>
      </h1>
      <h2 className={styles.date}>
        Project Date: <time dateTime={project.date.toUTCString()}>{formatDateWithoutDay(project.date)}</time>
      </h2>
      {project.contributors && (
        <div className={styles.ProjectContributors}>
          <label className={styles.contTitle}>Developed by&nbsp;</label>
          <ul className={styles.conts}>
            {project.contributors.map(cont => (
              <li key={cont.name}>
                <a href={`https://twitter.com/${cont.twitter}`} rel="nofollow noopener noreferrer" target="_blank">{cont.name}</a>
              </li>
            ))}
          </ul>
          </div>
      )}
      <ArticleMeta
        blogRoot={blogRoot}
        meta={{ date: null, tags: project.tags }}
      />
    </header>
    <div className={styles.line} />
    <div className={styles.MediaContainer}>
      <div
        className={styles.Carousel}
        style={{
          width: isWindowTight ? '100%' : '39.5%',
          marginRight: isWindowTight ? '0' : '7.5rem',
          marginBottom: isWindowTight ? '1.5625rem' : '0',
        }}
      >
        <Carousel>
          {project.sc_shoots.map((ss, idx) => (
            <img key={idx} className={styles.CarouselImage} onClick={() => setSelectedImage(ss)} src={ss} alt={ss} />
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
        >
          <source src={project.video} type="video/mp4" />
        </video>
      )}
    </div>
    <MDX MDXComponent={MDXComponent}/>

    {/* social */}
    {/* <SocialShare url={postUrl} title={project.title} hashtags={project.tags.map(tag => camelCase(tag))} /> */}
      {/* <div style={{ marginTop: '1rem' }}>
        <DiscussionEmbed shortname="smddzcy" config={disqusConfig} />
      </div> */}


      <div className={styles.contactUs}>
        <label>
            Contact us via&nbsp;
            <a href="mailto:samedduzcay@gmail.com">samedduzcay@gmail.com</a> or&nbsp;
            <a href="mailto:onurcskun@gmail.com">onurcskun@gmail.com</a>.
          </label>
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
