import React from "react"
import PropTypes from "prop-types"
import modelsIcons from "../../../../../assets/model_types"

const ModelCardImg = ({ type }) => {
  const coloredIcon = `Color${type}`
  const { [coloredIcon]: coloredImg } = modelsIcons

  const shownImg = coloredImg

  if (!shownImg) {
    return null
  }

  return (
    <img alt="model-type" src={shownImg} width={100} height={100} />
  )
}

ModelCardImg.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ModelCardImg
