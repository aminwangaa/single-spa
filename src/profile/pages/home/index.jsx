import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {

    constructor(props) {
        super(props)
    }


    render () {
        console.log(this.props)
        return (
            <div>
                <h1>Hello from Community React</h1>
                <Link to={{
                    pathname: "/community/test"
                }}>Community Test</Link>
                <br />
            </div>
        )
    }
}


export default Home
