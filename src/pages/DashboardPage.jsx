import React from "react"
import PropTypes from "prop-types"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"
import Dashboard from "../components/dashboard/Dashboard"

const DashboardPage = ({ icon, title }) => (
  <Page>
    <PageTitle icon={icon} title={title} />

    <h5>Welcome to the Machine Learning Research main page!</h5>

    <Dashboard />
  </Page>
)

DashboardPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default DashboardPage
