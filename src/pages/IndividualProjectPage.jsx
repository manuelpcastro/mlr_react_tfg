import React from "react"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"
import IndividualProject from "../components/projects/IndividualProject"
import { PROJECTS } from "../constants/routes"

const IndividualProjectPage = () => (
  <Page>
    <PageTitle icon={PROJECTS.icon} title={PROJECTS.text} />
    <IndividualProject />
  </Page>
)

export default IndividualProjectPage
