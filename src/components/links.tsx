import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faFileLines,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Links() {
  const [isShow, setIsShow] = useState(false)
  function handleClick() {
    setIsShow(!isShow)
  }
  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <Tippy content={<span>Check My Github</span>}>
        <Link href="https://github.com/moa-ha" target="_blank" passHref>
          <FontAwesomeIcon icon={faGithub} className="menu-link text-xl" />
        </Link>
      </Tippy>

      <Tippy content={<span>Check My LinkedIn</span>}>
        <Link
          href="https://www.linkedin.com/in/moa-ha"
          target="_blank"
          passHref
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="menu-link text-xl" />
        </Link>
      </Tippy>

      <Tippy content={<span>Check My CV</span>}>
        <Link
          href="https://drive.google.com/file/d/10xGbYhxc0f2Y9Wotbs7UyJDCvfwUa7E2/view?usp=sharing"
          target="_blank"
          passHref
        >
          <FontAwesomeIcon icon={faFileLines} className="menu-link text-xl" />
        </Link>
      </Tippy>

      <Tippy content={<span>Check My Projects</span>}>
        <Link href="/projects" passHref>
          <FontAwesomeIcon icon={faListCheck} className="menu-link text-xl" />
        </Link>
      </Tippy>

      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faEnvelope} className="menu-link text-xl" />
        {isShow && (
          <span className="absolute bg-teal-500">
            Please contact me via email. <strong>moahaa03@gmail.com</strong>
          </span>
        )}
      </button>
    </section>
  )
}
