'use client'

import { MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import Header from './header'

interface DarkModeProviderProps {
  children: ReactNode
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') {
      setIsDarkMode(true)
    }
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  const toggleDarkMode: MouseEventHandler<HTMLButtonElement> = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode((prevMode) => !prevMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </div>
  )
}
