import React from "react"
import PropTypes from "prop-types"
import { Input } from "reactstrap"

import CustomDropdown from "../../common/Dropdown"
import useFormValidator from "../hooks/useFormValidator"

const EditUserForm = ({
  userData, setUserData, backendErrors,
}) => {
  const {
    usernameErrors, emailAddressErrors, passwordErrors,
  } = useFormValidator(userData, backendErrors)

  const roleOptions = [
    { text: "Analyst", value: "analyst", active: userData?.role === "analyst" },
    { text: "Manager", value: "manager", active: userData?.role === "manager" },
    { text: "Admin", value: "admin", active: userData?.role === "admin" },
  ]

  const handleUsernameChange = e => {
    setUserData(prevUserData => ({ ...prevUserData, username: e.target.value }))
  }

  const handleEmailAddressChange = e => {
    setUserData(prevUserData => ({ ...prevUserData, email: e.target.value }))
  }

  const handlePasswordChange = e => {
    setUserData(prevUserData => ({ ...prevUserData, password: e.target.value }))
  }

  const handleRoleChange = role => setUserData(prevUserData => ({ ...prevUserData, role }))

  return (
    <>
      <div className="d-flex flex-column mb-2">
        Username
        <Input invalid={usernameErrors.length > 0} type="text" title="Username" placeholder="Username" value={userData?.username} onChange={handleUsernameChange} />
        {usernameErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Email address
        <Input invalid={emailAddressErrors.length > 0} type="email" placeholder="Email address" value={userData?.email} onChange={handleEmailAddressChange} />
        {emailAddressErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Role
        <CustomDropdown options={roleOptions} onChange={handleRoleChange} />
      </div>

      <div className="d-flex flex-column mb-2">
        Password
        <Input type="password" placeholder="Change password" onChange={handlePasswordChange} value={userData?.password} />
        {userData?.password && passwordErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Last Login
        <Input disabled type="text" placeholder="-" value={userData?.last_login} />
      </div>
    </>
  )
}

EditUserForm.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    password: PropTypes.string,
    last_login: PropTypes.string,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
  backendErrors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

EditUserForm.defaultProps = {
  backendErrors: [],
}

export default EditUserForm
