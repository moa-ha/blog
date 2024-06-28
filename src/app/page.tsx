import Image from 'next/image'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false // 필수: CSS 충돌 방지

export default function About() {
  return (
    <>
      <Head>
        <title>Home | About</title>
      </Head>
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
