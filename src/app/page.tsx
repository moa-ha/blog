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
    <>
      <section>
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width="0"
          height="0"
          sizes="100vw"
          className="profile"
        />
      </section>
      <section>
        <h2>내 이름</h2>
        <p>blah blah</p>
      </section>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="https://www.linkedin.com/in/moa-ha" passHref>
          <FontAwesomeIcon icon={faLinkedinIn} className="menu-link" />
        </Link>

        <Link href="https://github.com/moa-ha" passHref>
          <FontAwesomeIcon icon={faGithub} className="menu-link" />
        </Link>
      </section>
    </>
  )
}
