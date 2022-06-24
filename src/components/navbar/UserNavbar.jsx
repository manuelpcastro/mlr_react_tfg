import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { useGetCurrentUserQuery, userApi } from "../../services/users/api"
import { clearAccessToken } from "../../services/auth/slice"
import Icon from "../common/Icon"

const LogoutButton = () => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(clearAccessToken())
    dispatch(userApi.util.resetApiState())
    push("/login")
  }

  return (
    <Icon
      className="ms-2 cursor-pointer"
      size="lg"
      icon="sign-out-alt"
      onClick={logout}
    />
  )
}

const UserNavbar = () => {
  const { data } = useGetCurrentUserQuery()

  if (!data) {
    return null
  }

  const { username } = data

  return (
    <div className="d-flex align-items-center">
      <div className="mx-2">
        {username}
      </div>
      <LogoutButton />
    </div>
  )
}

export default UserNavbar
