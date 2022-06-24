import React from "react"
import { Switch, Route } from "react-router-dom"
import ProtectedRoute from "../ProtectedRoute"
import useSectionsRoutes from "../hooks/useSectionsRoutes"
import BigSpinner from "../../components/common/big-spinner/BigSpinner"
import ErrorPage from "../../pages/ErrorPage"

const PrivateRoutes = () => {
  const [routes, isLoading] = useSectionsRoutes()

  const mappedRoutes = routes.map(section => (
    <ProtectedRoute key={section.path} exact path={section.path}>
      <section.component
        icon={section.icon}
        title={section.title}
      />
    </ProtectedRoute>
  ))

  if (!isLoading && mappedRoutes.length === 0) {
    return (
      <ProtectedRoute path="/error">
        <ErrorPage />
      </ProtectedRoute>
    )
  }

  return (
    <>
      <BigSpinner show={isLoading} />
      <Switch>
        {mappedRoutes}

        <Route path="/">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  )
}

export default PrivateRoutes
