import React from "react"
import PropTypes from "prop-types"
import { useFilters, useTable } from "react-table"
import { Spinner } from "reactstrap"

import useTableStructure from "./hooks/useColumns"
import Header from "./table/Header"
import Row from "./table/Row"

import "./table.scss"

// eslint-disable-next-line react/prop-types
const Rows = ({ rows, prepareRow }) => (
  <>
    { /* eslint-disable-next-line react/prop-types */ }
    {rows.map(row => {
      prepareRow(row)
      return (
        <Row row={row} />
      )
    })}
  </>
)

const UserTable = ({ users, editUser, removeUser }) => {
  if (!users) return <Spinner />

  const data = users

  const { columns } = useTableStructure()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns, data, editUser, removeUser,
  }, useFilters)

  return (
    <table {...getTableProps()} className="users-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <Header headerGroup={headerGroup} />
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        <Rows rows={rows} prepareRow={prepareRow} />
      </tbody>
    </table>

  )
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
  editUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
}

export default UserTable
