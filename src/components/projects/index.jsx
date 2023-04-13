import projectArray from "./projectArray";
import "./projects.css";
import useIntersectionObs from "../../hooks/useIntersectionObs";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {
	const options = { root: null, rootMargin: "0px", threshold: 0.3 };
	const [project1, project1IsVisible] = useIntersectionObs({ options });
	const [currentProject, setCurrentProject] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const handleClick = e => {
		let id = e.target.dataset.id;
		if (id === undefined) id = e.target.parentElement.dataset.id;

		setCurrentProject(() => {
			return projectArray.find(project => project.id == id);
		});

		setModalVisible(true);
	};

	return (
		<section id='projects' className='projects-section'>
			<h2 className='project-container-title'>Projects</h2>
			<div className='projects-container'>
				<div
					className={project1IsVisible ? "isVisible" : ""}
					ref={project1}
					data-id={projectArray[0].id}
					onClick={handleClick}>
					<img src={projectArray[0].img} alt='Project image' />
					<p>{projectArray[0].name}</p>
				</div>
			</div>
			{modalVisible && (
				<div className='overlay' onClick={() => setModalVisible(false)}>
					<ProjectCard project={currentProject} />
				</div>
			)}
		</section>
	);
};

export default Projects;
