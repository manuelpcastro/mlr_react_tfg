import React from "react"
import { useHistory } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import Icon from "../common/Icon"

const DashboardSectionCard = ({ icon, text, url }) => {
  const { push } = useHistory()

  const redirectToSection = () => {
    push(url)
  }

  return (
    <Card
      className="d-flex w-100 m-2 border-secondary"
    >
      <CardBody
        onClick={redirectToSection}
        className="d-flex flex-column cursor-pointer"
      >
        <div className="d-flex justify-content-center my-3 text-secondary">
          <Icon
            icon={icon}
            size="3x"
          />
        </div>
        <div className="d-flex justify-content-center mb-2 text-center">
          <h4>{text}</h4>
        </div>
      </CardBody>
    </Card>
  )
}

export default DashboardSectionCard
