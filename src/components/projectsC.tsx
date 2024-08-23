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
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/car-gp.gif"
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
            <Link href="https://car-gp.up.railway.app" target="_blank" passHref>
              <FontAwesomeIcon icon={faCirclePlay} className="links" />
            </Link>
          </h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">August 2024 </span>
          </div>

          <div className="mt-2 mb-2">
            <p className="text-base">
              The first page to check for your car's maintenance!
            </p>
            <p>
              An app that tracks car maintenance status and calculates upcoming
              maintenance schedules based on individual driving distances.
            </p>
            <p className="italic">
              (React / TypeScript / Restful APIs / Node.js)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I Learned ✏️</span>
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

    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/tradie-tracker.gif"
          alt="tradie-tracker"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            Tradie Tracker
            <Link
              href="https://github.com/moa-ha/Tradie-Tracker"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
            <Link
              href="https://tradie-tracker.pushed.nz/"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faCirclePlay} className="links" />
            </Link>
          </h3>
          <p>09 Apr ~ 17 Apr 2024 (group), 21 Apr ~ 10 May 2024 (solo)</p>
          <div className="mt-2 mb-2">
            <p className="text-base">Efficient Work Scheduling App</p>
            <p>
              This project is from group project from Dev Academy, and I remade
              from the scratch to consolidate the flow of the whole project and
              make clear code.
            </p>
            <p className="italic">
              (React / TypeScript / CSS / Restful APIs / Node.js / Express.js /
              SQLite3 / Knex)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I Learned ✏️</span>
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

    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/dreamfest.gif"
          alt="dreamfest"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            Dreamfest
            <Link
              href="https://github.com/moa-ha/dreamfest"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
          </h3>
          <p>20 Mar ~ 24 Mar 2024</p>
          <div className="mt-2 mb-2">
            <p className="text-base"> Music Festival Dashboard App</p>
            <p>
              Dreamfest is a music festival schedule managing app. This was my
              first app using Knex & SQL Database.
            </p>
            <p className="italic">
              (Express.js / Restful APIs / SQLite3 / Knex)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I Learned ✏️</span>
        <div>
          ✔️ Acquired practical experience integrating SQLite as a database for
          handling CRUD operations.<br></br>
          ✔️ Enhanced my understanding of RESTful API design and implementation.
        </div>
      </div>
    </div>

    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/pupparazzi.gif"
          alt="pupparazzi"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            Pupparazzi
            <Link
              href="https://github.com/moa-ha/pupparazzi"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
          </h3>
          <p>12 Mar ~ 01 Apr 2024</p>
          <div className="mt-2 mb-2">
            <p className="text-base">Pet Profile Managing App</p>
            <p>
              Pupparazz is a pet diary to manage and edit profiles of dogs. This
              was my first app using Express & JSON API's.
            </p>
            <p className="italic">(Express.js / JSON APIs)</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="underline text-base">What I Learned ✏️</span>
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
