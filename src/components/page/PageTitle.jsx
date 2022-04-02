import React from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import Icon from "../common/Icon"

const PageTitle = ({
  icon, title, iconClassName, className,
}) => (
  <div className={`d-flex align-items-center mb-4 ${className}`}>
    <Button color="primary" className="me-3">
      <Icon
        size="lg"
        icon={icon}
        className={iconClassName}
      />
    </Button>
    <h3 className="mb-0 bold">
      {title}
    </h3>
  </div>
)

PageTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  className: PropTypes.string,
}

PageTitle.defaultProps = {
  icon: "",
  iconClassName: "",
  className: "",
}

export default PageTitle
