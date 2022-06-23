import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import { useDeleteModelMutation } from "../../../../../services/models/api"
import ConfirmModal from "../../../../common/ConfirmModal"
import Icon from "../../../../common/Icon"

const DeleteModelButton = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteModel] = useDeleteModelMutation()

  const onClickDelete = () => {
    setIsDeleting(true)
  }

  const confirmDelete = () => {
    deleteModel(id)
  }
  return (
    <>
      <Button
        className="d-flex align-items-center mx-1"
        color="danger"
        onClick={onClickDelete}
      >
        <Icon
          icon="trash"
          className="me-2"
        />
        <small>
          Delete
        </small>
      </Button>

      {isDeleting && (
      <ConfirmModal
        danger
        confirm={confirmDelete}
        cancel={() => setIsDeleting(false)}
      >
        Are you sure you want to delete this model:
        {" "}
        <b>{`Model ${id}`}</b>
      </ConfirmModal>
      )}
    </>
  )
}

DeleteModelButton.propTypes = {
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
}

export default DeleteModelButton
