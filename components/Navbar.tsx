import { signOut } from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-white py-5 px-3 md:flex md:space-x-10 md:px-5 lg:px-36">
      <h1 className="font-kanit text-3xl font-bold">MiniURL</h1>
      <button
        onClick={() => signOut()}
        className="rounded-md border border-white py-1 px-3 text-xl transition-all ease-linear hover:bg-mu-blue hover:shadow-xl"
      >
        Logout
      </button>
    </nav>
  )
}

export default Navbar
