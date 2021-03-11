import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import { MainContainer } from "../components/common"
import { UserAccount } from "../components"
import RouteNames from "./route.name"

const { DefaultPath } = RouteNames

const AppRouter: React.FC = () => {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <MainContainer>
        <Switch>
          <Route exact path={DefaultPath}>
            <UserAccount />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  )
}

export default AppRouter
