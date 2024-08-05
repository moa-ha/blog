/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const ProjectsH = () => (
  <div className="project-group">
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/carGp.png"
          alt="car-gp"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            Car-GP
            <Link
              href="https://github.com/moa-ha/car-gp"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
          </h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">from May 2024 </span>
            <span className="text-gray-600">-UNDER CONSTRUCTION-</span>
          </div>

          <div className="mt-2 mb-2">
            <p className="text-base">
              The first page to check for your car's maintenance!
            </p>
            <p>
              An app that tracks car maintenance status and calculates upcoming
              maintenance schedules based on individual driving distances,
              sending alerts accordingly.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I'm Learning ✏️ </span>
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
  </div>
)

export default ProjectsH
