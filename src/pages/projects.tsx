'use client'

import Header from '@/components/header'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // check dak mode when loading the page
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') {
      setIsDarkMode(true)
    }
  }, [])

  // toggle dark mode
  const toggleDarkMode: () => void = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString()) // localStorage에 다크 모드 설정 저장
  }

  return (
    <>
      <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      projects
    </>
  )
}
