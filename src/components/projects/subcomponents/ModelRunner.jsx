import React, { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Button, Col, Row } from "reactstrap"
import { useGetProjectQuery, useRunProjectMutation } from "../../../services/projects/api"
import IndividualList from "../../common/dual-list/IndividualList"
import useMappedModels from "../hooks/useMappedModels"

const ModelRunner = () => {
  const { id: projectId } = useParams()
  const [runProject] = useRunProjectMutation()
  const { data: project } = useGetProjectQuery(projectId)
  const [selectedModels, setSelectedModels] = useState([])
  const models = useMappedModels()

  const { models: projectModels } = project || {}

  const mappedProjectModels = useMemo(
    () => models.filter(model => projectModels?.includes(model.id)),
    [projectModels, models],
  )

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
        body: { models: mappedProjectModels.map(({ id }) => id) },
      },
    )
  }

  const runSelectedModels = () => {
    runProject(
      {
        projectId,
        body: { models: selectedModels },
      },
    )
  }

  if (!mappedProjectModels || mappedProjectModels.length === 0) {
    return (
      <div className="d-flex py-4">
        No models selected for this project yet
      </div>
    )
  }

  return (
    <Row className="pt-4">
      <Col xs="6" className="d-flex flex-column justify-content-around">
        <Button color="primary" onClick={runAllModels}>
          Run all
        </Button>
        <Button
          onClick={runSelectedModels}
          disabled={selectedModels.length === 0}
          color="secondary"
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
