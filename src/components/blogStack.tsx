import React, { ReactNode } from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import Tooltip from './Tooltip'

const BlogStack: React.FC = () => {
  return (
    <div className="flex space-x-2 my-8 text-gray-600 drop-shadow-xl">
      <div className="italic">This blog was built with</div>
      <Tooltip text="Next.js">
        <SiNextdotjs className="text-xl" />
      </Tooltip>
      <Tooltip text="TypeScript">
        <SiTypescript className="text-xl" />
      </Tooltip>
      <Tooltip text="React">
        <FaReact className="text-xl" />
      </Tooltip>
      <Tooltip text="Tailwind CSS">
        <SiTailwindcss className="text-xl" />
      </Tooltip>
    </div>
  )
}

export default BlogStack
