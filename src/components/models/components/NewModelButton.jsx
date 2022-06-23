import React from "react"
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom"
import Icon from "../../common/Icon"

const NewModelButton = () => {
  const { push } = useHistory()

  const redirect = () => {
    push("models/new")
  }

  return (
    <Button
      className="text-white"
      color="secondary"
      onClick={redirect}
    >
      <Icon
        icon="plus"
        className="me-2"
      />
      Create new model
    </Button>
  )
}

export default NewModelButton
