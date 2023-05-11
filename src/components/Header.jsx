import Logo from "../assets/logo.svg"

export default function Header() {
	return (
		<header className="flex items-center justify-between px-4 py-2 drop-shadow-sm">
  <div className="flex items-center">
    <img
      src={Logo}
      width="300"
      alt="abcode Logo"
      className="mr-2"
    />
  </div>
  <nav>
    <button
      className="px-4 py-2 mx-4 my-4 text-white bg-teal-700 rounded hover:bg-blue-700"
    >
      About
    </button>
    <button
      className="px-4 py-2 mx-4 my-4 text-white bg-teal-700 rounded hover:bg-blue-700"
    >
      Projects
    </button>
  </nav>
</header>
	)
}