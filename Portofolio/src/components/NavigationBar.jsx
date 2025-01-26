import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const linkClass = "text-white rounded mx-1 my-2 px-3 py-2 transition-all duration-200 hover:bg-purple-600 "
  const activeLinkClass = linkClass + " bg-purple-800 "

  return (
    <nav className="bg-purple-700 shadow-lg absolute container">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <NavLink to="/" className={({ isActive }) => ((isActive ? activeLinkClass : linkClass) + (isOpen ? 'block' : 'inline-block'))}>
            Home
          </NavLink>
          <NavLink to="/Projects" className={({ isActive }) => ((isActive ? activeLinkClass : linkClass) + (isOpen ? 'block' : 'inline-block'))}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => ((isActive ? activeLinkClass : linkClass) + (isOpen ? 'block' : 'inline-block'))}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
