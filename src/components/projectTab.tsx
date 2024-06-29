import React, { useState } from 'react'
import '../styles/tabs.css'

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const panes = [
    {
      menuItem: 'Ongoing Projects',
      content: (
        <div>
          <h2>Projects Tab 1</h2>
          <p>Here is some content for Tab 1</p>
        </div>
      ),
    },
    {
      menuItem: 'Completed Projects',
      content: (
        <div>
          <h2>Projects Tab 2</h2>
          <p>Here is some content for Tab 2</p>
        </div>
      ),
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
      <div className="tab-content">
        {panes.map((pane, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? '' : 'hidden'}`}
          >
            {pane.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTabs
