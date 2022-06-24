import React from "react"
import PropTypes from "prop-types"
import Icon from "../../components/common/Icon"

const FrontPage = ({ children }) => (
  <>
    <div
      className="bg-primary text-white text-center py-5"
    >
      <Icon icon="brain" size="8x" className="pb-4" />
      <h2>MACHINE LEARNING RESEARCH</h2>
    </div>
    {children}
  </>
)

FrontPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FrontPage
