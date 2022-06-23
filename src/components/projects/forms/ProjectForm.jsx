import React from "react"
import {
  Form, FormGroup, Input, Label,
} from "reactstrap"
import CustomDropdown from "../../common/Dropdown"
import ModelsSelector from "../subcomponents/ModelsSelector"
import ProjectFileInput from "./components/ProjectFileInput"

const ProjectForm = ({ project, setProject }) => {
  // If needed in the future: useGetSamplingStrategiesQuery from the backend?

  const handleTitle = e => {
    setProject({ ...project, title: e.target.value })
  }

  const handleAbstract = e => {
    setProject({ ...project, abstract: e.target.value })
  }

  const handleFile = e => {
    // TO DO: Solve issue with the file selection
    // maybe send it on a another call once the project is created
    setProject({ ...project, file_data: e?.target?.files[0] })
  }

  const handleSamplingStrategy = value => {
    setProject(pr => ({ ...pr, sampling_stategy: value }))
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
        <Label for="project-name">
          Abstract
        </Label>
        <Input
          id="project-abstract"
          name="projectAbstract"
          placeholder="Abstract"
          onChange={handleAbstract}
          value={project?.abstract}
        />
      </FormGroup>

      <FormGroup>
        <Label for="file-data">
          File data
        </Label>
        <ProjectFileInput
          onChange={handleFile}
          value={project?.file_data?.name}
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
