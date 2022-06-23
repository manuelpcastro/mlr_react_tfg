import { ADMIN, ANALYST, MANAGER } from "../../constants/roles"

const DEFAULT_PROJECT_ICON = "bars-progress"

export const PROJECTS = {
  text: "Projects",
  icon: DEFAULT_PROJECT_ICON,
  url: "/projects",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}

export const INDIVIDUAL_PROJECT = {
  text: "Project",
  icon: DEFAULT_PROJECT_ICON,
  url: "/projects/:id",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}

export const NEW_PROJECT = {
  text: "New project",
  icon: DEFAULT_PROJECT_ICON,
  url: "/projects/new",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}

export const EDIT_PROJECT = {
  text: "Editing Project",
  icon: DEFAULT_PROJECT_ICON,
  url: "/projects/:id/edit",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}
