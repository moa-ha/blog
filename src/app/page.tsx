import Image from 'next/image'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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
        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        <FontAwesomeIcon icon={faGithub} />
      </section>
    </>
  )
}
