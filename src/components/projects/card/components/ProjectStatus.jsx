import React, { useMemo } from "react"
import PropTypes from "prop-types"
import Icon from "../../../common/Icon"

const ProjectStatus = ({ status }) => {
  const [icon, text, color] = useMemo(() => {
    if (status === "processing") {
      return ["rotate", "Processing", "text-secondary"]
    }

    if (status === "processed") {
      return ["check-circle", "Processed", "text-primary"]
    }

    if (status === "error") {
      return ["times-circle", "Something went wrong", "text-danger"]
    }

    if (status === "ready") {
      return ["circle", "No models running", "text-primary"]
    }

    return ["question-circle", "Unknown", ""]
  }, [status])

  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <div className="d-flex align-items-center">
        <Icon icon="dot-circle" className="me-2" />
        Status:
      </div>
      <div className={`d-flex align-items-center ${color}`}>
        <Icon icon={icon} className="mx-2" />
        {text}
      </div>
    </div>
  )
}

ProjectStatus.propTypes = {
  status: PropTypes.string.isRequired,
}

export default ProjectStatus
