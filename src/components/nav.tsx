'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Menu from './menu'
import Link from 'next/link'

interface Prop {
  darkMode: boolean
}
const Nav = ({ darkMode }: Prop) => {
  const pathname = usePathname()
  return (
    <>
      <Menu darkMode={darkMode} />
      <nav className="desktop-menu">
        <ul className={`menu-list ${darkMode ? 'dark' : ''}`}>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''} ${
                pathname === '/' ? 'active' : ''
              }`}
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''} ${
                pathname === '/projects' ? 'active' : ''
              }`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`menu-link ${darkMode ? 'dark' : ''}`}
              href="https://drive.google.com/file/d/10xGbYhxc0f2Y9Wotbs7UyJDCvfwUa7E2/view?usp=sharing"
              target="_blank"
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
