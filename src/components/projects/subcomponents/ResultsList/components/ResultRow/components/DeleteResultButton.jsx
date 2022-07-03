import React from "react"
import { useParams } from "react-router-dom"
import { Button } from "reactstrap"
import { useDeleteProjectResultMutation } from "../../../../../../../services/projects/api"
import Icon from "../../../../../../common/Icon"

const DeleteResultButton = ({ id, disabled }) => {
  const { id: projectId } = useParams()
  const [deleteResult] = useDeleteProjectResultMutation()

  const handleClick = () => {
    deleteResult({ projectId, resultId: id })
  }

  return (
    <Button
      color="danger"
      disabled={disabled}
      onClick={handleClick}
    >
      <Icon
        icon="trash"
        className="me-2"
      />
      Delete
    </Button>
  )
}

export default DeleteResultButton
