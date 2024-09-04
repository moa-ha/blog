'use client'

import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
import TechStack from '@/components/techStack'
import { Divider } from '@nextui-org/divider'
import 'tippy.js/dist/tippy.css'
import Links from './links'
import BlogStack from './blogStack'

config.autoAddCss = false // 필수: CSS 충돌 방지

export default function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <div className="container">
      <h1 className="title">About </h1>
      <div className="profile-container">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width="0"
          height="0"
          sizes="100vw"
          className="profile"
        />
      </div>
      <section>
        <h1 className="text-xl">Moa Ha</h1>
        <div className="mb-4 mt-2">
          <p>
            I am a full stack developer with a passion for learning and
            delivering high-quality work. A quick learner and dedicated
            performer, I excel in meeting deadlines and achieving targets. My
            strong collaboration skills and experience as a team player, coupled
            with a proven ability to take initiative, make me a valuable asset
            to a development team.
            <br />
            <br />I chose this career because I saw many of my daily tasks being
            automated and replaced by software. This made me realise I wanted to
            be someone who creates these solutions. I find it incredibly
            exciting to contribute to projects where my work directly impacts
            real users and can be seen on live websites. I love the opportunity
            to solve problems and see the results in action.
          </p>
          <TechStack />
        </div>
      </section>

      <Links />
      <Divider orientation="horizontal" />
      <BlogStack />
    </div>
  )
}
