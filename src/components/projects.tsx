import Image from 'next/image'
import React from 'react'
import '@/styles/projects.css'

const Projects = () => (
  <div className="item-group">
    <div className="item">
      <Image
        className="item-image"
        width={200}
        height={200}
        src="/images/carGP.png"
        alt="car-gp"
      />

      <div className="item-content">
        <h3 className="item-header">Arrowhead Valley Camp</h3>
        <div className="item-meta">
          <span className="price">$1200</span>
          <span className="stay">1 Month</span>
        </div>
        <div className="item-description"></div>
      </div>
    </div>

    <div className="item">
      <Image
        className="item-image"
        width={200}
        height={200}
        src="/images/LyricSync.png"
        alt="LyricSync"
      />

      <div className="item-content">
        <h3 className="item-header"> Homebrew Stayaway</h3>
        <div className="item-meta">
          <span className="price">$1000</span>
          <span className="stay">2 Weeks</span>
        </div>
      </div>
    </div>

    <div className="item">
      <Image
        className="item-image"
        width={200}
        height={200}
        src="/images/tradie-tracker.gif"
        alt="tradie-tracker"
      />

      <div className="item-content">
        <h3 className="item-header">Arrowhead Valley Camp</h3>
        <div className="item-meta">
          <span className="price">$1200</span>
          <span className="stay">1 Month</span>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
