import React from "react"
import PropTypes from "prop-types"
import { Col, Row } from "reactstrap"
import { useGetProjectsQuery } from "../../../services/projects/api"
import ProjectCard from "../card/ProjectCard"
import useFilteredProjects from "../hooks/useFilteredProjects"
import TopBar from "./TopBar"

const ProjectsList = ({ onEdit, onCreate }) => {
  const { data: projects } = useGetProjectsQuery()
  const { filteredProjects, setSearch } = useFilteredProjects({ projects })

  if (!projects) {
    return null
  }

  return (
    <div>
      <TopBar onCreate={onCreate} onSearch={setSearch} />
      <Row className="projects-list d-flex w-100">
        {filteredProjects.map(project => (
          <Col xs="12" lg="6" xxl="4" className="mb-4 d-flex">
            <ProjectCard project={project} onEdit={onEdit} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

ProjectsList.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default ProjectsList
