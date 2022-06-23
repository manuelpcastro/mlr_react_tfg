import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Button, Col, Row } from "reactstrap"
import ParameterInput from "./ParameterInput"
import ParametersContext from "./context/ParametersContext"

const ParameterTitle = ({ title }) => (
  <Col xs="5" md="2">
    <div className="mx-2 d-flex align-items-center">
      {title}
    </div>
  </Col>
)

ParameterTitle.propTypes = { title: PropTypes.string.isRequired }

const ParameterDefaultValue = ({ defaultValue, reset }) => {
  if (defaultValue === null) {
    return null
  }

  return (
    <Col xs="6" md="3">
      <div className="d-flex justify-content-end justify-content-md-start align-items-center">
        <small className="text-muted me-2">
          Default:
          {" "}
          {defaultValue}
        </small>
        <Button
          color="white"
          size="sm"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </Col>
  )
}

ParameterDefaultValue.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reset: PropTypes.func.isRequired,
}
ParameterDefaultValue.defaultProps = { defaultValue: null }

const Parameter = ({
  id, title, type, options, defaultValue,
}) => {
  const { onChange } = useContext(ParametersContext)

  const resetParameter = () => {
    onChange(id, defaultValue)
  }

  return (
    <Row className="m-4 justify-content-between">
      <ParameterTitle title={title} />
      <ParameterDefaultValue defaultValue={defaultValue} reset={resetParameter} />
      <Col xs="12" md="6" lg="6" className="mt-2 mt-md-0">
        <ParameterInput
          id={id}
          type={type}
          options={options}
        />
      </Col>

    </Row>
  )
}

Parameter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Parameter.defaultProps = {
  options: [],
  defaultValue: null,
}

export default Parameter
