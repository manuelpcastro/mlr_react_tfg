import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from "reactstrap"

import NewUserForm from "./form/NewUserForm"
import EditUserForm from "./form/EditUserForm"
import { useCreateUserMutation, useUpdateUserMutation } from "../../services/users/api"

const newUser = {
  username: "", email: "", role: "", password: "", last_login: "-",
}

const UserModal = ({
  user, close, isNewUser,
}) => {
  const [createNewUser, createResponse] = useCreateUserMutation()
  const [updateUser, updateResponse] = useUpdateUserMutation()

  const [userData, setUserData] = useState(user)
  const [backendErrors, setBackendErrors] = useState({})
  const useUserData = { userData, setUserData }

  const handleConfirm = () => {
    if (isNewUser) {
      createNewUser(userData)
    } else {
      updateUser(userData)
    }
  }

  useEffect(() => {
    const response = isNewUser ? createResponse : updateResponse

    if (response.isError) {
      setBackendErrors(response.error.data)
    }

    if (response.isSuccess) {
      close()
    }
  }, [createResponse, updateResponse])

  useEffect(() => {
    if (user) {
      setUserData(user)
    }
  }, [user?.id])

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
  isNewUser: PropTypes.bool,
}

UserModal.defaultProps = {
  user: newUser,
  isNewUser: false,
}

export default UserModal
