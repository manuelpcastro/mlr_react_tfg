import React from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import Icon from "../../common/Icon"

const ActionsCell = ({ row, editUser, removeUser }) => {
  const clickEditButton = () => editUser(row?.original)
  const clickRemoveButton = () => removeUser(row?.original)

  return (
    <div className="d-flex justify-content-start">
      <Button onClick={clickEditButton} color="secondary text-white">
        <Icon icon="pencil" className="me-2" />
        Edit
      </Button>
      <Button onClick={clickRemoveButton} color="danger text-white" className="mx-2">
        <Icon icon="trash" className="me-2" />
        Remove
      </Button>
    </div>
  )
}

ActionsCell.propTypes = {
  row: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
}

export default ActionsCell
