import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import Icon from "../../common/Icon"

const EditProjectButton = () => {
  const { id } = useParams()
  const { push } = useHistory()

  const redirect = () => {
    push(`/projects/${id}/edit`)
  }

  return (
    <div className="d-flex justify-content-end">
      <Button
        onClick={redirect}
        color="primary"
      >
        <Icon icon="pencil" className="me-2" />
        Edit
      </Button>
    </div>
  )
}

export default EditProjectButton
