import { useState } from "react"

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState)

  const dispatch = action => {
    const nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}

export default useReducer
