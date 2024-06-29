'use client'

import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Ongoing Projects',
    render: () => (
      <TabPane attached={false}>
        <h2>Projects Tab 1</h2>
        <p>Here is some content for Tab 1</p>
      </TabPane>
    ),
  },
  {
    menuItem: 'Completed Projects',
    render: () => <TabPane attached={false}>Tab 2 Content</TabPane>,
  },
]

const ProjectTabs = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default ProjectTabs
