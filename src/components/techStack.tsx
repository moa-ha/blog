import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiSqlite } from 'react-icons/si'
const TechStack = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center mt-4">
      <FaHtml5 size="1.7em" title="HTML5" className="text-red-500" />
      <FaCss3Alt size="1.7em" title="CSS3" className="text-blue-500" />
      <FaJs size="1.7em" title="JavaScript" className="text-yellow-500" />
      <SiTypescript size="1.7em" title="TypeScript" className="text-blue-600" />
      <FaReact size="1.7em" title="React" className="text-cyan-500" />
      <FaNodeJs size="1.7em" title="Node.js" className="text-green-500" />
      <SiSqlite size="1.7em" title="SQLite3" className="text-blue-300" />
    </div>
  )
}

export default TechStack
