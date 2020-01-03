import React from 'react'
import {render} from 'react-dom'
import Nav from "./nav/index.jsx"
import {Provider} from "react-redux"
import store from "../store"

export default class Root extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <Nav />
            </Provider>
        )
    }
}
