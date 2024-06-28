import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'

interface Prop {
  darkMode: boolean
}

const Menu = ({ darkMode }: Prop) => {
  const router = useRouter()

  return (
    <Popover as="div" className="relative">
      {({ open }) => (
        <div className="mobile-menu">
          <Popover.Button
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
          </Popover.Button>

          <Popover.Panel className="menu-list">
            <ul className={`menu-items ${darkMode ? 'dark' : ''}`}>
              <li>About</li>
              <li>Posts</li>
              <li>Projects</li>
            </ul>
          </Popover.Panel>
        </div>
      )}
    </Popover>
  )
}

export default Menu
