import React from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import Icon from "../../../../../../common/Icon"

const DownloadResultButton = ({ url, disabled }) => {
  if (disabled) {
    return (
      <Button
        color="secondary"
        className="text-white mx-2"
        disabled
      >
        <Icon
          icon="arrow-alt-circle-down"
          className="me-2"
        />
        Download
      </Button>
    )
  }

  return (
    <a
      className="btn btn-secondary text-white mx-2"
      href={url}
      download
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        icon="arrow-alt-circle-down"
        className="me-2"
      />
      Download
    </a>
  )
}

DownloadResultButton.propTypes = {
  url: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default DownloadResultButton
