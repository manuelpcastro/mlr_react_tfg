import React from "react"
import PropTypes from "prop-types"
import { Badge } from "reactstrap"

const ModelBadge = ({ modelName }) => (
  <div className="d-flex align-items-center">
    {modelName}
    <Badge color="secondary" className="mx-2">
      Already Running
    </Badge>
  </div>
)

ModelBadge.propTypes = {
  modelName: PropTypes.string.isRequired,
}

export default ModelBadge
