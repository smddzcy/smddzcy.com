import React from 'react';
import { Link } from 'react-navi';
import ItemsCarousel from 'react-items-carousel';
import { MDXProvider } from '@mdx-js/tag';
import ArticleMeta from './ArticleMeta';
import styles from './ProjectPage.module.css';

function ProjectsPage({ blogRoot, MDXComponent, project }) {
  const {
    date, tags, title, slogan, sc_shoots, url, video, contributors,
  } = project;

  const [activeItemIndex, changeActiveItem] = React.useState(0);

  return (
  <div className={styles.ProjectPage}>
    <header className={styles.header}>
      <h1 className={styles.title}>
        {slogan}
      </h1>
      <h1 className={styles.title}>
        <a rel="nofollow noopener noreferrer" target="_blank" href={url}>{title}</a>
      </h1>
      <ArticleMeta
        blogRoot={blogRoot}
        meta={{ date, tags }}
      />
      {contributors && (
        <div className={styles.ProjectContributors}>
          <label className={styles.contTitle}>Contributors: </label>
          <ul className={styles.conts}>
            {contributors.map(cont => (
              <li key={cont}>
                <a href={`https://twitter.com/${cont.twitter}`} rel="nofollow noopener noreferrer" target="_blank">{cont.name}</a>
              </li>
            ))}
          </ul>
          </div>
      )}
    </header>
    {sc_shoots && (
      <div className={styles.CarouselContainer}>
        <ItemsCarousel
          // Placeholder configurations
          // enablePlaceholder
          // numberOfPlaceholderItems={5}
          // minimumPlaceholderTime={1000}
          // placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

          // Carousel configurations
          numberOfCards={3}
          gutter={12}
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
          {sc_shoots.map((ss, idx) => <img src={ss} alt={ss} />)}
        </ItemsCarousel>
      </div>
    )}
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
    {video && (
      <div className={styles.ProjectVideoContainer}>
        <video style={{ width: "35%" }} controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    )}
  </div>
  );
}
  
export default ProjectsPage;
