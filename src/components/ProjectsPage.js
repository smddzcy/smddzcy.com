import React from 'react';
import sortBy from 'lodash/sortBy';
import ProjectCard from './ProjectCard';
import styles from './ProjectsPage.module.css';

function ProjectsPage({ blogRoot, projects }) {
  return (
    <div className={styles.ProjectsPage}>
      <h1>Projects</h1>
      <div className={styles.ProjectCardContainer}>
        {sortBy(projects, p => -p.date).map((project, idx) => (
          <ProjectCard key={project.slug} blogRoot={blogRoot} project={project} idx={idx} />
        ))}
      </div>
      <p>... and many other confidential projects. Contact me at <a href="mailto:samedduzcay@gmail.com">samedduzcay@gmail.com</a> for any requests.</p>
    </div>
  );
}

export default ProjectsPage;
