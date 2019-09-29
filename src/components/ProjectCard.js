import React from 'react';
import { join } from 'path';
import { Link } from 'react-navi';
import { formatDateWithoutDay } from '../utils/formats';
import styles from './ProjectCard.module.css';
import dummy_project_logo from './dummy_project_logo.png';

function ProjectCard({ blogRoot, project, idx }) {
  return (
    <div
      className={styles.ProjectCard}
      style={{
      ...((idx + 1) % 2 === 0 ? { marginRight: '0rem'} : {}),
      }}
    >
      <div className={styles.ProjectCardTop}>
        <img src={dummy_project_logo} alt="app_logo" className={styles.ProjectLogo}/>
        <label className={styles.ProjectCardName}>
          {project.title}
        </label>
      </div>
      <label className={styles.ProjectCardSpoiler}>
        {project.spoiler}
      </label>
      <label className={styles.ProjectCardTags}>
        {project.tags && project.tags.map(tag => `#${tag} `)}
      </label>
      <div className={styles.ProjectCardBottom}>
        <label className={styles.ProjectCardBottomText}>
          <time dateTime={project.date.toUTCString()}>{formatDateWithoutDay(project.date)}</time>
        </label>
        <Link
          className={styles.ProjectCardBottomText}
          href={join(blogRoot, 'projects', project.slug.toLowerCase())} 
        >
          Read more...
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;