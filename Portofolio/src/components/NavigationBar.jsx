import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  const linkClass = "text-white rounded mx-1 my-2 px-3 py-2 transition-all duration-200 hover:bg-purple-600"
  const activeLinkClass = linkClass + " bg-purple-800"

  return (
    <nav className="bg-purple-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <div className="flex space-x-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}>
            Home
          </NavLink>
          <NavLink to="/Projects" className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}>
            Projects
          </NavLink>
          <NavLink to="/Skills" className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}>
            Skills
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
