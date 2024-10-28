import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'

interface Prop {
  darkMode: boolean
}

const Menu = ({ darkMode }: Prop) => {
  return (
    <Popover as="div" className="relative">
      {({ open }) => (
        <div className="mobile-menu">
          <PopoverButton className={`menu-button ${darkMode ? 'dark' : ''}`}>
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
              <li className="menu-link">
                <Link href="/">About</Link>
              </li>
              <li className="menu-link">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="menu-link">
                <Link
                  href="https://drive.google.com/file/d/14a3HzApa0AURDTD6W0D4o7cG3mayQJgB/view?usp=sharing"
                  target="_blank"
                >
                  CV
                </Link>
              </li>
            </ul>
          </PopoverPanel>
        </div>
      )}
    </Popover>
  )
}

export default Menu
