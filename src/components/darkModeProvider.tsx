'use client'

import { ReactNode, useEffect, useState } from 'react'
import Header from './header'

interface DarkModeProviderProps {
  children: ReactNode
}
export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </div>
  )
}
