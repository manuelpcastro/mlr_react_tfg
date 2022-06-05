import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from "reactstrap"

const CustomDropdown = ({
  className, placeholder, options, onChange,
}) => {
  const [open, setOpen] = useState(false)

  const handleClick = value => {
    onChange(value)
  }

  const activeOptionValue = options.find(option => option?.active)?.text

  return (
    <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
      <DropdownToggle caret className={`text-white px-2 ${className}`}>
        <div className="d-inline pe-2">
          {activeOptionValue || placeholder}
        </div>
      </DropdownToggle>
      <DropdownMenu>
        {options.map(option => (
          <DropdownItem
            key={option?.value}
            onClick={useCallback(() => handleClick(option?.value), [])}
            disabled={option?.disabled}
            active={option?.active}
            color="white"
          >
            {option?.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

CustomDropdown.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  onChange: PropTypes.func.isRequired,
}

CustomDropdown.defaultProps = {
  className: "",
  placeholder: "Select...",
  options: [],
}

export default CustomDropdown
