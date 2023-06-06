export default function PortfolioItem({ title, imgUrl, stack, codeLink, liveLink, description }) {
  return (
    <div className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 shadow-md hover:shadow-xl duration-300 border-2 border-stone-900 rounded-md overflow-hidden">
      <img src={imgUrl} alt="" className="w-full h-36 md:h-48 object-cover" />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-2 md:mb-3">
          {stack.map((item, index) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md" key={index}>
              {item}
            </span>
          ))}
        </p>
        <p className="text-xs md:text-sm self-center">{description}</p>
        <div className="flex justify-center mt-4 gap-2">
          <a href={codeLink} className="px-2 py-1 font-semibold border-2 border-stone-900 rounded-md transition ease-in-out delay-150 duration-300 hover:bg-teal-800 hover:text-white shadow-sm">
            <button className="">Code</button>
          </a>
          {liveLink && (
            <a href={liveLink} className="px-2 py-1 font-semibold border-2 border-stone-900 rounded-md transition ease-in-out delay-150 duration-300 hover:bg-teal-800 hover:text-white">
              <button className="">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
