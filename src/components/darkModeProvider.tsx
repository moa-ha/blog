'use client'

import { useState, useEffect, ReactNode, MouseEventHandler } from 'react'
import Header from '@/components/header'

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
  }, [])

  const toggleDarkMode: MouseEventHandler<HTMLButtonElement> = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </div>
  )
}
