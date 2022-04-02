import React from "react"
import PropTypes from "prop-types"
import { Input } from "reactstrap"

const TextFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length

  // Set undefined to remove the filter entirely
  const handleOnChange = e => setFilter(e.target.value || undefined)

  return (
    <Input
      style={{ maxWidth: "200px" }}
      value={filterValue || ""}
      onChange={handleOnChange}
      placeholder={`Search ${count} records...`}
    />
  )
}

TextFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string.isRequired,
    preFilteredRows: PropTypes.arrayOf(PropTypes.object),
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
}

export default TextFilter
