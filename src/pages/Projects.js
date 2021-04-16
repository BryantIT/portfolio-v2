import React, { useState, useEffect } from "react";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectsView";

const Projects = ({ profile }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [projects, setProjects] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage] = useState(6)

  useEffect(() => {
    if (profile && profile.projects) {
      setProjects(profile.projects)
      setIsMounted(true)
    }
  }, [profile])

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  )

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    isMounted ? (
      <Layout>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Projects" />
            {<ProjectsView projects={currentProjects} />}
            {!(projects.length > projectsPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={projectsPerPage}
                totalItems={projects.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </Layout>
    ) : null
  )
}

export default Projects;
