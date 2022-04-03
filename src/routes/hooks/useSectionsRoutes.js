import { useMemo } from "react"
import { useSelector } from "react-redux"
import {
  DASHBOARD, PROJECTS, MODELS, USERS,
} from "../../constants/routes"
import DashboardPage from "../../pages/DashboardPage"
import UsersPage from "../../pages/UsersPage"

const useSectionsRoutes = () => {
  const { user: { role } } = useSelector(state => state.auth)

  return useMemo(() => {
    const sections = [
      { path: DASHBOARD.url, roles: DASHBOARD.roles, component: DashboardPage },
      // { path: PROJECTS.url, roles: PROJECTs.roles, component: ProjectsPage },
      // { path: MODELS.url, roles: DASHBOARD.roles, component: ModelsPage },
      { path: USERS.url, roles: USERS.roles, component: UsersPage },
    ]

    return sections.filter(section => section.roles.includes(role))
  }, [role])
}

export default useSectionsRoutes
