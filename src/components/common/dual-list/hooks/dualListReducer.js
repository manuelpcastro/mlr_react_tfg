const handleItemSelect = (itemId, itemsArray) => {
  const itemIsSelected = itemsArray.includes(itemId)

  if (itemIsSelected) {
    return itemsArray.filter(item => item !== itemId)
  }
  return [...itemsArray, itemId]
}

const dualListReducer = (state, action) => {
  switch (action.type) {
    case "selectLeft":
      return ({
        ...state,
        leftListSelectedItems: handleItemSelect(action.payload, state.leftListSelectedItems),
      })
    case "selectRight":
      return ({
        ...state,
        rightListSelectedItems: handleItemSelect(action.payload, state.rightListSelectedItems),
      })
    case "moveToRight": {
      const { items, leftListSelectedItems } = state
      const selectedItems = leftListSelectedItems.map(itemId => items.find(i => i.id === itemId))
      return ({
        ...state,
        rightListItems: [...state.rightListItems, ...selectedItems],
        leftListSelectedItems: [],
      })
    }
    case "moveToLeft": {
      const { rightListItems, rightListSelectedItems } = state
      return ({
        ...state,
        rightListItems: rightListItems.filter(item => !rightListSelectedItems.includes(item.id)),
        rightListSelectedItems: [],
      })
    }
    case "setSelectedItems": {
      return ({
        ...state,
        rightListItems: action.payload,
        rightListSelectedItems: [],
      })
    }
    default:
      return state
  }
}

export default dualListReducer
