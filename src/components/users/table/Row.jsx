/* eslint-disable react/prop-types */
import React from "react"

const Row = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map(cell => (
      <td {...cell.getCellProps()}>
        {cell.render("Cell")}
      </td>
    ))}
  </tr>
)

export default Row
