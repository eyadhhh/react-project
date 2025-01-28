import React from 'react'

const ContactInformation = () => {
  const contactInfo = {
    name: "Eyad Elsherif",
    email: "IyadElsherif@gmail.com",
    alternativeEmail: "eyadthebest99@gmail.com",
    phone: "+201210162307",
    location: "Cairo, Egypt",
    linkedin: "www.linkedin.com/in/eyad-elsherif",
    github: "https://github.com/eyadhhh"
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Information</h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4"><strong>Name:</strong> {contactInfo.name}</p>
          <p className="text-gray-700 mb-4"><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="text-purple-700 hover:underline">{contactInfo.email}</a></p>
          
          <p className="text-gray-700 mb-4"><strong>Alternative Email:</strong> <a href={`mailto:${contactInfo.alternativeEmail}`} className="text-purple-700 hover:underline">{contactInfo.alternativeEmail}</a></p>
          <p className="text-gray-700 mb-4"><strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`} className="text-purple-700 hover:underline">{contactInfo.phone}</a></p>
          <p className="text-gray-700 mb-4"><strong>Location:</strong> {contactInfo.location}</p>
          <p className="text-gray-700 mb-4"><strong>LinkedIn:</strong> <a href={contactInfo.linkedin} className="text-purple-700 hover:underline" target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
          <p className="text-gray-700"><strong>GitHub:</strong> <a href={contactInfo.github} className="text-purple-700 hover:underline" target="_blank" rel="noopener noreferrer">{contactInfo.github}</a></p>
        </div>
      </div>
    </section>
  )
}

export default ContactInformation
