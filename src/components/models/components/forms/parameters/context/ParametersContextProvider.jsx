import React, { useMemo } from "react"
import PropTypes from "prop-types"
import ParametersContext from "./ParametersContext"

const ParametersContextProvider = ({ children, parameters, setParameters }) => {
  const contextValue = useMemo(() => ({
    state: parameters,
    onChange: setParameters,
  }), [parameters, setParameters])

  return (
    <ParametersContext.Provider value={contextValue}>
      {children}
    </ParametersContext.Provider>
  )
}

ParametersContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  setParameters: PropTypes.func.isRequired,
}

export default ParametersContextProvider
