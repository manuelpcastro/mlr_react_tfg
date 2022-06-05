import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { ListGroup, ListGroupItem } from "reactstrap"

const IndividualList = ({
  items, selectedItems, onChange, style,
}) => {
  const mappedOptions = useMemo(
    () => items.map(option => (
      { ...option, active: selectedItems.includes(option.id) })),
    [items, selectedItems],
  )

  const handleItemClick = itemId => {
    onChange(itemId)

    // const itemIsSelected = selectedOptions.includes(itemId)

    // if (itemIsSelected) {
    //   setSelectedOptions(selectedOptions.filter(item => item !== itemId))
    // } else {
    //   setSelectedOptions([...selectedOptions, itemId])
    // }
  }

  const defaultListStyle = { minHeight: "180px", maxHeight: "180px", scrollBehavior: "auto" }
  const listStyle = { ...defaultListStyle, ...style }

  return (
    <ListGroup className="w-100 overflow-auto" style={listStyle}>
      {mappedOptions.map(option => (
        <ListGroupItem
          key={option.id}
          active={option.active}
          disabled={option.disabled}
          onClick={() => handleItemClick(option.id)}
          className="cursor-pointer user-select-none"
        >
          {option.text}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

IndividualList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    text: PropTypes.string,
    active: PropTypes.bool,
  })).isRequired,
  style: PropTypes.object,
}

IndividualList.defaultProps = {
  style: {},
}

export default IndividualList
