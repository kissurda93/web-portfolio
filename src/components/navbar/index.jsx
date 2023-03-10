import "./navbar.css";
import myLogo from "../../assets/jglogo.svg";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
	return (
		<ScrollspyNav
			scrollTargetIds={["about", "projects", "contact"]}
			offset={-50}
			activeNavClass='active'
			scrollDuration='400'
			headerBackground='true'>
			<nav className='main-navbar'>
				<div className='logo-container'>
					<img className='logo' src={myLogo} alt='Logo' />
				</div>
				<ul>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</ScrollspyNav>
	);
};

export default Navbar;
