import gaborshoppng from "../../assets/screencapture-gaborshop.png";

const projectArray = [
	{
		id: "1",
		name: "GáborShop",
		descriptions: [
			{
				id: 1,
				body: "An e-commerce website that uses Laravel for the back-end REST API, React for the front-end single-page application (SPA), and MySQL as the database.",
			},
			{
				id: 2,
				body: "For the user features please signup on the site.",
			},
			{
				id: 3,
				body: 'For the admin features please login on "/admin-login" endpoint.',
			},
			{
				id: 4,
				body: "Credentials for the admin account: <br> email: test1@email.com<br>password: testadmin1 <br> or <br> email: test2@email.com<br>password: testadmin2",
			},
		],
		gitHubLink: "https://github.com/kissurda93/webshop.git",
		projectLink: "https://www.gaborshop.hu",
		img: gaborshoppng,
	},
];

export default projectArray;
