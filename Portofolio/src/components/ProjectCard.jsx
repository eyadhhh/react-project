import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.smallDes}</p>
        <div className="mb-4">
          <h4 className="text-lg font-medium">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tec.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-900 px-2 py-1 rounded-full"><Link to={"/projects/" + project.id}>{tech}</Link></span>
            ))}
            {project.tec.length > 3 && (
            <>
            <Link
              to={"/projects/" + project.id}
              className="text-purple-700 font-medium hover:underline mt-2 block"
            >
              Show More
            </Link>
            </>
          )}
          </div>
          
        </div>
        <Link
        to={"/projects/" + project.id}
        className="text-purple-700 font-medium hover:underline"
        >
        View Project
        </Link>
    </div>
  )
}

export default ProjectCard
