import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Button, Col } from "reactstrap"
import ModelTypeCard from "../ModelTypeCard/ModelTypeCard"
import ModelParams from "./ModelParams"
import useModelParameters from "./parameters/hooks/useModelParameters"
import useParamsState from "./parameters/hooks/useParamsState"
import { useGetModelQuery, useUpdateModelMutation } from "../../../../services/models/api"
import CenteredSpinner from "../../../common/CenteredSpinner"

const modelOptions = [
  { id: "NN", text: "Nearest Neighbors" },
  { id: "RandomForest", text: "Random Forest" },
  { id: "SVM", text: "Support Vector Machines" },
  { id: "DecisionTree", text: "Decision Tree" },
  { id: "XGBoost", text: "XGBoost" },
]

const EditModelForm = ({ id, close }) => {
  const { data: model, isLoading } = useGetModelQuery(id)
  const modelParameters = useModelParameters({ model: model?.type })
  const [parametersState, setParametersState] = useParamsState(
    { parameters: modelParameters, initialValues: model?.parameters },
  )

  const modelInfo = modelOptions.find(m => model?.type === m.id)

  const [updateModel, { isSuccess }] = useUpdateModelMutation()

  useEffect(() => isSuccess && close(), [isSuccess])

  const updateModelAttributes = () => {
    updateModel({
      ...model,
      parameters: parametersState,
    })
  }

  if (isLoading) {
    return <CenteredSpinner />
  }

  return (
    <div className="d-flex align-items-center">
      <Col xs="3">
        <div className="model-selector d-flex flex-wrap justify-content-center">
          <ModelTypeCard
            onClick={() => {}}
            active
            id={modelInfo?.id}
            name={modelInfo?.text}
          />
        </div>
      </Col>
      <Col>
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
            color="primary"
            onClick={updateModelAttributes}
          >
            Update Model
          </Button>
        </div>
      </Col>
    </div>
  )
}

EditModelForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  close: PropTypes.func.isRequired,
}

export default EditModelForm
