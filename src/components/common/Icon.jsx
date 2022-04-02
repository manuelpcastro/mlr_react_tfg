import React from "react"
import PropTypes from "prop-types"

const Icon = ({ className, icon, size }) => {
  const sizeClass = size ? `fa-${size}` : ""
  return <i className={`fa fa-${icon} ${sizeClass} ${className}`} />
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Icon.defaultProps = {
  className: "",
  size: "",
}

export default Icon
