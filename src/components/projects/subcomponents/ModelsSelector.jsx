import React, { useMemo } from "react"
import { Row } from "reactstrap"
import DualList from "../../common/dual-list/DualList"
import useMappedModels from "../hooks/useMappedModels"

const ModelsSelector = ({ selectedModels, updateSelectedModels }) => {
  const models = useMappedModels()

  const mappedSelectedModels = useMemo(
    () => selectedModels?.map(modelId => {
      const modelName = models.find(model => model.id === modelId)?.text || "Unknown model"
      return ({ id: modelId, text: `Model ${modelId}` })
    }),
    [models, selectedModels],
  )

  const updateSelectedItems = items => {
    const mappedValues = items.map(({ id }) => id)
    updateSelectedModels(mappedValues)
  }

  if (models.length === 0) {
    return (
      <Row className="mx-auto">
        No models available. Create them now or add them later to the project.
      </Row>
    )
  }

  return (
    <DualList
      items={models}
      selectedItems={mappedSelectedModels}
      updateSelectedItems={updateSelectedItems}
    />
  )
}

export default ModelsSelector
