import React from "react"
import PropTypes from "prop-types"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"
import IndividualProject from "../../components/projects/IndividualProject"

const IndividualProjectPage = ({ icon, title }) => (
  <Page>
    <PageTitle icon={icon} title={title} />
    <IndividualProject />
  </Page>
)

IndividualProjectPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default IndividualProjectPage
