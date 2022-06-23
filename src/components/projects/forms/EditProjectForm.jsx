import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import { useGetProjectQuery, useUpdateProjectMutation } from "../../../services/projects/api"
import CenteredSpinner from "../../common/CenteredSpinner"
import ProjectForm from "./ProjectForm"

const EditProjectForm = ({ id, close }) => {
  const { data: project, isLoading } = useGetProjectQuery(id)
  const [modifiedProject, setModifiedProject] = useState({})
  const [backendErrors, setBackendErrors] = useState({})

  const [updateProject, updateResponse] = useUpdateProjectMutation()

  const handleConfirmClick = () => {
    // TO DO: Solve issue with the file selection

    // When user selects a file, send file (temporarily in case it was wrongly selected)
    // to the backend, files that are not used in any project can be removed later
    // backend should return an id that we can append here
    const tmpFileName = { name: modifiedProject.file_data?.name }
    updateProject({ ...modifiedProject, file_data: tmpFileName })
  }

  useEffect(() => {
    const { isError, isSuccess } = updateResponse

    if (isError) {
      setBackendErrors(updateResponse.error.data)
    }

    if (isSuccess) {
      close()
    }
  }, [updateResponse])

  useEffect(() => {
    if (project?.id) {
      setModifiedProject(project)
    }
  }, [project?.id])

  if (isLoading) {
    return <CenteredSpinner />
  }

  return (
    <div>

      <ProjectForm
        project={modifiedProject}
        setProject={setModifiedProject}
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
          Update
        </Button>
      </div>
    </div>
  )
}

EditProjectForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  close: PropTypes.func.isRequired,
}

export default EditProjectForm
