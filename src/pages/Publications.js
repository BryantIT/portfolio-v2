import React, { useState, useEffect } from "react";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectsView";

const Publications = ({ profile }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [publications, setPublications] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [publicationsPerPage] = useState(6)

  useEffect(() => {
    if (profile && profile.publications) {
      setPublications(profile.publications)
      setIsMounted(true)
    }
  }, [profile])

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = publications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  )

  const paginate = (e, pageNumber) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  return (
    isMounted ? (
      <Layout>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Publications" />
            {<ProjectsView projects={currentPublications} />}
            {!(publications.length > publicationsPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={publicationsPerPage}
                totalItems={publications.length}
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

export default Publications
