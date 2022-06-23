import React from "react"
import PropTypes from "prop-types"
import Parameter from "./parameters/Parameter"
import ParametersContextProvider from "./parameters/context/ParametersContextProvider"

const ModelParams = ({ modelParameters, parameters, setParameters }) => {
  if (!modelParameters.length || !Object.keys(parameters).length > 0) {
    return (
      <div>
        Please choose a model
      </div>
    )
  }

  return (
    <div className="parameters-form mt-4">
      <div className="d-flex">
        Fill the parameters
      </div>
      <div className="d-flex flex-column">
        <ParametersContextProvider
          parameters={parameters}
          setParameters={setParameters}
        >
          {modelParameters.map(parameter => (
            <Parameter
              key={parameter.id}
              id={parameter.id}
              title={parameter.title}
              type={parameter.type}
              options={parameter.values}
              defaultValue={parameter.default}
            />
          ))}
        </ParametersContextProvider>
      </div>
    </div>
  )
}

ModelParams.propTypes = {
  modelParameters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
    default: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  parameters: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  setParameters: PropTypes.func.isRequired,
}

export default ModelParams
