import { useMemo, useState } from "react"

const useSelectedItems = (items, initialSelectedItems) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems || [])

  const mappedItems = useMemo(() => items.map(item => (
    {
      ...item,
      active: selectedItems.includes(item.id),
    }
  )), [items, selectedItems])

  const handleItemClick = itemId => {
    const itemIsSelected = selectedItems.includes(itemId)

    if (itemIsSelected) {
      setSelectedItems(selectedItems.filter(item => item !== itemId))
    } else {
      setSelectedItems([...selectedItems, itemId])
    }
  }

  return [mappedItems, handleItemClick]
}

export default useSelectedItems
