import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-amber-500 py-1.5">
      <div className="flex items-center justify-between px-4">
        <div className="text-xl font-bold">Eatery</div>
        
        {/* Hamburger button for mobile */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center justify-center gap-4">
          <li className="px-3 text-lg text-black font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-full hover:text-amber-500"><a href="#">Home</a></li>
          <li className="px-3 text-lg text-black font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-full hover:text-amber-500"><a href="#">Menu</a></li>
          <li className="px-3 text-lg text-black font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-full hover:text-amber-500"><a href="#">About</a></li>
          <li className="px-3 text-lg text-black font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-full hover:text-amber-500"><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-2 py-4">
          <li className="px-3 py-2 text-black font-bold hover:bg-black rounded hover:text-amber-500"><a href="#">Home</a></li>
          <li className="px-3 py-2 text-black font-bold hover:bg-black rounded hover:text-amber-500"><a href="#">Menu</a></li>
          <li className="px-3 py-2 text-black font-bold hover:bg-black rounded hover:text-amber-500"><a href="#">About</a></li>
          <li className="px-3 py-2 text-black font-bold hover:bg-black rounded hover:text-amber-500"><a href="#">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar