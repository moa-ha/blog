/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const ProjectsC = () => (
  <div className="project-group">
    <div className="project">
      <Image
        className="project-image"
        width={200}
        height={200}
        src="/images/tradie-tracker.gif"
        alt="tradie-tracker"
      />

      <div className="project-content">
        <h3 className="project-header">
          Tradie Tracker
          <Link href="https://github.com/moa-ha" target="_blank" passHref>
            <FontAwesomeIcon icon={faGithub} className="menu-link websites" />
          </Link>
          <Link href="https://github.com/moa-ha" target="_blank" passHref>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="menu-link websites"
            />
          </Link>
        </h3>
        <div className="project-meta">
          <span className="font-bold ">
            09 Apr ~ 17 Apr 2024 (group), 21 Apr ~ 10 May 2024 (solo)
          </span>
        </div>
        <div className="project-description">
          Efficient Work Scheduling App
          <div>
            This project is from group project from Dev Academy, and I remade
            from the scratch to consolidate the concepts and make clear code.
            The idea was to make a scheduling app using all the tools including
            front & backend skills we've learnt throughout the bootcamp.
          </div>
          <div className="italic">
            (React / TypeScript / CSS / Restful APIs / Node.js / Express.js /
            SQLite3 / Knex)
          </div>
        </div>
        <span className="underline">What I Learned ✏️</span>
        <div>
          ✔️ Developed a full-stack application from scratch, enhancing my
          understanding of the entire development process.<br></br>
          ✔️ Gained experience in project planning, collaborating with team
          members, and leading meetings.<br></br>
          ✔️ Improved my ability to implement and manage both frontend and
          backend components effectively.<br></br>
        </div>
      </div>
    </div>
    <div className="project">
      <Image
        className="project-image"
        width={200}
        height={200}
        src="/images/dreamfest.gif"
        alt="dreamfest"
      />

      <div className="project-content">
        <h3 className="project-header">
          Dreamfest
          <Link href="https://github.com/moa-ha" target="_blank" passHref>
            <FontAwesomeIcon icon={faGithub} className="menu-link websites" />
          </Link>
        </h3>

        <div className="project-meta">
          <span className="font-bold ">20 Mar ~ 24 Mar 2024</span>
        </div>
        <div className="project-description">
          Music Festival Dashboard App
          <div>
            Dreamfest is a music festival schedule managing app. This was my
            first app using Knex & SQL Database.
          </div>
          <div className="italic">
            (Express.js / Restful APIs / SQLite3 / Knex)
          </div>
        </div>
        <span className="underline">What I Learned ✏️</span>
        <div>
          ✔️ Acquired practical experience integrating SQLite as a database for
          handling CRUD operations.<br></br>
          ✔️ Enhanced my understanding of RESTful API design and implementation.
        </div>
      </div>
    </div>

    <div className="project">
      <Image
        className="project-image"
        width={200}
        height={200}
        src="/images/pupparazzi.gif"
        alt="pupparazzi"
      />

      <div className="project-content">
        <h3 className="project-header">
          Pupparazzi
          <Link href="https://github.com/moa-ha" target="_blank" passHref>
            <FontAwesomeIcon icon={faGithub} className="menu-link websites" />
          </Link>
        </h3>
        <div className="project-meta">
          <span className="font-bold ">12 Mar ~ 01 Apr 2024</span>
        </div>
        <div className="project-description">
          Pet Profile Managing App
          <div>
            Pupparazz is a pet diary to manage and edit profiles of dogs. This
            was my first app using Express & JSON API's.
          </div>
          <div className="italic">(Express.js / JSON APIs)</div>
        </div>
        <span className="underline">What I Learned ✏️</span>
        <div>
          ✔️ Gained hands-on experience with CRUD operations using JSON and the
          file system.<br></br>
          ✔️ Developed skills in handling data persistence and management in a
          local environment.<br></br>
          ✔️ Improved my understanding of working with Express.js to build and
          manage server-side logic.
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsC
