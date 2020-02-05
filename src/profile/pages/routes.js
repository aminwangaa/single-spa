import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { compose } from "redux"
import Loadable from "react-loadable"

// 首页
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "profile-home" */"./home/index.jsx"),
  loading: () => null
})

const Test = Loadable({
  loader: () => import(/* webpackChunkName: "profile-test" */"./test/index.jsx"),
  loading: () => null
})

const RouteList = () => (
  <Switch>
    <Route path="/profile" exact component={Home} />
    <Route path="/profile/home" component={Home} />
    <Route path="/profile/test" component={Test} />
  </Switch>
)

export default compose(
  withRouter,
)(RouteList)
