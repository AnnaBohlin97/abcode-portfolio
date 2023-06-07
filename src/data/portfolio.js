import Todo from "../assets/todo.png";
import Handledning from "../assets/handledning.png";
import FinDash from "../assets/findash.png";

export default [
  {
    title: "Todo app",
    imgUrl: Todo,
    stack: ["Node.js", "Express.js", "Postgresql", "Sequelize"],
    codeLink: "https://github.com/FED24-Data-Interaction/todo-list",
    liveLink: "",
    description:
      "In this fullstack project I wrote a RESTful API used for handling CRUD operations, connected it to a PostgreSQL server that hosted my database, and wrote the frontend code in Vanilla Javascript.",
  },
  {
    title: "Handledning.se",
    imgUrl: Handledning,
    stack: ["React.js", "CSS"],
    codeLink: "https://github.com/ave-se/react-app",
    liveLink: "https://ubiquitous-gaufre-0e6db5.netlify.app/about",
    description:
      "This client project was designed by UX students and implemented by me and my team. We created a frontend template using Vite React and implemented the UI and UX specified to us. I was in charge of A11Y on this project.",
  },
  {
    title: "Financial Dashboard",
    imgUrl: FinDash,
    stack: ["React.js", "CSS"],
    codeLink: "https://github.com/AnnaBohlin97/financial-dashboard",
    liveLink: "https://cheery-brigadeiros-8234f7.netlify.app/",
    description:
      "In this fullstack project I used wrote a RESTful API used for handling CRUD operations, connected to a PostgreSQL server that hosted my database, and wrote the frontend code in Vanilla Javascript.",
  },
];
