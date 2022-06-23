import React from "react"
import { Col, Row } from "reactstrap"
import { useGetProjectsQuery } from "../../../services/projects/api"
import ProjectCard from "../card/ProjectCard"
import useFilteredProjects from "../hooks/useFilteredProjects"
import TopBar from "./TopBar"

const ProjectsList = () => {
  const { data: projects } = useGetProjectsQuery()
  const { filteredProjects, setSearch } = useFilteredProjects({ projects })

  if (!projects) {
    return null
  }

  return (
    <div>
      <TopBar onSearch={setSearch} />
      <Row className="projects-list d-flex w-100">
        {filteredProjects.map(project => (
          <Col xs="12" lg="6" xxl="4" className="mb-4 d-flex">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProjectsList
