import React, { useState } from "react"
import Page from "../components/page/Page"
import PageTitle from "../components/page/PageTitle"
import ProjectsList from "../components/projects/list/ProjectList"
import ProjectModal from "../components/projects/ProjectModal"
import { PROJECTS } from "../constants/routes"

const ProjectsPage = () => {
  const [creatingProject, setCreatingProject] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  const onCreate = () => {
    setCreatingProject(true)
  }

  const onEdit = project => {
    setEditingProject(project)
  }

  return (
    <Page>
      <PageTitle
        icon={PROJECTS.icon}
        title={PROJECTS.text}
      />

      <ProjectsList
        onCreate={onCreate}
        onEdit={onEdit}
      />

      <ProjectModal
        isOpen={!!editingProject}
        close={() => setEditingProject(null)}
        project={editingProject}
      />

      <ProjectModal
        isNewProject
        isOpen={creatingProject}
        close={() => setCreatingProject(false)}
      />
    </Page>
  )
}

export default ProjectsPage
