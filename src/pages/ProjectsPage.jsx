import React from "react"
import PropTypes from "prop-types"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"
import ProjectsList from "../components/projects/list/ProjectList"

const ProjectsPage = ({ icon, title }) => (
  <Page>
    <PageTitle
      icon={icon}
      title={title}
    />

    <ProjectsList />

  </Page>
)

ProjectsPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectsPage
