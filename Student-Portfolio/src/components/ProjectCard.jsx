export function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
    </div>
  );
}