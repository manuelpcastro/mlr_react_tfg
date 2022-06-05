import React from "react"
import { Input } from "reactstrap"
import Icon from "./Icon"

const SearchInput = ({ setSearch }) => {
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="d-flex align-items-center">
      <Icon
        icon="search"
        size="xl"
        className="me-2"
      />
      <Input
        id="search-input"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchInput
