import React from "react"
import useNavbarContent from "../navbar/hooks/useNavbarContent"
import DashboardSectionCard from "./DashboardSectionCard"

const Dashboard = () => {
  const sections = useNavbarContent()

  return (
    <div className="d-flex justify-content-between align-items-center">
      {sections.map(section => (
        <DashboardSectionCard
          icon={section.icon}
          text={section.text}
          url={section.url}
        />
      ))}
    </div>
  )
}

export default Dashboard
