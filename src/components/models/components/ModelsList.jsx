import React from "react"
import { Col, Row } from "reactstrap"
import { useGetModelsQuery } from "../../../services/models/api"
import CenteredSpinner from "../../common/CenteredSpinner"
import ModelCard from "./ModelCard/ModelCard"
import TopBar from "./TopBar"
import useFilteredModels from "./useFilteredModels"

const ModelsList = () => {
  const { data: models, isLoading } = useGetModelsQuery()
  const { filteredModels, setSearch } = useFilteredModels({
    models: models?.filter(model => model?.id && model?.type),
  })

  if (isLoading) {
    return <CenteredSpinner />
  }

  return (
    <div>
      <TopBar onSearch={setSearch} />
      <hr />
      <Row className="projects-list d-flex w-100 ms-0">
        {filteredModels.map(model => (
          <Col xs="6" md="4" lg="3" className="mb-4 d-flex justify-content-center">
            <ModelCard
              id={model?.id}
              type={model?.type}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ModelsList
