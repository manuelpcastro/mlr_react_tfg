import React, { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "reactstrap"
import PageTitle from "../components/page/PageTitle"
import Page from "../components/page/Page"
import UserModal from "../components/users/UserModal"

import UsersTable from "../components/users/UserTable"
import useUserActions from "../components/users/hooks/useUserActions"
import Icon from "../components/common/Icon"
import ConfirmModal from "../components/common/ConfirmModal"

const UsersPage = () => {
  const { users } = useSelector(state => state.usersReducer)

  const {
    getUsers, createUser, updateUser, deleteUser,
  } = useUserActions()

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

  const removeSelectedUser = () => deleteUser(selectedUser)

  useEffect(() => getUsers, [])

  return (
    <Page>
      <PageTitle icon="users" title="Users" />

      <UsersTable users={users} editUser={editUserData} removeUser={removeUser} />

      <div className="mt-4">
        <Button color="primary" onClick={createNewUser}>
          <Icon icon="plus" className="me-3" />
          Create new user
        </Button>
      </div>

      {modal === "create" && <UserModal isNewUser close={closeModal} confirm={createUser} />}
      {modal === "edit" && <UserModal user={selectedUser} close={closeModal} confirm={updateUser} />}
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

export default UsersPage
