import React from "react"
import PropTypes from "prop-types"

const ModelType = ({ type }) => (
  <div className="mw-100 mx-3">
    <div className=" d-flex align-items-center justify-content-start mb-2">Type:</div>
    <div className="d-flex align-items-center mx-2">{type}</div>
  </div>
)

ModelType.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ModelType
