import React, { useEffect, useMemo, useReducer } from "react"
import {
  Button, Col, ListGroup, ListGroupItem,
} from "reactstrap"
import { difference } from "lodash"
import Icon from "../Icon"
import dualListReducer from "./hooks/dualListReducer"
import useListItems from "./hooks/useListItems"
import useSelectedItems from "./hooks/useSelectedItems"
import IndividualList from "./IndividualList"

const DualList = ({ items, selectedItems, updateSelectedItems }) => {
  const options = items || [{ id: 1, text: "Option 1" }, { id: 2, text: "Option 2" }, { id: 3, text: "option 3" }]

  const initialState = useMemo(() => ({
    items: options,
    rightListItems: [],
    leftListSelectedItems: [],
    rightListSelectedItems: [],
  }), [items])

  const [state, dispatch] = useReducer(dualListReducer, initialState)

  const handleLeftListChange = itemIds => {
    dispatch({
      type: "selectLeft",
      payload: itemIds,
    })
  }

  const handleRightListChange = itemIds => {
    dispatch({
      type: "selectRight",
      payload: itemIds,
    })
  }

  const leftListItems = useMemo(
    () => state.items.filter(item => !state.rightListItems.map(({ id }) => id).includes(item.id)),
    [state.rightListItems.length],
  )

  const moveToRight = () => {
    dispatch({ type: "moveToRight" })
  }

  const moveToLeft = () => {
    dispatch({ type: "moveToLeft" })
  }

  useEffect(() => {
    updateSelectedItems(state.rightListItems)
  }, [state.rightListItems.length])

  useEffect(() => {
    if (!selectedItems) {
      return
    }

    const needUpdate = difference(
      selectedItems.map(x => x.value),
      state.rightListItems.map(x => x.value),
    )

    if (needUpdate.length > 0) {
      dispatch({ type: "setSelectedItems", payload: selectedItems })
    }
  }, [selectedItems])

  return (
    <div className="d-flex w-100">
      <Col className="d-flex border scrollbar" style={{ maxHeight: "160px" }}>
        <IndividualList
          items={leftListItems}
          selectedItems={state.leftListSelectedItems}
          onChange={handleLeftListChange}
        />
      </Col>
      <Col xs="2" className="d-flex flex-column mx-4 align-items-center justify-content-evenly">
        <Button onClick={moveToRight}>
          <Icon icon="angles-right" size="2x" className="text-white" />
        </Button>
        <Button onClick={moveToLeft}>
          <Icon icon="angles-left" size="2x" className="text-white" />
        </Button>
      </Col>
      <Col className="d-flex border">
        <IndividualList
          items={state.rightListItems}
          selectedItems={state.rightListSelectedItems}
          onChange={handleRightListChange}
        />
      </Col>
    </div>
  )
}
export default DualList
