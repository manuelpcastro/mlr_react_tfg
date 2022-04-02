import React from "react"
import { Link } from "react-router-dom"
import Icon from "../common/Icon"

const Sections = () => {
  const sections = [
    { text: "Dashboard", icon: "chart-pie", url: "/" },
    { text: "Projects", icon: "bars-progress", url: "/projects" },
    { text: "Models", icon: "diagram-project", url: "/models" },
    { text: "Users", icon: "users", url: "/users" },
  ]

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
