import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import Icon from "../../common/Icon"

const NewProjectButton = () => {
  const { push } = useHistory()

  const redirect = () => {
    push("projects/new")
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
      Create new project
    </Button>
  )
}

export default NewProjectButton
