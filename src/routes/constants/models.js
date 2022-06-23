import { ADMIN, MANAGER } from "../../constants/roles"

const DEFAULT_MODEL_ICON = "diagram-project"

export const MODELS = {
  text: "Models",
  icon: DEFAULT_MODEL_ICON,
  url: "/models",
  roles: [ADMIN, MANAGER, undefined],
}

export const NEW_MODEL = {
  text: "New model",
  icon: DEFAULT_MODEL_ICON,
  url: "/models/new",
  roles: [ADMIN, MANAGER, undefined],
}

export const EDIT_MODEL = {
  text: "Model",
  icon: DEFAULT_MODEL_ICON,
  url: "/models/:id",
  roles: [ADMIN, MANAGER, undefined],
}
