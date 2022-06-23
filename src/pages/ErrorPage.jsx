import React from "react"
import { Col } from "reactstrap"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"

const ErrorPage = () => (
  <Page>
    <PageTitle icon="dizzy" title="Error" />
    <Col xs="8">
      Something went wrong.
    </Col>
  </Page>
)

export default ErrorPage
