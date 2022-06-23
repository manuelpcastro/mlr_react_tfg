import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"
import NewProjectForm from "../../components/projects/forms/NewProjectForm"

const NewProjectPage = ({ icon, title }) => {
  const { push } = useHistory()

  const redirectToProjectList = () => {
    push("/projects")
  }

  return (
    <Page>
      <PageTitle
        icon={icon}
        title={title}
      />

      <NewProjectForm
        close={redirectToProjectList}
      />
    </Page>
  )
}

NewProjectPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NewProjectPage
