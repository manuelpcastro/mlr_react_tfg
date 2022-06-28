import React, { useMemo } from "react"
import PropTypes from "prop-types"
import Icon from "../../../../common/Icon"

const ModelStatus = ({ status }) => {
  const [icon, text, color] = useMemo(() => {
    if (status === "processing") {
      return ["rotate", "Processing", "text-secondary"]
    }

    if (status === "processed") {
      return ["check-circle", "Processed", "text-primary"]
    }

    if (status === "error") {
      return ["times-circle", "Error", "text-danger"]
    }

    if (status === "ready") {
      return ["circle", "Ready", "text-primary"]
    }

    return ["question-circle", "Unknown", ""]
  }, [status])

  return (
    <div className="mw-100 px-3 mb-2">
      <div className="d-flex align-items-center mb-2">
        Status:
      </div>
      <div className={`d-flex align-items-center ${color}`}>
        <Icon icon={icon} className="mx-2" />
        {text}
      </div>
    </div>
  )
}

ModelStatus.propTypes = {
  status: PropTypes.string.isRequired,
}

export default ModelStatus
