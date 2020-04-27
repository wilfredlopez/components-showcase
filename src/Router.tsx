import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Showcase from "./pages/showcase"
import installation from "./pages/installation"
interface Props {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={installation} />
        <Route path="/showcase" component={Showcase} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
