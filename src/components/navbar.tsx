import Link from "next/link"
export default function Navbar(){
    return(
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <h2 className="text-3xl font-bold text-blue-500 hover:text-blue-300 hover:underline">Esha</h2>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="" className="mr-5 text-white hover:text-gray-300">Home</Link>
      <Link href="" className="mr-5 text-white hover:text-gray-300">About</Link>
      <Link href="" className="mr-5 text-white hover:text-gray-300">Skills</Link>
      <Link href="" className="mr-5 text-white hover:text-gray-300">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    )
}