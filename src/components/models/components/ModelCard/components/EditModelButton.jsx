import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import Icon from "../../../../common/Icon"

const EditModelButton = ({ id }) => {
  const { push } = useHistory()

  const goToEditPage = () => {
    push(`/models/${id}`)
  }

  return (
    <Button
      className="d-flex align-items-center mx-1 text-white"
      color="secondary"
      onClick={goToEditPage}
    >
      <Icon
        icon="pencil"
        className="me-2"
      />
      <small>
        Edit
      </small>
    </Button>
  )
}

EditModelButton.propTypes = {
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
}

export default EditModelButton
