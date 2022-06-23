import React from "react"
import PropTypes from "prop-types"
import {
  Card, CardBody, CardTitle,
} from "reactstrap"
import ModelCardActions from "./components/ModelCardActions"
import ModelCardImg from "./components/ModelCardImg"

const ModelCard = ({ id, type }) => {
  if (!id || !type) {
    return null
  }

  return (
    <Card
      className="m-2 w-100"
    >
      <CardTitle className="text-center py-2 bg-primary fw-bold">
        {`Model ${id}`}
      </CardTitle>
      <CardBody className="d-flex flex-column align-items-center">
        <ModelCardImg type={type} />
        <hr />
        {`Type: ${type}`}
        <hr />
        <ModelCardActions id={id} />
      </CardBody>
    </Card>
  )
}

ModelCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string.isRequired,
}

export default ModelCard
