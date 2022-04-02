import React from "react"
import { useSelector } from "react-redux"
import Icon from "../common/Icon"

const UserNavbar = () => {
  const { user: currentUser } = useSelector(state => state.auth)

  return (
    <div className="d-flex align-items-center">
      <div className="mx-2">
        {currentUser.username}
      </div>
      <Icon className="ms-2" size="lg" icon="sign-out-alt" />
    </div>
  )
}

export default UserNavbar
