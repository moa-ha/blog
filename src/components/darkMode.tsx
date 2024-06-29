'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { MouseEventHandler } from 'react'

interface Prop {
  darkMode: boolean
  toggleDarkMode: MouseEventHandler<HTMLButtonElement>
}

const DarkMode = ({ darkMode, toggleDarkMode }: Prop) => {
  return (
    <div className="flex-end md:flex-1">
      <div className="dark-mode-toggle">
        <button
          type="button"
          aria-label="Toggle dark mode"
          className={`dark-mode-button ${darkMode ? 'dark' : ''}`}
          onClick={toggleDarkMode}
        >
          {/* Light mode icon */}
          <svg className={darkMode ? 'light-icon hidden' : 'light-icon'}>
            <FontAwesomeIcon icon={faSun} />
          </svg>

          {/* Dark mode icon */}
          <svg className={darkMode ? 'dark-icon' : 'dark-icon hidden'}>
            <FontAwesomeIcon icon={faMoon} />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default DarkMode
