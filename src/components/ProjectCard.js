import React from 'react';
import { join } from 'path';
import { Link } from 'react-navi';
import styles from './ProjectCard.module.css';
import dummy_project_logo from './dummy_project_logo.png';

function ProjectCard({ blogRoot, project, idx }) {
  console.log(idx, ((idx + 1) % 3 === 0 ? { marginRight: '0rem'} : {}))
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
          {project.date}
        </label>
        <Link
          className={styles.ProjectCardBottomText}
          href={join(blogRoot, 'projects', project.title.toLowerCase())} 
        >
          Read more...
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;