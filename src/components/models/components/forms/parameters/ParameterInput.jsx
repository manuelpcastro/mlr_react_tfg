import React, { useContext, useMemo } from "react"
import PropTypes from "prop-types"
import { Input } from "reactstrap"
import CustomDropdown from "../../../../common/Dropdown"
import ParametersContext from "./context/ParametersContext"

const DropdownParameterInput = ({
  id, value, options, onChange,
}) => {
  const memoizedOptions = useMemo(
    () => options.map(option => (
      {
        text: option.toUpperCase(),
        value: option,
        active: option === value,
      }
    )),
    [options, value],
  )

  const updateValue = newValue => {
    onChange(id, newValue)
  }

  return (
    <CustomDropdown
      options={memoizedOptions}
      onChange={updateValue}
      className="w-100"
    />
  )
}

DropdownParameterInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

const DefaultParameterInput = ({
  id, type, value, onChange,
}) => {
  const inputType = type === "int" ? "number" : ""
  const updateValue = e => {
    onChange(id, e.target.value)
  }

  return (
    <Input
      id={id}
      type={inputType}
      value={value}
      onChange={updateValue}
    />
  )
}

DefaultParameterInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
}

const ParameterInputSelector = ({
  id, type, options,
}) => {
  const { state: { [id]: value }, onChange } = useContext(ParametersContext)

  if (type === "select") {
    return (
      <DropdownParameterInput
        id={id}
        value={value}
        options={options}
        onChange={onChange}
      />
    )
  }

  if (["string", "int"].includes(type)) {
    return (
      <DefaultParameterInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    )
  }

  return null
}

ParameterInputSelector.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
}

ParameterInputSelector.defaultProps = {
  options: [],
}

export default ParameterInputSelector
