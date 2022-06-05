import { useMemo } from "react"
import {
  DASHBOARD, PROJECTS, MODELS, USERS, INDIVIDUAL_PROJECT,
} from "../../constants/routes"
import DashboardPage from "../../pages/DashboardPage"
import IndividualProjectPage from "../../pages/IndividualProjectPage"
// import ModelsPage from "../../pages/ModelsPage"
import ProjectsPage from "../../pages/ProjectsPage"
import UsersPage from "../../pages/UsersPage"
import { useGetCurrentUserQuery } from "../../services/users/api"

const useSectionsRoutes = () => {
  const { data, isLoading } = useGetCurrentUserQuery()

  const mappedRoutes = useMemo(() => {
    if (!data) {
      return []
    }

    const sections = [
      { path: DASHBOARD.url, roles: DASHBOARD.roles, component: DashboardPage },
      { path: PROJECTS.url, roles: PROJECTS.roles, component: ProjectsPage },
      { path: INDIVIDUAL_PROJECT.url, roles: INDIVIDUAL_PROJECT.roles, component: IndividualProjectPage },
      // { path: MODELS.url, roles: DASHBOARD.roles, component: ModelsPage },
      { path: USERS.url, roles: USERS.roles, component: UsersPage },
    ]

    return sections
      .filter(section => section.roles.includes(data?.role))
      .map(({ path, component }) => ({ path, component }))
  }, [data])

  return [mappedRoutes, isLoading]
}

export default useSectionsRoutes
