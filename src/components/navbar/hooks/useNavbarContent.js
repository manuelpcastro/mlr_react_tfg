import { useMemo } from "react"
import {
  DASHBOARD, PROJECTS, MODELS, USERS,
} from "../../../routes/constants"
import { useGetCurrentUserQuery } from "../../../services/users/api"

const sections = [DASHBOARD, PROJECTS, MODELS, USERS]

const useNavbarContent = () => {
  const { data } = useGetCurrentUserQuery()

  return useMemo(() => sections.filter(section => section.roles.includes(data?.role)), [data])
}

export default useNavbarContent
