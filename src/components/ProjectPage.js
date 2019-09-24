import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectPage.module.css';

function ProjectPage({ blogRoot, projects }) {

  return (
  <div className={styles.ProjectPage}>
    <h1>Projects</h1>
    <div className={styles.ProjectCardContainer}>
      {projects.map((project, idx) =>
        <ProjectCard blogRoot={blogRoot} project={project} idx={idx} />
      )}
    </div>
  </div>
  );
}
  
export default ProjectPage;
