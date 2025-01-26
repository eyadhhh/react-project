import React from 'react'

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "SQL", "Python", "C#", "React", "Tailwind", "ASP.NET Core", "Unity"]

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <p className="text-center text-gray-700 mb-8">Here are some of the skills I have acquired over the years:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white text-gray-900 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
