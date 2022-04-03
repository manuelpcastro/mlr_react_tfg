import React from "react"
import { Link } from "react-router-dom"
import Icon from "../common/Icon"
import useNavbarContent from "./hooks/useNavbarContent"

const Sections = () => {
  const sections = useNavbarContent()

  return (
    <div className="d-flex h-100 align-items-center">
      {sections.map(section => (
        <Link to={section.url} className="d-flex align-items-center px-4 cursor-pointer">
          <Icon icon={section.icon} size="lg" className="me-3" />
          {section.text.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default Sections
