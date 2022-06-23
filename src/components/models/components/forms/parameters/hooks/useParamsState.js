import { useEffect, useMemo, useState } from "react"

const useParamsState = ({ parameters, initialValues }) => {
  const [paramsState, setParamsState] = useState({})

  const initialState = useMemo(() => parameters?.reduce((state, param) => {
    const newState = { ...state }
    const defaultValue = param?.default !== null ? param?.default : ""
    const value = initialValues ? initialValues[param.id] : defaultValue
    newState[param.id] = value
    return newState
  }, {}), [parameters, initialValues])

  useEffect(() => {
    setParamsState(initialState)
  }, [initialState])

  const updateParamsState = (paramId, newValue) => {
    setParamsState(prevState => ({ ...prevState, [paramId]: newValue }))
  }

  return [paramsState, updateParamsState]
}

export default useParamsState
