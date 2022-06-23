import React from "react"
import PropTypes from "prop-types"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"

const DashboardPage = ({ icon, title }) => (
  <Page>
    <PageTitle icon={icon} title={title} />
  </Page>
)

DashboardPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default DashboardPage
