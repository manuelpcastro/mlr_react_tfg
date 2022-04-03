import { useMemo } from "react"
import ActionsCell from "../table/ActionsCell"
import TextFilter from "../table/TextFilter"

const useTableStructure = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
        Filter: TextFilter,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: TextFilter,
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: TextFilter,
      },
      {
        Header: "Last login",
        accessor: "last_login",
        Filter: TextFilter,
      },
      {
        Header: "Actions",
        Cell: ActionsCell,
        filterable: false,
      },
    ],
    [],
  )

  return { columns }
}

export default useTableStructure
