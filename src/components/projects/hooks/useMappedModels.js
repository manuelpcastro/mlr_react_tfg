import { useMemo } from "react"
import { useGetModelsQuery } from "../../../services/models/api"

const useMappedModels = () => {
  const { data: models } = useGetModelsQuery()

  return useMemo(
    () => (models || []).map(({ id, model_name }) => ({ id, text: model_name })),
    [models],
  )
}

export default useMappedModels