/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const ProjectsE = () => (
  <div className="project-group">
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/realisticNotes.gif"
          alt="Realistic Notes"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            Realistic Notes
            <Link
              href="https://github.com/phm-terrible-ideas-2024/repo"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
            <Link
              href="https://terrible-ideas-2024.vercel.app/"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faCirclePlay} className="links" />
            </Link>
          </h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">@Terrible Ideas Hackathon</span>
          </div>
          <div className="mt-2">
            <span className="underline text-base">✨ Theme: True && Ink </span>
            <div>
              Just like in real life where you rarely look back at notes once
              you've written them down, notes vanishing like disappearing ink?
              But here’s the twist: enter the correct password, and you get to
              see the whole note again, just for a moment. It’s all about
              playing with the theme of ‘ink’ and ‘true’!
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/carGp.png"
          alt="Ctrl + F"
        />
        <div className="md:ml-2">
          <h3 className="project-header">Ctrl + F</h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">@Terrible Ideas Hackathon</span>
          </div>
          <div className="mt-2">
            <span className="underline text-base">✨ Theme: True && Ink </span>
            <div>
              Just like in real life where you rarely look back at notes once
              you've written them down, notes vanishing like disappearing ink?
              But here’s the twist: enter the correct password, and you get to
              see the whole note again, just for a moment. It’s all about
              playing with the theme of ‘ink’ and ‘true’!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsE
