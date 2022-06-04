import React, { useMemo } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import Icon from "../../../common/Icon"
import useMappedModels from "../../hooks/useMappedModels"

const AssignedModels = ({ projectModels }) => {
  const models = useMappedModels()

  const mappedProjectModels = useMemo(
    () => models.filter(model => projectModels?.includes(model.id)),
    [projectModels, models],
  )

  if (mappedProjectModels.length === 0) {
    return (
      <div className="d-flex align-items-center">
        <Icon icon="diagram-project" className="me-2" />
        No assigned models
      </div>
    )
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center">
        <Icon icon="diagram-project" className="me-2" />
        Assigned models:
      </div>

      <ListGroup className="ps-2 mt-2">
        {mappedProjectModels.map(model => (
          <ListGroupItem>
            {model.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default AssignedModels
