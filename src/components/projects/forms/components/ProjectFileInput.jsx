import React from "react"
import { Button, Input } from "reactstrap"
import PropTypes from "prop-types"

const ProjectFileInput = ({ onChange, value }) => {
  const reset = () => {
    onChange(null)
  }

  if (value) {
    return (
      <div className="d-flex align-items-center">
        <p className="mb-0 me-2">
          Selected:
          {" "}
          <strong>{value}</strong>
        </p>
        <Button
          className="mx-2"
          color="white"
          size="sm"
          onClick={reset}
        >
          Remove

        </Button>
      </div>
    )
  }

  return (
    <Input
      id="file-data"
      accept=".csv"
      name="file"
      type="file"
      onChange={onChange}
    />
  )
}

ProjectFileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

ProjectFileInput.defaultProps = {
  value: null,
}

export default ProjectFileInput
