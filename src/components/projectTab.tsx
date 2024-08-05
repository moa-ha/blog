import React, { useState } from 'react'
import '../styles/tabs.css'
import Projects from './projects'
import ProjectsC from './projectsC'
import ProjectsH from './ProjectsH'

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const panes = [
    {
      menuItem: 'Ongoing Projects',
      content: <Projects />,
    },
    {
      menuItem: 'Completed Projects',
      content: <ProjectsC />,
    },
    {
      menuItem: 'Hackathon Projects',
      content: <ProjectsH />,
    },
  ]

  return (
    <div className="tab-container">
      <div className="tab-menu">
        {panes.map((pane, index) => (
          <div
            key={index}
            className={`tab-menu-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {pane.menuItem}
          </div>
        ))}
      </div>
      {panes.map((pane, index) => (
        <div key={index} className={` ${activeTab === index ? '' : 'hidden'}`}>
          {pane.content}
        </div>
      ))}
    </div>
  )
}

export default ProjectTabs
