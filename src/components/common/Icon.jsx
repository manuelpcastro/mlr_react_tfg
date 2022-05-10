import React from "react"
import PropTypes from "prop-types"

const Icon = ({
  className, icon, size, onClick,
}) => {
  const sizeClass = size ? `fa-${size}` : ""
  return <i onClick={onClick} className={`fa fa-${icon} ${sizeClass} ${className}`} />
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  className: "",
  size: "",
  onClick: () => {},
}

export default Icon
