import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import { useCreateProjectMutation } from "../../../services/projects/api"
import ProjectForm from "./ProjectForm"

const initialProjectState = {
  title: "",
  abstract: "",
  file_data: null,
  matrix_name: "",
  attrs_name: "",
  class_name: "",
  test_size: "",
  random_state: "",
  sampling_stategy: null,
  models: [],
}

const EditProjectForm = ({ close }) => {
  const [project, setProject] = useState(initialProjectState)
  const [backendErrors, setBackendErrors] = useState({})

  const [createNewProject, createResponse] = useCreateProjectMutation()

  const handleConfirmClick = () => {
    // TO DO: Solve issue with the file selection

    // When user selects a file, send file (temporarily in case it was wrongly selected)
    // to the backend, files that are not used in any project can be removed later
    // backend should return an id that we can append here
    const tmpFileName = { name: project.file_data?.name }
    createNewProject({ ...project, file_data: tmpFileName })
  }

  useEffect(() => {
    const { isError, isSuccess } = createResponse

    if (isError) {
      setBackendErrors(createResponse.error.data)
    }

    if (isSuccess) {
      close()
    }
  }, [createResponse])

  return (
    <div>

      <ProjectForm
        project={project}
        setProject={setProject}
        backendErrors={backendErrors}
      />

      <hr />

      <div className="d-flex justify-content-end my-4">
        <Button
          className="me-2"
          color="white"
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleConfirmClick}
        >
          Create
        </Button>
      </div>
    </div>
  )
}

EditProjectForm.propTypes = {
  close: PropTypes.func.isRequired,
}

export default EditProjectForm
