import projectArray from "./projectArray";
import "./projects.css";
import useIntersectionObs from "../../hooks/useIntersectionObs";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const options = { root: null, rootMargin: "0px", threshold: 1 };
	const [title, titleIsVisible] = useIntersectionObs({ options });
	const [projects, projectsIsVisible] = useIntersectionObs({ options });

	return (
		<section id='projects' className='projects-section'>
			<h2
				className={
					titleIsVisible
						? "project-container-title isVisible"
						: "project-container-title"
				}
				ref={title}>
				Projects
			</h2>
			<div
				className={projectsIsVisible ? "projects isVisible" : "projects"}
				ref={projects}>
				{projectArray.map(project => {
					return <ProjectCard project={project} key={project.id} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
