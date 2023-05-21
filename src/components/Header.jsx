import Logo from "../assets/logo.svg"

export default function Header() {
	return (
		<header className="flex items-center justify-between px-4 py-2 drop-shadow-sm">
  <div className="flex items-center">
    <img
      src={Logo}
      alt="abcode Logo"
      className="mr-2"
    />
  </div>
  <nav>
    <button
      className="transition ease-in delay-150 px-4 py-2 mx-4 my-4 text-white bg-teal-700 rounded hover:bg-teal-800 hover:scale-105 hover:shadow-md"
    >
      About
    </button>
    <button
      className="transition ease-in delay-150 px-4 py-2 mx-4 my-4 text-white bg-teal-700 rounded hover:bg-teal-800 hover:scale-105 hover:shadow-md"
    >
      Projects
    </button>
  </nav>
</header>
	)
}