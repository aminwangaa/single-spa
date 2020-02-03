import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { compose } from "redux"
import Loadable from "react-loadable"

// 首页
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "admin-home" */"./home/index.jsx"),
  loading: () => null,
})

const Test = Loadable({
  loader: () => import(/* webpackChunkName: "admin-test" */"./test/index.jsx"),
  loading: () => null,
})

const RouteList = () => (
  <Switch>
    <Route path="/admin" exact component={Home} />
    <Route path="/admin/home" component={Home} />
    <Route path="/admin/test" component={Test} />
  </Switch>
)

export default compose(
  withRouter,
)(RouteList)
