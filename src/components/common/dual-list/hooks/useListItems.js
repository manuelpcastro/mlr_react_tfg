import { useMemo, useState } from "react"

const useListItems = (initialItems, initialRightListItems) => {
  const [rightListItems, setRightListItems] = useState(initialRightListItems || [])

  const leftListItems = useMemo(
    () => initialItems.filter(item => !rightListItems.includes(item)),
    [initialItems, rightListItems],
  )

  const moveToLeftList = items => {
    setRightListItems(rightListItems.filter(item => !items.includes(item)))
  }

  const moveToRightList = items => {
    setRightListItems([...rightListItems, items.filter(i => !rightListItems.includes(i))])
  }

  return [leftListItems, rightListItems, moveToRightList, moveToLeftList]
}

export default useListItems
