import React from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import Icon from "../../common/Icon"

const NewProjectButton = ({ onCreate }) => (
  <Button
    className="text-white"
    color="secondary"
    onClick={onCreate}
  >
    <Icon
      icon="plus"
      className="me-2"
    />
    Create new project
  </Button>
)

NewProjectButton.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default NewProjectButton
