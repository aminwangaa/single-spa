import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import RouteList from "./pages/routes"
import {Provider} from "react-redux"
import store from "../store"


export default class Root extends React.Component {


    render() {
        return (
            <Router>
                <Provider store={store}>
                    <RouteList />
                </Provider>
            </Router>
        );
    }
}
