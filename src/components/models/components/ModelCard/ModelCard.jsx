import React from "react"
import PropTypes from "prop-types"
import {
  Card, CardBody, CardTitle,
} from "reactstrap"
import ModelCardActions from "./components/ModelCardActions"
import ModelCardImg from "./components/ModelCardImg"
import ModelStatus from "./components/ModelStatus"
import ModelType from "./components/ModelType"

const ModelCard = ({ id, status, type }) => {
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
      <CardBody className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <ModelCardImg type={type} />
        </div>
        <hr className="invisible" />
        <ModelType type={type} />
        <hr className="invisible" />
        <ModelStatus status={status} />
        <hr className="invisible" />
        <ModelCardActions id={id} />
      </CardBody>
    </Card>
  )
}

ModelCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ModelCard
