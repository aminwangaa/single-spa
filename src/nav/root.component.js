import React from "react"
import { Provider } from "react-redux"
import Nav from "./nav/index"
import store from "../store"

function Root() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}

export default Root
