import { useMemo, useState } from "react"

const useFilteredModels = ({ models }) => {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("")

  const filteredModels = useMemo(() => {
    if (!models) {
      return []
    }

    if (search.length === 0) {
      return models
    }

    return models
      .filter(({ id, type }) => id.toString().toLowerCase().includes(search.toLowerCase())
        || type.toLowerCase().includes(search.toLowerCase()))
      .filter(({ type }) => !typeFilter || type.toLowerCase() === typeFilter)
  }, [models, search])

  return { filteredModels, setSearch, setTypeFilter }
}

export default useFilteredModels
