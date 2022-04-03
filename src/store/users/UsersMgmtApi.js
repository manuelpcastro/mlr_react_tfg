import axios from "axios"
import { toastOnError } from "../../utils/Utils"
import {
  addUser, changeUser, removeUser, setUsers,
} from "./UsersMgmtActions"

export const getAllUsers = () => dispatch => {
  axios
    .get("/api/v1/users/")
    .then(response => {
      dispatch(setUsers(response.data))
    })
    .catch(error => {
      toastOnError(error)
    })
}

export const updateUser = user => dispatch => axios
  .put(`api/v1/users/${user.username}`, { user })
  .then(() => {
    dispatch(changeUser(user))
  })
  .catch(error => error)

export const deleteUser = ({ username }) => dispatch => {
  axios
    .delete(`api/v1/users/${username}`)
    .then(() => {
      dispatch(removeUser(username))
    })
    .catch(error => {
      toastOnError(error)
    })
}

export const createUser = userData => dispatch => axios
  .post("/api/v1/users/", userData)
  .then(() => {
    dispatch(addUser(userData))
  })
  .catch(error => error)
