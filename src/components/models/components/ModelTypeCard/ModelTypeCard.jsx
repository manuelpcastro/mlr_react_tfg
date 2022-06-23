import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"
import { Card, CardBody } from "reactstrap"
// import images from "../../../assets/model_types"
import modelIcons from "../../../../assets/model_types"
import "./ModelTypeCard.scss"

const ModelTypeCard = ({
  id, active, name, onClick,
}) => {
  const [hovering, setHovering] = useState(false)
  const coloredIcon = `Color${id}`
  const { [id]: defaultImg, [coloredIcon]: coloredImg } = modelIcons

  const shownImg = useMemo(
    () => (hovering || active ? coloredImg : defaultImg),
    [hovering, active],
  )

  const activeClass = active ? "active" : ""

  return (
    <Card
      className={`model-type-card user-select-none reduced m-2 ${activeClass}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <CardBody onClick={onClick} className="d-flex flex-column">
        <div className="d-flex justify-content-center my-3">
          <img alt={name} src={shownImg} />
        </div>
        <div className="d-flex justify-content-center mb-2 text-center">
          <h4>{name}</h4>
        </div>
      </CardBody>
    </Card>
  )
}

ModelTypeCard.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ModelTypeCard
