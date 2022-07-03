import React from "react"
import { Col, ListGroupItem } from "reactstrap"
import DeleteResultButton from "./components/DeleteResultButton"
import DownloadResultButton from "./components/DownloadResultButton"
import ResultDate from "./components/ResultDate"

const ResultRow = ({ result }) => {
  const isFinished = !!result?.updated_at

  return (
    <ListGroupItem className="d-flex align-items-center">
      <Col xs="2" md="4">
        <strong>Id: </strong>
        {result.id}
      </Col>
      <Col>
        <ResultDate
          date={result?.updated_at}
        />
      </Col>
      <Col className="d-flex justify-content-end">
        <DownloadResultButton
          url={result?.download_url}
          disabled={!isFinished}
        />
        <DeleteResultButton
          id={result?.id}
          disabled={!isFinished}
        />
      </Col>
    </ListGroupItem>
  )
}

export default ResultRow
