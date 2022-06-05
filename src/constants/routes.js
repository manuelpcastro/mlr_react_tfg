// Define app routes, specifying icon, url and roles that can access it
import { ADMIN, ANALYST, MANAGER } from "./roles"

export const DASHBOARD = {
  text: "Dashboard",
  icon: "chart-pie",
  url: "/dashboard",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}

export const PROJECTS = {
  text: "Projects",
  icon: "bars-progress",
  url: "/projects",
  roles: [ADMIN, MANAGER, ANALYST],
}

export const INDIVIDUAL_PROJECT = {
  text: "Project",
  icon: "bars-progress",
  url: "/project/:id",
  roles: [ADMIN, MANAGER, ANALYST],
}

export const MODELS = {
  text: "Models",
  icon: "diagram-project",
  url: "/models",
  roles: [ADMIN, MANAGER],
}

export const USERS = {
  text: "Users",
  icon: "users",
  url: "/users",
  roles: [ADMIN],
}
