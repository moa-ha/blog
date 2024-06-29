'use client'

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
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={darkMode ? 'light-icon hidden' : 'light-icon'}
          >
            {/* Light mode icon */}
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
            <path
              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
              fill="none"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={darkMode ? 'dark-icon' : 'dark-icon hidden'}
          >
            {/* Dark mode icon */}
            <path
              d="M21.764 13.36a8.25 8.25 0 1 1-10.122-10.122 9 9 0 1 0 10.122 10.122z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default DarkMode
