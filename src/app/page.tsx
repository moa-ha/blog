'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'

config.autoAddCss = false // 필수: CSS 충돌 방지

export default function About() {
  useEffect(() => {
    document.title = 'Home | About' // 페이지가 로드될 때 <title>을 변경
  }, [])

  return (
    <div className="container">
      <h1 className="title">Home | About </h1>

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
        <h1>Moa Ha</h1>
        <p className="about-me">
          I am a developer with experience in office work and customer service.
          Realizing the increasing automation of many systems and the constant
          evolution in this field, I chose to pursue a career in software
          development. I believe that by actively engaging in the field
          responsible for driving these changes, I can remain relevant and
          continuously evolve throughout my career.
        </p>
      </section>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href="https://www.linkedin.com/in/moa-ha"
          target="_blank"
          passHref
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="menu-link websites" />
        </Link>

        <Link href="https://github.com/moa-ha" passHref>
          <FontAwesomeIcon
            icon={faGithub}
            target="_blank"
            className="menu-link websites"
          />
        </Link>
      </section>
    </div>
  )
}
