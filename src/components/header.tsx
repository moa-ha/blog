'use client'

import React from 'react'
import Nav from './nav'
import DarkMode from './darkMode'

import { MouseEventHandler } from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface Prop {
  darkMode: boolean
  toggleDarkMode: MouseEventHandler<HTMLButtonElement>
}
const Header = ({ darkMode, toggleDarkMode }: Prop) => (
  <header className={`header container ${darkMode ? 'dark' : ''}`}>
    <div className="top-bar container-sm">
      <div></div>
      <Link href="/" passHref>
        <FontAwesomeIcon
          icon={faHouse}
          className={`${darkMode ? 'dark' : ''} home-button`}
        />
      </Link>
      <div className="flex-container">
        <Nav darkMode={darkMode} />
        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  </header>
)

export default Header
