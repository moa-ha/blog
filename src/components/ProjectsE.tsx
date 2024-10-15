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
    </div>
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={180}
          height={200}
          src="/images/NativeNexus.gif"
          alt="Ctrl + F"
        />
        <div className="md:ml-2">
          <h3 className="project-header">Native Nexus</h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">
              @AI for the Environment Hackathon{' '}
            </span>
          </div>
          <div className="mt-2">
            <span className="underline text-base">
              ✨ kaitiakitanga: embracing our connection to the land and
              surrounding natural environment fulfilling our roles as custodians
            </span>
            <div>
              AI to recommend the best native plants, focusing on environmental
              sustainability and practical application in landscape architecture
              projects. By using the RAG (Retrieval-Augmented Generation)
              technique - data from Manaaki Whenua and inputs from architects
              and engineers - it provides tailored recommendations that align
              with both the environmental conditions and project
              requirements(ex. low-maintenance plant for challenging areas like
              busy motorway roadsides).
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={180}
          height={200}
          src="/images/CtrlF.gif"
          alt="Ctrl + F"
        />
        <div className="md:ml-2">
          <h3 className="project-header">Ctrl + F</h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">@She# & FishernPaykel Hackathon</span>
          </div>
          <div className="mt-2">
            <span className="underline text-base">
              ✨ Use case: Marketing Knowledge Base Chat/Search Bot{' '}
            </span>
            <div>
              Spending too much time searching for internal information?" The
              answer is the 'Ctrl+F bot.' This AI chatbot is designed to quickly
              provide information like social media guidelines. Key features
              include instant answers, easy navigation, a user-friendly
              interface, bullet points summarizing key functions, exact document
              references with page and paragraph numbers, and additional
              relevant information to enhance understanding.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project text-sm">
      <div className="project-content">
        <Image
          className="wireframe"
          width={200}
          height={200}
          src="/images/AI-dreamweavers.gif"
          alt="AI-dreamweavers"
        />
        <div className="md:ml-2">
          <h3 className="project-header">
            AI-Dreamweavers
            <Link
              href="https://github.com/moa-ha/ai-dreamweavers"
              target="_blank"
              passHref
            >
              <FontAwesomeIcon icon={faGithub} className="links" />
            </Link>
          </h3>
          <div className=" flex flex-col md:flex-row gap-2">
            <span className="font-bold ">
              @GenAI Hackathon: Sustainable Impact{' '}
            </span>
          </div>
          <div className="mt-2">
            <span className="underline text-base">
              ✨ Gamifying Agricultural Carbon Reduction: An AI-Driven Solution
              for Sustainable Dairy Farming{' '}
            </span>
            <div>
              To tackle this challenge, we developed a chatbot (a friend of
              farmers!) that interacts with PDF files and provides tailored
              advice, using services like Amazon Bedrock, Amazon Lambda, and
              Amazon S3. Bedrock’s AI capabilities helped us provide
              personalized, interactive feedback that aligns with each farmer’s
              unique needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsE
