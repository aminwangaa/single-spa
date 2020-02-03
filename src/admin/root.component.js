import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import RouteList from "./pages/routes"
import store from "../store"

function Root() {
  return (
    <Router>
      <Provider store={store}>
        <RouteList />
      </Provider>
    </Router>
  )
}

export default Root
