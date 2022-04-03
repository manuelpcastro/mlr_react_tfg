/* eslint-disable react/prop-types */
import React from "react"

const Header = ({ headerGroup }) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map(column => (
      <th {...column.getHeaderProps()}>
        {column.render("Header")}
        <div>{column.canFilter ? column.render("Filter") : null}</div>
      </th>
    ))}
  </tr>
)

export default Header
