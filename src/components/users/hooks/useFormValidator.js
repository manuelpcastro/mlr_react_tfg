import { useEffect, useState } from "react"
import validEmailAddress from "../../../utils/formValidations"

const checkEmptyValues = form => {
  const emptyValueErrors = []
  Object.keys(form).forEach(fieldName => {
    if (!form[fieldName]) {
      emptyValueErrors.push({
        type: fieldName,
        message: "Cannot be empty",
      })
    }
  })
  return emptyValueErrors
}

const getBackendErrors = backendErrors => {
  const fieldNames = Object.keys(backendErrors)
  return fieldNames.reduce((errors, fieldName) => {
    const fieldErrors = backendErrors[fieldName].map(errorMessage => ({
      type: fieldName,
      message: errorMessage,
    }))
    return errors.concat(fieldErrors)
  }, [])
}

const useFormValidator = (form, backendErrors = {}) => {
  const {
    username, email, password, confirmPassword,
  } = form
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const beErrors = getBackendErrors(backendErrors)
    const tmpErrors = checkEmptyValues({ username, email, password }).concat(beErrors)

    if (email && !validEmailAddress(email)) {
      tmpErrors.push({ type: "email", message: "Is not a valid email address" })
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
      tmpErrors.push({ type: "password", message: "Passwords do not match" })
    }

    setErrors(tmpErrors)
  }, [username, email, password, backendErrors])

  const usernameErrors = errors.filter(e => e.type === "username")
  const emailAddressErrors = errors.filter(e => e.type === "email")
  const passwordErrors = errors.filter(e => e.type === "password")

  return { usernameErrors, emailAddressErrors, passwordErrors }
}

export default useFormValidator
