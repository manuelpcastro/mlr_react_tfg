import React from "react"
import PropTypes from "prop-types"
import { useParams, useHistory } from "react-router-dom"
import EditModelForm from "../../components/models/components/forms/EditModelForm"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"

const EditModelPage = ({ icon, title }) => {
  const { push } = useHistory()
  const { id } = useParams()

  const redirectToModelList = () => {
    push("/models")
  }

  return (
    <Page>
      <PageTitle
        icon={icon}
        title={title}
      />

      <EditModelForm
        id={id}
        close={redirectToModelList}
      />
    </Page>
  )
}

EditModelPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default EditModelPage
