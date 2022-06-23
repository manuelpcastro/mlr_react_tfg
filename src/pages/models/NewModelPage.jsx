import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import NewModelForm from "../../components/models/components/forms/NewModelForm"
import Page from "../../components/page/Page"
import PageTitle from "../../components/page/PageTitle"

const NewModelPage = ({ icon, title }) => {
  const { push } = useHistory()

  const redirectToModelList = () => {
    push("/models")
  }

  return (
    <Page>
      <PageTitle
        icon={icon}
        title={title}
      />

      <NewModelForm
        open
        close={redirectToModelList}
      />
    </Page>
  )
}

NewModelPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NewModelPage
