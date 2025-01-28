import React from 'react'
import ProjectCard from './ProjectCard'
import Data from "../../Data.json"
import { Link } from 'react-router-dom'

const Projects = ({ShowAll = false, ShownNumber=3}) => {
  const projects = ShowAll ? Data["Projects"] : Data["Projects"].slice(0,ShownNumber)

  return (
    <section id="projects" className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
      </div>
      <div className='mt-8 flex justify-center'>
        <Link className='px-7 py-2 hover:text-violet-700 border-solid border-4 border-violet-700 hover:bg-transparent bg-violet-700 text-white hover:my-1 hover:mx-1 transition-all duration-300 rounded'>
          Show All Projects
        </Link>
      </div>
    </section>
  )
}

export default Projects
