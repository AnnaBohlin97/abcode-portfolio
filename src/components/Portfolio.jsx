import portfolio from "../data/portfolio"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
	return (
		<div className="flex flex-col pt-20 pb-32 items-center justify-center">
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
					/>
				))}
			</div>
		</div>
	)
}