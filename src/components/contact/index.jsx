import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObs from "../../hooks/useIntersectionObs";

const Contact = () => {
	const options = { root: null, rootMargin: "0px", threshold: 1.0 };
	const [form, formIsVisible] = useIntersectionObs({ options });

	const [submitText, setSubmitText] = useState("Send message");
	const [formData, setFormData] = useState({
		visitor_name: "",
		visitor_email: "",
		message: "",
	});

	const handleUserInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
		setSubmitText("Send message");
	};

	const sendEmail = e => {
		e.preventDefault();

		if (
			!formData.visitor_name ||
			!formData.visitor_email ||
			!formData.message
		) {
			return setSubmitText("All fields required");
		} else {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_PUBLIC_KEY
				)
				.then(
					result => {
						console.log("Message sent!" + result.text);
						setSubmitText("Message sent");
					},
					error => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<>
			<div className='contact-container'>
				<section
					className={formIsVisible ? "contact isVisible" : "contact"}
					id='contact'>
					<h2>Contact Me</h2>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type='text'
							name='visitor_name'
							placeholder='Name'
							value={formData.name}
							onChange={event => handleUserInput(event)}></input>
						<input
							type='email'
							name='visitor_email'
							placeholder='Email'
							value={formData.email}
							onChange={event => handleUserInput(event)}></input>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							placeholder='Message'
							value={formData.message}
							onChange={event => handleUserInput(event)}></textarea>

						<input type='submit' value={submitText} />
					</form>
				</section>
			</div>
			<div className='icon-container'>
				<a
					href='mailto:jg19930610@gmail.com?subject="Message from Portfolio site"'
					rel='noreferrer noopener'
					target={"_blank"}>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a
					href='https://twitter.com/GaborJoros'
					rel='noreferrer noopener'
					target={"_blank"}>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href='https://www.linkedin.com/in/gábor-jőrös-4b1b33256'
					rel='noreferrer noopener'
					target={"_blank"}>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href='https://github.com/kissurda93?tab=repositories'
					rel='noreferrer noopener'
					target={"_blank"}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</>
	);
};

export default Contact;
