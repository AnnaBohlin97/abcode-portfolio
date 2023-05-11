// import {SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiSequelize, SiPostgresql, SiGit, SiGithub, SiCss3} from "react-icons/si"
import FinDash from "../assets/findash.png"
import Handledning from "../assets/handledning.png"

export default [
	{
		title: "Todo app",
		imgUrl: "",
		stack: ["Node.js", "Express.js", "Postgresql", "Sequelize"],
		codeLink: "https://github.com/FED24-Data-Interaction/todo-list/settings",
		liveLink: ""
	},
	{
		title: "Handledning.se",
		imgUrl: {Handledning},
		stack: ["React.js", "CSS"],
		codeLink: "https://github.com/ave-se/react-app",
		liveLink: "https://ubiquitous-gaufre-0e6db5.netlify.app/about"
	},
	{
		title: "Financial Dashboard",
		imgUrl: {FinDash},
		stack: ["React.js", "CSS"],
		codeLink: "https://github.com/AnnaBohlin97/financial-dashboard",
		liveLink: "https://cheery-brigadeiros-8234f7.netlify.app/"
	}
]