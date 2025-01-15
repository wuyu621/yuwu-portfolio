import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="align-element pt-16" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
