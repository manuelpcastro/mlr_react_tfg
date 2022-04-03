import React from "react"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"
import { DASHBOARD } from "../constants/routes"

const DashboardPage = () => (
  <Page>
    <PageTitle icon={DASHBOARD.icon} title={DASHBOARD.text} />
  </Page>
)

export default DashboardPage
