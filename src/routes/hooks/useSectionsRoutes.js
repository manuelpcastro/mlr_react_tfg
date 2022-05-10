import { useMemo } from "react"
import {
  DASHBOARD, PROJECTS, MODELS, USERS,
} from "../../constants/routes"
import DashboardPage from "../../pages/DashboardPage"
import ProjectsPage from "../../pages/ProjectsPage"
import UsersPage from "../../pages/UsersPage"
import { useGetCurrentUserQuery } from "../../services/users/api"

const useSectionsRoutes = () => {
  const { data } = useGetCurrentUserQuery()

  return useMemo(() => {
    if (!data) {
      return []
    }

    const sections = [
      { path: DASHBOARD.url, roles: DASHBOARD.roles, component: DashboardPage },
      { path: PROJECTS.url, roles: PROJECTS.roles, component: ProjectsPage },
      // { path: MODELS.url, roles: DASHBOARD.roles, component: ModelsPage },
      { path: USERS.url, roles: USERS.roles, component: UsersPage },
    ]

    return sections.filter(section => section.roles.includes(data?.role))
  }, [data])
}

export default useSectionsRoutes
