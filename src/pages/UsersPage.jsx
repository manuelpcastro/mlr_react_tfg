import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
import PageTitle from "../components/page/PageTitle"
import Page from "../components/page/Page"
import UserModal from "../components/users/UserModal"

import UsersTable from "../components/users/UserTable"
import Icon from "../components/common/Icon"
import ConfirmModal from "../components/common/ConfirmModal"
import { useDeleteUserMutation, useGetUsersQuery } from "../services/users/api"

const UsersPage = ({ icon, title }) => {
  const { data: users } = useGetUsersQuery()

  const [deleteUser] = useDeleteUserMutation()

  const [modal, setModal] = useState("")
  const closeModal = () => setModal("")

  const [selectedUser, setSelectedUser] = useState(null)

  const createNewUser = () => setModal("create")

  const editUserData = user => {
    setSelectedUser(user)
    setModal("edit")
  }

  const removeUser = user => {
    setSelectedUser(user)
    setModal("delete")
  }

  const removeSelectedUser = () => deleteUser(selectedUser.id)

  return (
    <Page>
      <PageTitle icon={icon} title={title} />

      <UsersTable users={users} editUser={editUserData} removeUser={removeUser} />

      <div className="mt-4">
        <Button color="primary" onClick={createNewUser}>
          <Icon icon="plus" className="me-3" />
          Create new user
        </Button>
      </div>

      {modal === "create" && <UserModal isNewUser close={closeModal} />}
      {modal === "edit" && <UserModal user={selectedUser} close={closeModal} />}
      {modal === "delete" && (
        <ConfirmModal danger confirm={removeSelectedUser} cancel={closeModal}>
          Are you sure you want to delete user:
          {" "}
          <b>{selectedUser.username}</b>
        </ConfirmModal>
      )}
    </Page>
  )
}

UsersPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default UsersPage
