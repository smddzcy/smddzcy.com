import React from 'react';
import importAll from 'import-all.macro';
import * as Navi from 'navi';
import slugify from 'slugify';
import ProjectsPage from '../../components/ProjectsPage';
import ProjectPage from '../../components/ProjectPage';

const projectModules = importAll.deferred('./**/project.js');
const projectPathnames = Object.keys(projectModules);
const datePattern = /^((\d{1,4})-(\d{1,4})-(\d{1,4}))[/-]/;

let projects = projectPathnames.map(pathname => {
  const slug = slugify(
    pathname.replace(/project.jsx?$/, '').replace(/(\d)\/(\d)/, '$1-$2'),
  )
    .replace(/^[-.]+|[.-]+$/g, '')
    .replace(datePattern, '$1/');

  let date;
  const dateMatch = slug.match(datePattern);
  if (dateMatch) {
    date = new Date(dateMatch[2], parseInt(dateMatch[3], 10) - 1, dateMatch[4]);
  }

  const details = require(`${pathname}`).default;
  return {
    slug,
    pathname,
    date,
    ...details
  };
});

const projectRoutes = Navi.compose(
  Navi.withContext((req, context) => ({
    ...context,
    projectsRoot: req.mountpath,
  })),
  
  Navi.mount({
    '/': Navi.route({
      title: 'Projects',

      getView: async (req, context) => {
        return (
          <ProjectsPage
            blogRoot={context.blogRoot}
            projects={projects}
          />
        );
      },
    }),

    '/:project': Navi.route({
      getTitle: req => req.params.project,
      getView: async (req, context) => {
        const project = projects.filter(project => project.title.toLowerCase() === req.params.project)[0]
        const { default: MDXComponent } = await project.getContent();
        return <ProjectPage
          MDXComponent={MDXComponent}
          project={project}
          blogRoot={context.blogRoot}  
        />
      }
    }),
  }),
);

export default projectRoutes;