import { useMemo, useState } from "react"

const useFilteredProjects = ({ projects }) => {
  const [search, setSearch] = useState("")

  const filteredProjects = useMemo(() => {
    if (!projects) {
      return []
    }

    if (search.length === 0) {
      return projects
    }

    return projects
      .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
  }, [projects, search])

  return { filteredProjects, setSearch }
}

export default useFilteredProjects
