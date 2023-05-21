import {useRef, useLayoutEffect} from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import Me from "../assets/me.jpeg"
import Chevron from "../assets/chevron.svg"

export default function Intro() {
  let introSection = useRef(null);

  useLayoutEffect(() => {
    gsap.to(introSection.current, { scale: 1.2, opacity: 1, duration: 1.5, delay: 0.25 });
  }, [])

   return (
      <div ref={introSection} className="flex items-center justify-center flex-col text-center pt-24 pb-24 opacity-0">
				<img src={Me} alt="Picture of me" className="w-56 rounded-full drop-shadow-lg"/>
        <h1 className="text-3xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">Anna</h1>
				<p className="text-base md:text-md mb-3 font-medium">Fullstack Web Developer</p>
        <p className="text-xs max-w-xl mb-6 font-bold">
					Hello! As you might have guessed, my name is Anna. Welcome to my portfolio website!
					I&apos;m a 25 year old developer from Uppsala, and currently I&apos;m in Stockholm studying at the Frontend Developer program at Hyper Island.
					In my free time I like to travel, cook and eat delicious food, and lift heavy things at the gym.
        </p>
        <button className="animate-bounce w-12 mt-8 mb-16">
          <Link to="Projects" smooth={true} duration={500} offset={-80}>
            <img src={Chevron} alt="" />
          </Link>
        </button>
      </div>
   )
}