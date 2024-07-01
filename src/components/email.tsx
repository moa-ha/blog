import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Email() {
  const [isShow, setIsShow] = useState(false)
  function handleClick() {
    setIsShow(!isShow)
  }
  return (
    <>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faEnvelope} className="menu-link text-xl" />
        {isShow && (
          <span className="absolute bg-teal-500">
            Please contact me via email. <strong>moahaa03@gmail.com</strong>
          </span>
        )}
      </button>
    </>
  )
}
