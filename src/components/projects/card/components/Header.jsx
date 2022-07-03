import React, { useState } from "react"
import { useHistory } from "react-router"
import { Button, CardHeader } from "reactstrap"
import { useDeleteProjectMutation } from "../../../../services/projects/api"
import ConfirmModal from "../../../common/ConfirmModal"
import Icon from "../../../common/Icon"

const ProjectCardHeader = ({
  id, title, onEdit, simplified,
}) => {
  const { push } = useHistory()
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteProject] = useDeleteProjectMutation()

  const redirectToIndividualPage = () => {
    push(`/projects/${id}`)
  }

  const handleClickEdit = () => {
    push(`/projects/${id}/edit`)
  }

  const handleClickDelete = () => {
    deleteProject(id)
  }
  return (
    <CardHeader className="d-flex align-items-center justify-content-between">
      <h4 onClick={redirectToIndividualPage} className="d-flex align-items-center mb-0 cursor-pointer">
        <Icon icon="bars-progress" size="md" className="me-2" />
        {title}
      </h4>
      {!simplified && (
      <div className="d-flex">
        <Button className="me-1" color="primary" onClick={redirectToIndividualPage}>
          <Icon size="lg" icon="eye" />
        </Button>
        <Button className="mx-1" onClick={handleClickEdit}>
          <Icon size="lg" icon="pencil" className="text-white" />
        </Button>
        <Button className="ms-1" color="danger" onClick={() => setIsDeleting(true)}>
          <Icon size="lg" icon="trash" className="text-white" />
        </Button>
        {isDeleting && (
        <ConfirmModal
          danger
          confirm={handleClickDelete}
          cancel={() => setIsDeleting(false)}
        >
          Are you sure you want to delete project:
          {" "}
          <b>{title}</b>
        </ConfirmModal>
        )}
      </div>
      )}
    </CardHeader>
  )
}

export default ProjectCardHeader
