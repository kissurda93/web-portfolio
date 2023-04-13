import "./projects.css";
import parse from "html-react-parser";

const ProjectCard = ({ project }) => {
	return (
		<div className='project-container' onClick={e => e.stopPropagation()}>
			<div className='project-info'>
				<p className='name'>{project?.name}</p>
				<div>
					{project?.descriptions.map(paragraph => {
						return (
							<p key={paragraph?.id} className='description'>
								{parse(paragraph?.body)}
							</p>
						);
					})}
				</div>
				<div className='link-container'>
					<a
						href={project?.gitHubLink}
						target='_blank'
						rel='noopener noreferrer'>
						<button>GitHub Repo</button>
					</a>
					<a
						href={project?.projectLink}
						target='_blank'
						rel='noopener noreferrer'>
						<button>Live Demo</button>
					</a>
				</div>
			</div>
			<div className='img-container'>
				<img src={project?.img} alt='img of the project' width={400}></img>
			</div>
		</div>
	);
};

export default ProjectCard;
