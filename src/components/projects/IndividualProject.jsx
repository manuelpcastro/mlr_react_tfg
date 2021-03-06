import React from "react"
import { useParams } from "react-router-dom"
import { useGetProjectQuery } from "../../services/projects/api"
import Icon from "../common/Icon"
import EditProjectButton from "./subcomponents/EditProjectButton"
import ModelRunner from "./subcomponents/ModelRunner"
import ResultsList from "./subcomponents/ResultsList/ResultsList"

const IndividualProject = () => {
  const { id: projectId } = useParams()
  const { data: project } = useGetProjectQuery(projectId)

  if (!project) {
    return null
  }

  return (
    <>
      <EditProjectButton />
      <h5>{project.title}</h5>
      <p>{project.abstract}</p>
      <div className="d-flex align-items-center my-2">
        <div className="col-2 d-flex align-items-center me-2 border px-2 py-1 bg-primary">
          <Icon icon="file" className="me-2" />
          <p className="mb-0">Datafile</p>
        </div>
        {project.file_data?.name || "No datafile selected yet."}
      </div>
      <div className="d-flex align-items-center my-2">
        <div className="col-2 d-flex align-items-center me-2 border px-2 py-1 bg-primary">
          <Icon icon="seedling" className="me-2" />
          <p className="mb-0">Seed</p>
        </div>
        {project.random_state}
      </div>
      <hr />
      <ModelRunner />
      <hr />
      <ResultsList />
    </>
  )
}

export default IndividualProject
