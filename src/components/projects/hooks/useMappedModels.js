import { useMemo } from "react"
import { useGetModelsQuery } from "../../../services/models/api"

const useMappedModels = () => {
  const { data: models } = useGetModelsQuery()

  return useMemo(
    () => (models || []).map(({ id, status }) => ({ id, status, text: `Model ${id}` })),
    [models],
  )
}

export default useMappedModels
