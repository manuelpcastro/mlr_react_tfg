import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import "./BigSpinner.scss"

const BigSpinner = ({ show }) => {
  const [isShowing, setIsShowing] = useState(true)
  const [transitioning, setTransitioning] = useState(true)

  useEffect(() => {
    if (!show && !transitioning) {
      setIsShowing(false)
    }
  }, [show, transitioning])

  const updateTransitioning = () => {
    setTransitioning(false)
  }

  if (!isShowing) {
    return null
  }

  const className = "d-flex flex-column h-100 bg-primary text-white justify-content-center align-items-center"
  const fadeClass = !show ? "big-spinner-fade" : ""

  return (
    <div style={{
      position: "fixed", height: "100%", width: "100%", zIndex: 1000,
    }}
    >
      <div
        className={`${className} ${fadeClass}`}
        onTransitionEnd={updateTransitioning}
      >
        <Icon icon="brain" size="8x" className="pb-4" />
        <h2>MACHINE LEARNING RESEARCH</h2>
        <div className="mt-4 spinner-border" style={{ width: "4rem", height: "4rem" }} />
      </div>
    </div>
  )
}

BigSpinner.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default BigSpinner
