import React, { useCallback } from 'react';
import { join } from 'path';
import { useNavigation } from 'react-navi';
import { formatDateWithoutDay } from '../utils/formats';
import styles from './ProjectCard.module.css';

function ProjectCard({ blogRoot, project, idx }) {
  const navigation = useNavigation();
  const goToProject = useCallback(() => {
    navigation.navigate(join(blogRoot, 'projects', project.slug.toLowerCase()));
  }, [navigation, blogRoot, project.slug]);
  return (
    <div
      className={styles.ProjectCard}
      style={{
        ...((idx + 1) % 2 === 0 ? { marginRight: '0rem' } : {}),
      }}
      onClick={goToProject}
    >
      <div className={styles.ProjectCardTop}>
        <img
          src={project.logo}
          alt={project.title}
          className={styles.ProjectLogo}
        />
        <div>
          <div className={styles.ProjectCardName}>
            {project.title}
          </div>
          <div className={styles.ProjectCardType}>
            {project.type}
          </div>
        </div>
      </div>
      <div className={styles.ProjectCardSpoiler}>
        {project.spoiler}
      </div>
      <div className={styles.ProjectCardTags}>
        {project.tech && project.tech.map(tag => `#${tag} `)}
      </div>
      <div className={styles.ProjectCardBottom}>
        <span className={styles.ProjectCardBottomText}>
          <time dateTime={project.date.toUTCString()}>{formatDateWithoutDay(project.date)}</time>
        </span>
        {/* <Link
          className={styles.ProjectCardBottomText}
          href={}
        >
          Details
        </Link> */}
      </div>
    </div>
  );
}

export default ProjectCard;
