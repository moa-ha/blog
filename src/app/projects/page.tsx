'use client'

import ProjectTabs from '@/components/projectTab'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects'
  }, [])

  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <ProjectTabs />
    </div>
  )
}
