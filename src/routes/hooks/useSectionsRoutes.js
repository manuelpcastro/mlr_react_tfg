import { useMemo } from "react"
import {
  DASHBOARD,
  PROJECTS,
  MODELS,
  USERS,
  INDIVIDUAL_PROJECT,
  NEW_MODEL,
  EDIT_MODEL,
  EDIT_PROJECT,
  NEW_PROJECT,
} from "../constants"
import DashboardPage from "../../pages/DashboardPage"
import EditModelPage from "../../pages/models/EditModelPage"
import IndividualProjectPage from "../../pages/projects/IndividualProjectPage"
import NewModelPage from "../../pages/models/NewModelPage"
import ModelsPage from "../../pages/models/ModelsPage"
import ProjectsPage from "../../pages/ProjectsPage"
import UsersPage from "../../pages/UsersPage"
import { useGetCurrentUserQuery } from "../../services/users/api"
import EditProjectPage from "../../pages/projects/EditProjectPage"
import NewProjectPage from "../../pages/projects/NewProjectPage"

const getSectionProps = section => ({
  path: section.url,
  roles: section.roles,
  icon: section.icon,
  title: section.text,
})

const useSectionsRoutes = () => {
  const { data, isLoading } = useGetCurrentUserQuery()

  const mappedRoutes = useMemo(() => {
    if (!data) {
      return []
    }

    const sections = [
      { ...getSectionProps(DASHBOARD), component: DashboardPage },

      { ...getSectionProps(PROJECTS), component: ProjectsPage },
      { ...getSectionProps(NEW_PROJECT), component: NewProjectPage },
      { ...getSectionProps(INDIVIDUAL_PROJECT), component: IndividualProjectPage },
      { ...getSectionProps(EDIT_PROJECT), component: EditProjectPage },

      { ...getSectionProps(NEW_MODEL), component: NewModelPage },
      { ...getSectionProps(EDIT_MODEL), component: EditModelPage },
      { ...getSectionProps(MODELS), component: ModelsPage },

      { ...getSectionProps(USERS), component: UsersPage },
    ]

    return sections
      .filter(section => section.roles.includes(data?.role))
      .map(({ roles, ...rest }) => ({ ...rest }))
  }, [data])

  return [mappedRoutes, isLoading]
}

export default useSectionsRoutes
