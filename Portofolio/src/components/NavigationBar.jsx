import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationBar = () => {
    
    const linkClass = "text-white rounded mx-1 my-2 px-2 py-1 border-solid transition-all duration-200 hover:mx-3 hover:border-2 "
    const activeLinkClass =  linkClass + "bg-black "

  return (
    <div className='container bg-violet-700 px-5 py-3 shadow-xl flex'>
        {/*  Nav Button */}
        <div className='mx-auto'>
            <NavLink to="/" className={({isActive}) => {return (isActive ? activeLinkClass : linkClass) }}>
                Home
            </NavLink>
            <NavLink to="/Projects" className={({isActive}) => {return (isActive ? activeLinkClass : linkClass)}}>
                Projects
            </NavLink>
            <NavLink to="/Skills" className={({isActive}) => {return (isActive ? activeLinkClass : linkClass)}}>
                Skills
            </NavLink>
        </div>
    </div>
  )
}

export default NavigationBar
