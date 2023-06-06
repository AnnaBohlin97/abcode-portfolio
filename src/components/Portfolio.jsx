import portfolio from "../data/portfolio"
import PortfolioItem from "./PortfolioItem"
import { Link } from "react-scroll";
import Me from "../assets/me.jpeg"
import Chevron from "../assets/chevron.svg"

export default function Portfolio() {
	return (
		<div name="Projects" className="flex flex-col pt-12 pb-32 my-48 mx-4 md:mx-16 items-center justify-center">
			<h2 className="text-3xl md:text-5xl dark:text-white mb-1 md:mb-6 font-bold">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{portfolio.map((project, index) => (
					<PortfolioItem 
						key={index}
						imgUrl={project.imgUrl}
						title={project.title}
						stack={project.stack}
						codeLink={project.codeLink}
						liveLink={project.liveLink}
						description={project.description}
					/>
				))}
			</div>
			<button className="animate-bounce w-12 mt-8 mb-16">
          <Link to="Skills" smooth={true} duration={500} offset={-80}>
            <img src={Chevron} alt="" />
          </Link>
        </button>
		</div>
	)
}