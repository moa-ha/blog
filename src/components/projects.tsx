/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Projects = () => (
  <div className="project-group">
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/LyricSync.png"
          alt="LyricSync"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            LyricSync
            <Link
              href="https://github.com/haruka-ogino/LyricSync"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
          </h3>
          <div className=" flex flex-col md:flex-row gap-2">
            {/* <span className="font-bold ">from May 2024 </span> */}
            <span className="text-gray-600">-UNDER CONSTRUCTION-</span>
          </div>

          <div className="mt-2 mb-2">
            <p className="text-base">
              App for lyrics collection in translated language.
            </p>
            <p>
              A full-stack application which allows its user to save the lyrics
              to their favourite songs. Collections can be created where a set
              of songs can be compiled and saved. Additionally, the translation
              to foreign songs can either be executed through the translation
              feature in the app, or inputted manually.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I'm Learning ✏️ </span>
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
