import React, { useContext } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { compose } from "redux"
import Loadable from "react-loadable"

//首页
const Home = Loadable({
    loader: () =>
        import("./home/index.jsx"),
    loading: () => null
})

const Test = Loadable({
    loader: () =>
        import("./test/index.jsx"),
    loading: () => null
})

const RouteList = () => {

    return (
        <Switch>
            <Route path="/community" exact component={Home} />
            <Route path="/community/home" component={Home} />
            <Route path="/community/test" component={Test} />
        </Switch>
    )
}

export default compose(
    withRouter,
)(RouteList)
