import "./intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faReact,
	faPhp,
	faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObs from "../../hooks/useIntersectionObs";
import Redux from "../../assets/redux.svg";
import MySql from "../../assets/mysql.svg";

const Intro = () => {
	const options = { root: null, rootMargin: "0px", threshold: 0 };

	const [title, titleIsVisible] = useIntersectionObs({ options });
	const [text, textIsVisible] = useIntersectionObs({ options });
	const [skills, skillsIsVisible] = useIntersectionObs({ options });

	return (
		<article id='about' className='intro'>
			<div
				className={titleIsVisible ? "intro-title isVisible" : "intro-title"}
				ref={title}>
				<h1>
					<q>
						Every Day is a <span className='colored'>Learning Day</span>
					</q>
				</h1>
				<p>Winston Marshall</p>
			</div>
			<div
				className={textIsVisible ? "intro-text isVisible" : "intro-text"}
				ref={text}>
				<p>
					Hello my name is <span className='colored'>Gábor Jőrös</span>, from
					Hungary. Since 2022 I'm on the path to becoming a{" "}
					<span className='colored'>Webdeveloper</span>. My current goal is to
					be part of a team where I can deepen my knowledge in webdevelopment.
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
						<FontAwesomeIcon icon={faLink} />
					</a>{" "}
					account. I hope you enjoy taking a look.
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
						<img src={Redux} alt='Redux logo' className='redux-logo' />
						<span className='tooltip'>Redux</span>
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
					<div
						className={skillsIsVisible ? "skill isVisible" : "skill"}
						ref={skills}>
						<img src={MySql} alt='Mysql logo' className='mysql-logo' />
						<span className='tooltip'>MySQL</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Intro;
