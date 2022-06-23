import React from "react"
import { Col, Container, Row } from "reactstrap"
import { Link } from "react-router-dom"
import Sections from "./Sections"
import UserNavbar from "./UserNavbar"

import "./navbar.scss"
import Icon from "../common/Icon"

const Logo = () => <Link to="/"><Icon icon="brain" size="2x" /></Link>

const Navbar = () => (
  <div data-test="navbar" className="navbar">
    <Container>
      <Row className="w-100">
        <Col xs="3" md="2" xl="1" className="d-flex align-items-center justify-content-start px-4">
          <Logo />
        </Col>
        <Col>
          <Sections />
        </Col>
        <Col className="d-flex justify-content-end">
          <UserNavbar />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Navbar
