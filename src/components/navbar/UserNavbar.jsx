import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { useGetCurrentUserQuery } from "../../services/users/api"
import { clearAccessToken } from "../../services/auth/slice"
import Icon from "../common/Icon"

const UserNavbar = () => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const { data } = useGetCurrentUserQuery()

  const logout = () => {
    dispatch(clearAccessToken())
    push("/")
  }

  if (!data) {
    return null
  }

  const { username } = data

  return (
    <div className="d-flex align-items-center">
      <div className="mx-2">
        {username}
      </div>
      <Icon
        className="ms-2 cursor-pointer"
        size="lg"
        icon="sign-out-alt"
        onClick={logout}
      />
    </div>
  )
}

export default UserNavbar
