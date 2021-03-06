import React from "react"
import {
  Card, CardBody,
} from "reactstrap"
import Icon from "../../common/Icon"
import AssignedModels from "./components/AssignedModels"
import ProjectCardHeader from "./components/Header"

const ProjectCard = ({ simplified, project }) => {
  const { id: projectId, title: projectTitle, models: projectModels } = project || {}

  if (!project) {
    return null
  }

  return (
    <Card className="w-100">
      <ProjectCardHeader
        id={projectId}
        title={projectTitle}
        simplified={simplified}
      />
      <CardBody>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <Icon icon="calendar" className="me-2" />
            Last update:
          </div>
          <small>
            {project.updated_at || "-"}
          </small>
        </div>
        {!simplified && (
        <>
          <div className="d-flex flex-column mb-2">
            <div className="d-flex align-items-center">
              <Icon icon="comment" className="me-2" />
              Abstract:
            </div>

            <small className="ms-2" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
              {project.abstract}
            </small>
          </div>
          <AssignedModels projectModels={projectModels} />
        </>
        )}
      </CardBody>
    </Card>
  )
}

export default ProjectCard
