import React from "react"
import PropTypes from "prop-types"
import { Input } from "reactstrap"

import CustomDropdown from "../../common/Dropdown"
import useFormValidator from "../hooks/useFormValidator"

const NewUserForm = ({ userData, setUserData, backendErrors }) => {
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

  const handleRoleChange = role => setUserData(prevUserData => ({ ...prevUserData, role }))

  return (
    <>
      <div className="d-flex flex-column mb-2">
        Username
        <Input
          invalid={usernameErrors.length > 0}
          type="text"
          title="Username"
          placeholder="Username"
          value={userData?.username}
          onChange={handleUsernameChange}
          autoComplete={false}
        />
        {usernameErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Email address
        <Input
          invalid={emailAddressErrors.length > 0}
          type="email"
          placeholder="Email address"
          value={userData?.email}
          onChange={handleEmailAddressChange}
          autoComplete={false}
        />
        {emailAddressErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Role
        <CustomDropdown
          options={roleOptions}
          onChange={handleRoleChange}
        />
      </div>

      <div className="d-flex flex-column mb-2">
        Password
        <Input
          invalid={passwordErrors.length > 0}
          type="password"
          placeholder="Password"
          value={userData?.password}
          autoComplete={false}
        />
        {passwordErrors.map(e => <small className="text-danger">{e.message}</small>)}
      </div>

      <div className="d-flex flex-column mb-2">
        Confirm Password
        <Input
          type="password"
          placeholder="Password"
          value={userData?.password}
          autoComplete={false}
        />
      </div>
    </>
  )
}

NewUserForm.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    password: PropTypes.string,
    last_login: PropTypes.string,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
  backendErrors: PropTypes.arrayOf(PropTypes.ofObject(PropTypes.string)),
}

NewUserForm.defaultProps = {
  backendErrors: [],
}

export default NewUserForm
