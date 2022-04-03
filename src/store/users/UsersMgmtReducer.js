import {
  CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER,
} from "./UsersMgmtTypes"

const initialState = { users: [] }

const UsersMgmtReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }

    case CREATE_USER: {
      const users = [...state.users]
      users.push(action.payload)
      return { ...state, users }
    }

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          const replaceUser = user.username === action.payload.username
          return replaceUser ? action.payload : user
        }),
      }

    case DELETE_USER:
      return { ...state, users: state.users.filter(user => user.username !== action.payload) }

    default:
      return initialState
  }
}

export default UsersMgmtReducer
