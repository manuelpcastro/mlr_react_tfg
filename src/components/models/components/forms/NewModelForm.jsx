import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import ModelTypeCard from "../ModelTypeCard/ModelTypeCard"
import ModelParams from "./ModelParams"
import useModelParameters from "./parameters/hooks/useModelParameters"
import useParamsState from "./parameters/hooks/useParamsState"
import { useCreateModelMutation } from "../../../../services/models/api"

const modelOptions = [
  { id: "NN", text: "Nearest Neighbors" },
  { id: "RandomForest", text: "Random Forest" },
  { id: "SVM", text: "Support Vector Machines" },
  { id: "DecisionTree", text: "Decision Tree" },
  { id: "XGBoost", text: "XGBoost" },
]

const NewModelForm = ({ open, close }) => {
  const [selectedModel, setSelectedModel] = useState(null)
  const modelParameters = useModelParameters({ model: selectedModel })
  const [parametersState, setParametersState] = useParamsState({ parameters: modelParameters })

  const [createModel, { isSuccess }] = useCreateModelMutation()

  useEffect(() => isSuccess && close(), [isSuccess])

  const createNewModel = () => {
    createModel({
      type: selectedModel,
      parameters: parametersState,
    })
  }

  if (!open) {
    return null
  }

  return (
    <>
      <div>
        Choose a model
      </div>
      <div className="model-selector d-flex flex-wrap justify-content-center">
        {modelOptions.map(t => (
          <ModelTypeCard
            key={t.id}
            onClick={() => setSelectedModel(t.id)}
            active={selectedModel === t.id}
            id={t.id}
            name={t.text}
          />
        ))}
      </div>
      <hr />
      <ModelParams
        modelParameters={modelParameters}
        parameters={parametersState}
        setParameters={setParametersState}
      />

      <hr />
      <div className="d-flex justify-content-end my-4">
        <Button
          color="white"
          onClick={close}
          className="mx-2"
        >
          Cancel
        </Button>
        <Button
          disabled={!selectedModel}
          color="primary"
          onClick={createNewModel}
        >
          Create New Model
        </Button>
      </div>
    </>
  )
}

NewModelForm.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default NewModelForm
