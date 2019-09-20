import React from 'react';
import { join } from 'path';
import { Link } from 'react-navi';
import styles from './ProjectPage.module.css';
import { useCurrentRoute } from 'react-navi';

function ProjectPage({ blogRoot, projects }) {
  // const route = useCurrentRoute();
  return (
  <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.title.toLowerCase()}>
            <Link href={join(blogRoot, 'portfolio', project.title.toLowerCase())}>
              {project.title}
            </Link>
            <p>{project.spoiler}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
export default ProjectPage;
