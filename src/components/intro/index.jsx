import "./intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faPhp,
	faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import useIntersectionObs from "../../hooks/useIntersectionObs";

const Intro = () => {
	const options = { root: null, rootMargin: "0px", threshold: 1.0 };

	const [title, titleIsVisible] = useIntersectionObs({ options });
	const [text, textIsVisible] = useIntersectionObs({ options });
	const [skills, skillsIsVisible] = useIntersectionObs({ options });

	return (
		<article id='about' className='intro'>
			<div
				className={titleIsVisible ? "intro-title isVisible" : "intro-title"}
				ref={title}>
				<h1>
					Learning and Growing as a{" "}
					<span className='colored'>Web-Developer</span>
				</h1>
			</div>
			<div
				className={textIsVisible ? "intro-text isVisible" : "intro-text"}
				ref={text}>
				<p>
					Hello my name is <span className='colored'>Gábor Jőrös</span>, from
					Hungary. My current goal is to be part of a team where I can deepen my
					knowledge in technologies such as React and or Laravel.
				</p>
				<p>
					This <span className='colored'>Portfolio</span> is a showcase of my
					live demo projects. If you are interested in my other works, please
					check my{" "}
					<a
						href='https://github.com/kissurda93?tab=repositories'
						rel='noreferrer noopener'
						target={"_blank"}>
						github
					</a>{" "}
					account. I hope you enjoy taking a look and getting to know me as a
					developer.
				</p>
			</div>
			<div
				className={skillsIsVisible ? "skillSet isVisible" : "skillSet"}
				ref={skills}>
				<p>SkillSet</p>
				<div className='skills'>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faHtml5} />
						<span className='tooltip'>HTML5</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faCss3Alt} />
						<span className='tooltip'>CSS3</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faBootstrap} />
						<span className='tooltip'>Bootstrap</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faJsSquare} />
						<span className='tooltip'>Javascript</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faReact} />
						<span className='tooltip'>React</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faPhp} />
						<span className='tooltip'>PHP</span>
					</div>
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<FontAwesomeIcon icon={faLaravel} />
						<span className='tooltip'>Laravel</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Intro;
