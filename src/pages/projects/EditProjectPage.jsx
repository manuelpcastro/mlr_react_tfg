import React from "react"
import PropTypes from "prop-types"
import { useParams, useHistory } from "react-router-dom"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"
import EditProjectForm from "../../components/projects/forms/EditProjectForm"

const EditProjectPage = ({ icon, title }) => {
  const { push } = useHistory()
  const { id } = useParams()

  const redirectToProjectList = () => {
    push("/projects")
  }

  return (
    <Page>
      <PageTitle
        icon={icon}
        title={title}
      />

      <EditProjectForm
        id={id}
        close={redirectToProjectList}
      />
    </Page>
  )
}

EditProjectPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default EditProjectPage
