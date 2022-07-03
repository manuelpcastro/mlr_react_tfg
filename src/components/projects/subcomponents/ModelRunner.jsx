import React, { useEffect, useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import {
  Button, Col, Row,
} from "reactstrap"
import { useGetProjectQuery, useRunProjectMutation } from "../../../services/projects/api"
import IndividualList from "../../common/dual-list/IndividualList"
import useMappedModels from "../hooks/useMappedModels"
import ModelBadge from "./ModelBadge"

const ModelRunner = () => {
  const { id: projectId } = useParams()
  const [runProject, { isSuccess, isError }] = useRunProjectMutation()
  const { data: project } = useGetProjectQuery(projectId)
  const [selectedModels, setSelectedModels] = useState([])
  const models = useMappedModels()

  const { models: projectModels } = project || {}

  const mappedProjectModels = useMemo(
    () => models
      .filter(model => projectModels?.includes(model.id))
      .map(model => {
        const isProcessing = model.status === "processing"

        if (isProcessing) {
          return { ...model, disabled: true, text: <ModelBadge modelName={model?.text} /> }
        }

        return model
      }),
    [projectModels, models],
  )

  useEffect(() => {
    if (isSuccess) {
      setSelectedModels([])
    }
  }, [isSuccess])

  const selectModel = id => {
    if (selectedModels.includes(id)) {
      setSelectedModels(selectedModels.filter(i => i !== id))
    } else {
      setSelectedModels([...selectedModels, id])
    }
  }

  const runAllModels = () => {
    runProject(
      {
        projectId,
        body: { projectId, models: mappedProjectModels.map(({ id }) => id) },
      },
    )
  }

  const runSelectedModels = () => {
    runProject(
      {
        projectId,
        body: { projectId, models: selectedModels },
      },
    )
  }

  if (!mappedProjectModels || mappedProjectModels.length === 0) {
    return (
      <div className="d-flex py-4">
        No models selected for this project yet.
      </div>
    )
  }

  if (isError) {
    return (
      <div className="d-flex py-4">
        Something went wrong! Please reload the page and try again.
      </div>
    )
  }

  return (
    <Row className="py-4">
      <Col xs="6" className="d-flex flex-column justify-content-around">
        <Button
          color="primary"
          disabled={mappedProjectModels.some(model => model.disabled)}
          onClick={runAllModels}
        >
          Run all
        </Button>
        <Button
          onClick={runSelectedModels}
          disabled={selectedModels.length === 0}
          color="secondary"
          className="text-white"
        >
          Run selected
        </Button>
      </Col>
      <Col xs="6" className="d-flex justify-content-center">
        <IndividualList
          items={mappedProjectModels}
          selectedItems={selectedModels}
          onChange={selectModel}
          style={{ minHeight: "auto", maxHeight: "auto" }}
        />
      </Col>

    </Row>
  )
}

export default ModelRunner
