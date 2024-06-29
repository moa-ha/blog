'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

interface Prop {
  darkMode: boolean
}

const Menu = ({ darkMode }: Prop) => {
  return (
    <Popover as="div" className="relative">
      {({ open }) => (
        <div className="mobile-menu">
          <PopoverButton
            className={`menu-button ${darkMode ? 'dark' : ''}`}
            id="headlessui-popover-button"
          >
            Menu
            <svg
              viewBox="0 0 8 6"
              aria-hidden="true"
              className={`menu-icon ${darkMode ? 'dark' : ''}`}
            >
              <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </PopoverButton>

          <PopoverPanel
            className={`menu-list popover ${darkMode ? 'dark' : ''}`}
          >
            <ul className="menu-items">
              <li className="menu-link">About</li>
              <li className="menu-link">Posts</li>
              <li className="menu-link">Websites</li>
            </ul>
          </PopoverPanel>
        </div>
      )}
    </Popover>
  )
}

export default Menu
