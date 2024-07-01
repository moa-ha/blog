'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
import TechStack from '@/components/techStack'
import { Divider } from '@nextui-org/divider'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

config.autoAddCss = false // 필수: CSS 충돌 방지

export default function About() {
  useEffect(() => {
    document.title = 'About' // 페이지가 로드될 때 <title>을 변경
  }, [])

  return (
    <div className="container">
      <h1 className="title">About </h1>
      <div className="profile-container">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width="0"
          height="0"
          sizes="100vw"
          className="profile"
        />
      </div>
      <section>
        <h1 className="text-xl">Moa Ha</h1>
        <div className="mb-4 mt-2">
          <p>
            I am a developer with experience in office work and customer
            service. Realising the increasing automation of many systems and the
            constant evolution in this field, I chose to pursue a career in
            software development. I believe that by actively engaging in the
            field responsible for driving these changes, I can remain relevant
            and continuously evolve throughout my career.
          </p>
          <TechStack />
        </div>
      </section>

      <section style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href="https://www.linkedin.com/in/moa-ha"
          target="_blank"
          passHref
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="menu-link text-xl" />
        </Link>

        <Link href="https://github.com/moa-ha" target="_blank" passHref>
          <FontAwesomeIcon icon={faGithub} className="menu-link text-xl" />
        </Link>

        <Tippy content={<span>Check My CV</span>}>
          <Link
            href="https://drive.google.com/file/d/1EHgxmm8NYFZ08QedDBtDpMICmZxB-kCy/view"
            target="_blank"
            passHref
          >
            <FontAwesomeIcon icon={faFileLines} className="menu-link text-xl" />
          </Link>
        </Tippy>
      </section>
      <Divider orientation="horizontal" />
    </div>
  )
}
