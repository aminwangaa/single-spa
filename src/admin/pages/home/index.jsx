import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {


    render () {
        return (
            <div>
                <h1>Hello from Admin</h1>
                <Link to={{
                    pathname: "/admin/test"
                }}>Admin Test</Link>
                <br />
            </div>
        )
    }
}


export default Home
