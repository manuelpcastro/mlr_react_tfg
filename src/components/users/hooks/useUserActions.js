import { useMemo } from "react"
import { useDispatch } from "react-redux"
import {
  createUser, deleteUser, getAllUsers, updateUser,
} from "../../../store/users/UsersMgmtApi"

const useUserActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => ({
    getUsers: dispatch(getAllUsers()),
    createUser: user => dispatch(createUser(user)),
    updateUser: user => dispatch(updateUser(user)),
    deleteUser: user => dispatch(deleteUser(user)),
  }), [dispatch])
}

export default useUserActions
