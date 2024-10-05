import React from 'react';

function Project({ title, image, deployLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <a href={deployLink}>Live App</a> | <a href={githubLink}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
