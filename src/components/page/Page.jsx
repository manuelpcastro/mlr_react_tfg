import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import Navbar from "../navbar/Navbar"

const Page = ({ children, containerClassName }) => (
  <>
    <Navbar />
    <Container className={`mt-4 ${containerClassName}`}>
      {children}
    </Container>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  containerClassName: PropTypes.string,
}

Page.defaultProps = {
  containerClassName: "",
}

export default Page
