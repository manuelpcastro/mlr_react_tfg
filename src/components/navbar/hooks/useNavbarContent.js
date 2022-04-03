import { useMemo } from "react"
import { useSelector } from "react-redux"
import {
  DASHBOARD, PROJECTS, MODELS, USERS,
} from "../../../constants/routes"

const useNavbarContent = () => {
  const { user: { role } } = useSelector(state => state.auth)

  return useMemo(() => {
    const sections = [DASHBOARD, PROJECTS, MODELS, USERS]
    return sections.filter(section => section.roles.includes(role))
  }, [role])
}

export default useNavbarContent
