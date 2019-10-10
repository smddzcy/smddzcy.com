import React from 'react';
import importAll from 'import-all.macro';
import * as Navi from 'navi';
import fromPairs from 'lodash/fromPairs';
import slugify from 'slugify';
import sortBy from 'lodash/sortBy';
import ProjectsPage from '../../components/ProjectsPage';
import ProjectPage from '../../components/ProjectPage';

const projectModules = importAll.deferred('./**/project.js');
const projectPathnames = Object.keys(projectModules);
const datePattern = /(\d{1,4})\w+/g;

const projects = sortBy(projectPathnames.map(pathname => {
  const slug = slugify(
    pathname.replace(/project.jsx?$/, '').replace(/(\d)\/(\d)/, '$1-$2'),
  )
    .replace(/^[-.]+|[.-]+$/g, '');

  const details = require(`${pathname}`).default;

  let date;
  const dateMatch = details.date.match(datePattern);
  if (dateMatch) {
    date = new Date(dateMatch[0], parseInt(dateMatch[1], 10) - 1, dateMatch[2]);
  }

  return {
    slug,
    pathname,
    ...details,
    date,
  };
}), p => -p.date);

const projectRoutes = Navi.compose(
  Navi.withContext((req, context) => ({
    ...context,
    projectsRoot: req.mountpath,
  })),

  Navi.mount({
    '/': Navi.route({
      title: 'Projects',

      getView: async (req, context) => (
        <ProjectsPage
          blogRoot={context.blogRoot}
          projects={projects}
        />
      ),
    }),

    ...fromPairs(projects.map(project => [
      `/${project.slug}`,
      Navi.route({
        getTitle: req => {
          const project = projects.filter(project => req.originalUrl.includes(project.slug))[0];
          return project.title;
        },
        getView: async (req, context) => {
          const project = projects.filter(project => req.originalUrl.includes(project.slug))[0];
          const { default: MDXComponent } = await project.getContent();
          const idx = projects.indexOf(project);
          return (
            <ProjectPage
              MDXComponent={MDXComponent}
              data={{
                project,
                previousProject: idx !== 0 ? projects[idx - 1] : null,
                nextProject: idx !== projects.length - 1 ? projects[idx + 1] : null,
              }}
              blogRoot={context.blogRoot}
            />
          );
        },
      }),
    ])),
  }),
);

export default projectRoutes;
