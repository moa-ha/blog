'use client'

import React from 'react'
import Nav from './nav'
import DarkMode from './darkMode'

import { MouseEventHandler } from 'react'

interface Prop {
  darkMode: boolean
  toggleDarkMode: MouseEventHandler<HTMLButtonElement>
}
const Header = ({ darkMode, toggleDarkMode }: Prop) => (
  <header className={`header ${darkMode ? 'dark' : ''}`}>
    <div className="top-bar container-sm">
      <div></div>
      <div className="flex-container">
        <Nav darkMode={darkMode} />
        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  </header>
)

export default Header
