import React from 'react'
import { useRouter } from 'next/router'
import Menu from './menu'
import Link from 'next/link'

interface Prop {
  darkMode: boolean
}
const Nav = ({ darkMode }: Prop) => {
  const router = useRouter()
  return (
    <>
      <Menu darkMode={darkMode} />
      <nav className="desktop-menu">
        <Link href="/">
          <i
            className={`fa-solid fa-house menu-icon home-button ${
              darkMode ? 'dark' : ''
            }`}
          ></i>
        </Link>
        <ul className={`menu-list ${darkMode ? 'dark' : ''}`}>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''} ${
                router.pathname === '/' ? 'active' : ''
              }`}
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''} ${
                router.pathname === '/posts' ? 'active' : ''
              }`}
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''} ${
                router.pathname === '/projects' ? 'active' : ''
              }`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
