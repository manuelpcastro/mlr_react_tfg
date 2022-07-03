import React from "react"
import PropTypes from "prop-types"

const ResultDate = ({ date }) => {
  // Use user locale in the future
  const dateString = new Date(date).toLocaleString()

  if (!date) {
    return (
      <>
        <strong>Date: </strong>
        Processing...
      </>
    )
  }

  return (
    <>
      <strong>Date: </strong>
      {dateString}
    </>
  )
}

ResultDate.propTypes = {
  date: PropTypes.string,
}

ResultDate.defaultProps = {
  date: "",
}

export default ResultDate
