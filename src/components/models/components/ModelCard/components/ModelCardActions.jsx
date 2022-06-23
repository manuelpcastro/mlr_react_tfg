import React from "react"
import PropTypes from "prop-types"
import DeleteModelButton from "./DeleteModelButton"
import EditModelButton from "./EditModelButton"

const ModelCardActions = ({ id }) => (
  <div className="d-flex flex-column flex-sm-row">
    <EditModelButton id={id} />
    <div className="mt-2 d-sm-none" />
    <DeleteModelButton id={id} />
  </div>
)

ModelCardActions.propTypes = {
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
}

export default ModelCardActions
