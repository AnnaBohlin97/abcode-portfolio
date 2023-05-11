import Me from "../assets/me.jpeg"

export default function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-24 pb-24 ">
				<img src={Me} alt="Picture of me" className="w-56 rounded-full drop-shadow-lg"/>
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Anna</h1>
				<p className="text-base md:text-xl mb-3 font-medium">Fullstack Web Developer</p>
				
        <p className="text-sm max-w-xl mb-6 font-bold">
					Hello! As you might have guessed, my name is Anna. Welcome to my portfolio website!
					I'm a 25 year old developer from Uppsala, and currently I'm in Stockholm studying at the Frontend Developer program at Hyper Island.
					In my free time I like to travel, cook and eat delicious food, and lift heavy things at the gym.
        </p>
					
      </div>
   )
}