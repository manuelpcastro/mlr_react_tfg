// Define app routes, specifying icon, url and roles that can access it
import { ADMIN, ANALYST, MANAGER } from "../../constants/roles"

export const DASHBOARD = {
  text: "Dashboard",
  icon: "chart-pie",
  url: "/dashboard",
  roles: [ADMIN, MANAGER, ANALYST, undefined],
}

export const USERS = {
  text: "Users",
  icon: "users",
  url: "/users",
  roles: [ADMIN, undefined],
}

export * from "./models"

export * from "./projects"
