import React from 'react'
import myImage from '../assets/DevImage.jpg'

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 my-8">
        <h1 className='mx-auto text-center text-4xl text-violet-600 my-4'>About</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <img
            src={myImage}
            className='w-6/12 rounded mx-auto my-4'
        ></img>
          <p className="text-gray-700 mb-4">
            Hello! I'm Eyad Elsherif, a passionate developer based in Cairo, Egypt. I have a strong background in web development and software engineering, with experience in various programming languages and frameworks.
          </p>
          <p className="text-gray-700 mb-4">
            I enjoy creating beautiful and functional web applications, and I'm always eager to learn new technologies and improve my skills. My goal is to build impactful software solutions that make a difference.
          </p>
          <p className="text-gray-700 mb-4">
            In my free time, I love exploring new places, reading tech blogs, and contributing to open-source projects. I'm always open to new opportunities and collaborations, so feel free to reach out!
          </p>
          <div className="text-gray-700 mb-4">
            <strong>Birth Date:</strong> May 13, 2009
          </div>
          <div className="text-gray-700 mb-4">
            <strong>Location:</strong> Cairo, Egypt
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
  )
}

export default AboutSection
