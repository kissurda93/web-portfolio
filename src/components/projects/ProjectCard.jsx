import "./projects.css";
import useIntersectionObs from "../../hooks/useIntersectionObs";

const ProjectCard = props => {
	const [container, containerIsVisible] = useIntersectionObs({
		root: null,
		rootMargin: "0px",
		threshold: 1,
	});

	return (
		<div
			className={
				containerIsVisible ? "project-container isVisible" : "project-container"
			}
			ref={container}>
			<div className='project-info'>
				<p className='name'>{props.project.name}</p>
				<p className='description'>{props.project.description}</p>
				<div className='link-container'>
					<a
						href={props.project.gitHubLink}
						target='_blank'
						rel='noopener noreferrer'>
						<button>GitHub Repo</button>
					</a>
					<a
						href={props.project.projectLink}
						target='_blank'
						rel='noopener noreferrer'>
						<button>Demo</button>
					</a>
				</div>
			</div>
			<div className='img-container'>
				<img src={props.project.img} alt='img of the project' width={400}></img>
			</div>
		</div>
	);
};

export default ProjectCard;
