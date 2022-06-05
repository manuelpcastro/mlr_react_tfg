import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from "reactstrap"
import { useCreateProjectMutation, useUpdateProjectMutation } from "../../services/projects/api"
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

const ProjectModal = ({
  isOpen, close, project: existingProject, isNewProject,
}) => {
  const [project, setProject] = useState({})
  const [backendErrors, setBackendErrors] = useState({})

  const [createNewProject, createResponse] = useCreateProjectMutation()
  const [updateProject, updateResponse] = useUpdateProjectMutation()

  const handleConfirmClick = () => {
    if (isNewProject) {
      createNewProject(project)
    } else {
      updateProject(project)
    }
  }

  useEffect(() => {
    const response = isNewProject ? createResponse : updateResponse

    if (response.isError) {
      setBackendErrors(response.error.data)
    }

    if (response.isSuccess) {
      close()
    }
  }, [createResponse, updateResponse])

  useEffect(() => {
    if (existingProject) {
      setProject(existingProject)
    }
  }, [existingProject?.id])

  return (
    <Modal isOpen={isOpen} toggle={close}>
      <ModalHeader>
        New project
      </ModalHeader>
      <ModalBody>
        <ProjectForm
          project={project}
          setProject={setProject}
          backendErrors={backendErrors}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="white" onClick={close}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleConfirmClick}>
          {isNewProject ? "Create" : "Update"}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    abstract: PropTypes.string,
    file_data: PropTypes.instanceOf(File),
    matrix_name: PropTypes.string,
    attrs_name: PropTypes.string,
    class_name: PropTypes.string,
    test_size: PropTypes.string,
    random_state: PropTypes.string,
    sampling_stategy: PropTypes.string,
    models: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })),
  }),
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  isNewProject: PropTypes.bool,
}

ProjectModal.defaultProps = {
  project: initialProjectState,
  isNewProject: false,
}

export default ProjectModal
