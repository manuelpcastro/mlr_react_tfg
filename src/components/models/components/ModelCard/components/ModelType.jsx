import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../../common/Icon"

const ModelType = ({ type }) => (
  <div>
    <div className=" d-flex align-items-center justify-content-center mb-2">
      <Icon icon="sun" className="me-2" />
      Type:
      {" "}
      {type}
    </div>
  </div>
)

ModelType.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ModelType
