import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsPage.module.css';

function ProjectsPage({ blogRoot, projects }) {

  return (
  <div className={styles.ProjectsPage}>
    <h1>Projects</h1>
    <div className={styles.ProjectCardContainer}>
      {projects.map((project, idx) =>
        <ProjectCard key={project.slug} blogRoot={blogRoot} project={project} idx={idx} />
      )}
    </div>
  </div>
  );
}
  
export default ProjectsPage;
