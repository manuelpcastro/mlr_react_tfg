import React from "react"
import PropTypes from "prop-types"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"
import ModelsList from "../../components/models/components/ModelsList"

const ModelsPage = ({ icon, title }) => (
  <Page>
    <PageTitle
      icon={icon}
      title={title}
    />

    <ModelsList />
  </Page>
)

ModelsPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ModelsPage
