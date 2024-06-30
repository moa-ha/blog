/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'

const Projects = () => (
  <div className="project-group">
    <div className="project">
      <Image
        className="project-image"
        width={200}
        height={200}
        src="/images/carGP.png"
        alt="car-gp"
      />

      <div className="project-content">
        <h3 className="project-header">Car-GP</h3>
        <div className="project-meta flex flex-col md:flex-row gap-2">
          <span className="font-bold ">from May 2024 </span>
          <span className="text-gray-600">-UNDER CONSTRUCTION-</span>
        </div>
        <div className="project-description">
          An app that tracks car maintenance status and calculates upcoming
          maintenance schedules based on individual driving distances, sending
          alerts accordingly.
        </div>
        <span className="underline">What I'm Learning ✏️ </span>
        <div>
          ✔️ Integrated Auth0 and JWT for authentication, expanding my
          understanding of secure user authentication.<br></br>
          ✔️ Improved my design skills to create more professional and
          user-friendly interfaces.<br></br>
          ✔️ Continued to broaden my tech stack and enhance my ability to manage
          a project
        </div>
      </div>
    </div>

    <div className="project">
      <Image
        className="project-image"
        width={200}
        height={200}
        src="/images/LyricSync.png"
        alt="LyricSync"
      />

      <div className="project-content">
        <h3 className="project-header"> LyricSync</h3>
        <div className="project-meta flex flex-col md:flex-row gap-2">
          <span className="font-bold ">from May 2024 </span>
          <span className="text-gray-600">-UNDER CONSTRUCTION-</span>
        </div>
        <div className="project-description">
          App for lyrics collection in translated language.
        </div>
        <span className="underline">What I'm Learning ✏️ </span>
        <div>
          ✔️ Collaborating weekly with a teammate to develop a full-stack app,
          gaining deeper familiarity with previously used tools.<br></br>
          ✔️ Continuously learning and integrating new features, such as unit
          testing, which I hadn't focused on before.<br></br>
          ✔️ Enhancing my skills in teamwork, problem-solving, and iterative
          development.
        </div>
      </div>
    </div>
  </div>
)

export default Projects
