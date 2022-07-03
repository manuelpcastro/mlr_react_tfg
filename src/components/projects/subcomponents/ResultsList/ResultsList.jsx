import React from "react"
import { useParams } from "react-router-dom"
import { useGetProjectResultsQuery } from "../../../../services/projects/api"
import CenteredSpinner from "../../../common/CenteredSpinner"
import ResultRow from "./components/ResultRow/ResultRow"

const ResultsList = () => {
  const { id: projectId } = useParams()

  const { data: results, isLoading } = useGetProjectResultsQuery(projectId)

  if (isLoading) {
    return (
      <div>
        <h5>
          Results
        </h5>
        <CenteredSpinner />
      </div>
    )
  }

  if (!isLoading && results.length === 0) {
    return (
      <div>
        <h5>
          Results
        </h5>
        There are no results for this projects, select one or more models and make them run with this project dataset
      </div>
    )
  }

  return (
    <div>
      <h5>
        Results
      </h5>
      {results.map(result => (
        <ResultRow
          key={result?.id}
          result={result}
        />
      ))}
    </div>
  )
}

export default ResultsList
