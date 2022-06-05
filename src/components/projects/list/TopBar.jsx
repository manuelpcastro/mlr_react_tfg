import React from "react"
import PropTypes from "prop-types"
import { Col, Row } from "reactstrap"
import SearchInput from "../../common/SearchInput"
import NewProjectButton from "./NewProjectButton"

const TopBar = ({ onCreate, onSearch }) => (
  <Row className="d-flex my-2 w-100">
    <Col className="py-2">
      <SearchInput setSearch={onSearch} />
    </Col>
    <Col className="py-2" xs="0" sm="2" md="4" />
    <Col className="d-flex py-2 justify-content-end">
      <NewProjectButton onCreate={onCreate} />
    </Col>
  </Row>
)

TopBar.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default TopBar
