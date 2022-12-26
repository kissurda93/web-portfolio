import projectArray from "./projectArray";
import "./projects.css";
import useIntersectionObs from "../../hooks/useIntersectionObs";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const [title, titleIsVisible] = useIntersectionObs({
		root: null,
		rootMargin: "0px",
		threshold: 1,
	});

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
			<div className='projects'>
				{projectArray.map(project => {
					return <ProjectCard project={project} key={project.id} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
