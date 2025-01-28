import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const MainFooter = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">My Portfolio</h3>
            <p className="text-sm">© 2023 Eyad Elsherif. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">Follow me on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/eyad-elsherif" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/eyadhhh" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/sherif_el77446" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
