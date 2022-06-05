import React, { useState } from "react"
import {
  Form, FormGroup, Input, Label,
} from "reactstrap"
import CustomDropdown from "../common/Dropdown"
import ModelsSelector from "./subcomponents/ModelsSelector"

const ProjectForm = ({ project, setProject }) => {
  const handleTitle = e => {
    setProject({ ...project, title: e.target.value })
  }

  const handleFile = e => {
    setProject({ ...project, file_data: e.target.files[0] })
  }

  const handleSamplingStrategy = value => {
    setProject({ ...project, sampling_stategy: value })
  }

  const handleSeed = e => {
    setProject({ ...project, random_state: e.target.value })
  }

  const handleModels = selectedModels => {
    setProject({ ...project, models: selectedModels })
  }

  return (
    <Form>
      <FormGroup>
        <Label for="project-name">
          Project Name
        </Label>
        <Input
          id="project-name"
          name="projectName"
          placeholder="Project name"
          onChange={handleTitle}
          value={project?.title}
        />
      </FormGroup>

      <FormGroup>
        <Label for="file-data">
          File data
        </Label>
        <Input
          id="file-data"
          accept=".csv"
          name="file"
          type="file"
          onChange={handleFile}
          // value={project?.file_data}
        />
      </FormGroup>

      <FormGroup>
        <Label for="sampling-strategy">
          Sampling strategy
        </Label>
        <CustomDropdown
          placeholder="Choose one..."
          options={[{ text: "None", value: "none", active: project.sampling_stategy === "none" }]}
          onChange={handleSamplingStrategy}
        />
      </FormGroup>

      <FormGroup>
        <Label for="random-state">
          Seed
        </Label>
        <Input
          id="random-state"
          name="randomState"
          type="number"
          placeholder="Set a random state seed"
          onChange={handleSeed}
          value={project?.random_state}
        />
      </FormGroup>

      <FormGroup>
        <Label>
          Models
        </Label>
        <ModelsSelector
          selectedModels={project?.models}
          updateSelectedModels={handleModels}
        />
      </FormGroup>

    </Form>
  )
}

export default ProjectForm
