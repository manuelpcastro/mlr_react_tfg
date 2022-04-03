import {
  CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER,
} from "./UsersMgmtTypes"

export const setUsers = (users = []) => dispatch => {
  dispatch({
    type: GET_USERS,
    payload: users,
  })
}

export const addUser = user => dispatch => {
  dispatch({
    type: CREATE_USER,
    payload: user,
  })
}

export const changeUser = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: user,
  })
}

export const removeUser = user => dispatch => {
  dispatch({
    type: DELETE_USER,
    payload: user,
  })
}
