import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from "reactstrap"

import NewUserForm from "./form/NewUserForm"
import EditUserForm from "./form/EditUserForm"

const UserModal = ({
  user, close, confirm, isNewUser,
}) => {
  const newUser = {
    username: "", email: "", role: "", password: "", last_login: "-",
  }
  const [userData, setUserData] = useState({ ...newUser, ...user })
  const [backendErrors, setBackendErrors] = useState({})
  const useUserData = { userData, setUserData }

  const handleConfirm = () => {
    const apiCall = confirm(userData)
    apiCall.then(({ response }) => {
      if (response.status === 400) {
        setBackendErrors(response.data)
      }
    })
  }

  const modalTitle = isNewUser ? "New user" : `Editing ${user?.username}`

  return (
    <Modal isOpen toggle={close}>
      <ModalHeader toggle={close}>
        {modalTitle}
      </ModalHeader>
      <ModalBody>
        {isNewUser && <NewUserForm {...useUserData} backendErrors={backendErrors} />}
        {!isNewUser && <EditUserForm {...useUserData} backendErrors={backendErrors} />}
      </ModalBody>
      <ModalFooter>
        <Button color="white" onClick={close}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          {isNewUser ? "Create" : "Edit" }
        </Button>
      </ModalFooter>
    </Modal>
  )
}

UserModal.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    last_login: PropTypes.string,
  }),
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  isNewUser: PropTypes.bool,
}

UserModal.defaultProps = {
  user: {},
  isNewUser: false,
}

export default UserModal
