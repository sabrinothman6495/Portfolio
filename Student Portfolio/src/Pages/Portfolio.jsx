import React from 'react';
import Project from '../components/Project';
import projectData from '../projectData';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
